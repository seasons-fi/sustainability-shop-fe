(ns sustainability-shop-fe.routes
  (:require [sustainability-shop-fe.views :refer [home-page add-page]]
            [sustainability-shop-fe.map :refer [map-page]]
            [sustainability-shop-fe.map-utils :refer [get-places-api]]
            [sustainability-shop-fe.state :refer [state-app]]
            [schema.core :as s]
            [reitit.coercion.schema]))


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
   ["reuse"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                     (get-places-api state-app)
                                     (reset! state-app (assoc-in @state-app [:category] "reuse"))))}]
     :view map-view
     }
    [""
     {:name ::reuse-page
      }]
    ["/:category"
     {:name ::reuse-item
      ;; :parameters {:path {:category s/Int}}
      ;; :controllers [{:parameters {:query [:category]}
      ;;             :start (fn [parameters] (js/console.log "item start" (-> parameters :query :category)))
      ;;             :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :query :category)))}]
      
      }]
    ]
   ["reduce"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                     (get-places-api state-app)
                                     (reset! state-app (assoc-in @state-app [:category] "reduce"))))}]
     :view map-view}
    [""
     {:name ::reduce-page}]
    ["/:id"
     {:name ::reduce-item
      :parameters {:path {:id s/Int}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (js/console.log "item start" (-> parameters :path :id)))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]
   ["repair"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                     (get-places-api state-app)
                                     (reset! state-app (assoc-in @state-app [:category] "repair"))))}]
     :view map-view}
    [""
     {:name ::repair-page}]
    ["/:id"
     {:name ::repair-item
      :parameters {:path {:id s/Int}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (js/console.log "item start" (-> parameters :path :id)))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]
   
   ["recycle"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                     (get-places-api state-app)
                                     (reset! state-app (assoc-in @state-app [:category] "recycle"))))}]
     :view map-view}
    [""
     {:name ::recycle-page}]
    ["/:id"
     {:name ::recycle-item
      :parameters {:path {:id s/Int}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (js/console.log "item start" (-> parameters :path :id)))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]
   
   ["map"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (get-places-api state-app))}]
     :view map-view}
    [""
     {:name ::map
      }]
    ["/:id"
     {:name ::map-item
      :parameters {:path {:id s/Int}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (js/console.log "item start" (-> parameters :path :id)))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]])