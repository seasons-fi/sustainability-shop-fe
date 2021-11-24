(ns sustainability-shop-fe.state
  (:require [reagent.core :as reagent]))


(def state-app (reagent/atom {:match {}
                              :mode "map"
                              :mapBox nil
                              :geoJsonData []
                              :locationsInMap []
                              :places []
                              :companies []
                              :selectedLocation nil
                              :search-value nil
                              }))

(add-watch state-app
           :new
           (fn [_ _ _ v]
             (.log js/console "new preference" (clj->js v))))