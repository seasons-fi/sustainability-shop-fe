(ns sustainability-shop-fe.add-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
            [reagent.core :as reagent :refer [atom]]
            [sustainability-shop-fe.state :refer [state-app]]
            [sustainability-shop-fe.map-utils :refer [geojson-feature]]
            [reitit.frontend.easy :as rfe]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

;; -------------------------
;; Views


(defn add-place-api [state-app]
  (go (let [response (<! (http/post "https://seasons-api.com/places"
                                ;; parameters
                                    {:with-credentials? false

                                     :json-params {:name "Domino"
                                                   :category "reduce"
                                                   :type "brand"
                                                   :address "\nYrjönkatu 34 \nHelsinki, 00100\n"
                                                   :location "[24.93669 60.16831]"
                                                   :places_id ""

                                                   :isActive true
                                                   :isOnline true
                                                   :isTemporary false
                                                   :isBrickAndMortar true

                                                   :city "Helsinki"
                                                   :country "Finland"

                                                   :company_name "Voglia"}}))]

        (let [places (:places @state-app)
              features (:features (first (js->clj places :keywordize-keys true)))
              newPlace (first (js->clj (. js/JSON (parse (:body response))) :keywordize-keys true))
              newPlaceToFeat (geojson-feature newPlace)
              newFeatures (conj features newPlaceToFeat)
              newPlacesGeojson (clj->js
                                [{:type "FeatureCollection"
                                  :features newFeatures}])]
          (reset! state-app (assoc-in @state-app [:places] newPlacesGeojson))
          (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj newPlaceToFeat :keywordize-keys true)))

          ;;  (let [latlng (leaflet/latLng (nth (. (. f -geometry) -coordinates) 1)
          ;;                                            (nth (. (. f -geometry) -coordinates) 0))]
          ;;                 (js/console.log "latlng" (clj->js latlng))
          ;;                 (reset-map-to-point latlng mapbox))
          ;;               (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))})
          ;;               (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))})

          (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id newPlace)})))))

(defn add-page []
  (let [formData (atom {:name nil
                        :category nil
                        :type nil
                        :address nil
                        :city "Helsinki"
                        :company nil})]
    [:div {:class "h-full"}
     [:h1 "Add Place"]
     [:form
      [:div
       [:input {:class "block w-full"
                :type "text"
                :placeholder "name"
                :on-change (fn [evt]
                             (reset! formData (assoc-in @formData [:name] (-> evt .-target .-value))))}]
       [:select {:class "block w-full"
                 :type "text"
                 :placeholder "category"
                 :on-change (fn [evt]
                              (reset! formData (assoc-in @formData [:category] (-> evt .-target .-value))))}

        [:option {:value "test"} "Test"]
        [:option {:value "test"} "Test 1"]
        [:option {:value "test"} "Test 2"]]
       [:input {:class "block w-full"
                :type "text"
                :placeholder "type"
                :on-change (fn [evt]
                             (reset! formData (assoc-in @formData [:type] (-> evt .-target .-value))))}]
       [:input {:class "block w-full"
                :type "text"
                :placeholder "address"
                :on-change (fn [evt]
                            ;;  (reset! search-value (-> evt .-target .-value))
                             )}]
       [:input {:class "block w-full"
                :type "text"
                :placeholder "city"
                :on-change (fn [evt]
                            ;;  (reset! search-value (-> evt .-target .-value))
                             )}]
       [:input {:class "block w-full"
                :type "text"
                :placeholder "company"
                :on-change (fn [evt]
                            ;;  (reset! search-value (-> evt .-target .-value))
                             )}]
       [:input {:class "block w-full"
                :type "text"
                :placeholder "location"
                :on-change (fn [evt]
                            ;;  (reset! search-value (-> evt .-target .-value))
                             )}]]]
     [:button {:type "button"
               :onClick (fn [e]
                          (. e preventDefault)
                          (js/console.log (clj->js @formData))
                          (add-place-api state-app))} "Submit"]]))