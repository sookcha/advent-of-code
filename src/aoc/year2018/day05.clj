(ns aoc.year2018.day05
  (:require [clojure.string :as str]))

(def regex-pattern
  (->> "abcdefghijklmnopqrstuvwxyz"
       (map
        (fn [v]
          (str/join
           "|" [(str/join "" [(str v) (str/upper-case v)])
                (str/join "" [(str/upper-case v) (str v)])])))
       (map (fn [v] (format "(%s)" v)))
       (str/join "|")
       re-pattern))

(defn get-fully-replaced-text-by-pattern
  "input string 을 읽은 후 특정 regex 패턴에 매칭되지 않을 때 까지 매칭되는 아이템을 
   공백으로 치환 후, 최종 문자열을 반환
   input: dabAcCaCBAcCcaDA
   output: abCBAc"
  [regex-pattern text]
  (loop [result text]
    (if (re-find regex-pattern result)
      (recur (str/replace result regex-pattern ""))
      result)))

;; Part 1
;; 입력: dabAcCaCBAcCcaDA 같은 종류의 소문자와 대문자는 서로 ‘반응‘하여 사라짐.
;; aABb -> ‘’ 사라진 자리는 진공이 되기 때문에 다른 문자들이 붙게 되고, 또 그 문자들끼리 반응할 수 있음. 
;; abBA-> aA -> ‘’ 바로 옆에 붙어있어야만 서로 반응함. abAB -> abAB (반응 없음) 대문자-대문자, 소문자-소문자는 서로 반응하지 않음. 
;; aabAAB-> aabAAB (반응 없음) 예시 dabAcCaCBAcCcaDA => dabCBAcaDA 
;; 주어진 input 에서 최종으로 남는 문자열의 길이를 리턴하시오.
(->> (slurp "resource/aoc/year2018/day05.txt")
     (get-fully-replaced-text-by-pattern regex-pattern)
     count)

;; Part 2
;; 주어진 문자열에서 한 유닛 (대문자와 소문자)을 전부 없앤 후 반응시켰을 때, 가장 짧은 문자열의 길이를 리턴하시오.
;; 예를 들어 dabAcCaCBAcCcaDA 에서 a/A를 없애고 모두 반응시키면 
;; dbCBcD가 되고 길이는 6인데 비해, 같은 문자열에서 c/C를 없애고 모두 반응시키면 daDA가 남고 길이가 4이므로 
;; 4가 가장 짧은 길이가 됨.
(->> (map char (range 65 91))
     (map #(str "(?i)" %))
     (map re-pattern)
     (map #(str/replace (slurp "resource/aoc/year2018/day05.txt") % ""))
     (map #(get-fully-replaced-text-by-pattern regex-pattern %))
     (map count)
     sort
     first)