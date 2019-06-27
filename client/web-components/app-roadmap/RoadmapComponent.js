//Template RoadmapComponent
const template = `
 <style>
 @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

    img {
        width: 100%;
        height: auto;
        border: 2px solid black;
        border-top: none;
    }
 </style>
<div id="roadmapNav">
     <h1>ROADMAP</h1>
     <div class="onoffswitch">
         <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
         <label class="onoffswitch-label" for="myonoffswitch">
             <span class="onoffswitch-inner"></span>
             <span class="onoffswitch-switch"></span>
         </label>
     <style>
            #roadmapNav{
                font-family: 'Open Sans', sans-serif;
                font-size: 150%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background-color: #d6d6d6;
                -webkit-box-shadow: 0px 3px 14px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 3px 14px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 3px 14px 0px rgba(0,0,0,0.75);
            }

             .onoffswitch {
                 position: relative; width: 90px;
                 -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
             }
             .onoffswitch-checkbox {
                 display: none;
             }
             .onoffswitch-label {
                 display: block; overflow: hidden; cursor: pointer;
                 border: 2px solid #999999; border-radius: 20px;
             }
             .onoffswitch-inner {
                 display: block; width: 200%; margin-left: -100%;
                 transition: margin 0.3s ease-in 0s;
             }
             .onoffswitch-inner:before, .onoffswitch-inner:after {
                 display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;
                 font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
                 box-sizing: border-box;
             }
             .onoffswitch-inner:before {
                 content: "Back";
                 padding-left: 10px;
                 background-color: #34A7C1; color: #FFFFFF;
             }
             .onoffswitch-inner:after {
                 content: "Front";
                 padding-right: 10px;
                 background-color: #EEEEEE; color: #999999;
                 text-align: right;
             }
             .onoffswitch-switch {
                 display: block; width: 18px; margin: 6px;
                 background: #FFFFFF;
                 position: absolute; top: 0; bottom: 0;
                 right: 56px;
                 border: 2px solid #999999; border-radius: 20px;
                 transition: all 0.3s ease-in 0s; 
             }
             .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
                 margin-left: 0;
             }
             .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
                 right: 0px; 
             }
     </style>
     </div>
</div>
 
 
 
<div id="backEnd" class="roadmap-container">
    <img id="myImg" src="img/backend.png" usemap="#image_back">
    <map name="image_back">
        <area alt="Scripting Language" title="Scripting Language" href="#scriptingLanguage" coords="419,304,816,337" shape="rect">
        <area alt="Functional Language" title="Functional Language" href="#functionalLanguage" coords="421,350,817,384" shape="rect">
        <area alt="Python" title="Python" href="#python" coords="881,214,1021,251" shape="rect">
        <area alt="Elixir" title="Elixir" href="#Elixir" coords="165,218,302,257" shape="rect">
        <area alt="Scala" title="Scala" href="#scala" coords="162,264,307,300" shape="rect">
        <area alt="Erlang" title="Erlang" href="#Erlang" coords="162,307,302,346" shape="rect">
        <area alt="Clojure" title="Clojure" href="#clojure" coords="165,355,306,395" shape="rect">
        <area alt="Haskell" title="Haskell" href="#haskell" coords="167,398,304,438" shape="rect">
        <area alt="Java" title="Java" href="#java" coords="165,444,306,482" shape="rect">
        <area alt=".NET" title=".NET" href="#.net" coords="164,490,306,528" shape="rect">
        <area alt="PHP" title="PHP" href="#php" coords="882,306,1021,337" shape="rect">
        <area alt="Node Js" title="Node Js" href="#nodeJs" coords="884,351,1018,384" shape="rect">
        <area alt="PHPUnit PHPSpec Codeseption" title="PHPUnit PHPSpec Codeseption" href="#phpUnit #phpSpec #Codeseption" coords="679,1166,1040,1195" shape="rect">
        <area alt="Mocha Chai Sinon Mockery Ava Jasmine NodeJs" title="Mocha Chai Sinon Mockery Ava Jasmine NodeJs" href="#Mocha #Chai #Sinon #Mockery #Ava #Jasmine #Nodejs" coords="678,1199,1150,1225" shape="rect">
        <area alt="Package Manager" title="Package Manager" href="#packageManager" coords="662,764,1178,892" shape="rect">
        <area alt="Best Practice" title="Best Practice" href="#bestPractice" coords="52,962,625,1112" shape="rect">
        <area alt="Security" title="Security" href="#security" coords="699,926,1269,1028" shape="rect">
        <area alt="Test" title="Test" href="#test" coords="678,1337,1267,1470" shape="rect">
        <area alt="Test" title="Test" href="#test" coords="680,1505,1271,1612" shape="rect">
        <area alt="Framwork" title="Framwork" href="#framework" coords="10,1857,643,1917" shape="rect">
        <area alt="Laravel Symfony" title="Laravel Symfony" href="#laravel #symfony" coords="694,1925,1256,1952" shape="rect">
        <area alt="express.js" title="express.js" href="#expessjs" coords="696,1959,957,1983" shape="rect">
        <area alt="Rest API" title="Rest API" href="#rest" coords="646,2320,1282,2425" shape="rect">
        <area alt="search engine" title="search engine" href="#search" coords="10,2731,646,2870" shape="rect">
        <area alt="Docker" title="Docker" href="#docker" coords="635,2893,1264,2946" shape="rect">
        <area alt="Apache" title="Apache" href="#apache" coords="295,2948,478,2977" shape="rect">
        <area alt="Nginx" title="Ngnix" href="#ngnix" coords="293,2985,476,3013" shape="rect">
        <area alt="Web Server" title="Web Server" href="#server" coords="631,2961,1264,3069" shape="rect">
        <area alt="Web Sockets" title="Web Sockets" href="#sockets" coords="636,3081,1272,3142" shape="rect">
        <area alt="GraphQL" title="GraphQL" href="#graphQL" coords="633,3147,1264,3257" shape="rect">
        <area alt="PHPUnit PHPSpec Codeseption" title="PHPUnit PHPSpec Codeseption" href="#phpUnit #phpSpec #Codeseption" coords="679,1166,1040,1195" shape="rect">
        <area alt="Mocha Chai Sinon Mockery Ava Jasmine NodeJs" title="Mocha Chai Sinon Mockery Ava Jasmine NodeJs" href="#Mocha #Chai #Sinon #Mockery #Ava #Jasmine #Nodejs" coords="678,1199,1150,1225" shape="rect">
        <area alt="Golang" title="Golang" href="#Golang" coords="692,1987,1075,2012" shape="rect">
        <area alt="PackageLibrary" title="PackageLibrary" href="#PackageLibrary" coords="65,1143,603,1269" shape="rect">
        <area alt="OpenSource" title="OpenSource" href="#OpenSource" coords="69,1271,604,1436" shape="rect">
        <area alt="Ruby" title="Ruby" href="#Ruby" coords="883,258,1021,293" shape="rect">
        <area alt="TypeScript" title="TypeScript" href="#TypeScript" coords="1030,345,1229,385" shape="rect">
        <area alt="Golang" title="Golang" href="#Golang" coords="884,409,1022,447" shape="rect">
        <area alt="Rust" title="Rust" href="#Rust" coords="884,457,1025,494" shape="rect">
        <area alt="Relational Data Base" title="Relational Data Base" href="#RelationalDataBase" coords="258,1542,626,1707" shape="rect">
        <area alt="Oracle" title="Oracle" href="#Oracle" coords="-1,1545,246,1579" shape="rect">
        <area alt="MySQL" title="MySQL" href="#MySQL" coords="-1,1591,121,1617" shape="rect">
        <area alt="Maria DB" title="Maria DB" href="#MariaDB" coords="129,1590,244,1617" shape="rect">
        <area alt="PostgreSQL" title="PostgreSQL" href="#PostgreSQL" coords="-1,1630,244,1658" shape="rect">
        <area alt="MSSQL" title="MSSQL" href="#MSSQL" coords="-1,1670,246,1700" shape="rect">
        <area alt="MongoDB" title="MongoDB" href="#MongoDB" coords="913,2101,1096,2128" shape="rect">
        <area alt="RethinkDB" title="RethinkDB" href="#RethinkDB" coords="1108,2098,1264,2129" shape="rect">
        <area alt="Cassandra" title="Cassandra" href="#Cassandra" coords="918,2141,1097,2171" shape="rect">
        <area alt="Couchbase" title="Couchbase" href="#Couchbase" coords="1104,2138,1265,2170" shape="rect">
        <area alt="DataBase" title="DataBase" href="#DataBase" coords="11,2016,645,2193" shape="rect">
        <area alt="Memcached" title="Memcached" href="#Memcached" coords="366,2234,547,2264" shape="rect">
        <area alt="Redis" title="Redis" href="#Redis" coords="366,2270,549,2299" shape="rect">
        <area alt="OAuth" title="OAuth" href="#OAuth" coords="279,2371,487,2407" shape="rect">
        <area alt="BasicAuthentication" title="BasicAuthentication" href="#BasicAuthentication" coords="280,2412,487,2441" shape="rect">
        <area alt="TokenAuthentication" title="TokenAuthentication" href="#TokenAuthentication" coords="280,2447,484,2478" shape="rect">
        <area alt="JWT" title="JWT" href="#JWT" coords="280,2483,490,2514" shape="rect">
        <area alt="OpenID" title="OpenID" href="#OpenID" coords="281,2517,487,2552" shape="rect">
        <area alt="RabbitMQ" title="RabbitMQ" href="#RabbitMQ" coords="780,2623,962,2646" shape="rect">
        <area alt="Kafka" title="Kafka" href="#Kafka" coords="781,2659,959,2685" shape="rect">
        <area alt="ElasticSearch" title="ElasticSearch" href="#ElasticSearch" coords="778,2745,962,2776" shape="rect">
        <area alt="Solr" title="Solr" href="#Solr" coords="778,2781,962,2814" shape="rect">
        <area alt="Sphinx" title="Sphinx" href="#Sphinx" coords="777,2816,959,2849" shape="rect">
        <area alt="Caddy" title="Caddy" href="#Caddy" coords="296,3017,477,3050" shape="rect">
        <area alt="MS IIS" title="MS IIS" href="#MSIIS" coords="294,3056,480,3090" shape="rect">
        <area alt="MessageBrokers" title="MessageBrokers" href="#MessageBrokers" coords="11,2577,648,2722" shape="rect">
        <area alt="GraphDataBases" title="GraphDataBases" href="#GraphDataBases" coords="106,3285,748,3400" shape="rect">
        <area alt="DDD SOAP Go Profiling StaticAnalysis" title="DDD SOAP Go Profiling StaticAnalysis" href="#DDD #SOAP #Go #Profiling #StaticAnalysis" coords="108,3413,741,3499" shape="rect">
    </map>
</div>
 
<div id="frontEnd" class="roadmap-container">
     <img id="myImg" src="img/frontend.png" usemap="#image_front">
     <map name="image_front">
        <area alt="LearnBasics" title="LearnBasics" href="#html" coords="24,223,291,260" shape="rect">
        <area alt="WritingSemantic" title="WritingSemantic" href="#html" coords="24,269,290,308" shape="rect">
        <area alt="BasicSEO" title="BasicSEO" href="#html" coords="25,317,292,353" shape="rect">
        <area alt="Accessibility" title="Accessibility" href="#html" coords="25,364,289,399" shape="rect">
        <area alt="LearnBasics" title="LearnBasics" href="#css" coords="726,289,1021,326" shape="rect">
        <area alt="MakingLayOuts" title="MakingLayOuts" href="#css" coords="726,335,1019,379" shape="rect">
        <area alt="MediaQueries" title="MediaQueries" href="#css" coords="727,386,1021,425" shape="rect">
        <area alt="LearnCSS3" title="LearnCSS3" href="#css" coords="726,435,1022,471" shape="rect">
        <area alt="Syntax-BasicsConstructs" title="Syntax-BasicsConstructs" href="#javascript" coords="28,428,290,462" shape="rect">
        <area alt="LearnDOM" title="LearnDOM" href="#DOM" coords="24,476,290,509" shape="rect">
        <area alt="#LearnFetchAPI-AJAX" title="#LearnFetchAPI-AJAX" href="#AJAX" coords="25,521,292,556" shape="rect">
        <area alt="ES6-ModularJS" title="ES6-ModularJS" href="#javascript" coords="24,569,293,604" shape="rect">
        <area alt="LearnConceptsJS" title="LearnConceptsJS" href="#javascript" coords="25,620,292,757" shape="rect">
        <area alt="Npm" title="Npm" href="#Npm" coords="619,531,722,566" shape="rect">
        <area alt="Yarn" title="Yarn" href="#Yarn" coords="621,577,723,611" shape="rect">
        <area alt="Sass" title="Sass" href="#sass" coords="54,787,195,822" shape="rect">
        <area alt="PostCSS" title="PostCSS" href="#postCss" coords="55,833,194,868" shape="rect">
        <area alt="Less" title="PostCSS" href="#less" coords="51,878,196,913" shape="rect">
        <area alt="Bootstrap" title="Bootstrap" href="#Bootstrap" coords="833,897,1024,934" shape="rect">
        <area alt="MaterializeCSS" title="MaterializeCSS" href="#MaterializeCSS" coords="835,944,1028,983" shape="rect">
        <area alt="Bulma" title="Bulma" href="#Bulma" coords="835,993,1026,1028" shape="rect">
        <area alt="SemanticUI" title="SemanticUI" href="#SemanticUI" coords="835,1041,1027,1076" shape="rect">
        <area alt="BEM" title="BEM" href="#BEM" coords="18,1027,162,1060" shape="rect">
        <area alt="OOCSS" title="OOCSS" href="#OOCSS" coords="19,1072,162,1108" shape="rect">
        <area alt="Smacss" title="Smacss" href="#Smacss" coords="20,1119,162,1150" shape="rect">
        <area alt="TaskRunners" title="TaskRunners" href="#taskRunners" coords="432,1259,564,1302" shape="rect">
        <area alt="NpmScripts" title="NpmScripts" href="#npm #script" coords="609,1325,779,1361" shape="rect">
        <area alt="Gulp" title="Gulp" href="#Gulp" coords="609,1372,778,1407" shape="rect">^
        <area alt="Linters-Formatters" title="Linters-Formatters" href="#linters-formatters" coords="19,1356,242,1401" shape="rect">
        <area alt="Prettier" title="Prettier" href="#Prettier" coords="24,1451,194,1486" shape="rect">
        <area alt="EsLint" title="EsLint" href="#EsLint-formatters" coords="25,1496,195,1528" shape="rect">
        <area alt="JsHint" title="JsHint" href="#JsHint" coords="25,1541,196,1575" shape="rect">
        <area alt="JsLint" title="JsLint" href="#JsLint" coords="24,1585,195,1621" shape="rect">
        <area alt="JsCs" title="JsCs" href="#JsCs" coords="23,1630,194,1665" shape="rect">
        <area alt="Module-Bundlers" title="Module-Bundlers" href="#module-bundlers" coords="366,1385,541,1428" shape="rect">
        <area alt="WebPack" title="WebPack" href="#WebPack" coords="561,1453,735,1486" shape="rect">
        <area alt="Parcel" title="Parcel" href="#Parcel" coords="562,1498,734,1532" shape="rect">
        <area alt="RollUp" title="RollUp" href="#RollUp" coords="561,1541,734,1576" shape="rect">
        <area alt="TypeScript" title="TypeScript" href="#TypeScript" coords="95,2339,295,2377" shape="rect">
        <area alt="Flow" title="Flow" href="#Flow" coords="96,2390,295,2432" shape="rect">
        <area alt="Next.js" title="Next.js" href="#NextJs" coords="-1,2464,90,2506" shape="rect">
        <area alt="After.js" title="After.js" href="#AfterJs" coords="4,2515,91,2553" shape="rect">
        <area alt="React.js" title="React.js" href="#ReactJs" coords="142,2493,258,2535" shape="rect">
        <area alt="Universal" title="Universal" href="#Universal" coords="-1,2576,95,2619" shape="rect">
        <area alt="Nuxt.js" title="Nuxt.js" href="#NuxtJs" coords="1,2627,95,2668" shape="rect">
        <area alt="Angular" title="Angular" href="#Angular" coords="146,2573,257,2618" shape="rect">
        <area alt="Vue.js" title="Vue.js" href="#VueJs" coords="142,2631,262,2671" shape="rect">
        <area alt="HTML" title="HTML" href="#HTML" coords="397,283,644,334" shape="rect">
        <area alt="CSS" title="CSS" href="#CSS" coords="395,346,645,391" shape="rect">
        <area alt="Javascript" title="Javascript" href="#Javascript" coords="395,404,643,451" shape="rect">
        <area alt="PackageManager" title="PackageManager" href="#PackageManager" coords="392,687,639,735" shape="rect">
        <area alt="CSSPre-processors" title="CSSPre-processors" href="#CssPrePocessors" coords="316,829,567,877" shape="rect">
        <area alt="CSSFrameworks" title="CSSFrameworks" href="#CSS #framework" coords="409,962,656,1011" shape="rect">
        <area alt="CSSArchitecture" title="CSSArchitecture" href="#CSS" coords="298,1064,544,1110" shape="rect">
        <area alt="BuildTools" title="BuildTools" href="#JsTools" coords="137,1256,382,1303" shape="rect">
        <area alt="JavascriptFrameworks" title="JavascriptFrameworks" href="#JsFrameworks" coords="412,1648,636,1697" shape="rect">
        <area alt="CSSinJS" title="CSSinJS" href="#CSS" coords="484,1870,684,1917" shape="rect">
        <area alt="Tests" title="Tests" href="#Tests" coords="464,2019,651,2067" shape="rect">
        <area alt="GatsbyJS" title="GatsbyJS" href="#GatsbyJS" coords="975,2597,1125,2638" shape="rect">
        <area alt="Electron" title="Electron" href="#Electron" coords="925,2675,1111,2710" shape="rect">
        <area alt="Proton Native" title="Proton Native" href="#ProtonNative" coords="927,2722,1108,2757" shape="rect">
        <area alt="Carlo" title="Carlo" href="#Carlo" coords="927,2767,1112,2811" shape="rect">
        <area alt="React Native" title="React Native" href="#ReactNative" coords="21,2775,162,2811" shape="rect">
        <area alt="NativeScript" title="NativeScript" href="#NativeScript" coords="17,2821,170,2860" shape="rect">
        <area alt="ProgressiveWebApps" title="ProgressiveWebApps" href="#ProgressiveWebApps" coords="622,2169,847,2216" shape="rect">
        <area alt="TypeCheckers" title="TypeCheckers" href="#Typescript" coords="359,2361,584,2411" shape="rect">
        <area alt="Server Side Rendering" title="Server Side Rendering" href="#ServerSideRendering" coords="330,2577,574,2623" shape="rect">
        <area alt="StaticSiteGenerator" title="StaticSiteGenerator" href="#StaticSiteGenerator" coords="672,2597,918,2643" shape="rect">
        <area alt="DesktopApplications" title="DesktopApplications" href="#Desktop" coords="644,2710,852,2757" shape="rect">
        <area alt="MobileApplications" title="MobileApplications" href="#Mobile " coords="320,2794,529,2842" shape="rect">
        <area alt="WebAssembly" title="WebAssembly" href="#webassembly" coords="677,2881,884,2928" shape="rect">
        <area alt="React" title="React" href="#ReactJS" coords="737,1616,881,1641" shape="rect">
        <area alt="Angular" title="Angular" href="#Angular" coords="739,1654,880,1681" shape="rect">
        <area alt="Vue" title="Vue" href="#Vue" coords="739,1690,881,1717" shape="rect">
        <area alt="Redux" title="Redux" href="#Redux" coords="867,1331,1036,1357" shape="rect">
        <area alt="Mobx" title="Mobx" href="#Mobx" coords="866,1371,1038,1398" shape="rect">
        <area alt="RxJs" title="RxJs" href="#RxJs" coords="970,1635,1145,1660" shape="rect">
        <area alt="Ngrx" title="Ngrx" href="#Ngrx" coords="971,1672,1142,1697" shape="rect">
        <area alt="Vuex" title="Vuex" href="#Vuex" coords="855,1780,1028,1807" shape="rect">
        <area alt="Styled-Components" title="Styled-Components" href="#cssInJs" coords="821,1858,1035,1885" shape="rect">
        <area alt="#CssModules" title="#CssModules" href="#cssInJs" coords="821,1897,1038,1923" shape="rect">
        <area alt="Emotion" title="Emotion" href="#Emotion" coords="823,1937,1038,1962" shape="rect">
        <area alt="Radium" title="Radium" href="#Radium" coords="824,1976,1036,2003" shape="rect">
        <area alt="Glamourous" title="Glamourous" href="#Glamourous" coords="824,2015,1037,2042" shape="rect">
        <area alt="Jest" title="Jest" href="#Jest" coords="190,1952,334,1980" shape="rect">
        <area alt="Enzyme" title="Enzyme" href="#Enzyme" coords="190,1990,334,2017" shape="rect">
        <area alt="Cypress" title="Cypress" href="#Cypress" coords="193,2027,335,2055" shape="rect">
        <area alt="Mocha" title="Mocha" href="#Mocha" coords="4,1942,147,1969" shape="rect">
        <area alt="Chai" title="Chai" href="#Chai" coords="5,1980,146,2007" shape="rect">
        <area alt="Ava" title="Ava" href="#Ava" coords="5,2019,147,2045" shape="rect">
        <area alt="Karma" title="Karma" href="#Karma" coords="5,2055,146,2083" shape="rect">
        <area alt="Jasmine" title="Jasmine" href="#Jasmine" coords="6,2093,148,2119" shape="rect">
        <area alt="Protactor" title="Protactor" href="#Protactor" coords="8,2132,149,2159" shape="rect">
        <area alt="Unit" title="Unit" href="#Unit" coords="18,2197,102,2225" shape="rect">
        <area alt="Integration" title="Integration" href="#Integration" coords="111,2198,219,2225" shape="rect">
        <area alt="Functional" title="Functional" href="#Functional" coords="231,2197,344,2224" shape="rect">
        <area alt="ProgressiveApp" title="ProgressiveApp" href="#progressiveApp" coords="623,2168,845,2215" shape="rect">
        <area alt="Storage" title="Storage" href="#Storage" coords="967,2097,1138,2124" shape="rect">
        <area alt="WebSockets" title="WebSockets" href="#WebSockets" coords="967,2134,1139,2161" shape="rect">
        <area alt="ServiceWorkers" title="ServiceWorkers" href="#ServiceWorkers" coords="966,2171,1137,2199" shape="rect">
        <area alt="Location" title="Location" href="#Location" coords="967,2208,1138,2235" shape="rect">
        <area alt="Notifications" title="Notifications" href="#Notifications" coords="966,2245,1140,2275" shape="rect">
        <area alt="DeviceOrientation" title="DeviceOrientation" href="#DeviceOrientation" coords="966,2282,1138,2310" shape="rect">
        <area alt="Payments" title="Payments" href="#Payments" coords="966,2320,1141,2350" shape="rect">
        <area alt="Credentials" title="Credentials" href="#Credentials" coords="966,2358,1138,2383" shape="rect">
        <area alt="PRPL-Pattern" title="PRPL-Pattern" href="#PRPL-Pattern" coords="660,2288,884,2315" shape="rect">
        <area alt="RailModel" title="RailModel" href="#RailModel" coords="661,2328,883,2354" shape="rect">
        <area alt="PerformanceMetrics" title="PerformanceMetrics" href="#PerformanceMetrics" coords="663,2365,882,2392" shape="rect">
        <area alt="UsingLightHouse" title="UsingLightHouse" href="#LightHouse" coords="658,2403,882,2428" shape="rect">
        <area alt="UsingDevTools" title="UsingDevTools" href="#DevTools" coords="660,2438,882,2466" shape="rect">
     </map>
</div>`;

 const roadmapComponent = document.createElement('template');
 roadmapComponent.innerHTML = template;

 /** to use the component, you have to listen the event 'nodeClick' on the <app-roadmap> tag.
  * the event returns a detail property containing a tag array used for the search service.
  * developped by kukvs666, Geovar and Dudy83.
  * 
  */
