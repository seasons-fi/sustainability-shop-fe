(ns sustainability-shop-fe.grid
  (:require 
            [reagent.core :as reagent :refer [atom]]
            [sustainability-shop-fe.state :refer [state-app]]
            ;; [sustainability-shop-fe.map.map-utils :refer [filter-locations-by-search]]
            ["leaflet" :as leaflet]
            [clojure.string :as str]
            ["leaflet.locatecontrol" :as leaflet.locatecontrol]
            ["leaflet.markercluster" :as leaflet.markercluster]
            ;; [alandipert.storage-atom :refer [local-storage]]
            [cognitect.transit :as t]
            [reitit.frontend.easy :as rfe]
            ["react-slick" :as rs :default Slider]))


(defn grid-wrapper [children]
  [:div {:class "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 grid-shapes"}
   children])

(defn grid-item [item]
  [:article  {:class "relative block w-30 h-auto  overflow-hidden" 
              :key {:id item}
              }
              [:div {:class "relative block w-full h-64 shadow bg-gray-300"
                     :style #js {:backgroundImage (str "url('" (:image item) "')")}
                    ;;  :on-click (fn []
                    ;;   (let [featureClj (js->clj item :keywordize-keys true)]
                    ;;     (when (:number (first (:location item)))
                    ;;       (let [latlng (leaflet/latLng (:number (nth (:location featureClj) 1)) (:number (nth (:location featureClj) 0)))]
                    ;;        (do
                    ;;          (js/console.log "list item location" (:number (first (:location item))) (:number (nth (:location featureClj) 0)) latlng)
                    ;;          (reset! state-app (assoc-in @state-app [:selectedLocation] {:geometry {:type "Point"
                    ;;                                                                                 :coordinates [(:number (nth (:location featureClj) 1)) (:number (nth (:location featureClj) 0))] }
                    ;;                                                                      :properties (js->clj item :keywordize-keys true)}))
                    ;;          ;; flyTo does work because the map component not set yet
                    ;;          ;; (reset-map-to-point latlng)
                    ;;          (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)})
                    ;;          (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)})))))
                    ;;        )
                     }]
              [:div {:class "py-6"}
               [:h1 {:class "text-xl font-medium text-blue-600 font-avenir-heavy"} (:name item)]
               (if-not (:onlineOnly item)
                [:address {:class "text-lg text-blue-600 font-garamond not-italic font-light inline mr-6"} (:address item)]
                 [:span {:class "text-lg text-blue-600 font-garamond not-italic font-light inline mr-6"} "online"])
               [:a {:class "inline-block text-lg text-blue-600 font-garamond not-italic font-light"
                    :href "#"} 
                [:button {:on-click (fn []
                                      (js/console.log "click grid item", (clj->js item))
                                      (let [featureClj (js->clj item :keywordize-keys true)]
                                        (if (:number (first (:location item)))
                                          (let [latlng (leaflet/latLng (:number (nth (:location featureClj) 1)) (:number (nth (:location featureClj) 0)))]
                                            (do
                                              (js/console.log "list item location" (:number (first (:location item))) (:number (nth (:location featureClj) 0)) latlng)
                                              (reset! state-app (assoc-in @state-app [:selectedLocation] {:geometry {:type "Point"
                                                                                                                     :coordinates [(:number (nth (:location featureClj) 1)) (:number (nth (:location featureClj) 0))]}
                                                                                                          :properties (js->clj item :keywordize-keys true)}))
                             ;; flyTo does work because the map component not set yet
                             ;; (reset-map-to-point latlng)
                                              (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)})
                                              (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)})))
                                          (let [a 1]
                                            (do
                                              (js/console.log "list item location")
                                              (reset! state-app (assoc-in @state-app [:selectedLocation] {:geometry {:type "Point"
                                                                                                                     :coordinates [0 0]}
                                                                                                          :properties (js->clj item :keywordize-keys true)}))
                             ;; flyTo does work because the map component not set yet
                             ;; (reset-map-to-point latlng)
                                              (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)})
                                              (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)}))))
                                        ))}
                 [:img {:class "inline-block h-2 "
                       :src "/img/arrow.svg"}]]]
               ]])