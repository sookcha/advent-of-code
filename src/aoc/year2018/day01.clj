(ns aoc.year2018.day01
  (:require [clojure.string]))

; Part 1
(defn get-input
  "desc: path를 읽어 라인으로 분리한 뒤 숫자로 파싱해 vector로 만듭니다.
   input: resource/aoc/year2018/day01.txt
   output: [-8 -18 -14 -10 -7 ...]"
  [path]
  (->> (slurp path)
       clojure.string/split-lines
       (map #(Integer/parseInt %))
       (into [])))

(comment
  "주어진 입력의 모든 숫자를 더하시오. 예) +10 -2 -5 +1 이 입력일 경우 4를 출력"
  (->> "resource/aoc/year2018/day01.txt"
       get-input
       (apply +)))

; Part 2
(comment
  "주어진 입력의 숫자를 더할 때 마다 나오는 숫자 중, 처음으로 두번 나오는 숫자를 리턴하시오."
  (let [input (get-input "resource/aoc/year2018/day01.txt")]
    (loop [idx 0
           carry 0
           summed-numbers #{0}]
      (let [summed (+ carry (nth input idx))]
        (if (contains? summed-numbers summed)
          summed
          (recur
           (if (= (inc idx) (count input))
             0
             (inc idx))
           summed
           (conj summed-numbers summed)))))))
