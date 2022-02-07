(ns sustainability-shop-fe.core
  (:require [sustainability-shop-fe.navigation :refer [navigation]]
            [sustainability-shop-fe.map-utils :refer [get-places-api get-companies-api]]
            [sustainability-shop-fe.state :refer [state-app]]
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

(defn current-page []
  (let [route-data (:data (:match @state-app))]
    (fn []
      [:div {:class "bg-white relative h-screen flex flex-col justify-between"}
       [navigation]
       (when (:match @state-app)
         (let [view (:view (:data (:match @state-app)))]
           [view (:match @state-app) state-app]))])))

(def router
  (rf/router routes {:conflicts nil
                     :data
                     {:coercion rss/coercion}}))


(defn mount-root []
  ;; (fetch-firebase-data! drawmap)
  (get-places-api state-app)
  ;; (fetch-directions!)
  (get-companies-api state-app)
  (rd/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (rfe/start!
   router
   (fn [new-match]
     
     (reset! state-app
             (assoc @state-app :match 
                    (when new-match
            (assoc new-match
              :controllers (rfc/apply-controllers (:controllers (:match @state-app)) new-match))))))
   ;; set to false to enable HistoryAPI
   {:use-fragment false})
  (mount-root))


