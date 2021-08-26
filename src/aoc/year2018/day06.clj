(ns aoc.year2018.day06
  (:require [clojure.string :as str]
            [clojure.data :as data]
            [clojure.set :as set]))

(comment "Part1. 좌표의 쌍이 N개 주어짐 각 점은 1 tick이 지날때 마다 상,하,좌,우로 증식함.
          맵 크기에는 제한이 없어 무한으로 뻗어나간다고 할 때, 가장 큰 유한한 면적의 크기를 반환")
(comment "Part2. 안전(safe) 한 지역은 근원지'들'로부터의 맨하탄거리(Manhattan distance, 격자를 상하좌우로만 움직일때의 최단 거리)의 '합'이 N 이하인 지역임.
          N이 10000 미만인 안전한 지역의 사이즈를 구하시오.")

(defn get-input-point-coordinates [path]
  (->> (slurp path)
       str/split-lines
       (map #(str/split % #","))
       (map (fn [[x y]] [(Integer/parseInt x) (Integer/parseInt (str/trim y))]))))

(defn get-largest-x
  "desc: 주어진 좌표에서 가장 큰 x 값을 구합니다
   input:
   output: "
  [coordinates]
  (->> coordinates
       (map first)
       (apply max)))

(defn get-largest-y
  "desc: 주어진 좌표에서 가장 큰 y 값을 구합니다
   input: 
   output: "
  [coordinates]
  (->> coordinates
       (map second)
       (apply max)))

(defn manhattan-distance
  "두 점 사이의 맨하탄 거리 측정
   Input: [0 0] [1 1]
   Output: 2"
  [[x1 y1] [x2 y2]]
  (+ (Math/abs ^Integer (- x2 x1)) (Math/abs ^Integer (- y2 y1))))

(defn get-minimum-distance
  "어떤 한 점의 각 근원지로부터의 거리에 대하여,
   그 중에서 가장 맨해탄 거리가 작은 근원지 좌표 [x y] 를 해당 점의 value 로 맵핑.
   가장 작은 맨해탄 거리가 동일한 값이 있을 때에는 nil 맵핑
   Input: {[1 1] 2, [1 6] 7, [8 3] 11, [3 4] 7, [5 5] 10, [8 9] 17}
  Output: [1 1]"
  [values]
  (let [minimum-distance-occurence (apply min-key first (frequencies (vals values)))]
    (if (> (second minimum-distance-occurence) 1)
      nil
      (first (apply min-key second values)))))

(defn get-manhattan-distances-from-specific-coords
  "모든 점에 대하여, 각 근원지 마다의 거리를 모두 계산 후 value 로 추가
  Input: [0 0] ([1 1] [1 6] [8 3] [3 4] [5 5] [8 9])
  Output: {[1 1] 2, [1 6] 7, [8 3] 11, [3 4] 7, [5 5] 10, [8 9] 17}"
  [[x1 y1] coords]
  (->> coords
       (reduce
        (fn [carry [x2 y2]]
          (->> (manhattan-distance [x1 y1] [x2 y2])
               (assoc carry [x2 y2])))
        {})))

(defn get-manhattan-distance-map [input-path coordinates]
  (->> (for [x (range (get-largest-x coordinates)) y (range (get-largest-y coordinates))] [x y])
       (reduce
        (fn
          [carry [x1 y1]]
          (assoc carry [x1 y1]
                 (->> (get-input-point-coordinates input-path)
                      (get-manhattan-distances-from-specific-coords [x1 y1])
                      (get-minimum-distance))))
        {})))

(defn get-infinite-coordinates
  "desc: 무한한 것의 좌표를 가져옵니다
   input:
   output:
   "
  [maps coordinates]
  (let [largest-y (get-largest-y coordinates)
        largest-x (get-largest-x coordinates)

        bottom-to-top (for [top (range (dec largest-y) -1 -1)] [0 top])
        top-to-bottom (for [bottom (range 0 largest-y)] [largest-x bottom])
        left-to-right (for [right (range 0 largest-x)] [right 0])
        right-to-left (for [left (range (dec largest-x) -1 -1)] [left largest-y])

        bottom-to-top-coords (reduce (fn [carry value] (conj carry (maps value))) #{} bottom-to-top)
        top-to-bottom-coords (reduce (fn [carry value] (conj carry (maps value))) #{} top-to-bottom)
        left-to-right-coords (reduce (fn [carry value] (conj carry (maps value))) #{} left-to-right)
        right-to-left-coords (reduce (fn [carry value] (conj carry (maps value))) #{} right-to-left)]

    (remove nil? (set/union
                  bottom-to-top-coords
                  top-to-bottom-coords
                  left-to-right-coords
                  right-to-left-coords))))

(defn find-by-value
  "map 에서 value가 일치하는 key를 모두 찾아 반환
   value: [1 1]
   output: #{[2 2] [0 0] [1 0] [1 1] [3 0] [4 1] [1 3] [0 3] [0 2] [2 0] [3 1] [2 1] [1 2] [0 1] [4 0]}"
  [value map]
  (reduce-kv (fn [carry k v]
               (if (= v value)
                 (conj carry k)
                 carry))
             #{} map))

;; Part 1
(let [input-path "resource/aoc/year2018/day06.txt"
      coordinates (get-input-point-coordinates input-path)
      maps (get-manhattan-distance-map input-path coordinates)]
  (->> (set coordinates)
       (data/diff (set (get-infinite-coordinates maps coordinates)))
       second
       (map (fn [v] (count (find-by-value v maps))))
       (apply max)))

;; Part 2
(defn get-manhattan-distances-summed-from-all-specific-coords
  "모든 점에 대하여 각 근원지로부터의 맨하탄 거리의 합을 구함
   Input: [7 6] ([1 1] [1 6] [8 3] [3 4] [5 5] [8 9])
   Output: 34"
  [specific-coords current-coords]
  (reduce
   (fn [carry [x y]] (+ carry (manhattan-distance specific-coords [x y])))
   0
   current-coords))

(let [input-path "resource/aoc/year2018/day06.txt"
      coordinates (get-input-point-coordinates input-path)]
  (->> (get-manhattan-distance-map input-path coordinates)
       (map (fn [[coordinates _]]
              (->> (get-input-point-coordinates input-path)
                   (get-manhattan-distances-summed-from-all-specific-coords coordinates))))
       (filter #(> 10000 %))
       count))
