(ns aoc.year2020.day08
  (:require [clojure.string :as str]))

(comment "Part1 : 어떤 게임기의 부팅 로직에 버그가 있어, 무한루프를 돌고 있다. 똑같은 라인의 코드를 두 번째 실행했을 때의 acc 값을 구하라.")
(defn get-input
  "desc: 
   1. 경로로 부터 인풋 파일을 읽습니다
   2. 인풋 파일을 각 줄 별로 나눕니다
   3. 각 줄을 또 빈 값으로 나눕니다
   input: resource/aoc/year2020/day08.txt
   output: (['acc' '+0'] ['acc' '-11'] ['acc' '-19'] ['acc' '-18'] ...)"
  [path]
  (->> (slurp path)
       clojure.string/split-lines
       (map #(str/split % #" "))))

(defn parse-input 
  "desc: 각 줄의 각 element 를 {:opcode :value} 형태로 맵핑합니다
   
   input: (['acc' '+0'] ['acc' '-11'] ['acc' '-19'] ['acc' '-18'] ...)
   output: [{:opcode :acc, :value 0}
            {:opcode :acc, :value -11}]"
  [input]
  (->> input
       (map (fn [[opcode value]] {:opcode (keyword opcode) :value (Integer/parseInt value)}))
       (into [])))

(defn get-initial-state [input]
  {:status :in-progress
   :lines #{}
   :acc 0
   :current-line 0
   :input input
   :condition :normal})

(defn next-step
  "desc: 파싱된 명령어를 순차적으로 실행합니다.
   1. acc 면 누산기에 value 값을 더하거나 뺀 후 다음 라인으로 진행
   2. jmp 면 가르키는 라인으로 점프
   3. nop 면 다음 라인으로 진행

   input: {:status :in-progress
   :lines #{}
   :acc 0
   :current-line 0
   :input input
   :condition :normal}
   output: 
   {:status :in-progress
   :lines #{}
   :acc 0
   :current-line 0
   :input input
   :condition :normal}"
  [current-state]
  (let [{:keys [current-line input]} current-state
        {:keys [opcode value]} (input current-line)]
    (cond
      (= opcode :acc)
      (-> current-state
          (update :acc + value)
          (update :current-line inc)
          (update :lines #(conj % current-line)))
      (= opcode :jmp)
      (-> current-state
          (update :current-line + value)
          (update :lines #(conj % current-line)))
      (= opcode :nop)
      (-> current-state
          (update :current-line inc)
          (update :lines #(conj % current-line))))))

(defn next-step-with-same-line-execute-dectection
  "desc: 위에서 만든 `next-step` 함수에 현재 줄이 파일의 끝 줄인지 판단하여,
   맞다면 :status :done, :condition :exit 으로 만드는 코드를 추가합니다.

   input: {:status: :in-progress, :current-line 0, ...}
   output: {:status: :in-progress, :current-line 0, ...}"
  [{:keys [lines current-line] :as current-state}]
  (if (lines current-line)
    (-> current-state (assoc :status :done))
    (next-step current-state)))

(let [parsed-input (->> (get-input "resource/aoc/year2020/day08.txt") parse-input)]
  (->> parsed-input
       get-initial-state
       (iterate next-step-with-same-line-execute-dectection)
       (drop-while #(not= (:status %) :done))
       first
       :acc))

(comment "Part2 : 게임기의 부팅 로직 코드에서 단 한개의 jmp를 nop 로 바꾸거나, nop을 jmp 로 바꾸면 정상화된다.
          버그를 고치고, 게임기가 정상 동작했을 때의 acc 값을 구하라.")
(defn next-step-with-line-end-detection
  "desc: 위에서 만든 `next-step-with-same-line-execute-dectection` 함수에
   현재 줄이 파일의 끝 줄인지 판단하여, 맞다면 :status :done, :condition :exit 으로 만드는
   코드를 추가합니다.

   input: {:status: :in-progress, :current-line 0, ...}
   output: {:status: :in-progress, :current-line 0, ...}"
  [{:keys [current-line] :as current-state}]
  (if (= current-line (count (:input current-state)))
    (-> current-state
        (assoc :status :done)
        (assoc :condition :exit))
    (next-step-with-same-line-execute-dectection current-state)))

(defn loop-till-done
  "desc: :status 값이 :done 이 될 때까지 state에 대하여 next-fn을 반복 실행합니다.
  
  input: function, {:status :in-progress, ...}
  output: {:status :done, ...}"
  [next-fn state]
  (->> (drop-while #(not= (:status %) :done) (iterate next-fn state))
       first))

(defn get-fixed
 "desc: 게임기가 정상 동작하는지 확인해야 하므로, 
  1. 고쳐진 것으로 추정되는 코드의 모든 목록을 replaces 으로 받아서,
  2. 각 코드 목록을 new-input 으로 맵핑해서
  3. 해당 코드(new-input)를 처음부터 끝까지 돌려봅니다.

  input: [[{:opcode :acc :value 1}, ...], [{:opcode :acc :value 1}, ...], ...]
  output: [{:status :done, :condition :exit, ...}, {:status :done, :condition :exit, ...}, ...]"
  [replaces]
  (map (fn [new-input]
         (let [new-state (assoc (get-initial-state new-input) :input new-input)]
           (loop-till-done next-step-with-line-end-detection new-state))) 
       replaces))

(defn generate-fixed-codes 
  "desc: 입력 파일로부터 파싱된 소스 코드를 기반으로,
   1. map-indexed 로 각 jmp 코드의 줄 번호를 가져옵니다. 
   2. filter를 이용해 jmp 코드가 아닌 것을 삭제합니다
   3. jmp 코드의 줄 번호 마다 nop 로 바뀐 새로운 입력 파일의 목록을 생성합니다.

   input: [[{:opcode :acc :value 1}, ...], [{:opcode :acc :value 1}, ...], ...]
   output: [[{:opcode :acc :value 1}, ...], [{:opcode :acc :value 1}, ...], ...]"
  [input]
  (->> input
       (map-indexed (fn [index {:keys [opcode]}] (if (= opcode :jmp) index nil)))
       (filter #(not= nil %))
       (map (fn [location] (assoc-in input [location :opcode] :nop)))))

(defn get-fixed-one
  "desc: 수정된 코드의 목록을 받은 후, 전부 실행시킵니다. 만약 condition이 exit(=> 정상 종료) 되는 것이 있다면 가져옵니다.
   
   input: [[{:opcode :acc :value 1}, ...], [{:opcode :acc :value 1}, ...], ...]
   output: {:status :done, :condition :exit, ...}"
  [fixed-codes]
  (->> fixed-codes
       get-fixed
       (filter #(= (:condition %) :exit))
       first))

(let [parsed-input (->> (get-input "resource/aoc/year2020/day08.txt") parse-input)]
  (->> parsed-input
       generate-fixed-codes
       get-fixed-one
       :acc))
