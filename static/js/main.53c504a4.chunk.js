(this["webpackJsonppast-present-future-watch"]=this["webpackJsonppast-present-future-watch"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,o=n(1),i=n.n(o),r=n(6),a=n.n(r),s=(n(11),n(12),n(0)),u=function(t){var e=t.children;return Object(s.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e})},l=n(2),h=n(4),f={size:380,arcSize:15,arcColor:"#3A3A3A",bgColor:"#2F2F2D",coverColor:"#0D0D0D",sliceColor:"#f1eded",hourFontsize:"2em",minuteFontsize:"1em",minHourColor:"#fff",pastfutureFontsize:"1.2em",presentFontsize:"1.2em",accentColor:"#b8ff49",paleColor:"#8B8B8B",innerHourLen:.9,innerMinuteLen:.7,innerCoverRad:.6,showingAngle:Math.PI/7.5,millInADay:864e5,millInAMin:6e4},j=[3*Math.PI/2+f.showingAngle,0,Math.PI,3*Math.PI/2-f.showingAngle],b=f.size/2;!function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(c||(c={}));var d,p=function(){var t=function(t,e){var n=0;return e===c.X&&(n=f.size/2+f.size/2*Math.cos(t)),e===c.Y&&(n=f.size/2+f.size/2*Math.sin(t)),n};return Object(s.jsxs)("div",{style:{width:"".concat(f.size),height:"".concat(f.size),position:"absolute"},children:[Object(s.jsxs)("svg",{style:{width:"".concat(f.size),height:"".concat(f.size)},children:[Object(s.jsx)("path",{style:{fill:"".concat(f.coverColor)},d:"M".concat(b,",").concat(b," L").concat(t(j[0],c.X),",").concat(t(j[0],c.Y)," A").concat(b,",").concat(b," 1 0,1 ").concat(t(j[1],c.X),",").concat(t(j[1],c.Y)," z")}),Object(s.jsx)("path",{style:{fill:"".concat(f.coverColor)},d:"M".concat(b,",").concat(b," L").concat(t(j[2],c.X),",").concat(t(j[2],c.Y)," A").concat(b,",").concat(b," 1 0,0 ").concat(t(j[1],c.X),",").concat(t(j[1],c.Y)," z")}),Object(s.jsx)("path",{style:{fill:"".concat(f.coverColor)},d:"M".concat(b,",").concat(b," L").concat(t(j[2],c.X),",").concat(t(j[2],c.Y)," A").concat(b,",").concat(b," 1 0,1 ").concat(t(j[3],c.X),",").concat(t(j[3],c.Y)," z")})]}),Object(s.jsx)("div",{style:{width:"".concat(f.size*f.innerCoverRad,"px"),height:"".concat(f.size*f.innerCoverRad,"px"),borderRadius:"50%",backgroundColor:"".concat(f.coverColor),position:"absolute",top:"".concat(f.size/2-f.size*f.innerCoverRad/2,"px"),left:"".concat(f.size/2-f.size*f.innerCoverRad/2,"px")}})]})},g=n(3),O=Object(o.memo)((function(t){var e=t.hour,n=t.index,c=Object(o.useRef)(null),i=Object(o.useState)(!1),r=Object(l.a)(i,2),a=r[0],u=r[1];Object(o.useEffect)((function(){setTimeout((function(){u(!0)}),100)}),[]);return Object(s.jsx)("span",{ref:c,style:Object(g.a)({color:"".concat(a?"":"rgba(0,0,0,0)"),position:"absolute",fontWeight:500},function(t,e){if(e){var n=f.size/2,c=n*f.innerHourLen,o=Math.PI/12,i=Math.PI/2+o*(t+1)%24,r=-Math.sin(i)*c+n;r+=-e.getBoundingClientRect().height/2;var a=-Math.cos(i)*c+n;a+=-e.getBoundingClientRect().width/2;var s=180*(i-Math.PI/2)/Math.PI;return{left:"".concat(a,"px"),top:"".concat(r,"px"),transform:"rotate(".concat(s,"deg)")}}}(n,c.current)),children:e})})),m=new Array(24).fill(null).map((function(t,e){return e%12+1})),x=function(t){var e=t.currTime,n=t.showTransition;return Object(s.jsx)("div",{style:{fontSize:f.hourFontsize,color:"".concat(f.minHourColor),width:"".concat(f.size,"px"),height:"".concat(f.size,"px"),position:"absolute",top:"0px",left:"0px",transform:"rotate(".concat(360-360*e/f.millInADay,"deg)"),transition:"".concat(n?"transform 500ms":"")},children:m.map((function(t,e){return Object(s.jsx)(O,{hour:t,index:e},e)}))})},v=Object(o.memo)((function(t){var e=t.minute,n=t.index,c=Object(o.useRef)(null),i=Object(o.useState)(!1),r=Object(l.a)(i,2),a=r[0],u=r[1];Object(o.useEffect)((function(){setTimeout((function(){u(!0)}),100)}),[]);return Object(s.jsx)("span",{ref:c,style:Object(g.a)({color:"".concat(a?"":"rgba(0,0,0,0)"),position:"absolute",fontWeight:500},function(t,e){if(e){var n=f.size/2,c=n*f.innerMinuteLen,o=Math.PI/12,i=Math.PI/2+o*(t+1)%24,r=-Math.sin(i)*c+n;r+=-e.getBoundingClientRect().height/2;var a=-Math.cos(i)*c+n;a+=-e.getBoundingClientRect().width/2;var s=180*(i-Math.PI/2)/Math.PI;return{left:"".concat(a,"px"),top:"".concat(r,"px"),transform:"rotate(".concat(s,"deg)")}}}(n,c.current)),children:String(e).padStart(2,"0")})})),z=new Array(24).fill(null).map((function(t,e){return(5*e+5)%60})),M=function(t){var e=t.currTime,n=t.showTransition;return Object(s.jsx)("div",{style:{fontSize:f.minuteFontsize,fontWeight:400,color:"".concat(f.minHourColor),width:"".concat(f.size,"px"),height:"".concat(f.size,"px"),position:"absolute",top:"0px",left:"0px",transform:"rotate(".concat((360-e/(f.millInADay/12)*360)%360,"deg)"),transition:"".concat(n?"transform 500ms":"")},children:z.map((function(t,e){return Object(s.jsx)(v,{minute:t,index:e},e)}))})},C=function(t,e,n,c,o){var i=t/2,r=i*e,a=Math.sin(n)*r+i;a+=-c.getBoundingClientRect().height/2;var s=Math.cos(n)*r+i;s+=-c.getBoundingClientRect().width/2;var u=180*(o+Math.PI)/Math.PI;return{left:"".concat(s,"px"),top:"".concat(a,"px"),transform:"rotate(".concat(u,"deg)")}},P=function(t){Object(h.a)(t);var e=Object(o.useRef)(null),n=Object(o.useState)(!1),c=Object(l.a)(n,2),i=c[0],r=c[1];return Object(o.useEffect)((function(){setTimeout((function(){r(!0)}),100)}),[]),Object(s.jsx)("span",{ref:e,style:Object(g.a)({position:"absolute",height:"2px",width:"".concat(.6*f.size,"px"),backgroundColor:"".concat(i?f.accentColor:"rgba(0,0,0,0)")},function(t){if(t)return C(f.size,-.35,Math.PI/2,t,Math.PI/2)}(e.current))})},T=function(t){var e=t.type,n=t.calculateProps,c=t.children,i=t.color,r=Object(o.useRef)(null),a=Object(o.useState)(!1),u=Object(l.a)(a,2),h=u[0],f=u[1];return Object(o.useEffect)((function(){setTimeout((function(){f(!0)}),100)}),[]),Object(s.jsx)("span",{ref:r,style:Object(g.a)({position:"absolute",color:"".concat(h?i:"rgba(0,0,0,0)")},n(e,r.current)),children:c})};!function(t){t[t.PAST=0]="PAST",t[t.PRESENT=1]="PRESENT",t[t.FUTURE=2]="FUTURE"}(d||(d={}));var w=Object(o.memo)((function(){var t=function(t,e){if(e)switch(t){case d.PAST:return C(f.size,.6,-3*Math.PI/4,e,-5*Math.PI/8);case d.PRESENT:return C(f.size,.6,Math.PI/2,e,Math.PI/2);case d.FUTURE:return C(f.size,.6,-Math.PI/4,e,-3*Math.PI/8+Math.PI)}};return Object(s.jsxs)("div",{style:{width:f.size,height:f.size,position:"absolute",textTransform:"uppercase",letterSpacing:"0.2em",fontWeight:500},children:[Object(s.jsx)(T,{calculateProps:t,type:d.PAST,color:f.paleColor,children:"past"}),Object(s.jsx)(T,{calculateProps:t,type:d.PRESENT,color:f.accentColor,children:"present"}),Object(s.jsx)(T,{calculateProps:t,type:d.FUTURE,color:f.paleColor,children:"future"}),Object(s.jsx)(P,{})]})})),y=function(t){Object(h.a)(t);var e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0).getTime(),c=Object(o.useState)(0),i=Object(l.a)(c,2),r=i[0],a=i[1],u=Object(o.useState)(!0),j=Object(l.a)(u,2),b=j[0],d=j[1];Object(o.useEffect)((function(){!function t(){setTimeout((function(){a((new Date).getTime()-n),requestAnimationFrame(t)}),1e3)}()}),[n]);var g=function(){"visible"===document.visibilityState?d(!0):d(!1)},O=function(){setTimeout((function(){d(!1)}),2e3)};return Object(o.useEffect)((function(){b&&O()}),[b]),Object(o.useEffect)((function(){return O(),document.addEventListener("visibilitychange",g),function(){document.removeEventListener("visibilitychange",g)}}),[]),Object(s.jsxs)("div",{style:{border:"".concat(f.arcSize,"px solid ").concat(f.arcColor),borderRadius:"50%",backgroundColor:"".concat(f.bgColor),width:f.size,height:f.size,position:"relative"},children:[Object(s.jsx)(x,{currTime:r,showTransition:b}),Object(s.jsx)(M,{currTime:r,showTransition:b}),Object(s.jsx)(p,{}),Object(s.jsx)(w,{})]})};var I=function(){return Object(s.jsx)(u,{children:Object(s.jsx)(y,{})})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root")),R()}},[[14,1,2]]]);
//# sourceMappingURL=main.53c504a4.chunk.js.map