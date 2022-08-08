(ns sustainability-shop-fe.map-page
  (:require [sustainability-shop-fe.map.map-ui :refer [breadcrumbs slick-slider-map map-slide map-slide-search selected-location search-results]]
            [sustainability-shop-fe.map.map-utils :refer [filter-locations-by-search includes-search-string]]
            [sustainability-shop-fe.map.leaflet-map-component :refer [map-component]]
            [sustainability-shop-fe.filters :refer [filterLabel filterComponent filteredList fullFilters]]
            [sustainability-shop-fe.navigation :refer [navigation]]
            [sustainability-shop-fe.grid :refer [grid-wrapper grid-item ]]
            [sustainability-shop-fe.state :refer [state-app reset-logger]]
            [reitit.frontend.easy :as rfe]
            ["leaflet" :as leaflet] 
            ["react" :as react]
            [sustainability-shop-fe.mode :refer [modeSwitch]]
            ;; [sustainability-shop-fe.search :refer [search-input]]
            ))

(defn reset-map-to-point [latlng _]
  (. (:mapBox @state-app) (flyTo latlng 18)))

(defn grip-map-item [propertiesJS]
  (do
    (js/console.log "propertiesJS" propertiesJS )
   [:<>
    
   [:div {:class "relative block w-full h-36 shadow bg-gray-300"
           :style #js {:backgroundImage (str "url('" (. propertiesJS -image) "')")}}]
    [:h2 {:class "text-xl font-medium text-blue-600"} (str (. propertiesJS -name))]
    [:address {:class "text-md font-medium text-blue-600"} 
     (str (. propertiesJS -address) "  , " (. propertiesJS -city) ", "  (. propertiesJS -country))]]))

(defn grid-map-slide [f mapbox]
  (let [featureClj (js->clj f :keywordize-keys true)
        featureJS f
        propertiesClj (js->clj (. f -properties) :keywordize-keys true)
        propertiesJS (. featureJS -properties)]
   [:article  {:class "relative block w-30 h-auto overflow-hidden"
               :key {:id featureJS}
               :onClick (fn [evt]
                          (reset! state-app (assoc-in @state-app [:selectedLocation] featureClj))
                          (let [latlng (leaflet/latLng (nth (. (. featureJS -geometry) -coordinates) 1)
                                                       (nth (. (. featureJS -geometry) -coordinates) 0))]
                            (reset-map-to-point latlng mapbox))
                          (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties featureClj))})
                          (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties featureClj))}))}
    [grip-map-item propertiesJS]]))

(defn locations-in-map [locations-in-map-view mapbox]
  [:<> 
   [:h2 {:class "text-blue-600 font-medium font-avenir-medium"} "Items in map: " (count locations-in-map-view)]
   [:div {:class "relative grid grid-cols-1 md:grid-cols-2  gap-6 grid-simple"}
     (map
      (fn [f]
        [grid-map-slide f mapbox])
      locations-in-map-view)]])


(defn map-page [match state-app]
  (let [locations-in-map-view (filter-locations-by-search state-app (:locationsInMap @state-app))
        emptySearchValue (or (clojure.string/blank? (:search-value @state-app)) (empty? (:search-value @state-app)))]
    ;; (react/useEffect (fn []
    ;;                       (js/console.log "yay")
    ;;                       ;; (when (or (empty? locations-in-map-view) (:selectedLocation @state-app) (empty? (:geoJsonData @state-app)))
    ;;                       ;;   (when (:mapBox @state-app)
    ;;                       ;;     ((:mapBox @state-app) (setZoom 13))))
    ;;                       ) nil)
    [:<> 
     [navigation]
     [:div {:class "px-3 md:px-12"}
      [fullFilters state-app emptySearchValue (filteredList state-app (:list @state-app))]
     [:<>
      (if  (= (:mode @state-app) "map")
        
         [:div {:class "block relative grid grid-cols-1 md:grid-cols-2 gap-6"}
         [map-component "80.5vh" (:geoJsonData @state-app) (:search-value @state-app) (:selectedLocation @state-app) (:filter @state-app)]
         (when-not (or (empty? locations-in-map-view) (:selectedLocation @state-app) (empty? (:geoJsonData @state-app)))
           [:<>
            [:div {:class "block md:hidden relative w-full -top-60 super-z"}
             [slick-slider-map locations-in-map-view (:mapBox @state-app) (:search-value @state-app)]
               ;; (reset-logger state-app "selectedLocation" (js->clj (first (search-results)) :keywordize-keys true) "reset selectedLocation")
               ;;(reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj (first (search-results)) :keywordize-keys true)))
              ;; ;; (when (:selectedLocation @state-app)
              ;; ;;      [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)])

              ;; ;;  (do
              ;;    (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj (first (search-results)) :keywordize-keys true)))
              ;;   ;;  (when (:selectedLocation @state-app)
              ;;   ;;    [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)])
              ;;     ;; (when (:selectedLocation @state-app)
              ;;     ;;   [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)])
              ;;   ;;  [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)]
             ]
            [:div {:class "hidden md:block relative w-full overflow-scroll"
                   :style #js {:height "80.5vh"}}
             [locations-in-map locations-in-map-view (:mapBox @state-app)]
             [:p "Interact with the map to get place"]
              ;;  (do
              ;;    (swap! state-app (assoc-in @state-app [:selectedLocation] (js->clj (first (search-results)) :keywordize-keys true)))
              ;;    ;; [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)] 
              ;;    ) 
             ]])
         [:div {:class "block md:hidden relative w-full -top-60 super-z"}
          (when (:selectedLocation @state-app)
            [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)])]
         [:div {:class "hidden md:block relative"}
          (when (:selectedLocation @state-app)
            [selected-location (:selectedLocation @state-app) (:geoJsonData @state-app)])]]
        [:<>
         [grid-wrapper
          (map
           (fn [i] [grid-item i])
           (filteredList state-app (:list @state-app)))]
         ;; )
         ])]]]))