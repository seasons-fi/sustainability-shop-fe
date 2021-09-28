(ns sustainability-shop-fe.map
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [sustainability-shop-fe.ui :refer [brand-modal]]
            ;; [sustainability-shop-fe.routes :refer [routes]]
            [reagent.core :as reagent :refer [atom]]
            [sustainability-shop-fe.openroute :refer [directionCol]]
            [sustainability-shop-fe.state :refer [state-app]]
            [sustainability-shop-fe.map-utils :refer [includes-search-string]]
            ["leaflet" :as leaflet]
            ["leaflet.locatecontrol" :as leaflet.locatecontrol]
            ["leaflet.markercluster" :as leaflet.markercluster]
            [cljs-http.client :as http]
            [alandipert.storage-atom :refer [local-storage]]
            [cognitect.transit :as t]
            [cljs.core.async :refer [<!]]
            [reitit.frontend.easy :as rfe]
            ["react-slick" :as rs :default Slider])
  (:use [jayq.core :only [$ css html]]))

 ;; https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson

;; (def r (t/reader :json))
(def yh "[{
  \"type\": \"FeatureCollection\",
  \"features\": [
    {
      \"type\": \"Feature\",
      \"properties\": {
        \"name\": \"Test\"
      },
      \"geometry\": {
        \"type\": \"Point\",
        \"coordinates\": [
          24.9384, 60.1699 
        ]
      }
    }
  ]
}]")

;; (when @selectedLocation
;;   (reset-map-to-point @selectedLocation #js {:lat (nth (:coordinates (:geometry @selectedLocation)) 1)
;;                                              :lng (nth (:coordinates (:geometry @selectedLocation)) 0)} selectedLocation)
;;   )

(def geoJsonData (atom []))
(def mapBox (atom nil))
(def selectedLocation (atom (:selectedLocation @state-app)))
(def allLocations (local-storage (atom []) :allLocations))
(def locationsInMap (atom []))
(def search-value (reagent/atom ""))
(def mode (atom "map"))

(def mapboxTilesStyle "https://api.mapbox.com/styles/v1/riittagirl/cks8vr8103eew17qp74zo52yr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmlpdHRhZ2lybCIsImEiOiJjamZkdzZ4MXYycnlkMnJudmxwb2x3Yzh0In0.5jCRD5YcqflEAuZqTUct9g")

(defn initialize-map [mapbox]
  (let [newTiles (leaflet/tileLayer
                  mapboxTilesStyle
                  #js {:maxZoom 18
                       :id "mapbox/streets-v89"
                       :tileSize 512
                       :zoomOffset -1})]
    (. mapbox (setView #js [60.1699, 24.9384] 13))
    (. newTiles (addTo mapbox))))

(defn selected-location [selectedLocation selectedLocationR]
  (reagent/create-class {:component-did-update (fn []
                                                ;;  (js/console.log "smallMapContainer" @smallMapContainer)
                                                ;;  (initialize-map (leaflet/map "smallmapid"))
                                                 )
                         :reagent-render (fn [selectedLocation selectedLocationR]
                                           (when selectedLocation

                                             [:div {:class "bg-white relative w-4/5 h-56 p-6 z-10 mx-auto block"}
                                              [:button {:onClick (fn []
                                                                   (reset! selectedLocationR nil)
                                                                   (rfe/href (keyword "sustainability-shop-fe.routes" "map") {})
                                                                   (rfe/push-state (keyword "sustainability-shop-fe.routes" "map") {}))
                                                        :type "button"
                                                        :class "btn btn-dark"
                                                        :data-dismiss "modal"
                                                        :aria-label "Close"} "Close"]
                                              ;; [:img {:class "card-img-top"
                                              ;;        :src (if (not (clojure.string/blank? (:image (:properties selectedLocation))))
                                              ;;               (:image (:properties selectedLocation))
                                              ;;               "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80")}]

                                              [:div
                                               (:id (:properties selectedLocation))
                                               [:h2 {:class "text-xl font-medium text-blue-600"}
                                                (:name (:properties selectedLocation))]]
                                              ;; [:ul.list-group.list-group-flush
                                              ;;  [:li.list-group-item (:website (:properties selectedLocation))]
                                              ;; ;;  [:li.list-group-item [:div {:id "smallmapid"
                                              ;; ;;                              :ref (fn [el]
                                              ;; ;;                                     (js/console.log el)
                                              ;; ;;                                     (reset! smallMapContainer el))}]]
                                              ;;  [:li.list-group-item (:phone (:properties selectedLocation))]
                                              ;;  [:li.list-group-item [:<>
                                              ;;                        (:address (:properties selectedLocation))
                                              ;;                        [:br]
                                              ;;                        (:city (:properties selectedLocation))
                                              ;;                        [:br]
                                              ;;                        (:country (:properties selectedLocation))]]
                                              ;;  [:li.list-group-item (:hours (:properties selectedLocation))]]
                                              ]))}))

;; (defn locations-in-search [search-value geoJsonData]
;;   (if-not (empty? (.parse js/JSON @geoJsonData))
;;     (.stringify js/JSON (clj->js (filter
;;                                   #(clojure.string/includes?
;;                                     (:name (:properties (js->clj % :keywordize-keys true)))
;;                                     search-value)
;;                                   (filter
;;                                    #(not (nil? %))
;;                                    (. (first (.parse js/JSON @geoJsonData)) -features)))))
;;     []))

