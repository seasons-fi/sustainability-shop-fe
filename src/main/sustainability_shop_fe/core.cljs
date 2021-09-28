(ns sustainability-shop-fe.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [sustainability-shop-fe.views :refer [navigation home-page add-page]]
            [sustainability-shop-fe.map :refer [map-page drawmap]]
            [sustainability-shop-fe.map-utils :refer [turn-realtime-db-to-geojson]]
            [sustainability-shop-fe.firebase :refer [init-firebase  fetch-firebase-data!]]
            [sustainability-shop-fe.state :refer [state-app]]
            [sustainability-shop-fe.routes :refer [routes]]
            ;; [sustainability-shop-fe.openroute :refer [fetch-directions!]]
            [reagent.core :as reagent :refer [atom]]
            ;; [clojure.string :as str]


            [schema.core :as s]
            [reagent.dom :as rd]
            ;; [secretary.core :as secretary :include-macros true]
            [ajax.core :refer [GET POST]]
            [goog.events]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.schema]
            [reitit.coercion.spec :as rss]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:import
   [goog.history Html5History EventType]))

(enable-console-print!)

(println "This text is printed from src/sustainability-shop-fe/core.cljs. Go ahead and edit it and see reloading in action.")


;; (defn get-token []
;;   (str js/window.location.pathname js/window.location.search))

(defn get-places-api [state-app]
  (go (let [response (<! (http/get "http://localhost:443/places"
                                ;; parameters
                                   {:with-credentials? false}))]
        (js/console.log "get-places-api"
                        ;; (clj->js (into [] (js->clj (. js/JSON (parse (:body response))) :keywordize-keys true)))
                        (turn-realtime-db-to-geojson (:body response)))

        (reset! state-app (assoc-in @state-app [:places] (turn-realtime-db-to-geojson (:body response)))))))

;;http://52.47.131.189:443/companies

(defn get-companies-api []
  (go (let [response (<! (http/get "http://52.47.131.189:443/companies"
                                ;; parameters
                                   {:with-credentials? false}))]
        ;; (reset! state-app (assoc-in @state-app [:companies] (js->clj (. js/JSON (parse (:body response))) :keywordize-keys true)))
        (js/console.log
         response))))

;; (defn add-place-api []
;;   (go (let [response (<! (http/post "http://localhost:443/places"
;;                                 ;; parameters
;;                                     {:with-credentials? false

;;                                      :json-params {:name "Domino"
;;                                                    :category "reduce"
;;                                                    :type "brand"
;;                                                    :address "\nYrjönkatu 34 \nHelsinki, 00100\n"
;;                                                    :location "[24.93669 60.16831]"
;;                                                    :places_id ""

;;                                                    :isActive true
;;                                                    :isOnline true
;;                                                    :isTemporary false
;;                                                    :isBrickAndMortar true

;;                                                    :city "Helsinki"
;;                                                    :country "Finland"

;;                                                    :company_name "Voglia"}
;;                                     ;;  :form-params {:post (. js/JSON (stringify (clj->js
;;                                     ;;                                             {                                              
;;                                     ;;                                              })))}
;;                                      }))]
;;         ;; (reset! state-app (assoc-in @state-app [:companies] (js->clj (. js/JSON (parse (:body response))) :keywordize-keys true)))
;;         (js/console.log "post response"
;;                         (clj->js response)))))


;; ;; -------------------------
;; ;; Page views
;; (defn dashboard-view [match state-app]
;;   [home-page])

;; (defn map-view [match state-app]
;;   [map-page match state-app])

;; (defn add-place-view [match state-app]
;;   [add-page])

;; ;; [:> (withRouter (r/reactify-component graphics-detail-container))]
;; (defn map-item-view [match state-app]
;;   [map-page match state-app])


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
  (init-firebase)
  (fetch-firebase-data! drawmap)
  ;; (fetch-directions!)
  (get-companies-api)
  (get-places-api state-app)
  (rd/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (rfe/start!
   router
   (fn [m]
     (reset! state-app
             (assoc @state-app :match m)))
   ;; set to false to enable HistoryAPI
   {:use-fragment false})
  (mount-root))


