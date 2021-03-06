(ns frontend.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [aoc.year2018.day07 :as day07]))

(def content (r/atom "Step G must be finished before step M can begin.\nStep T must be finished before step E can begin.\nStep P must be finished before step M can begin.\nStep V must be finished before step L can begin.\nStep Y must be finished before step B can begin.\nStep K must be finished before step Z can begin.\nStep H must be finished before step I can begin.\nStep D must be finished before step U can begin.\nStep C must be finished before step L can begin.\nStep R must be finished before step Z can begin.\nStep U must be finished before step B can begin.\nStep J must be finished before step M can begin.\nStep M must be finished before step E can begin.\nStep I must be finished before step X can begin.\nStep N must be finished before step O can begin.\nStep S must be finished before step F can begin.\nStep X must be finished before step A can begin.\nStep F must be finished before step Q can begin.\nStep B must be finished before step Z can begin.\nStep Q must be finished before step W can begin.\nStep L must be finished before step W can begin.\nStep O must be finished before step Z can begin.\nStep A must be finished before step Z can begin.\nStep E must be finished before step W can begin.\nStep W must be finished before step Z can begin.\nStep G must be finished before step R can begin.\nStep H must be finished before step A can begin.\nStep A must be finished before step W can begin.\nStep Y must be finished before step D can begin.\nStep O must be finished before step A can begin.\nStep V must be finished before step U can begin.\nStep H must be finished before step W can begin.\nStep K must be finished before step F can begin.\nStep J must be finished before step X can begin.\nStep V must be finished before step R can begin.\nStep Q must be finished before step A can begin.\nStep F must be finished before step B can begin.\nStep G must be finished before step P can begin.\nStep L must be finished before step A can begin.\nStep B must be finished before step Q can begin.\nStep H must be finished before step J can begin.\nStep J must be finished before step L can begin.\nStep F must be finished before step E can begin.\nStep U must be finished before step A can begin.\nStep G must be finished before step Q can begin.\nStep G must be finished before step S can begin.\nStep K must be finished before step J can begin.\nStep N must be finished before step B can begin.\nStep F must be finished before step O can begin.\nStep C must be finished before step Z can begin.\nStep B must be finished before step E can begin.\nStep M must be finished before step S can begin.\nStep A must be finished before step E can begin.\nStep E must be finished before step Z can begin.\nStep K must be finished before step I can begin.\nStep P must be finished before step A can begin.\nStep Y must be finished before step L can begin.\nStep Y must be finished before step J can begin.\nStep G must be finished before step N can begin.\nStep Q must be finished before step L can begin.\nStep D must be finished before step X can begin.\nStep C must be finished before step I can begin.\nStep K must be finished before step B can begin.\nStep N must be finished before step F can begin.\nStep D must be finished before step M can begin.\nStep B must be finished before step A can begin.\nStep U must be finished before step J can begin.\nStep Q must be finished before step Z can begin.\nStep X must be finished before step F can begin.\nStep K must be finished before step X can begin.\nStep U must be finished before step E can begin.\nStep X must be finished before step W can begin.\nStep K must be finished before step Q can begin.\nStep I must be finished before step E can begin.\nStep D must be finished before step J can begin.\nStep P must be finished before step I can begin.\nStep K must be finished before step D can begin.\nStep S must be finished before step X can begin.\nStep C must be finished before step R can begin.\nStep P must be finished before step W can begin.\nStep I must be finished before step O can begin.\nStep S must be finished before step O can begin.\nStep K must be finished before step C can begin.\nStep N must be finished before step Q can begin.\nStep L must be finished before step E can begin.\nStep L must be finished before step Z can begin.\nStep K must be finished before step W can begin.\nStep Y must be finished before step A can begin.\nStep L must be finished before step O can begin.\nStep N must be finished before step W can begin.\nStep R must be finished before step W can begin.\nStep C must be finished before step O can begin.\nStep H must be finished before step X can begin.\nStep V must be finished before step Y can begin.\nStep S must be finished before step W can begin.\nStep V must be finished before step E can begin.\nStep Q must be finished before step E can begin.\nStep P must be finished before step H can begin.\nStep V must be finished before step H can begin.\nStep N must be finished before step Z can begin.\nStep C must be finished before step A can begin."))

(def worker-count (r/atom 5))
(def time-to-finish (r/atom 0))
(def current-time (r/atom 0))

(def global-state (r/atom {}))

(defn worker-component [{:keys [time job]}]
  [:div {:style {:display "flex" :align-items "center" :justify-content "center" :width "100%" :height "100px" :border "1px solid white" :background-color (if (= -1 time) "black" "green") :transition "background-color 0.2s"
                 :color "#FFF"}}
        (if (= -1 time) "Idle" [:div [:div (str "?????? " job)] [:div (str "?????? ?????? " time)]])])

(defn start []
  (let [state (day07/get-initial-state @worker-count (fn [alphabet] (- (int (.charCodeAt alphabet 0)) 4)) @content)]
    (do
      (swap! time-to-finish (fn [_] (->> state
                                         day07/get-solution
                                         :time)))
      (swap! global-state (fn [_] state)))))

(defn home-page []
  (let [state (nth (iterate day07/get-next-state-part-2 @global-state) @current-time)]
    [:div
     [:h4 "Day 7"]
     [:p "???????????? ??????????????? ?????? ?????? ????????? ?????? ??? ?????? ????????? ???????????? ??? ????????? ????????? ???????????? ????????????. ?????? ??????????????? ?????? ????????? ?????? ????????? ????????? ?????? ????????????."]
     [:p "??? 5?????? ????????? ?????? ??? ?????? ????????? ????????? ????????? ?????????."]
     [:div
      [:h4 "????????????"]
      [:textarea
       {:style {:width "100%" :height "50px"} :defaultValue @content}]

      [:div "?????? ??????"]
      [:input {:type :number :defaultValue @worker-count :on-change (fn [e] (swap! worker-count (fn [_] (js/parseInt (.. e -target -value)))))}]
      [:div [:button {:on-click start} "??????"]]
      [:div {:style {:display "flex" :width "100%"}} (for [worker (:workers state)] (worker-component worker))]
      [:p (str "????????? ?????????????????? " @time-to-finish " ?????? ????????????.")]
      [:h5 (str @current-time "?????? ?????? ??????")]
      [:input.form-control
       {:type  :range
        :value @current-time
        :min   0
        :max   (+ 1 @time-to-finish)
        :style {:width "100%"}
        :on-change
               (fn [e]
                 (let [target (js/parseInt (.. e -target -value))]
                      (swap! current-time (fn [_] target))))}]]]))

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
