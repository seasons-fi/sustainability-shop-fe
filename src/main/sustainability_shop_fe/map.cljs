(ns sustainability-shop-fe.map
  (:require [sustainability-shop-fe.ui :refer [brand-modal]]
            [reagent.core :as reagent :refer [atom]]
            [sustainability-shop-fe.state :refer [state-app]]
            [sustainability-shop-fe.map-utils :refer [includes-search-string filter-locations]]
            ["leaflet" :as leaflet]
            [clojure.string :as str]
            ["leaflet.locatecontrol" :as leaflet.locatecontrol]
            ["leaflet.markercluster" :as leaflet.markercluster]
            ;; [alandipert.storage-atom :refer [local-storage]]
            [cognitect.transit :as t]
            [reitit.frontend.easy :as rfe]
            ["react-slick" :as rs :default Slider]))
  

 ;; https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson

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
(def global-geojsonLayer (reagent/atom nil))

(defn reset-map-to-point [latlng mapbox]
  (. mapbox (flyTo latlng 18)))

(defn initialize-map [mapbox]
  (let [newTiles (leaflet/tileLayer
                  mapboxTilesStyle
                  #js {:maxZoom 18
                       :id "mapbox/streets-v89"
                       :tileSize 512
                       :zoomOffset -1})]
    (. mapbox (addEventListener "load" (fn [])
                           
                                      (when-not (empty? (:geoJsonData @state-app))
                                       (do 
                                        (js/console.log "load 1" (clj->js (:geoJsonData @state-app)))
                                        (when-not (empty? (.parse js/JSON (:geoJsonData @state-app)))
                                           (do
                                            (js/console.log "load 2" (clj->js (:geoJsonData @state-app)))
                                            (reset! state-app (assoc-in @state-app [:locationsInMap] 
                                                                      (mapv))
                                                   (fn [feat]
                                                     (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                             (nth (. (. feat -geometry) -coordinates) 0))]
                                                       (when (. (. mapbox getBounds)
                                                                (contains
                                                                 f))
                                                         feat)))
                                                   (. (first (.parse js/JSON (:geoJsonData @state-app))) -features))))))))
                                        
                                       
    (. mapbox (setView #js [60.1699, 24.9384] 13))
    (. newTiles (addTo mapbox))))

