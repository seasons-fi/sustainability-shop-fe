(ns sustainability-shop-fe.routes
  (:require [sustainability-shop-fe.views :refer [home-page add-page]]
            [sustainability-shop-fe.map :refer [map-page]]
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
    {:coercion reitit.coercion.schema/coercion}
    [""
     {:name ::map
      :view map-view
      }]
    ["/:id"
     {:name ::map-item
      :view map-view
      :parameters {:path {:id s/Int}}
      }]]])