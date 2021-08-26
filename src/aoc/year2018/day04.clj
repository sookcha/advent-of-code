(ns aoc.year2018.day04
  (:require [clojure.string :as str]))

(comment
  "키워드: 가드(Guard) 번호, 자는 시간(falls asleep), 일어나는 시간(wakes up). 
 각 가드들은 교대 근무를 시작하고 (begins shift) 졸았다가 일어났다를 반복함. 
 위의 예시에서 10번 가드는 0시 5분에 잤다가 25분에 일어나고, 또 0시 30분에 잠들었다가 0시 55분에 깨어남.
 가드들에 대해서 자고 깨는 시간 정보들이 입력으로 주어짐. 파트 1은 “주어진 입력에 대해서, 
 가장 오랜시간 잠들어있었던 가드의 ID와, 그 가드가 가장 빈번하게 잠들어 있었던 분(minute)의 곱을 구하라” 
 만약 20번 가드가 0시 10분~36분, 2시 5분~11분, 3시 11분~13분 이렇게 잠들어 있었다면, “11분“이 가장 빈번하게 잠들어 있던 ‘분’. 그럼 답은 20 * 11 = 220.")

(defn get-minute
  "분을 가져오기 위해앞의 14글자 삭제 후 나머지 가져옴.
 input: string
 output: string"
  [s] (subs s 14))

(defn parse-to-reduce-by-guard-id
  "메시지 읽은 후 guard-id 별로 깨어난 분, 잠든 분을 모두 list append
 input: {:guard-id 3079, 971 [15 54], 3079 []}, {:date 1518-02-28 23:56, :message Guard #971 begins shift}
 output: [:current-guard-id 3079
          :result [641 ['19' '24', ...] ...]"
  [carry value]
  (let [message (value :message) current-guard (carry :guard-id)]
    (cond
      (= message "falls asleep") (update carry current-guard (fn [v] (conj v (get-minute (value :date)))))
      (= message "wakes up") (update carry current-guard (fn [v] (conj v (get-minute (value :date)))))
      :else (let [guard-id (Integer/parseInt (re-find #"\d+" message))]
              (if (contains? carry guard-id)
                (update carry :guard-id (fn [_] guard-id))
                (assoc (update carry :guard-id (fn [_] guard-id)) guard-id []))))))

(defn parse-guards
  "메시지 포맷팅 후 가드별로 깨어난 분, 잠든 분 맵핑
 input: ({:date 1518-02-28 23:56, :message Guard #971 begins shift}, ...)
 output: [641 ['19' '24', ...] ...]"
  [message]
  (filter (fn [[_ v]] (> (count v) 0))
          (dissoc
           (reduce
            parse-to-reduce-by-guard-id
            {:guard-id 0}
            message) :guard-id)))

(defn map-key-with-values [value]
  (let [k (first value)
        v (second value)]
    {k (map (fn [v] (range (Integer/parseInt (first v)) (Integer/parseInt (last v)))) v)}))

(defn parse-input
  "인풋 파일 읽고 라인별로 나누기
 input: input
 output: [641
  ((19 20 21 22 23 24 25 26 27 28) (20 21 22 23) ...]"
  [path]
  (->> (slurp path)
       str/split-lines
       (map #(drop 1 (str/split % #"\]|\[")))
       (map #(map (fn [string] (str/trim string)) %))
       (map (fn [[date message]] {:date date :message message}))
       (sort-by :date)
       parse-guards
       (map (fn [[k v]] {k (partition 2 v)}))
       (map (fn [value] (map-key-with-values (first value))))
       (map first)))

(defn minute-frequencies-map
  "가드 id, 잠든 분 숫자의 빈도수, 그리고 잠든 분 리스트 반환
 input: [641 ((19 20 21 22 23 24 25 26 27 28)) ...]
 output: ({:id 641, :freq [16 2], :mins 12} {:id 2179, :freq [13 3], :mins 17} ...)"
  [parsed-input]
  (map (fn [[k v]]
         {:id k
          :freq
          (->> v
               (map first)
               flatten
               frequencies
               (sort-by val)
               last)
          :mins
          (->> v
               (map first)
               flatten
               count)})
       parsed-input))

; Part 1
(comment
  (def solution1
    (->> (parse-input "resource/aoc/year2018/day04.txt")
         minute-frequencies-map
         (sort-by :mins)
         last))
  
  (* (solution1 :id) (first (solution1 :freq))))

; Part 2
(comment
  "주어진 분(minute)에 가장 많이 잠들어 있던 가드의 ID와 그 분(minute)을 곱한 값을 구하라.
  예)
  1번 가드: 0시 10분~12분, 1시 9분~10분
  2번 가드: 0시 10분~12분
  1번 가드는 9분x1, 10분x2, 11분x1, 12분x1
  2번 가드는 10분x1, 11분x1, 12분x1
  주어진 분에 가장 많이 잠들어 있던 가드는 10분에 2번 잠든 1번 가드이고,
  답은 가드ID x 그 분(minute) = 1 x 10 = 10"
  (def solution2
    (->> (parse-input "resource/aoc/year2018/day04.txt")
         minute-frequencies-map
         (map
          (fn [v] {:id (:id v) :val (:freq v)}))
         (sort-by (fn [i] (second (i :val))))
         last))

  (* (solution2 :id) (first (solution2 :val))))
