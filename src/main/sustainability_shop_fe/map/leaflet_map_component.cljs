(ns sustainability-shop-fe.map.leaflet-map-component
  (:require ["leaflet" :as leaflet]
            [sustainability-shop-fe.state :refer [state-app]]
            [reagent.core :as reagent :refer [atom]]
            [reitit.frontend.easy :as rfe]
            [sustainability-shop-fe.map.map-utils :refer [includes-search-string]]
            ))


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

(def mapboxTilesStyle "https://api.mapbox.com/styles/v1/riittagirl/cks8vr8103eew17qp74zo52yr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmlpdHRhZ2lybCIsImEiOiJjamZkdzZ4MXYycnlkMnJudmxwb2x3Yzh0In0.5jCRD5YcqflEAuZqTUct9g")

(defn initialize-map [mapbox]
  (let [newTiles (leaflet/tileLayer
                  mapboxTilesStyle
                  #js {:maxZoom 18
                       :id "mapbox/streets-v89"
                       :tileSize 512
                       :zoomOffset -1})]
    (. mapbox (addEventListener "load" (fn []
                                    ;;      (when-not (empty? (:geoJsonData @state-app))
                                    ;; (when-not (empty? (.parse js/JSON (:geoJsonData @state-app)))
                                    ;;     (reset! state-app (assoc-in @state-app [:locationsInMap]
                                    ;;                                 (mapv ))
                                    ;;                                  (fn [feat]
                                    ;;                                    (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                    ;;                                                            (nth (. (. feat -geometry) -coordinates) 0))]
                                    ;;                                      (when (. (. mapbox getBounds)
                                    ;;                                               (contains
                                    ;;                                                f))
                                    ;;                                        feat)))
                                    ;;                                  (. (first (.parse js/JSON (:geoJsonData @state-app))) -features))))
                                )))
    (. mapbox (setView #js [60.1699, 24.9384] 13))
    (. newTiles (addTo mapbox))))

(defn initialize-geo [mapbox geoJsonData filtersList]
  (let [markers (leaflet/markerClusterGroup)
        ;; myIcon  (leaflet/divIcon #js {:className "my-div-icon"
        ;;                               :html " test "})
        geojsonLayer (leaflet/geoJson
                      (.parse js/JSON geoJsonData)
                       #js {
                           :pointToLayer
                           (fn [feature latlng]
                            ;;  #js {:icon myIcon}
                             (. markers
                                (addLayer
                                 (. (leaflet/marker latlng)
                                    (addEventListener "click"
                                                      (fn []
                                                        ;; TODO: figure out why reset-map-to-point does not work here
                                                        (. (:mapBox @state-app) (flyTo latlng))
                                                        ;; (reset-map-to-point #js{:lat 60.1699 :lng 24.9384} nil)
                                                        (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj feature :keywordize-keys true)))
                                                        (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj feature :keywordize-keys true)))})
                                                        (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj feature :keywordize-keys true)))})))))))


                           :filter (fn [feature]
                                  (let [filtersList filtersList
                                        featureItem (:properties (js->clj feature :keywordize-keys true))
                                        filteredItemByProperties? (every? true? 
                                          (mapv
                                           #(= ((keyword (:criteria %)) featureItem)
                                               (:value %))
                                           filtersList)
                                          )
                                        ]
                                    (and
                                         (do 
                                           (js/console.log "reset filteredItemByProperties?" (clj->js filteredItemByProperties?))
                                          filteredItemByProperties?)
                                        (if (clojure.string/blank? (:search-value @state-app))
                                          true
                                          (let [name (:name featureItem)
                                                address (:address featureItem)
                                                city (:city featureItem)]
                                            (if  (or
                                                  (when (not (nil? address))
                                                    (includes-search-string
                                                     address
                                                     (:search-value @state-app)))
                                                  (when (not (nil? city))
                                                    (includes-search-string
                                                     city
                                                     (:search-value @state-app)))
                                                  (includes-search-string
                                                   name
                                                   (:search-value @state-app)))
                                              true
                                              false)))))
                                    ;;  (if (:category @state-app)
                                    ;;   (if (= (:category @state-app) (:category (:properties (js->clj feature :keywordize-keys true))))
                                    ;;    (if (clojure.string/blank? (:search-value @state-app))
                                    ;;    true
                                    ;;    (let [name (:name (:properties (js->clj feature :keywordize-keys true)))
                                    ;;          address (:address (:properties (js->clj feature :keywordize-keys true)))
                                    ;;          city (:city (:properties (js->clj feature :keywordize-keys true)))]
                                    ;;      (if  (or
                                    ;;            (when (not (nil? address))
                                    ;;              (includes-search-string
                                    ;;               address
                                    ;;               (:search-value @state-app)))
                                    ;;            (when (not (nil? city))
                                    ;;              (includes-search-string
                                    ;;               city
                                    ;;               (:search-value @state-app)))
                                    ;;            (includes-search-string
                                    ;;             name
                                    ;;             (:search-value @state-app)))
                                    ;;        true
                                    ;;        false)))
                                    ;;     false
                                    ;;   )
                                    ;;     (if (clojure.string/blank? (:search-value @state-app))
                                    ;;       true
                                    ;;       (let [name (:name (:properties (js->clj feature :keywordize-keys true)))
                                    ;;             address (:address (:properties (js->clj feature :keywordize-keys true)))
                                    ;;             city (:city (:properties (js->clj feature :keywordize-keys true)))]
                                    ;;         (if  (or
                                    ;;               (when (not (nil? address))
                                    ;;                 (includes-search-string
                                    ;;                  address
                                    ;;                  (:search-value @state-app)))
                                    ;;               (when (not (nil? city))
                                    ;;                 (includes-search-string
                                    ;;                  city
                                    ;;                  (:search-value @state-app)))
                                    ;;               (includes-search-string
                                    ;;                name
                                    ;;                (:search-value @state-app)))
                                    ;;           true
                                    ;;           false))))
                                           )})]
    (reset! state-app (assoc-in @state-app [:global-geojsonLayer] geojsonLayer))
    (. geojsonLayer
       (addTo mapbox))))

