(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t(9),s=t(7),i=t(19),u=t.n(i),o=t(20),m=t(22),E=t(8),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"User",age:27},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD":e={state:e.result+a.payload};break;case"DrawerButtonClicked":break;case"SET_NAME_FULFILLED":e=Object(E.a)({},e,{name:a.payload});break;case"SET_AGE":e=Object(E.a)({},e,{age:a.payload})}return e},p=t(13),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{result:1,lastValues:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD":e=Object(E.a)({},e,{result:e.result+a.payload,lastValues:Object(p.a)(e.lastValues).concat([a.payload])});break;case"SUBTRACT":e=Object(E.a)({},e,{result:e.result-a.payload,lastValues:Object(p.a)(e.lastValues).concat([a.payload])})}return e},h=Object(s.d)(Object(s.c)({user:b,math:d}),Object(s.a)(u.a,o.a,Object(m.a)())),v=t(2),f=t(3),w=t(5),O=t(4),g=t(6),y=(t(31),function(e){return r.a.createElement("button",{className:"nav-drawer-btn",onClick:!0},r.a.createElement("div",{className:"nav-drawer-btn__line"}),r.a.createElement("div",{className:"nav-drawer-btn__line"}),r.a.createElement("div",{className:"nav-drawer-btn__line"}))}),j=function(e){return r.a.createElement("div",{className:"navbar-menu-items"},r.a.createElement("ul",null,r.a.createElement("li",{className:"navbar-menu"},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",{className:"navbar-menu"},r.a.createElement("a",{href:"/"},"News")),r.a.createElement("li",{className:"navbar-menu"},r.a.createElement("a",{href:"/"},"Screener"))))},N=(t(33),function(e){var a=e.greeting;return e.isShow?r.a.createElement("h1",null,a):null}),k=function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(w.a)(this,Object(O.a)(a).call(this,e))).toggleShow=function(){t.setState(function(e){return{isShow:!e.isShow}})},t.openMenu=function(){t.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},t.state={click:!0,sideDrawerOpen:!1,isShow:!0},t}return Object(g.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navigation-container"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-drawer"},r.a.createElement(y,{onClick:function(e){return console.log("I've been clicked")}})),r.a.createElement("div",{className:"navbar-logo"},r.a.createElement("a",{href:"/"},"TickerFinder")),r.a.createElement(j,{className:this.state.isShow?"navbar-menu-items open":"navbar-menu-items"})),r.a.createElement("button",{onClick:this.toggleShow,type:"button"},"Toggle Show"),r.a.createElement(N,{greeting:"hello world",isShow:this.state.isShow}))}}]),a}(n.Component),S=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"The User Page"),r.a.createElement("p",null,"User Name: ",e.username))},D=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"The Main Page"),r.a.createElement("button",{onClick:function(){return e.changeUsername()}},"Change the Username"))};t(35);var T=t(21),C=function(e){function a(){return Object(v.a)(this,a),Object(w.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(T.a,{url:"https://api.iextrading.com/1.0/stock/aapl/quote?displayPercent=true",method:"GET"},function(e){var a=e.data;return r.a.createElement("view",null,r.a.createElement("text",null,a.name,r.a.createElement("h1",null,"symbol"),r.a.createElement("p",null,a.symbol),r.a.createElement("p",null,a.companyName),r.a.createElement("p",null,a.primaryExchange),r.a.createElement("p",null,a.marketCap),r.a.createElement("p",null,a.symbol),r.a.createElement("p",null,a.open)))})}}]),a}(n.Component),_=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(w.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},t.openMenu=function(){t.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},t}return Object(g.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("html",null,r.a.createElement("header",{className:"application"},r.a.createElement(k,{title:"TickerFinder"})),r.a.createElement("body",null,"Body",r.a.createElement("main",{className:"application-main"},r.a.createElement("p",null,"Main"),r.a.createElement("div",{className:"container"},r.a.createElement(C,null),r.a.createElement(D,{changeUsername:function(){return e.props.setName("data")}}),r.a.createElement(S,{username:this.props.user.name}))),r.a.createElement("small",null,"@2018 by aabarbosa.")))}}]),a}(n.Component),U=Object(c.b)(function(e){return{user:e.user,math:e.math}},function(e){return{setName:function(a){e(function(e){return{type:"SET_NAME",payload:new Promise(function(a,t){setTimeout(function(){a(e)},2e3)})}}(a))}}})(_);Object(l.render)(r.a.createElement(c.a,{store:h},r.a.createElement(U,null)),window.document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.cfba0035.chunk.js.map