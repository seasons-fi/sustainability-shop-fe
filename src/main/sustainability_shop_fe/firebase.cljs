(ns sustainability-shop-fe.firebase
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as str]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            ["firebase" :default firebase]))

(defn init-firebase []
  (. firebase (initializeApp
               #js {:apiKey "AIzaSyB9raTBket2Ak7mIbJvrUYbpw7dN0Xa8F4"
                    :authDomain "fashionforward-39342.firebaseapp.com"
                    :databaseURL "https://fashionforward-39342.firebaseio.com"
                    :projectId "fashionforward-39342"
                    :storageBucket "fashionforward-39342.appspot.com"
                    :messagingSenderId "969025968452"
                    :appId "1:969025968452:web:74ee5b737ee18498eb9f11"
                    :measurementId "G-YVSSNCBHF3"})))

(defn db-ref [path]
  (. (. firebase database) (ref (str "/" path))))

(defn fetch-firebase-data! [callback]
  (.once
   (db-ref "1dJA2nxyJbm9J9GZg491ENa6lESzUgc2ChpWlGjTEtm0/brands")
   "value"
   (fn received-db [snapshot]
     (js/console.log "Got from db:" (.val snapshot))
     (callback snapshot)

  ;;  (if-not (.getItem js/localStorage ":allLocations")
    ;;  (do 
    ;;    (reset! allLocations (.val snapshot))
    ;;    (js/console.log "Got from db:" (.val snapshot))
    ;;    (reset! geoJsonData (.stringify js/JSON (turn-realtime-db-to-geojson (.val snapshot)) )))
    ;;  (do
    ;;   (js/console.log "Got from local db:" allLocations)
    ;;   (reset! geoJsonData (.stringify js/JSON (turn-realtime-db-to-geojson allLocations) )))
      ;; )
     )))





