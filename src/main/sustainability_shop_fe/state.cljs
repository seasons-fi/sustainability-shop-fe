(ns sustainability-shop-fe.state
  (:require [reagent.core :as reagent]))

(defn set-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn get-item
  "Returns value of `key' from browser's localStorage."
  [key]
  (.getItem (.-localStorage js/window) key))

(defn remove-item!
  "Remove the browser's localStorage value for the given `key`"
  [key]
  (.removeItem (.-localStorage js/window) key))


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
             (remove-item! "state")
             (set-item! "state" (clj->js new-state))
            ;;  (.log js/console "key" (clj->js key))
            ;;  (.log js/console "atom" (clj->js atom))
            ;;  (.log js/console "old-state" (clj->js old-state))
             (.log js/console "reset new-state" (clj->js new-state))))