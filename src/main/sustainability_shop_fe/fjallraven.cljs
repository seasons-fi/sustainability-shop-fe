(ns sustainability-shop-fe.fjallraven
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [alandipert.storage-atom :refer [local-storage]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def kanken-bags (local-storage (atom []) :kanken-bags))

(def elelele (atom nil))

(defn test-elem [elem]
  (reset! elelele elem))

(def selected-kanken-bag (atom {:title "Item"
                                :imagehref "#"
                                :description ""
                                :href "#"
                                :extra ""
                                :extra-2 ""
                                :price ""}))

(defn info-collapse
  "Collapse field from Bootstrap that shows extra information about input fields.

  `:info-id` - id of the element being described
  `:aria-label-text` - text describing aria-label of collapse, see more https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships
  `:focus-when-collapse-opened` - element that is focused when the info is opened
  `:body-text` - component that is shown if open"
  [{:keys [info-id aria-label-text focus-when-collapse-opened collapse-title body-text]}]
  [:<> [:button.info-button.btn.btn-link
        {:data-toggle "collapse"
         :href (str "#" (str info-id "-collapse"))
        ;  :aria-label aria-label-text
         :aria-expanded "false"
         :aria-controls (str info-id "-collapse")}
        (:title collapse-title)]
   [:div.info-collapse.collapse {:id (str info-id "-collapse")
                                 :ref test-elem
                                 :tab-index "-1"}
    body-text]])

(add-watch kanken-bags
           :new
           (fn [_ _ _ v]
             (.log js/console "new preference" v)))

(defn fetch-link! [kanken-bags]
  (go
    (reset! kanken-bags
            (:body
             (<! (http/get "http://clojurewebscraper-env.eba-vtmxjpui.eu-west-2.elasticbeanstalk.com/all-kanken-backpacks"
                           {:with-credentials? false}))))))

(defn lister [kanken-bags]
  [:ul
   (for [item kanken-bags]
     ^{:key item} [:li (str (get (:title item) 0))])])

(defn listery [selected-kanken-bag]
  [:div
   [:img {:class "prod-image"
          :src (:imagehref selected-kanken-bag)}]
   [:h3 (str (:title selected-kanken-bag))]
   [:p (str (:price selected-kanken-bag))]
   [:ul
    (for [item (:extra-2 selected-kanken-bag)]
      [:li (str (get (get item 1) 0) " " (get item 3))])]])


(defn hello-world []
  (when (and (list? (.getItem js/localStorage ":kanken-bags"))
             (> (count (.getItem js/localStorage ":kanken-bags")) 0))
    (reset! kanken-bags (.getItem js/localStorage ":kanken-bags"))
    (fetch-link! kanken-bags))
  [:div
   [:h1 (:text "test")]
   [info-collapse {:info-id "yay"
                   :focus-when-collapse-opened nil
                   :collapse-title {:title "Materials"}
                   :body-text "Test"}]
   [info-collapse {:info-id "yay1"
                   :focus-when-collapse-opened nil
                   :collapse-title {:title "Factories"}
                   :body-text "Test"}]
   [info-collapse {:info-id "yay2"
                   :focus-when-collapse-opened nil
                   :collapse-title {:title "Stores"}
                   :body-text "Test"}]
   [info-collapse {:info-id "yay3"
                   :focus-when-collapse-opened nil
                   :collapse-title {:title "Delivery"}
                   :body-text "Test"}]
   [info-collapse  {:info-id "yay4"
                    :focus-when-collapse-opened test-elem
                    :collapse-title @selected-kanken-bag
                    :body-text [:ul.max-300.overflow-auto
                                (for [item @kanken-bags]
                                  ^{:key item} [:li
                                                [:div {}
                                                 [:h4 {:on-click (fn [e]
                                                                   (do (reset! selected-kanken-bag {:title (str (get (:title item) 0))
                                                                                                    :imagehref (:image item)
                                                                                                    :price (str (get (:price item) 0))
                                                                                                    :extra-2 (:extra-2 item)})
                                                                       (when-not (= @elelele nil) (.collapse (js/$ @elelele) "hide") nil)))}
                                                  (str (get (:title item) 0))]
                                                 [:img.img-thumbnail.rounded.max-50.to-block
                                                  {:src  (str (:image item) 0)}]]])]}]
   (when-not (= (:title @selected-kanken-bag) "Item")
     [listery @selected-kanken-bag])
   [info-collapse {:info-id "yay5"
                   :focus-when-collapse-opened nil
                   :collapse-title {:title "Care Instructions"}
                   :body-text "Test"}]])

;; (defn fetch-link! [kanken-bags]
;;    (go
;;      (reset! kanken-bags 
;;                           (:body 
;;       (<! (http/get "http://clojurewebscraper-env.eba-vtmxjpui.eu-west-2.elasticbeanstalk.com/all-kanken-backpacks" 
;;                     {:with-credentials? false}))))))

; (defn fetch-link! [kanken-bags]
;   (GET "http://clojurewebscraper-env.eba-vtmxjpui.eu-west-2.elasticbeanstalk.com/all-kanken-backpacks"
;     {:handler (fn [response] (.log js/console response))
;      :error-handler (fn [{:keys [status status-text]}]
;                       (js/console.log status status-text))}))


