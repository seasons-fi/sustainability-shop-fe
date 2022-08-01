(ns sustainability-shop-fe.state
  (:require [reagent.core :as reagent]))


(defonce state-app (reagent/atom {:match {}
                                  :mode "map" 
                                  :searchSelected false
                                  :mapBox nil
                                  :geojsonLayer nil
                                  :geoJsonData []
                                  :locationsInMap []
                                  :places []
                                  :companies []
                                  :selectedLocation nil
                                  :search-value nil
                                  :selectedLocationID nil
                                  :subcategory nil
                                  :category nil
                                  :global-geojsonLayer nil
                                  :list []
                                  :newPlaces []
                                  :userLocation {:country  "Finland"
                                                 :city "Helsinki"}
                                  :filter [
                                           {:criteria "city"
                                            :value "Helsinki"}
                                           ]}))
                              

(defn reset-logger [state-app value new-value action]
  (js/console.log action (clj->js ((keyword value) @state-app)) (clj->js new-value))
  (reset! state-app (assoc-in @state-app [(keyword value)] new-value)))
  

(add-watch state-app
           :new
           (fn [key atom old-state new-state]
             ;; (.log js/console "new preference" (clj->js v) 
             (.log js/console "-- Atom Changed --")
            ;;  (.log js/console "key" (clj->js key))
            ;;  (.log js/console "atom" (clj->js atom))
            ;;  (.log js/console "old-state" (clj->js old-state))
             (.log js/console "reset new-state" (clj->js new-state))))