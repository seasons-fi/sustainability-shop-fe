(ns sustainability-shop-fe.map-utils
  (:require [clojure.string :as str]))

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
    (when (not false)
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
                  :coordinates (if-not (empty? coordanates)
                                 coordanates
                                 [0 0])}})))

(defn turn-realtime-db-to-geojson [flat-data]
  (clj->js
   [{:type "FeatureCollection"
     :features (map
                (fn [i]
                  (geojson-feature i))
                (into [] (js->clj (. js/JSON (parse flat-data)) :keywordize-keys true)))}]))


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