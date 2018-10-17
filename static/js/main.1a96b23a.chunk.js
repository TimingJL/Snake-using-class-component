(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,n,t){e.exports=t(380)},135:function(e,n,t){},140:function(e,n,t){},380:function(e,n,t){"use strict";t.r(n);var a=t(10),r=t.n(a),o=t(119),i=t.n(o),c=t(105),s=(t(135),t(101)),d=t(102),l=t(107),u=t(103),m=t(108),p=t(57),g="".concat("SNAKE_GAME","/INIT"),f="".concat("SNAKE_GAME","/SET_SNAKE_MOVING"),b="".concat("SNAKE_GAME","/SET_SNAKE_DIRECTION"),h="".concat("SNAKE_GAME","/SET_SNAKE_GAME_START"),k=t(111),y=t(112);function v(){var e=Object(k.a)(["\n    position: relative;\n    .snake-game__map-wrapper {\n        width: ","px;\n        height: ","px;\n        @media only screen and (max-width: 600px) {\n            width: calc(100vw - 20px);\n            height: calc(100vw - 20px);\n        }\n        margin-top: 20px;\n        display: grid;\n        grid-template-columns: repeat(",", 1fr);\n        grid-template-rows: repeat(",", 1fr);\n        background: #161616;\n    }\n    .snake-game__map-block-item {\n        border: 1px solid black;\n        box-sizing: border-box;\n    }\n    .snake-game__draw-snake-body {\n        background: white;\n        transition: all 0.1s;\n    }\n    .snake-game__draw-snake-food {\n        background: red;\n        border-radius: 100%;\n        animation: "," 2s infinite;\n    }\n    .snake-game__panel {\n        width: ","px;\n        height: ","px;\n        @media only screen and (max-width: 600px) {\n            width: calc(100vw - 20px);\n            height: calc(100vw - 20px);\n        }\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n    .snake-game__score {\n        color: white;\n        font-weight: 500;\n        font-size: 1.5em;\n        margin: 15px 0px;\n    }\n    .snake-game__start-game-btn {\n        width: 100px;\n        height: 40px;\n        background: black;\n        border: 2px solid white;\n        color: white;\n        border-radius: 20px;\n        font-size: 1.2em;\n        cursor: pointer;\n        outline: none;\n        &:hover {\n            color: black;\n            background: white;\n            transition: all 0.3s;\n        }\n    }\n    .snake-game__virtual-keyboard {\n        color: white;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 5em;\n        margin-top: 20px;\n        .virtual-keyboard__button {\n            cursor: pointer;\n            &:hover {\n                color: #ffd600;\n            }\n        }\n        .virtual-keyboard__wrapper-bottom {\n            display: flex;\n        }\n    }\n"]);return v=function(){return e},e}function w(){var e=Object(k.a)(["\n    0% {\n        -moz-box-shadow: 0 0 0 0 red;\n        box-shadow: 0 0 0 0 red;\n    }\n    70% {\n        -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);\n        box-shadow: 0 0 0 20px rgba(204,169,44, 0);\n    }\n    100% {\n        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n        box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n    }\n"]);return w=function(){return e},e}var x,_=Object(y.b)(w()),O=y.a.div(v(),600,600,30,30,_,600,600),S=function(e){return e.get("snakeGame")},E=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).handleOnKeyDown=function(e){(0,t.props.handleOnSetSnakeDirection)(e.code)},t.handleOnGameStartClick=function(){var e=t.props,n=e.snake,a=e.handleOnSetSnakeMoving;(0,e.handleOnSetGameStart)(),clearInterval(x),x=setInterval(function(){a()},n.get("speed"))},t.handleOnVirtualKeyboardClick=function(e){(0,t.props.handleOnSetSnakeDirection)(e.currentTarget.getAttribute("data-code"))},t}return Object(m.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleOnKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleOnKeyDown),clearInterval(x)}},{key:"render",value:function(){var e=this.props,n=e.snake,t=e.blocks,a=e.food,o=e.isStartGame,i=e.score;return r.a.createElement(O,{onKeyDown:this.handleOnKeyDown},!o&&r.a.createElement("div",{className:"snake-game__panel"},r.a.createElement("div",{className:"snake-game__score"},r.a.createElement("span",null,"Score: "),r.a.createElement("span",null,i)),r.a.createElement("button",{className:"snake-game__start-game-btn",onClick:this.handleOnGameStartClick},"Start")),r.a.createElement("div",{className:"snake-game__map-wrapper"},t.map(function(e){return e.map(function(e){return r.a.createElement("div",{key:e.get("id"),className:function(e,n,t){if(e.getIn(["headPosition","x"])===n.get("x")&&e.getIn(["headPosition","y"])===n.get("y"))return"snake-game__map-block-item snake-game__draw-snake-body";var a=e.get("body");if(a.size>1){if(a.find(function(e){return e.get("x")===n.get("x")&&e.get("y")===n.get("y")}))return"snake-game__map-block-item snake-game__draw-snake-body";if(n.get("x")===t.get("x")&&n.get("y")===t.get("y"))return"snake-game__draw-snake-food"}return"snake-game__map-block-item"}(n,e,a)})})})),r.a.createElement("div",{className:"snake-game__virtual-keyboard"},r.a.createElement("div",null,r.a.createElement("div",{"data-code":"ArrowUp",className:"virtual-keyboard__button fas fa-arrow-circle-up",onClick:this.handleOnVirtualKeyboardClick})),r.a.createElement("div",{className:"virtual-keyboard__wrapper-bottom"},r.a.createElement("div",{"data-code":"ArrowLeft",className:"virtual-keyboard__button fas fa-arrow-circle-left",onClick:this.handleOnVirtualKeyboardClick}),r.a.createElement("div",{"data-code":"ArrowDown",className:"virtual-keyboard__button fas fa-arrow-circle-down",onClick:this.handleOnVirtualKeyboardClick}),r.a.createElement("div",{"data-code":"ArrowRight",className:"virtual-keyboard__button fas fa-arrow-circle-right",onClick:this.handleOnVirtualKeyboardClick}))))}}]),n}(a.Component),j=Object(p.b)({snake:Object(p.a)(S,function(e){return e.get("snake")}),blocks:Object(p.a)(S,function(e){return e.get("blocks")}),food:Object(p.a)(S,function(e){return e.get("food")}),isStartGame:Object(p.a)(S,function(e){return e.get("isStartGame")}),score:Object(p.a)(S,function(e){return e.get("score")})}),A=Object(c.b)(j,function(e){return{handleOnSetSnakeMoving:function(){return e({type:f})},handleOnSetSnakeDirection:function(n){return e(function(e){return{type:b,payload:e}}(n))},handleOnSetGameStart:function(){return e({type:h})}}})(E),I=(t(140),function(e){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(106),G=t(42),K=t(76),C=t(125),M=t(114),D=t.n(M),T={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},z=function(){return{x:Math.floor(30*Math.random()),y:Math.floor(30*Math.random())}},P=D.a.range(0,30).map(function(e,n){return D.a.range(0,30).map(function(e,t){return{id:t+30*n,x:t,y:n}})}),J=Object(G.fromJS)({blocks:P,snake:{body:[],maxLength:2,headPosition:{x:0,y:0},direction:{x:1,y:0},speed:100},food:z(),isStartGame:!1,isPause:!1,score:0});var L=function(e){return e>29?0:e<0?30:e},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return J;case f:var t=e.getIn(["snake","direction"]),a=e.getIn(["snake","headPosition","x"]),r=e.getIn(["snake","headPosition","y"]),o=e.getIn(["snake","maxLength"]),i=e.getIn(["snake","body"]),c=a+t.get("x"),s=r+t.get("y"),d=i.find(function(e){return e.get("x")===c&&e.get("y")===s});return e.get("isPause")||!e.get("isStartGame")?e:d?e.set("isStartGame",!1):e.updateIn(["snake","body"],function(e){var n=e.push(Object(G.fromJS)({x:a,y:r}));return n.size>o&&(n=n.shift()),Object(G.fromJS)(n)}).updateIn(["snake","headPosition"],function(e){return e.set("x",L(e.get("x")+t.get("x"))).set("y",L(e.get("y")+t.get("y")))}).updateIn(["food"],function(e){return e.get("x")===a&&e.get("y")===r?Object(G.fromJS)(z()):e}).updateIn(["snake","maxLength"],function(n){var t=e.get("food");return t.get("x")===a&&t.get("y")===r?n+1:n}).updateIn(["score"],function(n){var t=e.get("food");return t.get("x")===a&&t.get("y")===r?n+1:n});case b:var l;return"Space"===n.payload?(l=!n.payload,e.updateIn(["isPause"],function(e){return!e})):l||!e.get("isStartGame")?e:e.updateIn(["snake","direction"],function(e){return T[n.payload]?-1*e.get("x")===T[n.payload].x&&-1*e.get("y")===T[n.payload].y?e:Object(G.fromJS)(T[n.payload]):e});case h:return J.set("isStartGame",!0);default:return e}};var R=t(127),B=t(383),U=t(384),W=t(126),$=[function(e,n){return e.ofType(g).switchMap(function(){return W.Observable.empty()})}],q=Object(N.a)($);var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(arguments.length>1&&arguments[1],new R.BehaviorSubject(B.a.apply(void 0,Object(N.a)(q)))),t=Object(U.a)(),a=[t],r=[K.a.apply(void 0,a)],o=K.c,i=Object(K.d)(Object(C.combineReducers)({snakeGame:V}),Object(G.fromJS)(e),o.apply(void 0,r));return t.run(function(e,t,a){return n.mergeMap(function(n){return n(e,t,a).catch(function(e,n){return setTimeout(function(){throw e},0),n})})}),i}();i.a.render(r.a.createElement(c.a,{store:F},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[128,2,1]]]);
//# sourceMappingURL=main.1a96b23a.chunk.js.map