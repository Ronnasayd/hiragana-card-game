(this["webpackJsonphiragana-card-game"]=this["webpackJsonphiragana-card-game"]||[]).push([[0],{16:function(r,n,e){r.exports=e(23)},23:function(r,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),t=e(12),c=e.n(t),l=e(7),i=e(3),s=e(1),u=e(2);function m(){var r=Object(s.a)(["\n  background: ",";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  backface-visibility: hidden;\n  transform: rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    color: ",";\n    /* color: white; */\n    font-size: 2rem;\n    text-align: center;\n  }\n"]);return m=function(){return r},r}function h(){var r=Object(s.a)(["\n  background: white;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  backface-visibility: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    color: black;\n    font-size: 2rem;\n    text-align: center;\n  }\n"]);return h=function(){return r},r}function d(){var r=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transition: all 0.8s;\n  transform-style: preserve-3d;\n  /* transform: rotateY(180deg); */\n"]);return d=function(){return r},r}function f(){var r=Object(s.a)(["\n  width: ","px;\n  height: ","px;\n  display: grid;\n\n  grid-template-columns: ",";\n\n  grid-template-rows: ",";\n  grid-gap: 3px;\n"]);return f=function(){return r},r}function p(){var r=Object(s.a)(["\n  color: white;\n  margin-bottom: 10px;\n"]);return p=function(){return r},r}function b(){var r=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return b=function(){return r},r}var g=u.b.div(b()),v=u.b.h1(p()),j=u.b.div(f(),(function(r){return r.size}),(function(r){return r.size}),(function(r){return"repeat(".concat(r.numberRowsAndColumns,",1fr)")}),(function(r){return"repeat(".concat(r.numberRowsAndColumns,",1fr)")})),O=u.b.div(d()),y=u.b.div(h()),k=u.b.div(m(),(function(r){return r.color||"blue"}),(function(r){return parseInt(r.color.match(/hsl\((.+),(.+)%,(.+)%\)/)[3])>40?"#000":"#fff"})),x=[{character:"\u3042",romani:"a",sound:"a.mp3",color:"hsl(3, 100%, 20%)"},{character:"\u3044",romani:"i",sound:"i.mp3",color:"hsl(3, 100%, 30%)"},{character:"\u3046",romani:"u",sound:"u.mp3",color:"hsl(3, 100%, 40%)"},{character:"\u3048",romani:"e",sound:"e.mp3",color:"hsl(3, 100%, 50%)"},{character:"\u304a",romani:"o",sound:"o.mp3",color:"hsl(3, 100%, 60%)"},{character:"\u304b",romani:"ka",sound:"ka.mp3",color:"hsl(221, 100%, 20%)"},{character:"\u304d",romani:"ki",sound:"ki.mp3",color:"hsl(221, 100%, 30%)"},{character:"\u304f",romani:"ku",sound:"ku.mp3",color:"hsl(221, 100%, 40%)"},{character:"\u3051",romani:"ke",sound:"ke.mp3",color:"hsl(221, 100%, 50%)"},{character:"\u3053",romani:"ko",sound:"ko.mp3",color:"hsl(221, 100%, 60%)"},{character:"\u3055",romani:"sa",sound:"sa.mp3",color:"hsl(147, 100%, 20%)"},{character:"\u3057",romani:"shi",sound:"shi.mp3",color:"hsl(147, 100%, 30%)"},{character:"\u3059",romani:"su",sound:"su.mp3",color:"hsl(147, 100%, 40%)"},{character:"\u305b",romani:"se",sound:"se.mp3",color:"hsl(147, 100%, 50%)"},{character:"\u305d",romani:"so",sound:"so.mp3",color:"hsl(147, 100%, 60%)"},{character:"\u305f",romani:"ta",sound:"ta.mp3",color:"hsl(181,100%,20%)"},{character:"\u3061",romani:"chi",sound:"chi.mp3",color:"hsl(181,100%,30%)"},{character:"\u3064",romani:"tsu",sound:"tsu.mp3",color:"hsl(181,100%,40%)"},{character:"\u3066",romani:"te",sound:"te.mp3",color:"hsl(181,100%,50%)"},{character:"\u3068",romani:"to",sound:"to.mp3",color:"hsl(181,100%,60%)"},{character:"\u306a",romani:"na",sound:"na.mp3",color:"hsl(61, 100%, 20%)"},{character:"\u306b",romani:"ni",sound:"ni.mp3",color:"hsl(61, 100%, 30%)"},{character:"\u306c",romani:"nu",sound:"nu.mp3",color:"hsl(61, 100%, 40%)"},{character:"\u306d",romani:"ne",sound:"ne.mp3",color:"hsl(61, 100%, 50%)"},{character:"\u306e",romani:"no",sound:"no.mp3",color:"hsl(61, 100%, 60%)"},{character:"\u306f",romani:"ha",sound:"ha.mp3",color:"hsl(327, 89%, 20%)"},{character:"\u3072",romani:"hi",sound:"hi.mp3",color:"hsl(327, 89%, 30%)"},{character:"\u3075",romani:"fu",sound:"fu.mp3",color:"hsl(327, 89%, 40%)"},{character:"\u3078",romani:"he",sound:"he.mp3",color:"hsl(327, 89%, 50%)"},{character:"\u307b",romani:"ho",sound:"ho.mp3",color:"hsl(327, 89%, 60%)"},{character:"\u307e",romani:"ma",sound:"ma.mp3",color:"hsl(25, 78%, 20%)"},{character:"\u307f",romani:"mi",sound:"mi.mp3",color:"hsl(25, 78%, 30%)"},{character:"\u3080",romani:"mu",sound:"mu.mp3",color:"hsl(25, 78%, 40%)"},{character:"\u3081",romani:"me",sound:"me.mp3",color:"hsl(25, 78%, 50%)"},{character:"\u3082",romani:"mo",sound:"mo.mp3",color:"hsl(25, 78%, 60%)"},{character:"\u3084",romani:"ya",sound:"ya.mp3",color:"hsl(294, 78%, 20%)"},{character:"\u3086",romani:"yu",sound:"yu.mp3",color:"hsl(294, 78%, 40%)"},{character:"\u3088",romani:"yo",sound:"yo.mp3",color:"hsl(294, 78%, 60%)"},{character:"\u3089",romani:"ra",sound:"ra.mp3",color:"hsl(96, 100%, 20%)"},{character:"\u308a",romani:"ri",sound:"ri.mp3",color:"hsl(96, 100%, 30%)"},{character:"\u308b",romani:"ru",sound:"ru.mp3",color:"hsl(96, 100%, 40%)"},{character:"\u308c",romani:"re",sound:"re.mp3",color:"hsl(96, 100%, 50%)"},{character:"\u308d",romani:"ro",sound:"ro.mp3",color:"hsl(96, 100%, 60%)"},{character:"\u308f",romani:"wa",sound:"wa.mp3",color:"hsl(249, 50%, 20%)"},{character:"\u3092",romani:"wo",sound:"wo.mp3",color:"hsl(249, 50%, 60%)"},{character:"\u3093",romani:"hm",sound:"hm.mp3",color:"hsl(0, 50%, 20%)"}],w=e(10),E=function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],[]),o=0;o<r*r/2;o++){var a=Math.floor(Math.random()*(n.length-o));e.push(n[a]),n.splice(a,1)}return e},S=function(r){var n=[];return r.forEach((function(e,o){var a=Object(w.a)({},e);a.id=o,n.push(a);var t=Object(w.a)({},e);t.id=o+r.length-1,n.push(t)})),n},z=function(r){for(var n=r.length,e=[],o=0;o<n;o++){var a=Math.floor(Math.random()*(n-o));e.push(r[a]),r.splice(a,1)}return e},T=function(){var r=Object(o.useState)(1),n=Object(i.a)(r,2),e=n[0],t=n[1],c=Object(o.useState)(null),s=Object(i.a)(c,2),u=s[0],m=s[1],h=Object(o.useState)(null),d=Object(i.a)(h,2),f=d[0],p=d[1],b=Object(o.useState)([]),w=Object(i.a)(b,2),T=w[0],Y=w[1],M=Object(o.useState)(0),C=Object(i.a)(M,2),A=C[0],R=C[1],I=Object(o.useState)([]),J=Object(i.a)(I,2),q=J[0],B=J[1],D=Object(o.useState)(0),F=Object(i.a)(D,2),G=F[0],H=F[1],K=Object(o.useState)(0),L=Object(i.a)(K,2),N=L[0],P=L[1];return Object(o.useEffect)((function(){if(P(10*A*G+N),0===A){var r=E(4,Object(l.a)(x),[]);r=S(r),r=z(r),Y(r)}A%8===0&&A>0&&setTimeout((function(){var r=E(4,Object(l.a)(x),[]);r=S(r),r=z(r),Y(r),H(0),q.forEach((function(r){r.style.transform="rotateY(0deg)"})),B([])}),3e3)}),[A]),Object(o.useEffect)((function(){null!==u&&null!==f&&(u.value.character===f.value.character&&u.value.id!==f.value.id&&-1===q.indexOf(u.ref)&&-1===q.indexOf(f.ref)?(H(G+1),R(A+1),B([].concat(Object(l.a)(q),[u.ref,f.ref]))):setTimeout((function(){u.ref!==f.ref&&(H(0),u.ref.style.transform="rotateY(0deg)",f.ref.style.transform="rotateY(0deg)")}),1e3))}),[f]),a.a.createElement(g,null,a.a.createElement(v,null,"Score: ".concat(N)),a.a.createElement(j,{numberRowsAndColumns:4,size:300},T.map((function(r,n){return a.a.createElement(O,{key:n+1,onClick:function(n){e>=2?(p({value:r,ref:n.currentTarget}),t(1)):(m({value:r,ref:n.currentTarget}),t(e+1)),-1===q.indexOf(n.currentTarget)&&(n.currentTarget.style.transform="rotateY(180deg)",n.currentTarget.querySelector("audio").play())}},a.a.createElement("audio",{src:"./sounds/".concat(r.sound),type:"audio/mpeg"}),a.a.createElement(y,null,a.a.createElement("span",null,n+1)),a.a.createElement(k,{color:r.color},a.a.createElement("span",null,r.character)))}))))};function Y(){var r=Object(s.a)(["\n*,border-style,html{\n  margin:0;\n  padding:0;\n  border:0;\n  box-sizing:border-box; \n  outline:none;\n}\n#root,body,html{\n  height:100%;\n}\n#root{\n  background:#121212;\n  font-size:10px;\n  font-family:sans-serif;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n}\n"]);return Y=function(){return r},r}var M=Object(u.a)(Y());c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null),a.a.createElement(M,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.587a045a.chunk.js.map