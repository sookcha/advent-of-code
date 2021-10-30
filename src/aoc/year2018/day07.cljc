(ns aoc.year2018.day07
  (:require [clojure.data :as data]
            [clojure.set :as set]
            [clojure.string :as str]))

(comment "Part 1: 작업마다 디펜던시가 있는 작업 목록이 있을 때 모든 작업이 완료됐을 때 작업을 완료한 순서대로 출력하라.
          같은 디펜던시가 있는 작업의 경우 알파벳 순서로 먼저 처리한다.")
(comment "Part 2: 총 5개의 워커가 있을 때 모든 작업이 완료된 시간을 구하라.")

(defn get-requirements-map
  "desc: input 파일을 읽어서 {'letter': #{dependencies}} 맵을 만듭니다.
   1. 정규식으로 1) 작업 이름 2) 해당 작업을 하기 위해 먼저 해야 하는 작업 이름 순서로 가져온 후,
   2. 작업 이름 별 {K V} 형태의 의존성 목록을 만듭니다. K는 작업 이름, V는 K를 완료하기 위해 먼저 해야 할 의존성 목록입니다.
   input: resource/aoc/year2018/day07.txt
   output: {'Q' #{'B' 'F' 'G' 'K' 'N'},
   'L' #{'C' 'J' 'Q' 'V' 'Y'},
   'J' #{'D' 'H' 'K' 'U' 'Y'},
   'M' #{'D' 'G' 'J' 'P'},
   'S' #{'G' 'M'},
   ..."
  [content]
  (->> content
       (re-seq #"Step ([A-Z]) must be finished before step ([A-Z]) can begin.")
       (map #(rest %))
       (reduce
        (fn [acc [first-id second-id]]
          (if (contains? acc second-id)
            (update acc second-id (fn [v] (conj v first-id)))
            (assoc acc second-id  (sorted-set first-id)))) {})))

(defn get-works-with-no-parents
  "desc: 시작첨을 찾기 위해 부모가 없는 노드를 구합니다
   1. 불러온 의존성 맵을 바탕으로, map의 value 에는 있지만 key 에는 없는 영문자를 구합니다.
   2. 그것을 vector 로 합쳐서 반환합니다.
   input: {'Q' #{'B' 'F' 'G' 'K' 'N'},
   'L' #{'C' 'J' 'Q' 'V' 'Y'},
   'J' #{'D' 'H' 'K' 'U' 'Y'},
   'M' #{'D' 'G' 'J' 'P'},
   'S' #{'G' 'M'},
   ...
   output: ['G' 'K' 'T' 'V']"
  [requirements-map]
  (let [no-parents
        (->>
         (data/diff (apply set/union (vals requirements-map)) (set (keys requirements-map)))
         first)]
    (->> no-parents
         (map str)
         (into []))))

(defn get-done-workers
  "desc: 작업이 모두 끝나서 대기중인 worker 를 가져옵니다
   worker 목록 vector 를 순환하면서 워커의 남은 시간이 0 이하이면서 job이 nil이 아닌 것을 가져옵니다.
   input: [{:time 60, :job 'A'} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil}]
   output: ({:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil})"
  [workers]
  (filter (fn [worker] (and (>= 0 (:time worker)) (not= :job nil))) workers))

(defn get-jobs
  "desc: 작업이 모두 끝난 워커로부터 끝난 작업 이름을 가져옵니다
   1. get-done-workers 함수를 호출해 끝난 워커를 모두 가져옵니다
   2. 작업 이름 중 nil 이 아닌 것을 제외시킵니다
   3. map 함수를 이용해 작업 이름만 가져옵니다
   input: ({:time 0, :job M} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil})
   output: (M)"
  [workers]
  (->> workers
       get-done-workers
       (filter #(not= (:job %) nil))
       (map #(:job %))))

(defn get-next-requirements
  "desc: 끝난 일을 해야할 일 목록의 의존성을 제거해서 다음 해야할 일 목록을 만듭니다
   1. 끝난 일이 없다면 현재 할일 목록을 그대로 반환합니다.
   2. 끝난 일이 있다면, 할일 목록의 의존성 목록에서 제거한 새로운 할일 목록을 만듭니다
   3. map 으로 엮어서 반환합니다.
   input: (G), {Q #{}, L #{Q}, Z #{A E L O Q W}, E #{A L Q}, O #{L}, A #{L O Q}, W #{A E L Q}}
   output: {Q #{}, L #{Q}, Z #{A E L O Q W}, E #{A L Q}, O #{L}, A #{L O Q}, W #{A E L Q}}"
  [done-jobs requirements]
  (if (empty? done-jobs)
    requirements
    (->> (map (fn [[key value]] {key (apply disj value done-jobs)}) requirements)
         (into {}))))

(defn get-next-works
  "desc: 할 일 목록에서 다음 할 일을 가져옵니다.
   다음 할 일은 할 일 목록에서 의존성이 없는 일이 다음 할 일이라고 정의했습니다.
   따라서 이 함수에서는,
   1. 할 일 목록을 순회하면서 
   2. 의존성이 없는 것의 작업 이름(=> map의 key) 를 가져온 후 
   3. 알파벳 순으로 정렬해
   4. 벡터에 담아 반환합니다.
   input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
   output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}"
  [state]
  (->> (:todo state)
       (filter (fn [[_ v]] (= v #{})))
       (map #(first %))
       sort
       (into [])))

(defn remove-done-jobs
  "desc: 끝난 작업을 다음 할일 목록에서 삭제합니다.
   현재 작업 목록과 끝난 작업 목록을 바탕으로,
   1. 끝난 작업 기반으로 다음 할일 목록을 만드는 get-next-requirements 함수를 호출합니다. 이 때 끝난 일이 의존성(=> map의 value) 에서 삭제된 다음 할일 목록이 생성됩니다
   2. 끝난 작업은 의존성 뿐만 아니라 할일 목록에서 완전히 삭제해야 하므로, map의 key 까지 삭제합니다.
   input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}, [G K T V]
   output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}"
  [state done-jobs]
  (update state :todo (fn [prev-req] (apply (partial dissoc (get-next-requirements done-jobs prev-req)) done-jobs))))

(defn decrease-worker
  "desc: 워커가 작업중이라면 시간을 1 감소시킵니다.
   1. 현재 worker 목록을 불러온 후 시간이 -1이 아닌 것(=> 일하고 있는 것) 의 시간을 1씩 삭제한 뒤 state 에 update 합니다
   2. 1에서 update 된 목록을 바탕으로, 끝난 작업을 가져옵니다. worker 중에서 시간이 0인 것의 job 이름을 가져와 벡터에 넣습니다. 이것을 `done-jobs` 라 합니다.
   3. 시간이 0인 워커를 {:time -1 :job nil} 형태로 업데이트 시킵니다
   4. 2에서 가져온 끝난 목록을 바탕으로, get-next-requirements 함수를 호출해 끝난 작업을 할일 목록의 의존성 목록(=> map의 value)에서 삭제시킵니다
   5. remove-done-jobs 함수를 호출해서 끝난 작업을 의존성 목록 뿐만 아니라 key 까지 삭제합니다.
   input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
   output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}"
  [state]
  (let [new-state (-> state (update :workers #(map (fn [x] (if (not= (:time x) -1) {:job (:job x) :time (dec (:time x))} x)) %)))
        done-jobs (into [] (map #(:job %) (filter #(= (:time %) 0) (:workers new-state))))]
    (-> new-state
        (update :workers (fn [workers] (into [] (map #(if (= (:time %) 0) {:time -1 :job nil} %) workers))))
        (update :todo (fn [todo] (into [] (get-next-requirements done-jobs (into [] todo)))))
        (remove-done-jobs done-jobs))))

(defn iterate-workers
  "jobs에 항목이 존재할 때, 할 일이 없는 워커에 어사인 합니다.
   1. job 목록에서 해야 할 일을 하나 꺼냅니다
   2. 일을 하고있지 않은 워커에게 어사인을 합니다. 워커에게 어사인 했거나 하지 않았더라도 워커를 pop 해서 다음 상태에서는 워커가 두 번 처리되지 않도록 합니다.
   3. 해당 잡을 어사인 했다면, pop 해서 다음 상태에서는 해당 잡이 처리되지 않도록 합니다. 잡이 어사인되지 않았다면 pop 하지 않습니다."
  [get-time-per-alphabet jobs workers]
  (iterate
   (fn [state]
     (if (empty? (:workers state))
       (-> state
           (assoc-in [:status] :done))
       (let [job (peek (:jobs state))
             worker (peek (:workers state))
             worker-available? (and (= (:job worker) nil) (> (count (:jobs state)) 0))]
         (-> state
             (update :jobs (fn [jobs] (if worker-available? (pop jobs) jobs)))
             (update :resulting-worker
                     (fn [results]
                       (if worker-available?
                         (conj results {:time (get-time-per-alphabet job) :job job})
                         (conj results worker))))
             (update :workers pop)))))
   {:status :in-progress :jobs jobs :workers workers :resulting-worker []}))

(defn get-next-worker-state
  "jobs에 항목이 존재할 때, 할 일이 없는 워커에 어사인 합니다.
   1. job 목록에서 해야 할 일을 하나 꺼냅니다
   2. 일을 하고있지 않은 워커에게 어사인을 합니다. 워커에게 어사인 했거나 하지 않았더라도 워커를 pop 해서 다음 상태에서는 워커가 두 번 처리되지 않도록 합니다.
   3. 해당 잡을 어사인 했다면, pop 해서 다음 상태에서는 해당 잡이 처리되지 않도록 합니다. 잡이 어사인되지 않았다면 pop 하지 않습니다.
   input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
   output: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
            :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}"
  [state get-time-per-alphabet jobs]
  (update
   state
   :workers
   (fn [workers]
     (->> (iterate-workers get-time-per-alphabet jobs workers)
          (drop-while #(not= (:status %) :done))
          first
          :resulting-worker))))

(defn assign-job-to-workers
  "desc: 처리해야 하는 작업들을 대기중인 worker 에게 할당합니다
   1. 현재 워커가 갖고 있는 작업 이름을 `current-works` 라고 합니다.
   2. get-next-works 함수에서 불러온 다음 할일 목록에서, 현재 워커가 갖고 있는 일을 제외시킨 `jobs` 벡터를 선언합니다.
   3. get-next-worker-state 함수를 통해 새로운 작업을 워커에 어사인 합니다.
   4. 3번 과정에서 얻어온 수정된 워커 목록을 state에 update 합니다.
   5. 처리한 작업 목록을 뜻하는 :jobs 벡터에 처리한 작업을 추가합니다. 이것은 part 1 문제를 푸는데 활용되는 벡터입니다.
   input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
   output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}"
  [state]
  (let [current-works (into [] (map #(:job %) (:workers state)))
        jobs (into [] (reverse (filter #(not (some (fn [v] (= v %)) current-works)) (get-next-works state))))
        assign-new-job (fn [old-jobs] (if (peek jobs) (conj old-jobs (peek jobs)) old-jobs))]
    (if (pos? (count jobs))
      (-> state
          (get-next-worker-state (:get-time-per-alphabet state) jobs)
          (update :jobs assign-new-job))
      state)))

(defn assign-new-job
  "desc: 새로운 작업을 워커에게 할당합니다
   1. get-done-workers 함수를 이용해 끝난 작업을 가져온 후 get-jobs 함수로 작업 이름만 가져옵니다. 이를 `done-jobs` 라 합니다.
   2. 끝난 작업을 할일 목록에서 삭제합니다
   3. assign-job-to-workers 함수를 호출해 새로운 작업을 맡깁니다.
   input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
   output: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
            :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}"
  [state]
  (let [done-jobs (get-jobs (get-done-workers (:workers state)))]
    (-> state
        (remove-done-jobs done-jobs)
        assign-job-to-workers)))

(defn update-status
  "desc: 할일 목록이 모두 비었다면 state의 status를 :done 으로 변경합니다."
  [state]
  (update state :status #(if (empty? (:todo state)) :done %)))

(defn get-next-state-part-2
  "desc: iterate 를 하면서 다음 상태를 만듭니다.
  1. 일하고 있는 모든 워커의 시간을 1초 깎습니다.
  2. 새로운 일을 찾아 일을 안하고 있는 워커에게 어사인 합니다.
  3. 만약 모든 일을 완료했다면 status를 :done 으로 바꿉니다.
  4. 시간을 1초 흐르게 합니다.
   input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
           :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}, [G K T V]
   output: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
            :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}"
  [state]
  (-> state
      decrease-worker
      assign-new-job
      update-status
      (update :time inc)))

(defn get-solution
  "desc: worker 갯수와 문자별 걸리는 시간을 구하는 함수를 입력으로 받아, 작업이 전체 끝날때의 상태를 반환합니다.
   input: 5, (fn [word] ...)
   output: {:todo {},
            :workers [{:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil}],
            :status :done,
            :get-time-per-alphabet #function[aoc.year2018.day07/eval7147/fn--7148],
            :time 1265,
            :jobs (...)}"
  [state]
  (let [state state
        last-status (->> (drop-while #(not= (:status %) :done) (iterate get-next-state-part-2 state)) first)]
    last-status))

(defn get-initial-state
  [worker-count alphabet-fn content]
  (let [requirements-map (get-requirements-map content)
        works-with-no-parents (into '() (reverse (get-works-with-no-parents requirements-map)))
        todo-jobs (merge (into {} (map (fn [v] [v #{}]) works-with-no-parents)) requirements-map)]
    {:todo todo-jobs   
     :workers (into [] (repeat worker-count {:time -1 :job nil}))
     :status :in-progress
     :get-time-per-alphabet alphabet-fn
     :time -1}))

(comment
  ; Part 1
  (->> (get-initial-state 1 (fn [_] 1) (slurp "resource/aoc/year2018/day07.txt"))
       get-solution
       :jobs
       (into '())
       (str/join ""))

  ; Part 2
  (->> (get-initial-state 5 (fn [alphabet] (- (int (.charAt alphabet 0)) 4)) (slurp "resource/aoc/year2018/day07.txt"))
       get-solution
       :time))
