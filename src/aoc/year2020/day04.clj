(ns aoc.year2020.day04
  (:require [clojure.spec.alpha :as s]
            [clojure.string :as str]
            [clojure.core.match :refer [match]]))

(comment "Part1: 여권에서 byr, iyr, eyr, hgt, hcl, ecl 항목은 필수, cid 항목은 선택이라고 할 때 올바른 여권 항목 갯수를 반환하라")
(defn map-element-to-key-value
  "desc: vector를 받아서 {:key value} 형태로 반환합니다.
   - key가 특정한 값이라면 그에 맞게 value 를 interger 로 변환하거나 keyword 로 변환하는 동작도 수행합니다.
   input: ['byr' '1931']
   output: [:byr 1931]"
  [[key value]]
  (let [key (keyword key)]
    {key
     (match [key]
       [(:or :eyr :byr :iyr)] (Integer/parseInt value)
       [:ecl] (keyword value)
       [:hgt] (let [dropped-last-two (str/join (drop-last 2 value))
                    remains (if (empty? dropped-last-two) "" (Integer/parseInt dropped-last-two))
                    found-last-two (re-find #"..$" value)]
                {:unit found-last-two :value remains})
       :else value)}))

(defn get-input
  "desc: 입력 파일 경로를 받아서, newline 별로 나눕니다. 
   그러면 newline 별로 리스트가 만들어 집니다.
   이것을 공백 별로 나누고, 다시 합칩니다.
   input: 'resource/aoc/year2020/day04.txt'
   output: ('eyr:2029 byr:1931 hcl:z cid:128 ecl:amb hgt:150cm iyr:2015 pid:148714704', 'byr:2...', ...)"
  [path]
  (->> (slurp path)
       clojure.string/split-lines
       (partition-by #(= % ""))
       (filter #(not= % '("")))
       (map (fn [v] (str/join " " v)))))

(defn parse-each-passport
  "desc: 각 여권 정보를 읽은 후,
   : 또는 공백 문자로 자른 것을 2개씩 나눠서
   각 나눠진 것을 map-element-to-key-value 함수를 이용하여 map 으로 만듭니다.
   다 만들어진 각각의 여권 정보를 하나의 여권으로 합칩니다. (=> into {})
   input: eyr:2029 byr:1931 hcl:z cid:128 ...
   output: {:eyr 2029 :byr 1931 ...}"
  [value]
  (->> (partition 2 (str/split value #"\:| "))
       (map map-element-to-key-value)
       (into {})))

(s/def :acct/passport (s/keys :req-un [:acct/byr :acct/iyr :acct/eyr :acct/hgt :acct/hcl :acct/ecl :acct/pid]
                              :opt-un [:acct/cid]))

(defn get-valid-count
  "desc: get-input 
   parse-each-passport 로 파싱해 [{:k v}, ...] 형태의 리스트를 받아서
   clojure/spec 에 부합하는 것의 갯수를 가져옵니다.
   input: ({:eyr 2029, :byr 1931, ...}
   {:byr 2013, :hgt '70cm', ...}
   output: 111"
  []
  (->> (get-input "resource/aoc/year2020/day04.txt")
       (map parse-each-passport)
       (filter #(s/valid? :acct/passport %))
       count))

(get-valid-count)

(comment "Part2: part1 제약조건과 더불어 각 항목별로 글자 수 제한과 값 범위 제한이 있을 때 올바른 항목 갯수를 반환하라.")
(def four-digits #"^[0-9]{1,4}$")
(s/def :acct/byr (s/and #(and
                          (<= 1920 %)
                          (>= 2002 %))
                        #(re-matches four-digits (str %))))
(s/def :acct/iyr (s/and #(and
                          (<= 2010 %)
                          (>= 2020 %))
                        #(re-matches four-digits (str %))))
(s/def :acct/eyr (s/and #(and
                          (<= 2020 %)
                          (>= 2030 %))
                        #(re-matches four-digits (str %))))
(s/def :acct/hgt
  (fn [{:keys [unit value]}]
    (case unit
      "cm" (<= 150 value 193)
      "in" (<= 59 value 76)
      false)))

(s/def :acct/hcl #(re-matches #"^#([0-9]|[A-F]|[a-f]){1,6}$" %))
(s/def :acct/ecl #{:amb :blu :brn :gry :grn :hzl :oth})
(s/def :acct/pid #(re-matches #"^[0-9]{9}$" %))

(get-valid-count)