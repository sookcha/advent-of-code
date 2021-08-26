(ns aoc.year2020.day01
  (:require [clojure.string]))

(defn get-input [path]
  (->> (slurp path)
       clojure.string/split-lines
       (map #(Integer/parseInt %))))

(defn sum
  ([x y] (sum x y 0))
  ([x y z] (= 2020 (+ x y z))))

(let [input (get-input "resource/aoc/year2020/day01.txt")]
 (->> (for [x input y input :when (sum x y)] (* x y))
      first))

(let [input (get-input "resource/aoc/year2020/day01.txt")]
  (->> (for [x input y input z input :when (sum x y z)] (* x y z))
       first))
