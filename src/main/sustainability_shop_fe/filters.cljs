(ns sustainability-shop-fe.filters
  (:require 
   [goog.string]
   [sustainability-shop-fe.search :refer [search-input]]
   [sustainability-shop-fe.state :refer [reset-logger]]))


(defn filterLabel [criteria value filterList state-app label]
  (let [labelFilter (filter
                             (fn [item] (and (= (:criteria item) criteria) (= (:value item) value)))
                             filterList)
           selected? (empty? labelFilter)]
       [:span {:class (str "text-lg pointer block py-1  -mx-3 px-3"
                         (if selected? 
                           " bg-white text-blue-600 "
                           " bg-blue-600 text-white "))
                          
                 :on-click (fn []
                             (if selected?
                               (reset-logger state-app "filter" (conj filterList {:criteria criteria :value value}) "reset filter add") 
                               (reset-logger state-app "filter" (remove #(= (:criteria %) criteria) filterList) "reset filter delete")))}
        label]))

(defn selectorBlock [selectorTitle filterList state-app id children]
  [:div {:class "w-36  border-2 borger-solid border-blue-600 py-1 px-3"}
   [:button {:class "text-lg text-lg text-blue-600 font-avenir-heavy not-italic font-light "
             :data-bs-toggle "collapse"
             :data-bs-target (str "#" id)
             :href (str "#" id)
             :type "button"
             :role "button"
             :aria-expanded "false"
             :aria-controls id}
    (goog.string/unescapeEntities (str selectorTitle "&darr; "))
    ]
   [:div {:class "collapse" :id id}
    children]
   ])

(defn filterComponent [state-app]
  (let [filterList (:filter @state-app)]
    [:div {:class "pt-3 flex flex-wrap w-full"}
     [:button {:class "block py-1 px-3
                       md:border-2 md:borger-solid md:border-blue-600 rounded-full
                       bg-white 
                       text-blue-600  font-medium leading-tight
                       text-lg font-avenir-heavy not-italic font-light text-center 
                       h-12 
                       border-2 border-solid border-blue-600 text-blue-600 rounded-full py-0.5 px-4 font-medium h-12"
               :data-bs-toggle "collapse"
               :data-bs-target "#collapseExample"
               :type "button"
               :href "#collapseExample"
               :role "button"
               :aria-expanded "true"
               :aria-controls "collapseExample"} 
     [:span {:class "hidden md:inline"}
      (goog.string/unescapeEntities " Filters &darr; ")]
      [:img {:src "https://toppng.com/uploads/preview/file-svg-filter-icon-11562874693tj59mpz35p.png"
             :class "inline md:hidden h-full"}]]
     [:div {:class "collapse border-b-2 border-solid border-blue-600 w-full" :id "collapseExample"}
      [:div {:class "py-3 w-full relative flex sticky top-36 bg-white z-10  flex flex-wrap items-start justify-end gap-4	max-w-full"} 
       
       (selectorBlock "Category" filterList state-app "categoryList"
                      [:<>
                       [filterLabel "category" "reuse" filterList state-app "reuse"]
                       [filterLabel "category" "reduce" filterList state-app "reduce"]
                       [filterLabel "category" "repair" filterList state-app "repair"]
                       [filterLabel "category" "recycle"  filterList state-app "recycle"]])
       
       (selectorBlock "Subcategory" filterList state-app "subcategoryList"
                      [:<>
                       [filterLabel "subcategory" "brand" filterList state-app "brand"]
                       [filterLabel "subcategory" "rental" filterList state-app "rental"]])
       
       (selectorBlock "Online" filterList state-app "isOnline"
                      [:<>
                       [filterLabel "onlineOnly" true filterList state-app "online"]])
       (selectorBlock "City" filterList state-app "city"
                      [:<>
                       [filterLabel "city" "Helsinki" filterList state-app "Helsinki"]])
       ]]]))

(defn filteredList [state-app alist]
  (let [list alist 
        filtersList (:filter @state-app) 
        filteredList (filter
                            (fn [listItem]
                               ;; TODO: use every? for OR and some for AND
                                (some true? 
                                        (mapv
                                         #(= ((keyword (:criteria %)) listItem)
                                             (:value %))
                                         filtersList)))
                                          
                            list)]
       filteredList))