(defn initialize-location-handling [mapbox]
  (let [control (L.Control.)
        BackToList  (. L.Control (extend #js{:onAdd (fn [map])
                                                      ;; (let [p (. L.DomUtil (create "p"))
                                                      ;;       text (. js/document (createTextNode "List"))
                                                      ;;       di (. p (appendChild text))

                                                      ;;       div (. p (addEventListener "click"
                                                      ;;                                  (fn []
                                                      ;;                                    (reset! mode "list")
                                                      ;;                                        ;; list
                                                      ;;                                    )))]
                                                      ;;   p)

                                             :onRemove (fn [map]
                                                         (js/console.log "onRemove"))}))
        MyGeolocation  (. L.Control (extend #js{:onAdd (fn [map]
                                                         (let [image (. L.DomUtil (create "img"))
                                                              ;; text (. js/document (createTextNode "Hi there and greetings!"))
                                                               di (. image (setAttribute "src" "/img/GroupS.png"))
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
                                                                                                                            latlng #js{:lat latitude :lng longitude}
                                                                                                                            accuracy (.. position -coords -accuracy)
                                                                                                                            myIcon  (leaflet/divIcon #js {:className "my-div-icon"
                                                                                                                                                          :html " test "})]

                                                                                                                        (when mapbox

                                                                                                                          (. (leaflet/marker latlng #js {:icon myIcon}) (addTo (:mapBox @state-app)))
                                                                                                                          (. mapbox (flyTo latlng)))))
                                                                                                                    (fn [e] e)
                                                                                                                    #js {:enableHighAccuracy true})))
                        ;; navigator.geolocation.getCurrentPosition (success, error);
                                                                                                  (js/console.log "Geolocation is not supported by your browser")))))]
                                                           image))
                                                :onRemove (fn [map]
                                                            (js/console.log "onRemove"))}))
        MyGeolocationControl (MyGeolocation.)]
        ;; BackToListControl (BackToList.)

    ;; (.. leaflet/control (locate) (addTo mapbox))
    (. (. mapbox -zoomControl) (setPosition "topright"))
    (..  MyGeolocationControl (setPosition "topright") (addTo mapbox))))
    ;; (..  BackToListControl (setPosition "topright") (addTo mapbox))
    ;; (. mapbox (addInitHook "addHandler" "gestureHandling" GestureHandling))

