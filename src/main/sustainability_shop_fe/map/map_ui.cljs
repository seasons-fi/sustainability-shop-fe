(ns sustainability-shop-fe.map.map-ui
  (:require 
            [reagent.core :as reagent :refer [atom]]
            [sustainability-shop-fe.state :refer [state-app]]
            [sustainability-shop-fe.map.map-utils :refer [filter-locations-by-search]]
            ["leaflet" :as leaflet]
            [clojure.string :as str]
            ["leaflet.locatecontrol" :as leaflet.locatecontrol]
            ["leaflet.markercluster" :as leaflet.markercluster]
            ;; [alandipert.storage-atom :refer [local-storage]]
            [cognitect.transit :as t]
            [reitit.frontend.easy :as rfe]
            ["react-slick" :as rs :default Slider]))


 ;; https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson


(defn reset-map-to-point [latlng _]
  (. (:mapBox @state-app) (flyTo latlng 18)))

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
                                           (let [loc (:properties selectedLocation)
                                                 emptyAddress? (or (clojure.string/blank? (:address loc)) (empty? (:address loc)))
                                                 emptyDescription? (or (clojure.string/blank? (:description loc)) (empty? (:description loc)))
                                                 online? (:onlineOnly loc)
                                                 website? (or  (clojure.string/blank? (:website loc)) (empty? (:website loc)))
                                                 emptyTags? (empty? (:tags loc))
                                                 tags (if-not emptyTags?
                                                       [:<> 
                                                        (map
                                                             (fn [e] [:p {:class "inline bg-blue-600 p-1 text-white"} (str e)])
                                                             (into [] (:tags loc)))]
                                                        "")]
                                             (js/console.log "selected tags" (clj->js (:tags loc)) tags)
                                            (when selectedLocation
                                             [:article {:class "bg-white relative w-7/8 h-max	 z-10 mx-auto block"}
                                              [:div {:class "relative block w-full h-64 shadow bg-gray-300 bg-no-repeat bg-center	bg-cover	"
                                                     :style #js {:backgroundImage (str "url('" (:image (:properties selectedLocation)) "')")}}]
                                              [:button {:onClick (fn []
                                                                   (reset! state-app (assoc-in @state-app [:selectedLocation] nil))
                                                                   (reset! state-app (assoc-in @state-app [:selectedLocationID] nil))
                                                                   (rfe/href (keyword "sustainability-shop-fe.routes" "map") {})
                                                                   (rfe/push-state (keyword "sustainability-shop-fe.routes" "map") {}))
                                                        :type "button"
                                                        :class "btn btn-dark absolute right-1 top-1 m-1 text-sm text-blue-600 font-medium z-5"
                                                        :data-dismiss "modal"
                                                        :aria-label "Close"} "Close"]

                                              [:div
                                               [:h2 {:class "text-3xl font-medium text-blue-600"}
                                                (:name loc)]
                                               [:p {:class "block w-full border-b-2 border-solid border-blue-600 
                                                                font-medium text-blue-600 py-2"}
                                                "category: "
                                                (:category loc)]
                                               [:p {:class "block w-full border-b-2 border-solid border-blue-600 
                                                                font-medium text-blue-600 py-2"}
                                                "subcategory: "
                                                (:subcategory loc)]
                                               (when-not (and online? emptyAddress?)
                                                [:span {:class "block w-full border-b-2 border-solid border-blue-600 
                                                                font-medium text-blue-600 py-2"}
                                                 "address: "
                                                 [:address {:class "text-sm font-regular text-blue-600 inline not-italic	"}
                                                 (str (:address loc) ", " (:city loc))]])
                                               (when online?
                                                 [:div {:class "block w-full border-b-2 border-solid border-blue-600
                                                                font-medium text-blue-600 py-2"}
                                                  [:p "online"]
                                                  [:a {:href "#"} "website: " (:website loc) ]]) 
                                               [:div {:class "block w-full border-b-2 border-solid border-blue-600
                                                              font-medium text-blue-600 py-3"}
                                                  [:a {:href "#"} "website: " (:website loc) ]]
                                               (when-not emptyDescription?
                                                 [:span {:class "font-medium text-blue-600 py-2"}
                                                  "description: "
                                                  [:p {:class "block w-full border-b-2 border-solid border-blue-600"}
                                                  (:description loc)]])
                                               (when-not emptyTags?
                                                 [:span  {:class "font-medium text-blue-600 py-2"}
                                                  "tags: "
                                                  [:p {:class "inline w-full border-b-2 border-solid border-blue-600"}
                                                   tags]
                                                  ])]])))}))

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


(defn map-slide [f mapbox]
  [:div {:class "h-min bg-white p-3 mr-3"
         :onClick (fn [evt]
                          (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj f :keywordize-keys true)))
                          (let [latlng (leaflet/latLng (nth (. (. f -geometry) -coordinates) 0)
                                                       (nth (. (. f -geometry) -coordinates) 1))]
                            (reset-map-to-point latlng mapbox))
                          (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))})
                          (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))}))}
         [:h2 {:class "text-xl font-medium text-blue-600"}
          (str (. (. f -properties) -name))] 
         [:span {:class "text-blue-600 text-sm font-light"}
          (str (. (. f -properties) -address) ", " (. (. f -properties) -city))]
         ])