(defn selected-location [selectedLocation geoJsonData]
  (reagent/create-class {:component-did-update (fn [selectedLocation geoJsonData]
                                               (when (and (:selectedLocationID @state-app) (:geoJsonData @state-app) (:mapBox @state-app))
                                                 (let [selectedLocationById
                                                       (nth
                                                        (:features (nth (js->clj
                                                                         (.parse js/JSON (:geoJsonData @state-app))
                                                                         :keywordize-keys true) 0)) (- (js/parseInt (:selectedLocationID @state-app)) 1))]
                                                  
                                                   (reset-map-to-point #js{:lat (last (:coordinates (:geometry selectedLocationById))) :lng (first (:coordinates (:geometry selectedLocationById)))} (:mapBox @state-app))
                                                   (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj selectedLocationById :keywordize-keys true))))))
                                                                        
                         :reagent-render (fn [selectedLocation geoJsonData]
                  
                                           (when selectedLocation
                                             [:div {:class "bg-white relative w-4/5 h-56 p-6 z-10 mx-auto block"}
                                              [:button {:onClick (fn []
                                                                   (reset! state-app (assoc-in @state-app [:selectedLocation] nil))
                                                                   (reset! state-app (assoc-in @state-app [:selectedLocationID] nil))
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
                                              ]))}))

                                           
                                                
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

(defn switch []
  [:div.row.switch
   [:button {:onClick (fn [] 
                        (reset! state-app (assoc-in @state-app [:mode] "list")))
             :type "button"
             :class (str "btn " (when-not (= (:mode @state-app) "map") "bold"))} "List"]
   "/"
   [:button {:onClick (fn [] 
                        (reset! state-app (assoc-in @state-app [:mode] "map")))
             :type "button"
             :class (str "btn " (when (= (:mode @state-app) "map") "bold"))} "Map (eco-friendly stores nearby)"]])


;; (defn initialize-location-handling [mapbox]
;;   (.. leaflet/control (locate) (addTo mapbox))
;;   (. L.Map (addInitHook "addHandler" "gestureHandling" GestureHandling)))

(defn slick-slider [locations-in-map-view mapbox search-value]
  [(reagent/adapt-react-class Slider)
   {:slidesToShow 1.5
    :infinite false}
  (if-not search-value
    (map
     (fn [f]
       [:div {:class "h-24 bg-white p-6 mr-3"
              :onClick (fn [evt]
                         (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj f :keywordize-keys true)))
                         (let [latlng (leaflet/latLng (nth (. (. f -geometry) -coordinates) 1)
                                                      (nth (. (. f -geometry) -coordinates) 0))]
                           (reset-map-to-point latlng mapbox))
                         (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))})
                         (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))}))}
        [:h2 {:class "text-xl font-medium text-blue-600"}
         (str (. (. f -properties) -name))]
        [:span (str (. (. f -properties) -city))]])
     locations-in-map-view))
    (do
     (js/console.log "filter" 
                    ;; (clj->js (:geoJsonData @state-app))
                    (clj->js (filter-locations
                              state-app
                              (. (first (.parse js/JSON (:geoJsonData @state-app))) -features))))
    (map
       (fn [f]
    [:div {:class "h-24 bg-white p-6 mr-3"
                :onClick (fn [evt]
                           (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj f :keywordize-keys true)))
                           (let [latlng (leaflet/latLng (nth (. (. f -geometry) -coordinates) 1)
                                                        (nth (. (. f -geometry) -coordinates) 0))]
                             (reset-map-to-point latlng mapbox))
                           (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))})
                           (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))}))}
          [:h2 {:class "text-xl font-medium text-blue-600"}
           (str (. (. f -properties) -name))]
    ;;      [:span (str (. (. f -properties) -city))]
     "text"
           ]
         )
       (filter-locations
        state-app
        (. (first (.parse js/JSON (:geoJsonData @state-app))) -features)))
     )
       ])
    
     




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
                                                        (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj feature :keywordize-keys true)))
                                                        (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj feature :keywordize-keys true)))})
                                                        (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj feature :keywordize-keys true)))})))))))
                            
                            ;;  (.. markers (bindPopup (:name (:properties
                            ;;                                  (js->clj feature :keywordize-keys true)))) openPopup)
                             
                          ;;  :onEachFeature (fn [feature featureLayer])
                           :filter (fn [feature]
                                     (if (clojure.string/blank? (:search-value @state-app))
                                       true
                                      ;;  (if (:category @state-app)
                                      ;;   (let [category (:category (:properties (js->clj feature :keywordize-keys true)))]
                                      ;;     (= category (:category @state-app)))
                                          
                                      ;;   true)
                                       (let [name (:name (:properties (js->clj feature :keywordize-keys true)))
                                             address (:address (:properties (js->clj feature :keywordize-keys true)))
                                             city (:city (:properties (js->clj feature :keywordize-keys true)))]
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
                                           false)))
                                           )})]
    (reset! global-geojsonLayer geojsonLayer)
    (. geojsonLayer
       (addTo mapbox))))

