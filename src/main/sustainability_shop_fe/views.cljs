(ns sustainability-shop-fe.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [sustainability-shop-fe.ui :refer [h1 info]]
            [reagent.core :as reagent :refer [atom]]
            [sustainability-shop-fe.state :refer [state-app]]
            [sustainability-shop-fe.map-utils :refer [geojson-feature]]
            [reitit.frontend.easy :as rfe]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            ["react-slick" :as rs :default Slider]))


(defn slick-slider [slides]
  [(reagent/adapt-react-class Slider)
   {:slidesToShow 1
    :infinite true}
   (map
    (fn [s]
      [:div
       [:div {:class "bg-white h-full w-full px-3 py-16 block relative flex flex-col justify-end"}
        [:div {:class "w-full flex flex-row justify-between"}
         [:h1 {:class "text-8xl w-1/2 font-garamond font-extrabold italic text-blue-600 leading-none"}
          [:span {:class "block text-8xl w-full font-garamond font-extrabold italic text-blue-600 leading-none"} "Re"]
          (:name s)]
         [:div {:class "relative w-1/2 text-xl font-avenir-medium border-blue-600 h-6"}
          [:p  {:class "inline-block w-1/2 text-right pr-3 align-middle text-lg text-blue-600 float-left font-medium font-avenir-black"}
           "reduce"]
          [:img {:class "inline-block  w-1/2 align-middle float-left h-full"
                 :src "/img/arrow.svg"}]]]
        [:ul {:class "w-full mt-8"}
         (map
          (fn [l]
            [:li {:class "block border-t-2 border-solid border-blue-600 py-3"}
             [:a {:class "block w-full text-right font-medium text-xl text-blue-600 font-avenir-medium"
                  :onClick (fn [evt]
                            (reset! state-app (assoc-in @state-app [:category] (:link s)))
                             )
                  :href (str "/" (:link s))}
              l]])
          (:links s))]]])
    slides)])

;; -------------------------
;; Views

(defn navigation [{:keys [links]}]
  [:nav {:class "w-full relative px-3 pt-6 flex flex-row flex-no-wrap justify-between"}
   [:a {:class ""
        :href "/"} [:img.max-50 {:src "/img/menu.svg"}]]
   [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
        :href "/map"}
    "map"]
  ;;  [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
  ;;       :href "/add"}
  ;;   "add"]
   ])


(defn home-page [{:keys [links]} & children]
  [:div {:class "block relative bottom"}
  ;;  [h1 "seasons."]
  ;;  [info "
  ;;        Find your way to be sustainably fashionable. 
  ;;        Verified sustainabkle brands in Helsinki."]
   [slick-slider [{:id 1
                   :name "duce"
                   :link "reduce"
                   :links ["second hand" "flea markets" "vintage stores"]}
                  {:id 2
                   :name "use"
                   :link "reuse"
                   :links ["second hand" "flea markets" "vintage stores"]}
                  {:id 3
                   :name "pair"
                   :link "repair"
                   :links ["second hand" "flea markets" "vintage stores"]}
                  {:id 4
                   :name "cycle"
                   :link "recycle"
                   :links ["second hand" "flea markets" "vintage stores"]}]]
  ;;  [:ul.brands
  ;;   [:li {:key 0} [:a {:href "/map"} "eco-conscious brands"]]
  ;;   [:li {:key 1} [:a {:href "/vintage"} "vintage stores"]]
  ;;   [:li {:key 2} [:a {:href "/all"} "All"]]]
   ])

(defn brands-page [{:keys [brands]} & children]
  [:div.col-12
   [h1 "Brands"]
   [:div
    "This is verified sustainable brands"]])


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
     [h1 "Add Place"]
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