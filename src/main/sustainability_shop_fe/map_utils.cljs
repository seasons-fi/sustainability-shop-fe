(ns sustainability-shop-fe.map-utils
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as str]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn to-lowercase [str]
  (clojure.string/lower-case str))

(defn includes-search-string [str search]
  (let [matches (re-matches (re-pattern search)
                            (to-lowercase str))]
    (if (or
         (clojure.string/includes?
          (clojure.string/upper-case str)
          search)
         (clojure.string/includes?
          (to-lowercase str)
          search)
         (clojure.string/includes?
          (clojure.string/capitalize str)
          search)
         (clojure.string/includes?
          str
          search)
         (not (clojure.string/blank? matches))
         (seq matches))
      true
      false)))

(defn geojson-feature [i]
  (let [location (str/split (str/replace (:location i) #"[\[\]\"]" "") #" ")
        coordanates (mapv
                     #(js/parseFloat %)
                     (js->clj location))]
    (js/console.log "coordanates" (empty? (clj->js coordanates)) (clj->js coordanates))
    (when true
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
                    :category (:category i)
                    :keys (keys i)}
       :geometry {:type "Point"
                  :coordinates (if-not (empty? coordanates)
                                 coordanates
                                 [0 0])}}
                                 )))

(defn turn-realtime-db-to-geojson [flat-data]
  (clj->js
   [{:type "FeatureCollection"
     :features (filter
                #(not (= (:coordinates (:geometry %)) [0 0]))
                (map
                #(geojson-feature %)
                (into [] (js->clj (. js/JSON (parse flat-data)) :keywordize-keys true))))}]))


(defn filter-locations [state-app locations]
  (if (clojure.string/blank? (:search-value @state-app))
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
                       (js->clj l :keywordize-keys true)))]
         (or
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
           (:search-value @state-app))
          )))
     (filter
      #(not (nil? %))
      locations)
     )
     ))

(defn get-places-api [state-app]
  (go (let [response (<! (http/get "https://seasons-api.com/places"
                                   {:with-credentials? false}))]
        (reset! state-app (assoc-in @state-app [:places] (turn-realtime-db-to-geojson (:body response))))
        (reset! state-app (assoc-in @state-app [:geoJsonData] (.stringify js/JSON (turn-realtime-db-to-geojson (:body response))))))))

(defn get-companies-api [state-app]
  (go (let [response (<! (http/get "https://seasons-api.com/companies"
                                   {:with-credentials? false}))]
        (js/console.log "get-companies-api" (:body response))
        (reset! state-app (assoc-in @state-app [:companies] (. js/JSON (parse (:body response))))))))

;; https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson

;; (defn fetch-link! []
;;   (go (reset! geoJsonData
;;               (js->clj (:body
;;                         (<! (http/get "https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson"
;;                                       {:with-credentials? false})))))))