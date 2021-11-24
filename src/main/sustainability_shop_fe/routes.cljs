(ns sustainability-shop-fe.routes
  (:require [sustainability-shop-fe.views :refer [home-page add-page]]
            [sustainability-shop-fe.map :refer [map-page]]
            [sustainability-shop-fe.map-utils :refer [get-places-api]]
            [sustainability-shop-fe.state :refer [state-app]]
            [schema.core :as s]
            [reitit.coercion.schema]
            [reitit.coercion.spec :as rss]))


;; Page views
(defn dashboard-view [match state-app]
  [home-page])

(defn map-view [match state-app]
  [map-page match state-app])

(defn add-place-view [match state-app]
  [add-page])

(def routes
  ["/"
   [""
    {:name ::frontpage
     :view dashboard-view}]

   ["add"
    {:name ::add-page
     :view add-place-view}]

   ["map"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                     (get-places-api state-app)
                                     (js/console.log "root start" (clj->js @state-app))))}]
     :view map-view}
    [""
     {:name ::map
      }]
    ["/:id"
     {:name ::map-item
      ;; :view map-view
      :parameters {:path {:id s/Int}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (do 
                                            ;; (reset-map-to-point latlng mapbox)
                                            ;; (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj feature :keywordize-keys true)))
                                            (js/console.log "item start" (-> parameters :path :id) (clj->js @state-app))))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]])