(defn initialize-features-in-view-selection [mapbox geoJsonData]
  (. mapbox (addEventListener "viewreset" (fn [])
                                          
                                          (when-not (empty? (.parse js/JSON geoJsonData))
                                           (reset! state-app (assoc-in @state-app [:locationsInMap] 
                                                                      (mapv
                                                                       (fn [feat]
                                                                         (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                                                 (nth (. (. feat -geometry) -coordinates) 0))]
                                                                           (when (. (. mapbox getBounds)
                                                                                    (contains
                                                                                     f))
                                                                             feat)))
                                                                       (. (first (.parse js/JSON geoJsonData)) -features)))))))
                                          
                                          

  (. mapbox (addEventListener "moveend" (fn []
                                          
                                          (when-not (empty? (.parse js/JSON geoJsonData))
                                           (reset! state-app (assoc-in @state-app [:locationsInMap] 
                                                                      (mapv
                                                                       (fn [feat]
                                                                         (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                                                 (nth (. (. feat -geometry) -coordinates) 0))]
                                                                           (when (. (. mapbox getBounds)
                                                                                    (contains
                                                                                     f))
                                                                             feat)))
                                                                       (. (first (.parse js/JSON geoJsonData)) -features))))))))
                                          
                                          
  (. mapbox (addEventListener "zoomend" (fn []
                                          
                                          (when-not (empty? (.parse js/JSON geoJsonData))
                                           (reset! state-app (assoc-in @state-app [:locationsInMap] 
                                                                      (mapv
                                                                       (fn [feat]
                                                                         (let [f (leaflet/latLng (nth (. (. feat -geometry) -coordinates) 1)
                                                                                                 (nth (. (. feat -geometry) -coordinates) 0))]
                                                                           (when (. (. mapbox getBounds)
                                                                                    (contains
                                                                                     f))
                                                                             feat)))
                                                                       (. (first (.parse js/JSON geoJsonData)) -features)))))))))
                                          
                                          


(defn map-render [mapContainer height]
  (fn []
    [:div {:class "relative top-0 z-0"
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
                                        (.parse js/JSON (:geoJsonData @state-app))
                                        :keywordize-keys true) 0))]
              ^{:key (clj->js (:id (:properties item)))}
              [:div.col-12.col-sm-6.col-md-4.col-lg-3
               [:button.item-btn
                {:onClick (fn []
                            (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj item))))}
                            
                          ;; (reset-map-to-point feature latlng mapbox)
                            
                (brand-modal item)]])])))



;; (defn turn-realtime-db-to-geojson [flat-data]
;;   (clj->js
;;    [{:type "FeatureCollection"
;;      :features (map (fn [i]
;;                       {:type "Feature"
;;                        :properties {:id (:id i)
;;                                     :name (:name i)
;;                                     :country (:country i)
;;                                     :city (:city i)
;;                                     :address (:address i)
;;                                     :location (:location i)
;;                                     :isBrickAndMortar (:isBrickAndMortar i)
;;                                     :hours (:hours i)
;;                                     :phone (:phone i)
;;                                     :image (:image i)
;;                                     :website (:website i)
;;                                     :design (:design i)
;;                                     :production (:production i)
;;                                     :materials (:materials i)
;;                                     :tags (:tags i)
;;                                     :keys (keys i)}
;;                        :geometry {:type "Point"
;;                                   :coordinates [(:long i)
;;                                                 (:lat i)]}})
;;                     (sort-by :name #(compare (. %1 toLowerCase) (. %2 toLowerCase))
;;                              (map (fn [i] (nth i 1))
;;                                   (filter (fn [i] (when (and (map? (nth i 1)) (:name (nth i 1)))
;;                                                     (nth i 1)))
;;                                           (js->clj  flat-data :keywordize-keys true)))))}]))




(defn list-of-brands []
  (reagent/create-class {:reagent-render list-render}))


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
                                                                                                                            latlng #js {:lat latitude :lng longitude}
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
    

