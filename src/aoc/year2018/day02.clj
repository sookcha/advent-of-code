(ns aoc.year2018.day02
  (:require [clojure.string :as str]
            [clojure.data :as data]))
(comment "Part1. 주어진 각각의 문자열에서, 같은 문자가 두번 혹은 세번씩 나타난다면 각각을 한번씩 센다. 두번 나타난 문자가 있는 문자열의 수 * 세번 나타난 문자가 있는 문자열의 수를 반환하시오")
(comment "Part2. 여러개의 문자열 중, 같은 위치에 정확히 하나의 문자가 다른 문자열 쌍에서 같은 부분만을 리턴하시오.")

; Part 1
(defn get-input
  "input file 읽은 후 줄별로 나누기
   input: input file
   output: ['uqcipadzntnheslgvjjozmkfyr' 'uqcipadzwtnhexlzvxjobmkfkr' 'cqcipadpwtnheslgyxjobmkfyr' ...]"
  [path]
  (->> (slurp path)
       clojure.string/split-lines))

(defn word-count-map
  "인풋 파일의 각 라인을 받아서 letter-map 에 빈도수 카운팅
   input: string
   output: ({a 1, c 1, d 1 ... }"
  [val]
  (reduce (fn [letter-map char]
            (if (contains? letter-map char)
              (update letter-map char inc)
              (assoc letter-map char 1)))
          {} val))

(defn find-data
  "desc: 특정 input 값을 갖고 있는 데이터를 찾습니다
   input: 2, 'uqcipadzntnheslgvjjozmkfyr' 'uqcipadzwtnhexlzvxjobmkfkr'
   output: ((2 2 2) (2 2 2) ...)"
  [repeated-count data]
  (let [values (map second data)]
    (filter #(= % repeated-count) values)))

(defn accumulate-counted-words
  "desc: 글자 빈도 수 맵에서 복되는 횟수가 n개인 것의 갯수를 찾습니다
   input: ({a 1, c 1, d 1 ... }, 2
   output: 250"
  [word-counted repeated-count]
  (->> word-counted
       (map #(find-data repeated-count %))
       count))

(defn get-word-counted
  "인풋 파일 각 라인 별 글자 빈도수 카운팅
   input: ['uqcipadzntnheslgvjjozmkfyr' 'uqcipadzwtnhexlzvxjobmkfkr' 'cqcipadpwtnheslgyxjobmkfyr' ...]
   output: ({a 1, c 1, d 1, e 1, f 1, g 1, h 1, i 1, j 2, k 1, l 1, m 1, n 2, o 1, p 1 ...} {}...)"
  [input]
  (map word-count-map input))

(comment
  (let [word-counted (->> (get-input "resource/aoc/year2018/day02.txt") get-word-counted)]
    (* (accumulate-counted-words word-counted 2) (accumulate-counted-words word-counted 3))))

; Part 2
(defn calc-diff
  "next-item과 value 의 차이를 구합니다.
   input: 'uqcipadzntnheslgvjjozmkfyr', 'uqcipadzntnheslgvjjozmkfyr'
   output: (nil, (nil, 'a', ...) ...)"
  [next-item value]
  (println next-item)
  (let [difference (data/diff (str/split value #"") (str/split next-item #""))
        [first-duplicated-chars second-duplicated-chars diff] difference]
    (if (and
         (= (count (remove nil? first-duplicated-chars)) 1)
         (= (count (remove nil? second-duplicated-chars)) 1))
      diff
      nil)))

(defn map-with-rest-of-items
  "desc: 인풋 파일의 각 줄의 목록에서 앞에서부터 index 까지 세어서 삭제시킵니다.
   그리고 삭제시킨 값과 value의 차이를 계산합니다.
   input: 1, ['uqcipadzntnheslgvjjozmkfyr' , ...]
   output: ((nil), ('u') ...)"
  [index value]
  (->> (drop index (get-input "resource/aoc/year2018/day02.txt"))
       (map #(calc-diff % value))))


(comment
  (->> (get-input "resource/aoc/year2018/day02.txt")
       (map-indexed map-with-rest-of-items)
       flatten
       (remove nil?)
       (clojure.string/join "")))
