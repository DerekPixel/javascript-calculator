(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{10:function(t,e,a){},12:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),l=a(4),i=a.n(l),u=(a(9),a(2)),r=(a(10),a(0)),o=function(t){var e=t.handleNumber,a=t.handleOperations,n=t.handleEvalulation,c=t.handleClear;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{id:"one",value:1,onClick:e,children:"1"}),Object(r.jsx)("button",{id:"two",value:2,onClick:e,children:"2"}),Object(r.jsx)("button",{id:"three",value:3,onClick:e,children:"3"}),Object(r.jsx)("button",{id:"four",value:4,onClick:e,children:"4"}),Object(r.jsx)("button",{id:"five",value:5,onClick:e,children:"5"}),Object(r.jsx)("button",{id:"six",value:6,onClick:e,children:"6"}),Object(r.jsx)("button",{id:"seven",value:7,onClick:e,children:"7"}),Object(r.jsx)("button",{id:"eight",value:8,onClick:e,children:"8"}),Object(r.jsx)("button",{id:"nine",value:9,onClick:e,children:"9"}),Object(r.jsx)("button",{id:"zero",value:0,onClick:e,children:"0"}),Object(r.jsx)("button",{id:"decimal",value:".",onClick:e,children:"."}),Object(r.jsx)("button",{id:"add",value:"+",onClick:a,children:"+"}),Object(r.jsx)("button",{id:"subtract",value:"-",onClick:a,children:"-"}),Object(r.jsx)("button",{id:"multiply",value:"*",onClick:a,children:"*"}),Object(r.jsx)("button",{id:"divide",value:"/",onClick:a,children:"/"}),Object(r.jsx)("button",{id:"equals",value:"=",onClick:n,children:"="}),Object(r.jsx)("button",{id:"clear",onClick:c,children:"AC"})]})},s=function(t){var e=t.input;return Object(r.jsx)("div",{id:"display",children:e})},d=function(t){var e=t.results;return Object(r.jsxs)("div",{children:["Results:",e]})};var j=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),a=e[0],c=e[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),j=i[0],v=i[1],b=Object(n.useState)(""),g=Object(u.a)(b,2),h=g[0],O=g[1],x=Object(n.useState)(""),f=Object(u.a)(x,2),C=f[0],k=f[1],p=Object(n.useState)("0"),S=Object(u.a)(p,2),m=S[0],F=S[1],N=Object(n.useState)(!1),w=Object(u.a)(N,2),y=w[0],E=w[1],A=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=parseFloat(j);if(e="-"===h?Math.abs(parseFloat(a)):parseFloat(a),!isNaN(e)&&!isNaN(l))switch(h){case"+":var i=l+e;console.log(i),F(i),k("".concat(i).concat(n)),v("".concat(i)),c(""),O(n);break;case"-":var u=l-e;F(u),k("".concat(u).concat(n)),v("".concat(u)),c(""),O(n);break;case"/":var r=l/e;F(r),k("".concat(r).concat(n)),v("".concat(r)),c(""),O(n);break;case"*":var o=l*e;F(o),k("".concat(o).concat(n)),v("".concat(o)),c(""),O(n)}t&&E(!0)};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{results:m}),Object(r.jsx)(s,{input:C}),Object(r.jsx)(o,{handleNumber:function(t){return function(t){if(/^(0)+/g.test(t.target.value)){if(/^(0)+/g.test(a))return;y?(E(!1),k(t.target.value),c(t.target.value)):(k("0"===C?a+t.target.value:C+t.target.value),c(a+t.target.value))}if(/(\.)/g.test(t.target.value)){if(/(\.)/g.test(a))return;y?(E(!1),k(t.target.value),c(t.target.value)):(k("0"===C?a+t.target.value:C+t.target.value),c(a+t.target.value))}y?(E(!1),k(t.target.value),c(t.target.value)):(k("0"===C?a+t.target.value:C+t.target.value),c(a+t.target.value))}(t)},handleOperations:function(t){return function(t){void 0!==t&&(/(\d+)\.?(\d+)?[+\*/-]+(\d+)\.?(\d+)?/g.test(C)?A(!1,t.target.value):/[-]/g.test(t.target.value)&&/[+\*/]/g.test(h)?(E(!1),k(C+t.target.value),v(C+t.target.value),c("-")):(E(!1),k(C+t.target.value),v(C+t.target.value),c(""),O(t.target.value)))}(t)},handleEvalulation:function(){return A(!0)},handleClear:function(){return v(""),c(""),O(""),k("0"),void F("0")}})]})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,l=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),l(t),i(t)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),v()},9:function(t,e,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.f957515b.chunk.js.map