(defn map-component [_ _ _]
  (let [mapContainer (atom nil)]
    (reagent/create-class
     {:component-did-mount (fn []
                             (let [mapbox (leaflet/map "mapid" {:gestureHandling true})]
                               (initialize-map mapbox)
                               (initialize-location-handling mapbox)
                               (reset! state-app (assoc-in @state-app [:mapBox] mapbox))
                               (if-not (empty? (:geoJsonData @state-app))
                                 (do
                                   (initialize-geo (:mapBox @state-app) (:geoJsonData @state-app))
                                   
                                   (initialize-features-in-view-selection (:mapBox @state-app) (:geoJsonData @state-app)))
                                 (initialize-geo (:mapBox @state-app) yh))))
                                ;;  (initialize-geo @mapBox @directionCol false)
                               
      :component-did-update (fn []
                              (js/console.log "map component did-update" (clj->js @mapContainer) (clj->js (:selectedLocation @state-app)))
                              ;; (if (:selectedLocation @state-app)
                              ;;    (.. (clj->js @mapContainer) -attributeStyleMap (set "height" "40vh"))
                              ;;    (.. (clj->js @mapContainer) -attributeStyleMap (set "height" "73.5vh")))

                              (. @global-geojsonLayer remove)
                              (initialize-geo (:mapBox @state-app) (:geoJsonData @state-app))
                              (initialize-features-in-view-selection (:mapBox @state-app) (:geoJsonData @state-app)))
                              
                              
      :reagent-render #(map-render mapContainer "68.5vh")})))

(defn breadcrumbs [path]
  (js/console.log "incl" (str path) (clojure.string/includes? (str path) "map"))
  [:div {:class "w-full block relative text-xl font-medium text-blue-600"}
   (str (cond
       (clojure.string/includes? (str path) "map") "Map"
       (clojure.string/includes? (str path) "reduce") "Reduce"
      :default "All")
        "/"
   (cond
     (clojure.string/includes? (str path) "second hand") "second hand"
     (clojure.string/includes? (str path) "vintage") "Vintage"
     (clojure.string/includes? (str path) "flea") "Flea market"
     :default ""))
   (when (clojure.string/includes? (str path) "reduce")
     [:span {:class "text-right float-right"} "reuse ->"])])

(defn map-page [match state-app]
  (let [locations-in-map-view (filter-locations state-app (:locationsInMap @state-app))
         id (:id (:path-params match))]
    
    ;; (case
    ;;    (clojure.string/includes? (str (:path (:match @state-app))) "map") "Map"
    ;;    (clojure.string/includes? (str (:path (:match @state-app))) "reduce") "Reduce"
    ;;    :else "All")
    [:<>
     (breadcrumbs (:path (:match @state-app)))
     
     [:div {:class "block relative h-full"} 
      
      (if  (= (:mode @state-app) "map")
           [:<>
            [map-component (:geoJsonData @state-app) (:search-value @state-app) (:selectedLocation @state-app)]
            [:div {:class "w-full relative -top-10 h-36"}
             (when-not (or (empty? locations-in-map-view) (:selectedLocation @state-app) (empty? (:geoJsonData @state-app)))
              [:div {:class "h-24 z-10"}
               [slick-slider locations-in-map-view (:mapBox @state-app) (:search-value @state-app)]])
             [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)]
             [:input {:class " block absolute w-full h-10 border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium mt-3 z-50 bg-white bottom-0"
                     :type "text"
                    ;; :value @search-value
                     :on-change (fn [evt]
                                  (try
                                    (. (:mapBox @state-app) (fitBounds (. @global-geojsonLayer getBounds)) )
                                    (throw (js/Error. "Oops"))
                                    (catch :default e
                                      e))
                                  ;; (. (:mapBox @state-app) (setZoom 12))
                                  (reset! state-app (assoc-in @state-app [:search-value] (-> evt .-target .-value))))}]
            ]]
        
        [list-of-brands (map (:geoJsonData @state-app))])]]))
        
      
    
    
;;     (when id
;;       (reset! state-app (assoc-in @state-app [:selectedLocationID] id)))
    
;;     [:<>
;;     ;;  
;;     ;;  [switch]


;;                                 ;; (reset-map-to-point @mapBox)
                                 
;;          [list-of-brands (map (:geoJsonData @state-app))])]]]
               ;; [:div {:class "absolute block w-full bottom-0 h-40"}
          

          ;;  
          ;;  ]