(defn switch [mode modeR]
  [:div.row.switch
   [:button {:onClick (fn [] (reset! mode "list"))
             :type "button"
             :class (str "btn " (when-not (= modeR "map") "bold"))} "List"]
   "/"
   [:button {:onClick (fn [] (reset! mode "map"))
             :type "button"
             :class (str "btn " (when (= modeR "map") "bold"))} "Map (eco-friendly stores nearby)"]])

(add-watch allLocations
           :new
           (fn [_ _ _ v]
             ;; (.log js/console "new preference" v)
             ))

(defn reset-map-to-point [latlng mapbox]
  (. mapbox (flyTo latlng 18)))

(defn fetch-link! []
  (go (reset! geoJsonData
              (js->clj (:body
                        (<! (http/get "https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson"
                                      {:with-credentials? false})))))))


;; (defn initialize-location-handling [mapbox]
;;   (.. leaflet/control (locate) (addTo mapbox))
;;   (. L.Map (addInitHook "addHandler" "gestureHandling" GestureHandling)))

(defn slick-slider [locations-in-map-view mapbox]
  [(reagent/adapt-react-class Slider)
   {:slidesToShow 1.5
    :infinite false}
   (map
    (fn [f]
      [:div {:class "h-24 bg-white p-6 mr-3"
             :onClick (fn [evt]
                        (reset! selectedLocation (js->clj f :keywordize-keys true))


                        (let [latlng (leaflet/latLng (nth (. (. f -geometry) -coordinates) 1)
                                                     (nth (. (. f -geometry) -coordinates) 0))]
                          (js/console.log "latlng" (clj->js latlng))
                          (reset-map-to-point latlng mapbox))
                        (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))})
                        (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))}))}
       [:h2 {:class "text-xl font-medium text-blue-600"}
        (str (. (. f -properties) -name))]
       [:span (str (. (. f -properties) -city))]])
    locations-in-map-view)])

(def global-geojsonLayer (reagent/atom nil))


