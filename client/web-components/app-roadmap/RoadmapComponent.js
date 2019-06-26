//Template RoadmapComponent
const roadmapComponent = document.createElement('template');
roadmapComponent.innerHTML = `
 <style>
    img {
        width: 100%;
        height: auto;
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
                display: flex;
                justify-content: space-around;
                align-items: center;
                background-color: grey;
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
 
 
 
 <div id="backEnd">
     <img id="myImg" src="img/roadmap_back.png" usemap="#image_back">
     <map name="image_back">
         <area alt="Scripting Language" title="Scripting Language" href="#scriptingLanguage" coords=",304,816,337" shape="rect">
         <area alt="Functional Language" title="Functional Language" href="#functionalLanguage" coords="421,350,817,384" shape="rect">
         <area alt="Python" title="Python" href="#python" coords="881,214,1021,251" shape="rect">
         <area alt="" title="" href="" coords="884,264,885,267" shape="rect">
         <area alt="" title="" href="" coords="1259,513,1277,575" shape="rect">
         <area alt="PHP" title="PHP" href="#php" coords="882,306,1021,337" shape="rect">
         <area alt="Node Js" title="Node Js" href="#nodeJs" coords="884,351,1018,384" shape="rect">
         <area alt="Package Manager" title="Package Manager" href="#packageManager" coords="662,764,1178,892" shape="rect">
         <area alt="Best Practice" title="Best Practice" href="#bestPractice" coords="52,962,625,1112" shape="rect">
         <area alt="Security" title="Security" href="#security" coords="699,926,1269,1028" shape="rect">
         <area alt="Package/Library Opensource Project" title="Package/Library Opensource Project" href="#package #opensource" coords="53,1133,625,1452" shape="rect">
         <area alt="Test" title="Test" href="#test" coords="678,1337,1267,1470" shape="rect">
         <area alt="Test" title="Test" href="#test" coords="680,1505,1271,1612" shape="rect">
         <area alt="DataBase" title="DataBase" href="#db" coords="-2,1548,244,1700" shape="rect">
         <area alt="Framwork" title="Framwork" href="#framework" coords="10,1857,643,1917" shape="rect">
         <area alt="Laravel Symfony" title="Laravel Symfony" href="#laravel #symfony" coords="694,1925,1256,1952" shape="rect">
         <area alt="express.js" title="express.js" href="#expessjs" coords="696,1959,957,1983" shape="rect">
         <area alt="DateBase" title="DateBase" href="#db" coords="688,2088,1277,2184" shape="rect">
         <area alt="Rest API" title="Rest API" href="#rest" coords="646,2320,1282,2425" shape="rect">
         <area alt="autentification system" title="autentification system" href="#token #authentification" coords="280,2376,489,2551" shape="rect">
         <area alt="search engine" title="search engine" href="#search" coords="10,2731,646,2870" shape="rect">
         <area alt="Docker" title="Docker" href="#docker" coords="635,2893,1264,2946" shape="rect">
         <area alt="Apache" title="Apache" href="#apache" coords="295,2948,478,2977" shape="rect">
         <area alt="Nginx" title="Ngnix" href="#ngnix" coords="293,2985,476,3013" shape="rect">
         <area alt="Web Server" title="Web Server" href="#server" coords="631,2961,1264,3069" shape="rect">
         <area alt="Web Sockets" title="Web Sockets" href="sockets" coords="636,3081,1272,3142" shape="rect">
         <area alt="GraphQL" title="GraphQL" href="graphQL" coords="633,3147,1264,3257" shape="rect">
     </map>
 </div>
 
 
 
 
 <div id="frontEnd">
     <img id="myImg" src="img/frontend.png" usemap="#image_front">
     <map name="image_front">
       <area alt="HTML" title="HTML" href="#HTML" coords="397,283,644,334" shape="rect">
       <area alt="CSS" title="CSS" href="#CSS" coords="395,346,645,391" shape="rect">
       <area alt="Javascript" title="Javascript" href="#Javascript" coords="395,404,643,451" shape="rect">
       <area alt="PackageManager" title="PackageManager" href="#PackageManager" coords="392,687,639,735" shape="rect">
       <area alt="CSSPre-processors" title="CSSPre-processors" href="#sass" coords="316,829,567,877" shape="rect">
       <area alt="CSSFrameworks" title="CSSFrameworks" href="#CSS" coords="409,962,656,1011" shape="rect">
       <area alt="CSSArchitecture" title="CSSArchitecture" href="#CSS" coords="298,1064,544,1110" shape="rect">
       <area alt="BuildTools" title="BuildTools" href="#JsTools" coords="137,1256,382,1303" shape="rect">
       <area alt="JavascriptFrameworks" title="JavascriptFrameworks" href="#JsFrameworks" coords="412,1648,636,1697" shape="rect">
       <area alt="CSSinJS" title="CSSinJS" href="#CSS" coords="484,1870,684,1917" shape="rect">
       <area alt="Tests" title="Tests" href="#Tests" coords="464,2019,651,2067" shape="rect">
       <area alt="ProgressiveWebApps" title="ProgressiveWebApps" href="#ProgressiveWebApps" coords="622,2169,847,2216" shape="rect">
       <area alt="TypeCheckers" title="TypeCheckers" href="#Typescript" coords="359,2361,584,2411" shape="rect">
       <area alt="Server Side Rendering" title="Server Side Rendering" href="#ServerSideRendering" coords="330,2577,574,2623" shape="rect">
       <area alt="StaticSiteGenerator" title="StaticSiteGenerator" href="#StaticSiteGenerator" coords="672,2597,918,2643" shape="rect">
       <area alt="DesktopApplications" title="DesktopApplications" href="#Desktop" coords="644,2710,852,2757" shape="rect">
       <area alt="MobileApplications" title="MobileApplications" href="#Mobile " coords="320,2794,529,2842" shape="rect">
       <area alt="WebAssembly" title="WebAssembly" href="#webassembly" coords="677,2881,884,2928" shape="rect">
     </map>
 </div>`;

