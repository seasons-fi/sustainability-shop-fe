(ns sustainability-shop-fe.routes
  (:require [sustainability-shop-fe.views :refer [home-page add-page]]
            [sustainability-shop-fe.map :refer [map-page]]
            [schema.core :as s]
            [reitit.coercion.schema]
            [reitit.coercion.spec :as rss]))



;; -------------------------
;; Page views
(defn dashboard-view [match state-app]
  [home-page])

(defn map-view [match state-app]
  [map-page match state-app])

(defn add-place-view [match state-app]
  [add-page])

;; [:> (withRouter (r/reactify-component graphics-detail-container))]
(defn map-item-view [match state-app]
  [map-page match state-app])

(def routes
  ["/"
   [""
    {:name ::frontpage
     :view dashboard-view}]

   ["add" ;; add-page
    {:name ::add-page
     :view add-place-view}]

   ["map"
    {:coercion reitit.coercion.schema/coercion}
    [""
     {:name ::map
      :view map-view
      ;; :parameters {:path {:id s/Int}}
      ;; :controllers [{:params (fn [match]
      ;;                          (:path (:parameters match)))
      ;;                :start (fn [params]
      ;;                         (js/console.log "start" "item controller" (:id params)))
      ;;                :stop (fn [params]
      ;;                        (js/console.log "stop" "item controller" (:id params)))}]
      }]
    ["/:id"
     {:name ::map-item
      :view map-view
      :parameters {:path {:id s/Int}}
      ;; :controllers [{:params (fn [match]
      ;;                          (:path (:parameters match)))
      ;;                :start (fn [params]
      ;;                         (js/console.log "start" "item controller" (:id params)))
      ;;                :stop (fn [params]
      ;;                        (js/console.log "stop" "item controller" (:id params)))}]
      }]]])