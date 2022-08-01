(ns sustainability-shop-fe.list-component
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


(defn reset-map-to-point [latlng _]
  (. (:mapBox @state-app) (flyTo latlng 18)))

(defn slick-slider-list [company]
  [:div {:class "w-full h-auto flex flex-wrap"}
      (for [item (filter
                  #(clojure.string/includes? (:name %) company)
                  (:list @state-app))] 
         [:button
          {:class "block relative w-24"
           :onClick (fn []
                      (js/console.log (clj->js item))
                      (let [
                            featureClj (js->clj item :keywordize-keys true)
                             ;; featureJS f
                             ;;propertiesClj (js->clj (. item -properties) :keywordize-keys true)
                             ;;propertiesJS (. featureJS -properties)
                            ]
                        (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj item)))
                        
                      ;; (let [latlng (leaflet/latLng (:number (nth (:location featureClj) 1)) (:number (nth (:location featureClj) 0)))]
                      ;;       (reset-map-to-point latlng mapbox))
                           (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)})
                           (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id item)}))
                           ;; (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj item)))
                      ;; (reset! state-app (assoc-in @state-app [:mode] "map"))
                      ;; 
                      ;;(rfe/href (keyword "sustainability-shop-fe.routes" "map") {:id (:id (:properties (js->clj item :keywordize-keys true)))})
                      ;;(rfe/push-state (keyword "sustainability-shop-fe.routes" "map") {:id (:id (:properties (js->clj item :keywordize-keys true)))})
                      ;;(reset-map-to-point #js{:lat (last (:location item)) :lng (first (:location (:location item)))} (:mapBox @state-app))
                      )}
                          ;; (reset-map-to-point feature latlng mapbox)
          [:div {:class "block relative min-h-24 w-full px-1"}
           [:picture {:class "block relative h-24 w-auto overflow-hidden"}
            (if (empty? (:image item))
              [:img {:class "bg-black h-full"
                     :src "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"}]
              [:img {:class "bg-black h-full"
                     :src (:image item)}])]
           [:h2 {:class "text-xs font-medium text-blue-600 text-left text-ellipsis overflow-hidden h-12"}
            (str (:name item))]
           ]])]
  )

(defn list-render [company]
    [:div {:class ""}
     [:h1 {:class "text-blue-600 font-medium"} company]
     [slick-slider-list company]])