class RoadmapComponent extends HTMLElement{

    constructor(){
        super(); 
        this.root = this.attachShadow({'mode': 'open'});
        this.root.innerHTML = template;
        this.images = this.root.querySelectorAll('img');
        this.addEventListener('click', (e) => (e.path[0].tagName === 'AREA' ?  this.SendEventToDOM(e.path[0]) : undefined))
        Array.from(this.images).map((img) => img.addEventListener('load', () => this.adaptToViewSize()));
        this.toggle = this.root.getElementById('myonoffswitch');
        this.toggle.addEventListener('click', this.isChecked.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));        
    }

    onResize() {
        this.adaptToViewSize(this.isChecked());
    }

    isChecked() {
        let back = this.root.getElementById('backEnd');
        let front = this.root.getElementById('frontEnd');
        if (this.toggle.checked){
            back.style.display = "block";
            front.style.display = "none";
        } else {
            back.style.display = "none" ;
            front.style.display = "block";
        }
    }

    adaptToViewSize() {        
        let containers = Array.from(this.root.querySelectorAll('.roadmap-container'));
        let containersOrig = roadmapComponent.content.querySelectorAll('.roadmap-container');
        let displayedWidth = this.root.querySelectorAll('img')[this.toggle.checked ? 0 : 1].width;
        
        for (let idx in containers) {
            let div = containers[idx];
            let img = div.querySelector("img");
            let allArea = div.querySelectorAll('area');
            let origAreas = containersOrig[idx].querySelectorAll('area');
            let widthOrigin = img.naturalWidth;
            let ratio = (displayedWidth / widthOrigin)
            let coords = [];

            for (let [index, element] of allArea.entries()) {
                let tampon = origAreas[index].coords.split(",");
                let newVal = tampon.map((x) => parseInt(x) * ratio);
                coords.push([tampon, newVal]);
                element.coords = newVal.join(',');
            }     
        }
    }

    connectedCallback() {
        this.isChecked();
    }

    /** the SendEventToDOM() function create the 'nodeClick' event.
     */

    SendEventToDOM(elem) {
        let event = new CustomEvent('nodeClick', { 
            'detail': parseUrl(),
            'bubbles': true,
            'cancelable': true
        });

        function parseUrl() {
            let tagList = elem.href.split('#')
            
            for (let tag of tagList){
                tagList[tag] = tag.replace('%20', '');
            };

            tagList = tagList.slice(1, tagList.length);
            return tagList;
        } 
        this.dispatchEvent(event);
    }

    static Register() {
        customElements.define('app-roadmap', RoadmapComponent);
    }
}

RoadmapComponent.Register();