(defn initialize-geo [mapbox geoJsonData]
  (let [markers (leaflet/markerClusterGroup)
        ;; myIcon  (leaflet/divIcon #js {:className "my-div-icon"
        ;;                               :html " test "})
        geojsonLayer (leaflet/geoJson
                      (.parse js/JSON geoJsonData)
                      #js {:pointToLayer
                           (fn [feature latlng]
                            ;;  #js {:icon myIcon}
                             (. markers
                                (addLayer
                                 (. (leaflet/marker latlng)
                                    (addEventListener "click"
                                                      (fn []

                                                        (reset-map-to-point latlng mapbox)
                                                        (reset! selectedLocation (js->clj feature :keywordize-keys true))
                                                        (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj feature :keywordize-keys true)))})
                                                        (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj feature :keywordize-keys true)))}))))))
                            ;;  (js/console.log (:name (:properties
                            ;;                          (js->clj feature :keywordize-keys true))))
                            ;;  (.. markers (bindPopup (:name (:properties
                            ;;                                  (js->clj feature :keywordize-keys true)))) openPopup)
                             )
                          ;;  :onEachFeature (fn [feature featureLayer])
                           :filter (fn [feature]
                                     (if (clojure.string/blank? @search-value)
                                       true
                                       (let [name (:name (:properties (js->clj feature :keywordize-keys true)))
                                             address (:address (:properties (js->clj feature :keywordize-keys true)))
                                             city (:city (:properties (js->clj feature :keywordize-keys true)))]
                                         (when  (or
                                                 (includes-search-string
                                                  address
                                                  @search-value)
                                                 (includes-search-string
                                                  city
                                                  @search-value)
                                                 (includes-search-string
                                                  name
                                                  @search-value))
                                           true)))
                                      ;;  (when (not (nil? feature))
                                      ;;      true))
                                    ;;   (when (clojure.string/includes? 
                                    ;; (:name (:properties (js->clj feature :keywordize-keys true)))
                                    ;; @search-value
                                    ;; )
                                    ;; true
                                    ;; )
                                     )})]
    (js/console.log "layer" (clj->js geojsonLayer))
    (reset! global-geojsonLayer geojsonLayer)
    (. geojsonLayer
       (addTo mapbox))))

 ;; (reset! locationsInMap
  ;;         (mapv
  ;;          (fn [feat]
  ;;            (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
  ;;                                    (nth (. (. feat -geometry) -coordinates) 0))]
  ;;              (when (. (. mapbox getBounds)
  ;;                       (contains
  ;;                        f))
  ;;                feat)))
  ;;          (. (first (.parse js/JSON geoJsonData)) -features)))

(defn initialize-features-in-view-selection [mapbox geoJsonData]
  (. mapbox (addEventListener "moveend" (fn []
                                          (reset! locationsInMap
                                                  (mapv
                                                   (fn [feat]
                                                     (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                             (nth (. (. feat -geometry) -coordinates) 0))]
                                                       (when (. (. mapbox getBounds)
                                                                (contains
                                                                 f))
                                                         feat)))
                                                   (. (first (.parse js/JSON geoJsonData)) -features))))))
  (. mapbox (addEventListener "zoomend" (fn []
                                          (reset! locationsInMap
                                                  (mapv
                                                   (fn [feat]
                                                     (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                             (nth (. (. feat -geometry) -coordinates) 0))]
                                                       (when (. (. mapbox getBounds)
                                                                (contains
                                                                 f))
                                                         feat)))
                                                   (. (first (.parse js/JSON geoJsonData)) -features)))))))


(defn map-render [mapContainer height]
  (fn []
    [:div {:class "absolute top-0 z-0"
           :style {:height height}
           :id "mapid"
           :ref (fn [el]
                  (reset! mapContainer el))}]))

(defn list-render []
  (let [listContainer (atom nil)]
    (fn [] [:div.row {:id "listid"
                      :ref (fn [el]
                             (reset! listContainer el))}
            (for [item (:features (nth (js->clj
                                        (.parse js/JSON @geoJsonData)
                                        :keywordize-keys true) 0))]
              ^{:key (clj->js (:id (:properties item)))}
              [:div.col-12.col-sm-6.col-md-4.col-lg-3
               [:button.item-btn
                {:onClick (fn []
                            (reset! selectedLocation (js->clj item))
                          ;; (reset-map-to-point feature latlng mapbox)
                            )}
                (brand-modal item)]])])))



