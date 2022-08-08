(ns sustainability-shop-fe.map.map-utils
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as str]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            ["fuse.js" :as Fuse]))

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

(defn geojson-feature-2 [i]
  ;; (let [
  ;;       ;; location (str/split (str/replace (str "["  (:number (:lon (:properties i))) " " (:number (:lat (:properties i))) "]") #"[\[\]\"]" "") #" ")
  ;;       ;; coordanates 
  ;;       ;; coordanates (mapv
  ;;       ;;              #(js/parseFloat %)
  ;;       ;;              (js->clj location))
  ;;       ]
    
      {:type "Feature"
       :properties {:id (:id i)
                    :type "place"
                    :name (:plain_text (first (:title (:Name (:properties i)))))
                    :country (:name (:select (:country (:properties i))))
                    :city (:name (:select (:city (:properties i))))
                    :address (:plain_text (first (:rich_text (:address (:properties i)))))
                    :image  (:url (:image (:properties i)))
                    :website (:url (:website (:properties i)))
                    :subcategory  (:name (:select (:subcategory (:properties i))))
                    :category (:name (:select (:category (:properties i))))
                    :onlineOnly (:checkbox (:isonline (:properties i)))
                    :tags (map 
                           #(:name %)
                           (:multi_select (:tags (:properties i))))
                       ;; :location location
                      ;;  :location (:location i)
                    :isBrickAndMortar true
                       ;; :hours (:hours i)
                       ;; :phone (:phone i)
                       ;; :design (:design i)
                       ;; :production (:production i)
                       ;; :materials (:materials i)
                       ;; :tags (:tags i)
                       ;; :keys (keys i)
                    }
       :geometry {:type "Point"
                  :coordinates [(:number (:lon (:properties i))) (:number (:lat (:properties i))) ] 
                  ;; 
                  }})

(defn turn-realtime-db-to-geojson [flat-data]
  (clj->js
   [{:type "FeatureCollection"
     :features (filter
                #(not (= (:coordinates (:geometry %)) [0 0]))
                (map
                #(geojson-feature %)
                (into [] (js->clj (. js/JSON (parse flat-data)) :keywordize-keys true))))}]))

(defn turn-realtime-db-to-geojson-2 [flat-data] 
  (do 
    (js/console.log "turn-realtime-db-to-geojson-2" (clj->js (filter
                   #(not (= (:coordinates (:geometry %)) [nil nil]))
                  (map
                   #(geojson-feature-2 %)
                   (into [] (:results flat-data))))
                                     ))
    (clj->js
     [{:type "FeatureCollection"
       :features (filter
                   #(and 
                     (= (:onlineOnly (:properties %)) false)
                     (not (= (:coordinates (:geometry %)) [nil nil])))
                  (map
                   #(geojson-feature-2 %)
                   (into [] (:results flat-data))))
       }])))

(defn turn-realtime-db-to-list [flat-data]
   (into [] (filter
                #(not (= (:coordinates (:geometry %)) [0 0]))
                (map
                (fn [i] {:id (:id i)
                         :type "place"
                    :name (:name i)
                    :country (:country i)
                    :city (:city i)
                    :address (:address i)
                    :location (:location i)
                    :isBrickAndMortar (:isBrickAndMortar i)
                    :hours (:hours i)
                    :phone (:phone i)
                    :image (:imageurl i)
                    :website (:website i)
                    :design (:design i)
                    :production (:production i)
                    :materials (:materials i)
                    :tags (:tags i)
                    :category (:category i)
                    :keys (keys i)})
                (into [] (js->clj (. js/JSON (parse flat-data)) :keywordize-keys true))))))

;; (defn turn-realtime-db-to-list [flat-data]
;;    (into [] (filter
;;                 #(not (= (:coordinates (:geometry %)) [0 0]))
;;                 (map
;;                 (fn [i] {:id (:id i)
;;                          :type "place"
;;                     :name (:name i)
;;                     :country (:country i)
;;                     :city (:city i)
;;                     :address (:address i)
;;                     :location (:location i)
;;                     :isBrickAndMortar (:isBrickAndMortar i)
;;                     :hours (:hours i)
;;                     :phone (:phone i)
;;                     :image (:imageurl i)
;;                     :website (:website i)
;;                     :design (:design i)
;;                     :production (:production i)
;;                     :materials (:materials i)
;;                     :tags (:tags i)
;;                     :category (:category i)
;;                     :keys (keys i)})
;;                 (into [] (js->clj flat-data :keywordize-keys true))))))

(defn turn-realtime-db-to-list-2 [flat-data]
  (js/console.log "Got from db:" (clj->js (:results flat-data)))
   (into [] 
         (map-indexed (fn [ind i] {:id (:id i)
                                   :type "place"
                                   :name (:plain_text (first (:title (:Name (:properties i)))))
                                   :country (:name (:select (:country (:properties i))))
                                   :city (:name (:select (:city (:properties i))))
                                   :address (:plain_text (first (:rich_text (:address (:properties i)))))
                                   :image  (:url (:image (:properties i)))
                                   :website (:url (:website (:properties i)))
                                   :subcategory  (:name (:select (:subcategory (:properties i))))
                                   :category (:name (:select (:category (:properties i))))
                                   :location [(:lat (:properties i)) (:lon (:properties i))]
                                   :onlineOnly (:checkbox (:isonline (:properties i)))
                                   :tags (map
                                          #(:name %)
                                          (:multi_select (:tags (:properties i))))
                                   :description (:plain_text (first (:rich_text (:description (:properties i)))))
                                   
                       ;; :location (:location i)
                       ;; :isBrickAndMortar (:isBrickAndMortar i)
                       ;; :hours (:hours i)
                       ;; :phone (:phone i)
                       ;; :design (:design i)
                       ;; :production (:production i)
                       ;; :materials (:materials i)
                       ;; :tags (:tags i)
                       ;; :keys (keys i)
                                   })
                (into [] (:results flat-data)))
        ;;  (filter
        ;;         #(not (= (:coordinates (:geometry %)) [0 0]))
        ;;         )
         )
  )


(defn filter-locations-by-search [state-app locations]
  (if (clojure.string/blank? (:search-value @state-app))
    ;; TODO: refactor this to return no search resu
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
             category (:category
                      (:properties
                       (js->clj l :keywordize-keys true)))
             subcategory (:subcategory
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
          (when (not (nil? category))
            (includes-search-string
             category
             (:search-value @state-app)))
          (when (not (nil? subcategory))
            (includes-search-string
             subcategory
             (:search-value @state-app)))
          (includes-search-string
           name
           (:search-value @state-app)))))
     (filter
      #(not (nil? %))
      locations))))


