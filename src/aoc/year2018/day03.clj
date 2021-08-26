(ns aoc.year2018.day03
  (:require [clojure.data :as data]
            [clojure.string :as str]))

(comment "Part1. 여러 지역이 입력으로 주어졌을 때, 좌표계에서 겹치는 지역의 갯수를 출력하시오.")
(comment "Part2. 입력대로 모든 격자를 채우고 나면, 정확히 한 ID에 해당하는 영역이 다른 어떤 영역과도 겹치지 않음 위의 예시에서는 ID 3 이 ID 1, 2와 겹치지 않음. 
          3을 출력. 겹치지 않는 영역을 가진 ID를 출력하시오. (문제에서 답이 하나만 나옴을 보장함)")

(defn map-coordinates
  "인풋 파일 맵핑
   input: 맵핑할 값
   output: 맵"
  [[id x y w h]]
  {:id id :x x :y y :w w :h h})

(def parsed-input
  "인풋 파일 파싱 및 맵핑
   input: 인풋 파일
   output: 맵된 list"
  (->> (slurp "resource/aoc/year2018/day03.txt")
       str/split-lines
       (map #(drop 1 (str/split % #"#|@|,|:|x")))
       (map (fn [row] (map (fn [col] (Integer/parseInt (str/trim col))) row)))
       (map map-coordinates)))

(defn move-to-list
  "리스트면 리스트에 추가, 리스트가 아니면 새로운 리스트 생성
   input: 리스트로 추정되는 값, 추가할 값
   output: 리스트"
  [list value]
  (if (list? list)
    (conj list (first value))
    (list list value)))

(defn complete-coordinates-from-input
  "인풋 파일의 x좌표와 width 이용해 전체 직사각형 완성
   input: 인풋, y, 결과값
   output: 결과값"
  [input y result]
  (merge-with
   move-to-list
   result
   (loop [x (:x input) j 1 result {}]
     (if (> j (:w input))
       result
       (recur (inc x) (inc j) (assoc result [x y] (list (:id input))))))))

(defn iterate-till-coordinates-composed
  "인풋값의 y 좌표와 height 를 이용해 전체 직사각형 완성 
   input: 이전 carry, input data 
   output: 만들어진 직사각형"
  [carry data]
  (loop [y (:y data) i 1 result carry]
    (if (> i (:h data))
      result
      (recur (inc y) (inc i) (complete-coordinates-from-input data y result)))))

; Part 2
(defn get-overlapped-id
  "겹쳐진 id 가져오기
   input: input
   output: set"
  [input]
  (->> input
       (reduce iterate-till-coordinates-composed {})
       vals
       (filter #(> (count %) 1))
       flatten
       set))

(comment
  (let [input parsed-input
        all-ids (->> input (map :id) set)]
    (->> input
         get-overlapped-id
         set
         (data/diff all-ids)
         first)))
