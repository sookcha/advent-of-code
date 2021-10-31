(ns frontend.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [clojure.string :as str]
    [aoc.year2018.day07 :as day07]))

(def content "Step G must be finished before step M can begin.\nStep T must be finished before step E can begin.\nStep P must be finished before step M can begin.\nStep V must be finished before step L can begin.\nStep Y must be finished before step B can begin.\nStep K must be finished before step Z can begin.\nStep H must be finished before step I can begin.\nStep D must be finished before step U can begin.\nStep C must be finished before step L can begin.\nStep R must be finished before step Z can begin.\nStep U must be finished before step B can begin.\nStep J must be finished before step M can begin.\nStep M must be finished before step E can begin.\nStep I must be finished before step X can begin.\nStep N must be finished before step O can begin.\nStep S must be finished before step F can begin.\nStep X must be finished before step A can begin.\nStep F must be finished before step Q can begin.\nStep B must be finished before step Z can begin.\nStep Q must be finished before step W can begin.\nStep L must be finished before step W can begin.\nStep O must be finished before step Z can begin.\nStep A must be finished before step Z can begin.\nStep E must be finished before step W can begin.\nStep W must be finished before step Z can begin.\nStep G must be finished before step R can begin.\nStep H must be finished before step A can begin.\nStep A must be finished before step W can begin.\nStep Y must be finished before step D can begin.\nStep O must be finished before step A can begin.\nStep V must be finished before step U can begin.\nStep H must be finished before step W can begin.\nStep K must be finished before step F can begin.\nStep J must be finished before step X can begin.\nStep V must be finished before step R can begin.\nStep Q must be finished before step A can begin.\nStep F must be finished before step B can begin.\nStep G must be finished before step P can begin.\nStep L must be finished before step A can begin.\nStep B must be finished before step Q can begin.\nStep H must be finished before step J can begin.\nStep J must be finished before step L can begin.\nStep F must be finished before step E can begin.\nStep U must be finished before step A can begin.\nStep G must be finished before step Q can begin.\nStep G must be finished before step S can begin.\nStep K must be finished before step J can begin.\nStep N must be finished before step B can begin.\nStep F must be finished before step O can begin.\nStep C must be finished before step Z can begin.\nStep B must be finished before step E can begin.\nStep M must be finished before step S can begin.\nStep A must be finished before step E can begin.\nStep E must be finished before step Z can begin.\nStep K must be finished before step I can begin.\nStep P must be finished before step A can begin.\nStep Y must be finished before step L can begin.\nStep Y must be finished before step J can begin.\nStep G must be finished before step N can begin.\nStep Q must be finished before step L can begin.\nStep D must be finished before step X can begin.\nStep C must be finished before step I can begin.\nStep K must be finished before step B can begin.\nStep N must be finished before step F can begin.\nStep D must be finished before step M can begin.\nStep B must be finished before step A can begin.\nStep U must be finished before step J can begin.\nStep Q must be finished before step Z can begin.\nStep X must be finished before step F can begin.\nStep K must be finished before step X can begin.\nStep U must be finished before step E can begin.\nStep X must be finished before step W can begin.\nStep K must be finished before step Q can begin.\nStep I must be finished before step E can begin.\nStep D must be finished before step J can begin.\nStep P must be finished before step I can begin.\nStep K must be finished before step D can begin.\nStep S must be finished before step X can begin.\nStep C must be finished before step R can begin.\nStep P must be finished before step W can begin.\nStep I must be finished before step O can begin.\nStep S must be finished before step O can begin.\nStep K must be finished before step C can begin.\nStep N must be finished before step Q can begin.\nStep L must be finished before step E can begin.\nStep L must be finished before step Z can begin.\nStep K must be finished before step W can begin.\nStep Y must be finished before step A can begin.\nStep L must be finished before step O can begin.\nStep N must be finished before step W can begin.\nStep R must be finished before step W can begin.\nStep C must be finished before step O can begin.\nStep H must be finished before step X can begin.\nStep V must be finished before step Y can begin.\nStep S must be finished before step W can begin.\nStep V must be finished before step E can begin.\nStep Q must be finished before step E can begin.\nStep P must be finished before step H can begin.\nStep V must be finished before step H can begin.\nStep N must be finished before step Z can begin.\nStep C must be finished before step A can begin.")
(def current-time (r/atom 0))
(def init-state (day07/get-initial-state 5 (fn [alphabet] (- (int (.charCodeAt alphabet 0)) 4)) content))

(defn worker-component [{:keys [time job]}]
  [:div {:style {:display "flex" :align-items "center" :justify-content "center" :width "100%" :height "100px" :border "1px solid white" :background-color (if (= -1 time) "black" "darkgreen") :transition "background-color 0.2s"
                 :color "#FFF"}}
        (if (= -1 time) "Idle" [:div [:div (str "작업 " job)] [:div (str "남은 시간 " time)]])])

(defn home-page []
  (let [last-time (->> init-state
                       day07/get-solution
                       :time)
        current-state (nth (iterate day07/get-next-state-part-2 init-state) @current-time)]
    [:div
     [:h2 "Advent of Code 2018 문제 풀이"]
     [:h3 "Day 7"]
     [:span "작업마다 의존관계가 있는 작업 목록이 있을 때 모든 작업이 완료됐을 때 작업을 완료한 순서대로 출력하라. 같은 디펜던시가 있는 작업의 경우 알파벳 순서로 먼저 처리한다."]
     [:span " 총 5개의 워커가 있을 때 모든 작업이 완료된 시간을 구하라."]
     [:div
      [:h3 "작업목록"]
      [:textarea
       {:style {:width "100%" :height "50px"} :defaultValue content}]

      [:h4 "워커 갯수"]
      [:input {:type :number :defaultValue 5}]
      [:div {:style {:display "flex" :width "100%"}} (for [worker (:workers current-state)] (worker-component worker))]
      [:p (str "작업을 완료하기까지 " last-time " 초가 걸립니다.")]
      [:h4 (str @current-time "초의 작업 상태")]
      [:input.form-control
       {:type  :range
        :value @current-time
        :min   0
        :max   (+ 1 last-time)
        :style {:width "100%"}
        :on-change
               (fn [e]
                 (let [target (js/parseInt (.. e -target -value))]
                   (swap! current-time (fn [_] target))))}]
      [:p (str/join (:jobs current-state))]]]))


(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
