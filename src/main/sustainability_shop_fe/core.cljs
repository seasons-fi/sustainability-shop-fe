(ns sustainability-shop-fe.core
  (:require 
            [sustainability-shop-fe.map.map-utils :refer [get-places-api get-companies-api fetch-data-notion-db!]]
            [sustainability-shop-fe.state :refer [state-app reset-logger]]
            [sustainability-shop-fe.routes :refer [routes]]
            [reagent.dom :as rd]
            [goog.events]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.schema]
            [reitit.coercion.spec :as rss]
            [reitit.frontend.controllers :as rfc]
            ))

(enable-console-print!)

(println "This text is printed from src/sustainability-shop-fe/core.cljs. Go ahead and edit it and see reloading in action.")

;;http://52.47.131.189:443/companies

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

(defn current-page []
  (let [route-data (:data (:match @state-app))]
    (fn []
      [:div {:class " h-screen flex flex-col justify-between md:h-auto md:block" 
             }
       
       (if (:match @state-app)
         (let [view (:view (:data (:match @state-app)))]
           [view (:match @state-app) state-app])
         [:section {:class "w-full"}
          [:p "Cannot find a sustaianable way to shop? Neither could we. Which is why we built this service. "]
          [:p "Go explore or watch this video about sustainability..."]
          ])
       ])))

(def router
  (rf/router routes {:conflicts nil
                     :data
                     {:coercion rss/coercion}}))


(defn mount-root []
  ;; (fetch-firebase-data! drawmap)
  (get-places-api state-app)
  ;; (fetch-directions!)
  (get-companies-api state-app)
  (fetch-data-notion-db! state-app)
  ;; (reset! state-app (js->clj (get-item "state") :keywordize-keys true))
  (rd/render [current-page] (.getElementById js/document "app")))

(defn init! []
  ;; (logger)
  (rfe/start!
   router
   (fn [new-match]
     (reset-logger state-app "match" (when new-match
            (assoc new-match
              :controllers (rfc/apply-controllers (:controllers (:match @state-app)) new-match))) "reset path match" )
     
    ;;  (reset! state-app
    ;;          (assoc @state-app :match 
    ;;                 (when new-match
    ;;         (assoc new-match
    ;;           :controllers (rfc/apply-controllers (:controllers (:match @state-app)) new-match)))))
     )
   ;; set to false to enable HistoryAPI
   {:use-fragment false})
  (mount-root))


