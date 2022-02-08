(ns sustainability-shop-fe.navigation
  (:require [reitit.frontend.easy :as rfe]
            [sustainability-shop-fe.state :refer [state-app]]))


(defn navigation [{:keys [links]}]
  [:nav {:class "w-full relative px-3 pt-6 flex flex-row flex-no-wrap justify-between"}
   [:a {:class ""
        :href "/"} 
    ;; [:h1 {:class ""} "seasons."]
    [:img.max-50 {:src "/img/menu.svg"}]
    ]
   [:button {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
        :onClick (fn []
                    (rfe/href (keyword "sustainability-shop-fe.routes" "map") {})
                    (rfe/push-state (keyword "sustainability-shop-fe.routes" "map") {})
                    (if (= (:mode @state-app) "map")
                      (reset! state-app (assoc-in @state-app [:mode] "list"))
                      (reset! state-app (assoc-in @state-app [:mode] "map"))))}
    (if (= (:mode @state-app) "map") 
      "list"
      "map"
      )]
   ])