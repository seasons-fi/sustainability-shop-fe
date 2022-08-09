(defproject sustainability-shop-fe "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.9.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async  "0.4.500"]
                 [reagent "0.10.0" :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]]
                 [cljs-ajax "0.7.4"]
                 [cljs-http "0.1.46"]
                 [cljsjs/react-select "2.4.4-0" :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]]
                 [hiccup "1.0.4"]
                 [org.clojure/data.json "1.0.0"]
                 [alandipert/storage-atom "2.0.1"]
                 [reagent-forms "0.5.44"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [clj-commons/secretary "1.2.4"]
                 [venantius/accountant "0.2.5"]
                 [cljsjs/mapbox "0.46.0-0"]
                 [thheller/shadow-cljs "2.11.5"]
                 [etaoin "0.3.10"]
                 [doo "0.1.11"]
                 [lambdaisland/kaocha "1.0.669"]
                 [lambdaisland/kaocha-junit-xml "0.0.76"]
                 [re-graph "0.1.14"]
                 [com.cognitect/transit-cljs "0.8.264"]
                 [org.roman01la/virtual.list "0.1.1"]
                 [cljsjs/react-virtualized "9.22.2-0" :exclusions [cljsjs/react]]
                 [cljsjs/leaflet "1.5.1-0"]
                 [cljsjs/leaflet-locatecontrol "0.43.0-1"]
                 [lein-shadow "0.3.1"]
                 [factual/geo "3.0.1"]
                 [metosin/jsonista "0.2.7"]
                 [cljs-node-io "1.1.2"]
                 [org.clojars.beetleman/shadow-cljs-hooks "0.2.0"]
                 [hoplon/castra "3.0.0-alpha7"]]

  :aliases {"kaocha" ["with-profile" "test" "run" "-m" "kaocha.runner"]
            "browsertests" ["do" ["cljsbuild" "once"] ["kaocha" "browser"]]
            "cljtests" ["do" ["cljsbuild" "once"] ["kaocha"]]
            "cljtests-ci" ["do" ["cljsbuild" "once"] ["kaocha" "--reporter" "kaocha.report/documentation"]]
            "alltests" ["do" ["cljsbuild" "once"] ["kaocha"] ["doo" "once"]]
            "test-ancient" ["do" ["cljsbuild" "once"] ["kaocha"] ["doo" "once"]]}

  :plugins [;; [lein-figwheel "0.5.20"]
            [lein-shadow "0.3.1"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]
  :shadow-cljs {:source-paths ["src"]
                :nrepl {:port 9000}
                :dependencies [[cider/cider-nrepl "0.21.0"]
                               [binaryage/devtools "1.0.2"]
                               [lilactown/helix "0.0.13"]]
                :builds {:app {:target :browser
                               :output-dir "resources/public/js/compiled/out"
                               :modules {:main {:init-fn sustainability-shop-fe.core/init!}}
                               :devtools {:preloads [devtools.preload]
                                          :http-root "resources/public"
                                          :http-port 3468}}}}

  ;; Note that if a `deps.cljs` file is found in `:source-paths` it will take
  ;; priority over `:npm-deps` here in `project.clj` and be used instead.
  :npm-deps [[create-react-class "15.6.3"]
             [react "17.0.2"]
             [react-dom "17.0.2"]
             [leaflet "1.7.1"]
             [leaflet.locatecontrol "0.72.0"]]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                ;; The presence of a :figwheel configuration here
                ;; will cause figwheel to inject the figwheel client
                ;; into your build
                ;; :figwheel {:on-jsload "sustainability-shop-fe.core/on-js-reload"
                ;;            ;; :open-urls will pop open your application
                ;;            ;; in the default browser once Figwheel has
                ;;            ;; started and compiled your application.
                ;;            ;; Comment this out once it no longer serves you.
                ;;            :open-urls ["http://localhost:3460/index.html"]}

                :compiler {:main sustainability-shop-fe.core
                           :target :bundle
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/out/index.js"
                           :output-dir "resources/public/js/compiled/out"
                           :bundle-cmd {:none ["npx" "webpack" "--mode=development"]
                                        :default ["npx" "webpack"]}
                           :source-map-timestamp true
                           ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                           ;; https://github.com/binaryage/cljs-devtools
                           :preloads [devtools.preload]}}
               ;; This next build is a compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/sustainability_shop_fe.js"
                           :main sustainability-shop-fe.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  ;; :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;;:server-port 3460 ;; default
             ;; :server-ip "127.0.0.1"

             ;;:css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this

             ;; doesn't work for you just run your own server :) (see lein-ring)

             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you are using emacsclient you can just use
             ;; :open-file-command "emacsclient"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"

             ;; to pipe all the output to the repl
             ;; :server-logfile false
             ;;}

  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.20"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