(defn filter-locations-by-search-list [state-app] 
  (if (clojure.string/blank? (:search-value @state-app)) 
    (:list @state-app) 
    (filter
     (fn [l]
       (let [name (:name l)
             city (:city l)
             address (:address l)
             category (:category l)
             subcategory (:category l)]
         (or
          (when (not (nil? address))
            (includes-search-string
             address
             (:search-value @state-app)))
          (when (not (nil? city))
            (includes-search-string
             city
             (:search-value @state-app)))
          (when (not (nil? category))
            (includes-search-string
             category
             (:search-value @state-app)))
          (when (not (nil? subcategory))
            (includes-search-string
             subcategory
             (:search-value @state-app)))
          (includes-search-string
           name
           (:search-value @state-app)))))
     (:list @state-app))))

(defn filter-locations-by-search-list-fuse [state-app]
  (let [input-data (:list @state-app)
        options {:keys ["name" "address" "category" "city" "country" "subcategory", "tags"]
                 :includeScore true
                 :shouldSort true}
        search-string (clojure.string/blank? (:search-value @state-app))
        fuseSearch (Fuse.
                    (clj->js input-data)
                    (clj->js options))
        results (map
                 #(:item %)
                 (js->clj (. fuseSearch (search (str (:search-value @state-app)))) :keywordize-keys true))]
   (do 
     (js/console.log "fuse" (clj->js input-data) (clj->js (. fuseSearch (search (str (:search-value @state-app))))))
    (if search-string
    ;; TODO: refactor this to return no search resu
    input-data 
     results
    ))))

(defn get-places-api [state-app]
  (go (let [response (<! (http/get "https://seasons-api.com/places"
                                   {:with-credentials? false}))]
        (js/console.log "places?" (:body response))
        ;; (reset! state-app (assoc-in @state-app [:list] (turn-realtime-db-to-list (:body response))))
        
        ;; (reset! state-app (assoc-in @state-app [:geoJsonData] (.stringify js/JSON (turn-realtime-db-to-geojson (:body response)))))
        )))


(defn fetch-data-notion-db! [state-app]
  (go (let [response (<! (http/get "https://us-central1-fashionforward-39342.cloudfunctions.net/notion"
                                   {:with-credentials? false}))]
       
        ;; (js/console.log "Got from db:" (clj->js (:results (:body response))))
        ;; (map 
        ;;  (fn [p] (:Name (:properties p)))
        ;;  (:results (:body response)))
        (reset! state-app (assoc-in @state-app [:list] (turn-realtime-db-to-list-2 (:body response))))
        (reset! state-app (assoc-in @state-app [:geoJsonData] (.stringify js/JSON (turn-realtime-db-to-geojson-2 (:body response)))))
        )))

(defn get-companies-api [state-app]
  (go (let [response (<! (http/get "https://seasons-api.com/companies"
                                   {:with-credentials? false}))]
        (reset! state-app (assoc-in @state-app [:companies] (. js/JSON (parse (:body response))))))))

;; https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson

;; (defn fetch-link! []
;;   (go (reset! geoJsonData
;;               (js->clj (:body
;;                         (<! (http/get "https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson"
;;                                       {:with-credentials? false})))))))