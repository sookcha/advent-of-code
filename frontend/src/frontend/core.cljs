(ns frontend.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [aoc.year2018.day07 :as day07]))

;; -------------------------
;; Views

(defn home-page []
        [:div [:h2 "Welcome to Reagent"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
