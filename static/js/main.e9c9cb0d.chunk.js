(this.webpackJsonpmomostreamoverlays=this.webpackJsonpmomostreamoverlays||[]).push([[0],{52:function(t,e,c){},87:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(42),a=c.n(r),o=c(1);function i(t){var e=t.data.chapter;return Object(o.jsx)("div",{className:"intro",children:Object(o.jsx)("h1",{className:"",children:e})})}c(52);var s=c(46),j=c(2),h=c(16),u=c(43),d=c.n(u);function l(t){var e=t.data,c=e.topic,r=e.chapter,a=e.section,i=Object(n.useState)(!0),s=Object(h.a)(i,2),j=s[0],u=s[1];return Object(n.useEffect)((function(){u(!0),setTimeout((function(){u(!1)}),5e3)}),[c,r,a]),Object(o.jsxs)("div",{className:d()("overlay",j&&"switching"),children:[Object(o.jsx)("h1",{children:c}),Object(o.jsx)("h2",{children:r}),Object(o.jsx)("h3",{children:a})]})}var p=c(44),b=c.n(p),f=[{topic:"ReactJs Tutorial",chapters:[{chapter:"Introduction"},{chapter:"Components"},{chapter:"Props"},{chapter:"States"},{chapter:"UseEffect"},{chapter:"Project 1 (Quiz App)"},{chapter:"useRef",sections:["Introduction","Usage","forwardRef"]}]}];function O(t){var e=t.onModify,c=f[0];return Object(o.jsxs)("div",{className:"control",children:[Object(o.jsx)("h1",{className:"",children:c.topic}),Object(o.jsx)("ol",{children:c.chapters.map((function(t){var n;return Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{onClick:function(){return e({topic:c.topic,chapter:t.chapter})},children:t.chapter}),t.sections&&Object(o.jsx)("ol",{children:null===(n=t.sections)||void 0===n?void 0:n.map((function(n){return Object(o.jsx)("li",{onClick:function(){return e({topic:c.topic,chapter:t.chapter,section:n})},children:n})}))})]})}))})]})}function m(){var t=function(t){var e=Object(n.useState)({}),c=Object(h.a)(e,2),r=c[0],a=c[1],o=Object(n.useRef)(null);return Object(n.useEffect)((function(){return o.current=b()("https://momo-stream-socket.herokuapp.com/",{query:{roomId:t}}),o.current.emit("get"),o.current.on("currentData",(function(t){a(t)})),o.current.on("newData",(function(t){a(t)})),function(){o.current.disconnect()}}),[t]),{data:r,modifyData:function(t){var e=t.topic,c=t.chapter,n=t.section;o.current.emit("set",{topic:e,chapter:c,section:n})}}}("publicRoom"),e=t.data,c=t.modifyData;return Object(o.jsx)(s.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/intro",children:Object(o.jsx)(i,{data:e})}),Object(o.jsx)(j.a,{path:"/overlay",children:Object(o.jsx)(l,{data:e})}),Object(o.jsx)(j.a,{path:"/control",children:Object(o.jsx)(O,{data:e,onModify:c})}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsx)("div",{children:"Hello"})})]})})}var x=document.getElementById("root");a.a.render(Object(o.jsx)(n.StrictMode,{children:Object(o.jsx)(m,{})}),x)}},[[87,1,2]]]);
//# sourceMappingURL=main.e9c9cb0d.chunk.js.map