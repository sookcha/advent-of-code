(ns aoc.year2020.day01
  (:require [clojure.string]))

(comment "Part1. 입력 파일에서 두 개의 숫자를 뽑아 더해 2020이 될 때, 그 두 숫자의 곱을 구하라")
(comment "Part1. 입력 파일에서 세 개의 숫자를 뽑아 더해 2020이 될 때, 그 세 숫자의 곱을 구하라")

(defn get-input 
  "desc: 입력 파일을 받아, 라인으로 나누고 각 라인마다 숫자로 변시킵니다
   input: resource/aoc/year2020/day01.txt
   output: (1935 1956 1991 ...)"
  [path]
  (->> (slurp path)
       clojure.string/split-lines
       (map #(Integer/parseInt %))))

(defn sum
  "desc: 두 개의 숫자 혹은 세 개의 숫자를 받아 더합니다. 그 숫자가 2020과 동일한지 판별합니다
   input: 1935, 1956, 1991
   output: false"
  ([x y] (sum x y 0))
  ([x y z] (= 2020 (+ x y z))))

(let [input (get-input "resource/aoc/year2020/day01.txt")]
  (->> (for [x input y input :when (sum x y)] (* x y))
       first))

(let [input (get-input "resource/aoc/year2020/day01.txt")]
  (->> (for [x input y input z input :when (sum x y z)] (* x y z))
       first))
