(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Earth",image:"/images/earth.png"},{id:2,name:"Jupiter",image:"/images/jupiter.png"},{id:3,name:"Mars",image:"/images/mars.png"},{id:4,name:"Mercury",image:"/images/mercury.png"},{id:5,name:"Neptune",image:"/images/neptune.png"},{id:6,name:"Saturn",image:"/images/saturn.png"},{id:7,name:"Sun",image:"/images/sun.png"},{id:8,name:"Uranus",image:"/images/uranus.png"},{id:9,name:"Venus",image:"/images/venus.png"}]},,,function(e,n,t){e.exports=t(29)},,,,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(2),c=t.n(i),o=(t(15),t(3)),m=t(4),s=t(7),l=t(5),u=t(8);t(17);var p=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Deep Space Clicky Game"),r.a.createElement("p",null,"Game Score: ",e.gameScore," | Top Score: ",e.topScore))};t(19);var g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/packs/space-85",title:"monkik"},"monkik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY")," | App made by ",r.a.createElement("a",{href:"https://github.com/JohnKing93"},"Johnny King")))};t(21);var d=function(e){return r.a.createElement("main",null,e.children)};t(23);var f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.children))};t(25);var h=function(e){return r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"spacing",onClick:function(){return e.handleOnClick(e.id)}},r.a.createElement("img",{alt:e.name,src:e.image})))},v=t(6),k=(t(27),function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(r)))).state={planets:v,gameScore:0,topScore:0},t.randomizeOrder=function(e){return e.sort(function(){return.5-Math.random()})},t.resetClicks=function(e){return e.map(function(e){return e.clicked=!1,e})},t.continueGame=function(e){console.log("Continue Game"),t.setState({planets:t.randomizeOrder(e),gameScore:t.state.gameScore+1})},t.gameOver=function(e){console.log("Game Over");var n=t.resetClicks(e),a=t.state.gameScore>t.state.topScore?t.state.gameScore:t.state.topScore;t.setState({planets:t.randomizeOrder(n),gameScore:0,topScore:a})},t.handleOnClick=function(e){var n=!1,a=t.state.planets.map(function(t){return t.id===e&&(t.clicked?n=!0:t.clicked=!0),t});n?t.gameOver(a):t.continueGame(a)},t}return Object(u.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.resetClicks(this.state.planets);this.setState({planets:this.randomizeOrder(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(d,null,r.a.createElement(p,{gameScore:this.state.gameScore,topScore:this.state.topScore}),r.a.createElement(f,null,this.state.planets.map(function(n){return r.a.createElement(h,{id:n.id,key:n.id,name:n.name,image:n.image,handleOnClick:e.handleOnClick})})),r.a.createElement(g,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.b20f65c1.chunk.js.map