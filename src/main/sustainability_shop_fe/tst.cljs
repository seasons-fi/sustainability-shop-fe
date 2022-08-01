(ns main.sustainability-shop-fe.tst)
;; (defn get-companies-api []
;;   (go (let [response (<! (http/get "http://52.47.131.189:443/companies"
;;                                 ;; parameters
;;                                    {:with-credentials? false}))]
;;         ;; (reset! state-app (assoc-in @state-app [:companies] (js->clj (. js/JSON (parse (:body response))) :keywordize-keys true)))
;;         (js/console.log
;;          response))))

;; (defn add-place-api []
;;   (go (let [response (<! (http/post "http://localhost:443/places"
;;                                 ;; parameters
;;                                     {:with-credentials? false

;;                                      :json-params {:name "Domino"
;;                                                    :category "reduce"
;;                                                    :type "brand"
;;                                                    :address "\nYrjönkatu 34 \nHelsinki, 00100\n"
;;                                                    :location "[24.93669 60.16831]"
;;                                                    :places_id ""

;;                                                    :isActive true
;;                                                    :isOnline true
;;                                                    :isTemporary false
;;                                                    :isBrickAndMortar true

;;                                                    :city "Helsinki"
;;                                                    :country "Finland"

;;                                                    :company_name "Voglia"}
;;                                     ;;  :form-params {:post (. js/JSON (stringify (clj->js
;;                                     ;;                                             {                                              
;;                                     ;;                                              })))}
;;                                      }))]
;;         ;; (reset! state-app (assoc-in @state-app [:companies] (js->clj (. js/JSON (parse (:body response))) :keywordize-keys true)))
;;         (js/console.log "post response"
;;                         (clj->js response)))))

;; ;; -------------------------
;; ;; Page views
;; (defn dashboard-view [match state-app]
;;   [home-page])

;; (defn map-view [match state-app]
;;   [map-page match state-app])

;; (defn add-place-view [match state-app]
;;   [add-page])

;; ;; [:> (withRouter (r/reactify-component graphics-detail-container))]
;; (defn map-item-view [match state-app]
;;   [map-page match state-app])


  ;;  [h1 "seasons."]
  ;;  [info "
  ;;        Find your way to be sustainably fashionable. 
  ;;        Verified sustainabkle brands in Helsinki."]
  ;;  (if (or (= (:mode @state-app) "map") (clojure.string/includes? (str (:path (:match @state-app))) "map"))
  ;;    [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
  ;;       :href "/list"}
  ;;   "list"]
  ;;    [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
  ;;       :href "/map"}
  ;;   "map"]
  ;;    )
   
  ;;  [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
  ;;       :href "/add"}
  ;;   "add"]

  ;;  (if (or (= (:mode @state-app) "map") (clojure.string/includes? (str (:path (:match @state-app))) "map"))
  ;;    [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
  ;;       :href "/list"}
  ;;   "list"]
  ;;    [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
  ;;       :href "/map"}
  ;;   "map"]
  ;;    )
   
  ;;  [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
  ;;       :href "/add"}
  ;;   "add"]

;;     (when id
;;       (reset! state-app (assoc-in @state-app [:selectedLocationID] id)))
;;     [:<>
;;     ;;  
;;     ;;  [switch]
;;   ;; (reset-map-to-point @mapBox)
;;          [list-of-brands (map (:geoJsonData @state-app))])]]]
;; [:div {:class "absolute block w-full bottom-0 h-40"} 
;;  ]