(defn initialize-features-in-view-selection [mapbox geoJsonData filtersList]
  (let [parsedData (.parse js/JSON geoJsonData)
        featuresData (. (first parsedData) -features)
        filtersList filtersList]
  (. mapbox (addEventListener "viewreset" (fn []
                              (when-not (empty? parsedData)
                                (reset! state-app (assoc-in @state-app [:locationsInMap]
                                                            (mapv
                                                              (fn [feat]
                                                                (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                                        (nth (. (. feat -geometry) -coordinates) 0))]
                                                                  (when (. (. mapbox getBounds)
                                                                           (contains
                                                                            f))
                                                                    (when (every? true?
                                                                                  (mapv
                                                                                   (fn [filter]
                                                                                     (=
                                                                                      ((keyword (:criteria filter)) (:properties (js->clj feat :keywordize-keys true)))
                                                                                      (:value filter)))
                                                                                   filtersList)) feat))))
                                                              featuresData)
                                                            ))))))
  (. mapbox (addEventListener "moveend" (fn []
                                          (when-not (empty? parsedData)
                                            (reset! state-app (assoc-in @state-app [:locationsInMap]
                                                             (mapv
                                                              (fn [feat]
                                                                (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                                        (nth (. (. feat -geometry) -coordinates) 0))]
                                                                  (when (. (. mapbox getBounds)
                                                                           (contains
                                                                            f))
                                                                    (when (every? true?
                                                                                  (mapv
                                                                                   (fn [filter]
                                                                                     (=
                                                                                      ((keyword (:criteria filter)) (:properties (js->clj feat :keywordize-keys true)))
                                                                                      (:value filter)))
                                                                                   filtersList)) feat))))
                                                              featuresData)))))))
  (. mapbox (addEventListener "zoomend" (fn []
                                          (when-not (empty? parsedData)
                                            (reset! state-app (assoc-in @state-app [:locationsInMap]
                                                                        (mapv
                                                                         (fn [feat]
                                                                           (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                                                   (nth (. (. feat -geometry) -coordinates) 0))]
                                                                             (when (. (. mapbox getBounds)
                                                                                      (contains
                                                                                       f))
                                                                               (when (every? true?
                                                                                             (mapv
                                                                                              (fn [filter]
                                                                                                (=
                                                                                                 ((keyword (:criteria filter)) (:properties (js->clj feat :keywordize-keys true)))
                                                                                                 (:value filter)))
                                                                                              filtersList)) feat))))
                                                                         featuresData)))))))))

(defn map-render [mapContainer height]
  (fn []
    [:div {:class "block w-full z-0"
           ;; "block absolute w-full top-0 z-0"
           :style {:height height}
           :id "mapid"
           :ref (fn [el]
                  (reset! mapContainer el))}]))

(defn map-component [_ _ _ _]
  (let [mapContainer (atom nil)]
    (reagent/create-class
     {:component-did-mount (fn []
                             (let [mapbox (leaflet/map "mapid" {:gestureHandling true})]
                               (initialize-map mapbox)
                               (initialize-location-handling mapbox)
                               (reset! state-app (assoc-in @state-app [:mapBox] mapbox))
                               (if-not (empty? (:geoJsonData @state-app))
                                 (do
                                   
                                   (initialize-geo (:mapBox @state-app) (:geoJsonData @state-app) (:filter @state-app))

                                   (initialize-features-in-view-selection (:mapBox @state-app) (:geoJsonData @state-app) (:filter @state-app)))
                                 (do
                                  (initialize-geo (:mapBox @state-app) yh (:filter @state-app))))))
                                ;;  (initialize-geo @mapBox @directionCol false)
      :component-did-update (fn []
                              ;; (if (:selectedLocation @state-app)
                              ;;    (.. (clj->js @mapContainer) -attributeStyleMap (set "height" "40vh"))
                              ;;    (.. (clj->js @mapContainer) -attributeStyleMap (set "height" "73.5vh")))

                              (. (:global-geojsonLayer @state-app) remove)
                              (initialize-geo (:mapBox @state-app) (:geoJsonData @state-app) (:filter @state-app))
                              (initialize-features-in-view-selection (:mapBox @state-app) (:geoJsonData @state-app) (:filter @state-app)))
      :reagent-render #(map-render mapContainer "80.5vh")})))