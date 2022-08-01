(ns sustainability-shop-fe.routes
  (:require [sustainability-shop-fe.add-page :refer [add-page]]
            [sustainability-shop-fe.home-page :refer [home-page]]
            [sustainability-shop-fe.map-page :refer [map-page]]
            [sustainability-shop-fe.map.map-utils :refer [get-places-api fetch-data-notion-db!]]
            [sustainability-shop-fe.state :refer [state-app reset-logger]]
            [schema.core :as s]
            [reitit.coercion.schema]))


(defn wait-for-it-page [match state-app]
  [:<>
   [:div {:class "block w-full flex flex-wrap flex-col	md:flex-row justify-center bg-blue-600 h-screen items-center	text-center "} 
    [:h1 {:class "text-3xl font-garamond text-white block w-1/2 lg:text-center"} "Umberto Eco."]
    [:p {:class "text-6xl font-garamond text-white block w-1/2 md:text-left"} "Coming August 09, 2022"]
    ]])
;; Page views
(defn dashboard-view [match state-app]
  [home-page state-app])

(defn map-view [match state-app]
  [map-page match state-app])

(defn add-place-view [match state-app]
  [add-page])

(def routes
  ["/"
   [""
    {:name ::frontpage
     :view wait-for-it-page}]
   ["explore"
    {:name ::homepage
     :view dashboard-view}]
   ["add"
    {:name ::add-page
     :view add-place-view}]
   ["reuse"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                      ;; (get-places-api state-app)
                                     ;; (fetch-data-notion-db! state-app)
                                     ;; (reset! state-app (assoc-in @state-app [:filter] (conj (:filter @state-app) {:criteria "category" :value "reuse"})))
                                     (reset-logger state-app "filter" (conj (:filter @state-app) {:criteria "category" :value "reuse"}) "reset filter add category")
                                    ;;  (swap! state-app (assoc-in @state-app [:category] "reuse"))
                                     ))}]
     :view map-view
     }
    [""
     {:name ::reuse-page
      }]
    ["/:category"
     {:name ::reuse-item
      ;; :parameters {:path {:category s/Int}}
      :controllers [{
                   :stop  (fn [parameters] 
                            (js/console.log "item stop" (-> parameters :query :category)))}]
      
      }]
    ]
   ["reduce"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                     (js/console.log "reduce?")
                                     (reset-logger state-app "filter" (conj (:filter @state-app) {:criteria "category" :value "reduce"}) "reset filter add category")
                                      ;; (get-places-api state-app)
                                     ;; (fetch-data-notion-db! state-app)
                                     
                                    (reset! state-app (assoc-in @state-app [:category] "reduce"))
                                     ))}]
     :view map-view}
    [""
     {:name ::reduce-page}]
    ["/:id"
     {:name ::reduce-item
      :parameters {:path {:id s/Str}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (do 
                                            (js/console.log "reset item start" "reduce ->" (-> parameters :path :id))
                                            (case (-> parameters :path :id)
                                             "sustainable brands" (reset! state-app (assoc-in @state-app [:filter] (conj (:filter @state-app) {:criteria "subcategory" :value "brand"})))
                                              "clothing rentals" (reset! state-app (assoc-in @state-app [:filter] (conj (:filter @state-app) {:criteria "subcategory" :value "rental"})))
                                              nil)
                                            ;; (reset! state-app (assoc-in @state-app [:filter] (conj (:filter @state-app) {:criteria "category" :value "reduce"})))
                                            
                                           ))
                  :stop  (fn [parameters] (do
                                           (js/console.log "item stop" (-> parameters :path :id))
                                           
                                            ;; (reset! state-app (assoc-in @state-app [:filter] (conj (:filter @state-app) {:criteria "category" :value "reduce"})))
                                            ))}]
      }]]
   ["repair"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                      (get-places-api state-app)
                                     ;; (fetch-data-notion-db! state-app)
                                     (reset! state-app (assoc-in @state-app [:filter] (conj (:filter @state-app) {:criteria "category" :value "repair"})))
                                     (swap! state-app (assoc-in @state-app [:category] "repair"))))}]
     :view map-view}
    [""
     {:name ::repair-page}]
    ["/:id"
     {:name ::repair-item
      :parameters {:path {:id s/Str}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (js/console.log "item start" (-> parameters :path :id)))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]   
   ["recycle"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] (do 
                                     (get-places-api state-app)
                                     ;; (fetch-data-notion-db! state-app)
                                     (reset! state-app (assoc-in @state-app [:filter] (conj (:filter @state-app) {:criteria "category" :value "recycle"})))
                                     (swap! state-app (assoc-in @state-app [:category] "recycle"))))}]
     :view map-view}
    [""
     {:name ::recycle-page}]
    ["/:id"
     {:name ::recycle-item
      :parameters {:path {:id s/Str}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (js/console.log "item start" (-> parameters :path :id)))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]   
   ["all"
    {:coercion reitit.coercion.schema/coercion
     :controllers [{:start (fn [_] 
                            ;; (get-places-api state-app)
                             (fetch-data-notion-db! state-app)
                             (reset! state-app (assoc-in @state-app [:mode] "map"))
                             )}]
     :view map-view}
    [""
     {:name ::map
      }]
    ["/:id"
     {:name ::map-item
      :parameters {:path {:id s/Str}}
      :controllers [{:parameters {:path [:id]}
                  :start (fn [parameters] (js/console.log "item start" (-> parameters :path :id)))
                  :stop  (fn [parameters] (js/console.log "item stop" (-> parameters :path :id)))}]
      }]]])