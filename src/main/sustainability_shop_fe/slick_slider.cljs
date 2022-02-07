(ns sustainability-shop-fe.slick-slider
  (:require [reagent.core :as reagent]
            [sustainability-shop-fe.state :refer [state-app]]
            ["react-slick" :as rs :default Slider]))

(defn slick-slider [slides]
  [(reagent/adapt-react-class Slider)
   {:slidesToShow 1
    :infinite true}
   (map
    (fn [s]
      (let [ind (.indexOf slides s)]
       [:div
       [:div {:class "bg-white h-full w-full px-3 py-16 block relative flex flex-col justify-end"}
        [:div {:class "w-full flex flex-row justify-between"}
         [:h1 {:class "text-8xl w-1/2 font-garamond font-extrabold italic text-blue-600 leading-none"}
          [:span {:class "block text-8xl w-full font-garamond font-extrabold italic text-blue-600 leading-none"} "Re"]
          (:name s)]
         [:div {:class "relative w-1/2 text-xl font-avenir-medium border-blue-600 h-6"}
          [:p  {:class "inline-block w-1/2 text-right pr-3 align-middle text-lg text-blue-600 float-left font-medium font-avenir-black"}
           (:link (if (< ind 3)
                    (nth slides (+ ind 1))
                    (nth slides 0)))]
          [:img {:class "inline-block  w-1/2 align-middle float-left h-full"
                 :src "/img/arrow.svg"}]]
         ]
        [:ul {:class "w-full mt-8"}
         (map
          (fn [l]
            [:li {:class "block border-t-2 border-solid border-blue-600 py-3"}
             [:a {:class "block w-full text-right font-medium text-xl text-blue-600 font-avenir-medium"
                  :onClick (fn [evt]
                            (reset! state-app (assoc-in @state-app [:category] (:link s)))
                            (reset! state-app (assoc-in @state-app [:subcategory] l))
                             )
                  :href (str "/" (:link s) "/" (clojure.string/join l))}
              l]])
          (:links s))]]]))
    slides)])