(defn turn-realtime-db-to-geojson [flat-data]
  (clj->js
   [{:type "FeatureCollection"
     :features (map (fn [i]
                      {:type "Feature"
                       :properties {:id (:id i)
                                    :name (:name i)
                                    :country (:country i)
                                    :city (:city i)
                                    :address (:address i)
                                    :location (:location i)
                                    :isBrickAndMortar (:isBrickAndMortar i)
                                    :hours (:hours i)
                                    :phone (:phone i)
                                    :image (:image i)
                                    :website (:website i)
                                    :design (:design i)
                                    :production (:production i)
                                    :materials (:materials i)
                                    :tags (:tags i)
                                    :keys (keys i)}
                       :geometry {:type "Point"
                                  :coordinates [(:long i)
                                                (:lat i)]}})
                    (sort-by :name #(compare (. %1 toLowerCase) (. %2 toLowerCase))
                             (map (fn [i] (nth i 1))
                                  (filter (fn [i] (when (and (map? (nth i 1)) (:name (nth i 1)))
                                                    (nth i 1)))
                                          (js->clj  flat-data :keywordize-keys true)))))}]))




(defn list-of-brands []
  (reagent/create-class {:reagent-render list-render}))


(defn initialize-location-handling [mapbox]
  (let [control (L.Control.)
        BackToList  (. L.Control (extend #js{:onAdd (fn [map]
                                                      (let [p (. L.DomUtil (create "p"))
                                                            text (. js/document (createTextNode "List"))
                                                            di (. p (appendChild text))

                                                            div (. p (addEventListener "click"
                                                                                       (fn []
                                                                                         (reset! mode "list")
                                                                                             ;; list
                                                                                         )))]
                                                        p))
                                             :onRemove (fn [map]
                                                         (js/console.log "onRemove"))}))
        MyGeolocation  (. L.Control (extend #js{:onAdd (fn [map]
                                                         (let [image (. L.DomUtil (create "img"))
                                                              ;; text (. js/document (createTextNode "Hi there and greetings!"))
                                                               di (. image (setAttribute "src" "./img/GroupS.png"))
                                                               bi (. image (setAttribute "width" "30px"))
                                                               bii (. image (setAttribute "height" "30px"))
                                                               div (. image (addEventListener "click"
                                                                                              (fn []
                                                                                                (if (. js/navigator -geolocation)
                                                                                                  (let [geolocation (. js/navigator -geolocation)]
                                                                                                    (. geolocation (getCurrentPosition
                                                                                                                    (fn [position]
                                                                                                                      (let [latitude (.. position -coords -latitude)
                                                                                                                            longitude (.. position -coords -longitude)
                                                                                                                            latlng #js {:lat latitude :lng longitude}
                                                                                                                            accuracy (.. position -coords -accuracy)
                                                                                                                            myIcon  (leaflet/divIcon #js {:className "my-div-icon"
                                                                                                                                                          :html " test "})]

                                                                                                                        (when mapbox

                                                                                                                          (. (leaflet/marker latlng #js {:icon myIcon}) (addTo @mapBox))
                                                                                                                          (. mapbox (flyTo latlng)))))
                                                                                                                    (fn [e] e)
                                                                                                                    #js {:enableHighAccuracy true})))
                        ;; navigator.geolocation.getCurrentPosition (success, error);
                                                                                                  (js/console.log "Geolocation is not supported by your browser")))))]
                                                           image))
                                                :onRemove (fn [map]
                                                            (js/console.log "onRemove"))}))
        MyGeolocationControl (MyGeolocation.)
        BackToListControl (BackToList.)]
    ;; (.. leaflet/control (locate) (addTo mapbox))
    (. (. mapbox -zoomControl) (setPosition "topright"))
    (..  MyGeolocationControl (setPosition "topright") (addTo mapbox))
    (..  BackToListControl (setPosition "topright") (addTo mapbox))
    ;; (. mapbox (addInitHook "addHandler" "gestureHandling" GestureHandling))
    ))