(defn map-slide-search [f mapbox]
  [:div {:class "h-24 bg-white p-6 mr-3"
               :onClick (fn [evt]
                          (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj f :keywordize-keys true)))
                          (let [latlng (leaflet/latLng (nth (. (. f -geometry) -coordinates) 0)
                                                       (nth (. (. f -geometry) -coordinates) 1))]
                            (reset-map-to-point latlng mapbox))
                          (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))})
                          (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj f :keywordize-keys true)))}))}
         [:h2 {:class "text-xl font-medium text-blue-600"}
          (str (. (. f -properties) -name))]])

(defn search-results []
  (filter-locations-by-search
       state-app
       (. (first (.parse js/JSON (:geoJsonData @state-app))) -features)))

(defn slick-slider-map [locations-in-map-view mapbox search-value]
  [(reagent/adapt-react-class Slider)
   {:slidesToShow 1.5
    :infinite false}
   (if-not search-value
     (map
      (fn [f]
        [map-slide f mapbox])
      locations-in-map-view)
     (map
      (fn [f]
        [map-slide-search f mapbox])
      (search-results)))])


;; (defn slick-slider-list [company]
;;   [(reagent/adapt-react-class Slider)
;;       {:slidesToShow 1.5
;;        :infinite false}
;;       (for [item (filter
;;                   #(clojure.string/includes? (:name (:properties %)) company)
;;                   (:features (nth (js->clj

;;                                    (.parse js/JSON (:geoJsonData @state-app))
;;                                    :keywordize-keys true) 0)))]

;;         [:div {:class "h-auto min-h-24 bg-white mr-3 slide-in-list "}
;;          [:button
;;           {:class "block relative w-full"
;;            :onClick (fn []
;;                       (reset! state-app (assoc-in @state-app [:selectedLocation] (js->clj item)))
;;                       (reset! state-app (assoc-in @state-app [:mode] "map"))
;;                       (rfe/href (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj item :keywordize-keys true)))})
;;                       (rfe/push-state (keyword "sustainability-shop-fe.routes" "map-item") {:id (:id (:properties (js->clj item :keywordize-keys true)))}))}
;;                           ;; (reset-map-to-point feature latlng mapbox)
;;           [:div {:class "block relative min-h-24 w-full px-1"}
;;            [:picture {:class "block relative h-90 w-full"}
;;             (if (empty? (:image (:properties item)))
;;               [:img {:src "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"}]
;;               [:img {:src (:image (:properties item))}])]
;;            [:h2 {:class "text-xl font-medium text-blue-600"}
;;             (str (:name (:properties item)))]
;;           ;;  [:span {:class "text-md font-medium text-blue-600"} "open" "----------------" "Thu"]
;;            ]]])]
;;   )

;; (defn list-render [_ company]
;;     [:div.px-3.mb-b
;;      [:h1 {:class ""
;;            ;; "text-6xl text-blue-600 font-garamond"
;;            } company]
;;      [slick-slider-list company]])
    

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


;; (defn list-of-brands []
;;   (reagent/create-class {:reagent-render list-render}))

(defn breadcrumbs [path]
  [:div {:class " block relative text-sm font-medium text-blue-600 my-2"}
   [:span {:class "w-full inline relative text-sm font-bold text-blue-600"} (cond
          (clojure.string/includes? (str path) "all") "Map"
          (clojure.string/includes? (str path) "reduce") "Reduce"
          (clojure.string/includes? (str path) "reuse") "Reuse"
          (clojure.string/includes? (str path) "repair") "Repair"
          (clojure.string/includes? (str path) "recycle") "Recycle"
          :default "All")]
   (str 
        " "
        "/"
        " "
        (cond
          (clojure.string/includes? (str path) "second hand") "second hand"
          (clojure.string/includes? (str path) "vintage") "Vintage"
          (clojure.string/includes? (str path) "flea") "Flea market"
          (clojure.string/includes? (str path) "brands") "sustainable brands"
          (clojure.string/includes? (str path) "rentals") "clothing rentals"
          (clojure.string/includes? (str path) "atelies") "atelies"
          (clojure.string/includes? (str path) "collection") "collection points"
          (clojure.string/includes? (str path) "recycling") "recycling centers"
          :default ""))
   ])



