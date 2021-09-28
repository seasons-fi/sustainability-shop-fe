(ns sustainability-shop-fe.state
  (:require [reagent.core :as reagent :refer [atom]]))


(def state-app (reagent/atom {:match {}
                              :places []
                              :companies []
                              :selectedLocation (atom nil)}))

(add-watch state-app
           :new
           (fn [_ _ _ v]
             (.log js/console "new preference" (clj->js v))))