class RoadmapComponent extends HTMLElement{
    /*todo: 
    add public
    */
    constructor(){
        super(); // call super() => HTMLElement
        this.root = this.attachShadow({'mode': 'open'});
        this.root.appendChild(roadmapComponent.content.cloneNode(true));
        this.sizeImg;//.offsetWidth // create instance in shadowdom
        //this.sizeImg.addEventListener('load', () => this.adaptToViewSize());
        this.toggle = this.root.getElementById('myonoffswitch');
        this.toggle.addEventListener('click', this.isChecked.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));        
    }

    onResize() {
        this.adaptToViewSize(this.isChecked());
        //console.log(this.sizeImg.naturalWidth)
    }
    isChecked() {
        let back = this.root.getElementById('backEnd');
        let front = this.root.getElementById('frontEnd');
        if (this.toggle.checked){
            back.style.display = "block";
            front.style.display = "none";
            return "backEnd";
        } else {
            back.style.display = "none" ;
            front.style.display = "block";
            return "frontEnd";
        }
    }
    adaptToViewSize(side) {
        let sideArea = roadmapComponent.content.getElementById(side);
        let origAreas = sideArea.querySelectorAll('area');
        let sideAreaAll = this.root.getElementById(side);
        let allArea = sideAreaAll.querySelectorAll('area');
        this.sizeImg = sideArea.querySelector("img");
        let widthOrigin = this.sizeImg.naturalWidth;
        let ratio = ((this.sizeImg.width) / widthOrigin)

        for (let [index, element] of allArea.entries()) {
            let tampon = origAreas[index].coords.split(",");
            let newVal = tampon.map((x) => parseInt(x) * ratio);
            element.coords = newVal.join(',');
        }

    }
    connectedCallback(){
       this.isChecked.bind(this)();
        //this.adaptToViewSize();
    }

    static Register() {
        customElements.define('app-roadmap', RoadmapComponent);
    }
}

RoadmapComponent.Register();