(defn map-component [_ _ selectedLocation]
  (let [mapContainer (atom nil)]
    (reagent/create-class
     {:component-did-mount (fn []
                             (reset! geoJsonData (.stringify js/JSON (:places @state-app)))
                             (let [mapbox (leaflet/map "mapid" {:gestureHandling true})]
                               (reset! mapBox mapbox)
                               (initialize-map mapbox)
                               (initialize-location-handling mapbox)
                               (js/console.log "component-did-mount" (.parse js/JSON @geoJsonData))

                               (if-not (empty? @geoJsonData)
                                 (do
                                   (initialize-geo  @mapBox @geoJsonData)
                                   (initialize-features-in-view-selection @mapBox @geoJsonData))
                                 (initialize-geo @mapBox yh))

                                ;;  (initialize-geo @mapBox @directionCol false)
                               ))
      :component-did-update (fn []
                              (js/console.log "component-did-update"
                                              (.. (clj->js @mapContainer) -attributeStyleMap (get "height"))
                                              (.parse js/JSON @geoJsonData))

                              (if @selectedLocation
                                (.. (clj->js @mapContainer) -attributeStyleMap (set "height" "40vh"))
                                (.. (clj->js @mapContainer) -attributeStyleMap (set "height" "65vh")))

                            ;; (if-not (clojure.string/blank? @search-value)
                            ;;   (do
                            ;;     ;; remove old layer
                            ;;     (js/console.log (clj->js @mapBox) (clj->js (locations-in-search @search-value)))

                            ;;     ;; (initialize-geo @mapBox (locations-in-search @search-value) true)
                            ;;     )
                            ;; (do 
                            ;;     (initialize-features-in-view-selection @mapBox @geoJsonData))
                              (js/console.log "@mapBox" (clj->js @mapBox))
                              (. @global-geojsonLayer remove)

                              (do
                                (initialize-geo @mapBox @geoJsonData)
                                (initialize-features-in-view-selection @mapBox @geoJsonData))
                                ;; (initialize-geo @mapBox @directionCol false)
                              )
      :reagent-render #(map-render mapContainer "65vh")})))

(defn filter-locations [locations]
  (if (clojure.string/blank? @search-value)
    (filter
     #(not (nil? %))
     locations)

    (filter
     (fn [l]
       (let [name (:name
                   (:properties
                    (js->clj l :keywordize-keys true)))
             city (:city
                   (:properties
                    (js->clj l :keywordize-keys true)))
             address (:address
                      (:properties
                       (js->clj l :keywordize-keys true)))
             tags (:tags
                   (:properties
                    (js->clj l :keywordize-keys true)))]
         (or
          (includes-search-string
           address
           @search-value)
          (includes-search-string
           city
           @search-value)
          (includes-search-string
           tags
           @search-value)
          (includes-search-string
           name
           @search-value))))
     (filter
      #(not (nil? %))
      locations))))

(defn map-page [match state-app]
  (let [locations-in-map-view (filter-locations @locationsInMap)]
    [:div {:class "block relative py-16 h-full"}
     [switch mode @mode]
     [:div {:class "block relative h-full"}
      (if  (= @mode "map")
        [:<>
         [map-component (map @geoJsonData) @search-value selectedLocation]
         [:div {:class "absolute block w-full bottom-6"}
          (when-not (or (empty? locations-in-map-view) @selectedLocation)
            [:div {:class "h-24 z-10"}
             [slick-slider locations-in-map-view @mapBox]])

          [selected-location @selectedLocation selectedLocation]
          [:input {:class " block absolute w-full h-10 border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium mt-3 z-50 bg-white"
                   :type "text"
                  ;; :value @search-value
                   :on-change (fn [evt]
                                (reset! search-value (-> evt .-target .-value))

                                ;; reset-map-to-point
                                ;; (reset-map-to-point @mapBox)

                                ;; (when-not (clojure.string/blank? @search-value)
                                ;; ;;  (js/console.log
                                ;; ;;   (clj->js locations-in-map-view)
                                ;; ;;   (clj->js (locations-in-search @search-value))
                                ;; ;;   (clj->js @search-value))
                                ;;  ;; trigger search
                                ;;   )
                              ;; change on search query
                                )}]]]
        [list-of-brands (map @geoJsonData)])]]))

(defn drawmap [snapshot]
  (reset! geoJsonData (.stringify js/JSON (turn-realtime-db-to-geojson (.val snapshot)))))