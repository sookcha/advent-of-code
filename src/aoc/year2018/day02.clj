(ns aoc.year2018.day02
  (:require [clojure.string :as str]
            [clojure.data :as data]))
(comment "Part1. 주어진 각각의 문자열에서, 같은 문자가 두번 혹은 세번씩 나타난다면 각각을 한번씩 센다. 두번 나타난 문자가 있는 문자열의 수 _ 세번 나타난 문자가 있는 문자열의 수를 반환하시오")
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
  "desc: 특정 input 값을 갖고 있는 map 을 찾습니다
   input: 찾고 싶은 카운트, map
   output: 조건에 맞는 결과"
  [repeated-count data]
  (let [values (map second data)]
    (filter #(= % repeated-count) values)))

(defn accumulate-counted-words
  "desc: 반복되는 횟수가 n개인 것의 갯수를 찾습니다
   input: ({a 1, c 1, d 1 ... }, 2
   output: 250"
  [word-counted repeated-count]
  (->> word-counted
       (map #(find-data repeated-count %))
       count))

(defn word-counted
  "인풋 파일의 빈도수 카운팅
  output: map"
  [input]
  (map word-count-map input))

(comment
  (let [word-counted (->> (get-input "resource/aoc/year2018/day02.txt") word-counted)]
    (* (accumulate-counted-words word-counted 2) (accumulate-counted-words word-counted 3))))

; Part 2
(defn calc-diff
  "현재 결과와 다음 결과의 차이 계산
   input: 현재 결과, 다음 결과
   output: diff"
  [next-item value]
  (let [difference (data/diff (str/split value #"") (str/split next-item #""))
        [first-duplicated-chars second-duplicated-chars diff] difference]
    (if (and
         (= (count (remove nil? first-duplicated-chars)) 1)
         (= (count (remove nil? second-duplicated-chars)) 1))
      diff
      nil)))

(defn map-with-rest-of-items
  "현재값과 다음값으로 loop 돌리기
   input: index, 현재값
   output: map"
  [index value]
  (->> (drop index (get-input "resource/aoc/year2018/day02.txt"))
       (map #(calc-diff % value))))

(comment
  (->> (get-input "resource/aoc/year2018/day02.txt")
       (map-indexed map-with-rest-of-items)
       flatten
       (remove nil?)
       (clojure.string/join "")))
