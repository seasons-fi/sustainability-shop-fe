(ns sustainability-shop-fe.mode
  (:require [reitit.frontend.easy :as rfe]))

(defn modeSwitch [state-app]
  [:button {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium h-12"
             :onClick (fn []
                        (rfe/href (keyword "sustainability-shop-fe.routes" "map") {})
                        (rfe/push-state (keyword "sustainability-shop-fe.routes" "map") {})
                        (if (= (:mode @state-app) "map")
                          (reset! state-app (assoc-in @state-app [:mode] "list"))
                          (reset! state-app (assoc-in @state-app [:mode] "map"))))}
    (if (= (:mode @state-app) "map")
      "list"
      "map")])