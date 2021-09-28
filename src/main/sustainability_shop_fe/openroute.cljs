(ns sustainability-shop-fe.openroute 
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [reagent.core :as reagent :refer [atom]]
            [alandipert.storage-atom :refer [local-storage]]
  ))

(def directionCol (local-storage (atom nil) :directionCol))

;; (def allLocations (local-storage (atom []) :allLocations))

(add-watch directionCol
           :new
           (fn [_ _ _ v]
             ;; (.log js/console "new preference" v)
             ))

(def tok "api_key=5b3ce3597851110001cf62489fd56d0c4f854187bb994903cad49fa5")
(def cat "https://api.openrouteservice.org/v2/directions/foot-walking")
(def start "start=24.93685,60.17038")
(def end "end=24.9384,60.1699")
(def method "GET")
(def dataType "json")
(def contentType "application/json; charset=utf-8")

(defn fetch-directions! []
  (go
    (reset! directionCol
            (js->clj (:body
                      (<! (http/get (str cat "?" tok "&" start "&" end)
                                    {:with-credentials? false})))))))