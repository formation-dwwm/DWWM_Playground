//Template RoadmapComponent
const roadmapComponent = document.createElement('template');
roadmapComponent.innerHTML = `
 <style>
    img {
        width: 100%;
        height: auto;
    }
 </style>
 <img id="myImg" src="img/roadmap_complete.png" usemap="#image_map">
 <map name="image_map">
     <area alt="HTML" title="HTML" href="#html" coords="446,298,717,352" shape="rect">
     <area alt="CSS" title="CSS" href="#css" coords="442,367,712,417" shape="rect">
     <area alt="Javascript" title="Javascript" href="#js" coords="445,433,713,483" shape="rect">
     <area alt="npm" title="npm" href="#npm" coords="693,571,804,607" shape="rect">
     <area alt="Package manager" title="Package manager" href="#npm" coords="441,747,711,794" shape="rect">
     <area alt="CSS Pre-processors" title="CSS Pre-processors" href="#sass" coords="358,902,628,951" shape="rect">
     <area alt="SASS" title="SASS" href="#sass" coords="63,851,222,889" shape="rect">
     <area alt="CSS frameworks" title="CSS frameworks" href="#css" coords="456,1050,727,1099" shape="rect">
     <area alt="Bootstrap" title="Bootstrap" href="#css" coords="931,975,1140,1019" shape="rect">
     <area alt="ESLint" title="ESLint" href="#javascript" coords="34,1634,222,1672" shape="rect">
     <area alt="React" title="React" href="#javascript" coords="821,1768,980,1800" shape="rect">
     <area alt="Angular" title="Angular" href="#javascript" coords="823,1813,979,1841" shape="rect">
     <area alt="Vue" title="Vue" href="#javascript" coords="823,1851,979,1881" shape="rect">
     <area alt="Testing your app" title="Testing your app" href="#" coords="521,2216,725,2264" shape="rect">
     <area alt="Jest" title="Jest" href="#javascript" coords="219,2144,378,2170" shape="rect">
     <area alt="Unit tests" title="Unit tests" href="#javascript" coords="29,2413,118,2443" shape="rect">
     <area alt="Integration tests" title="Integration tests" href="#javascript" coords="130,2414,248,2441" shape="rect">
     <area alt="Functional tests" title="Functional tests" href="#javascript" coords="262,2413,382,2442" shape="rect">
     <area alt="Typescript" title="Typescript" href="#javascript" coords="115,2573,328,2609" shape="rect">
     <area alt="Using dev tools" title="Using dev tools" href="#html #css #javascript" coords="740,2679,982,2709" shape="rect">
     <area alt="npm scripts" title="npm scripts" href="#npm" coords="679,1449,866,1487" shape="rect">
     <area alt="React" title="React" href="#javascript" coords="164,2740,288,2782" shape="rect">
     <area alt="Angular" title="Angular" href="#javascript" coords="167,2833,288,2871" shape="rect">
     <area alt="Vue" title="Vue" href="#javascript" coords="167,2889,288,2930" shape="rect">
     <area alt="Web Assembly" title="Web Assembly" href="#javascript" coords="757,3171,982,3217" shape="rect">
     <area alt="PHP" title="PHP" href="#php" coords="897,3780,1036,3816" shape="rect">
     <area alt="Node" title="Node" href="#javascript" coords="901,3828,1036,3863" shape="rect">
     <area alt="Typescript" title="Typescript" href="#javascript" coords="1045,3826,1246,3860" shape="rect">
     <area alt="" title="" href="#mysql #database" coords="20,5066,134,5094" shape="rect">
     <area alt="Redis" title="Redis" href="#database" coords="382,5745,563,5772" shape="rect">
     <area alt="Apache" title="Apache" href="#Server" coords="313,6425,491,6451" shape="rect">
     <area alt="" title="" href="" coords="418,6636,419,6637" shape="rect">
 </map>`;

class RoadmapComponent extends HTMLElement{
    /*todo: 
    add public
    */
    constructor(){
        super(); // call super() => HTMLElement
        this.root = this.attachShadow({'mode': 'open'});
        this.root.appendChild(roadmapComponent.content.cloneNode(true));
        this.sizeImg = this.root.getElementById('myImg');//.offsetWidth // create instance in shadowdom

        window.addEventListener('resize', this.onResize.bind(this));        
    }

    onResize() {
        this.adaptToViewSize();
        console.log(this.sizeImg.width)
    }

    adaptToViewSize() {
        let origAreas = roadmapComponent.content.querySelectorAll('area');
        let allArea = this.root.querySelectorAll('area');
        let widthOrigin = 1300;
        let ratio = ((this.sizeImg.width) / widthOrigin)


        for (let [index, element] of allArea.entries()) {
            let tampon = origAreas[index].coords.split(",");
            let newVal = tampon.map((x) => parseInt(x) * ratio);
            element.coords = newVal.join(',');
        }

    }
    connectedCallback(){
        this.adaptToViewSize();
    }

    static Register() {
        customElements.define('app-roadmap', RoadmapComponent);
    }
}

RoadmapComponent.Register();