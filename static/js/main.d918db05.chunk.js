(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n(5),c=n.n(r),a=n(2),i=n.n(a),o=n(3),l=n(6),u=n(0);function p(){return Object(s.useEffect)((function(){var t={text1:document.getElementById("text1"),text2:document.getElementById("text2")},e=["Loading","please","wait",":)"],n=e.length-1,s=new Date,r=0,c=.25;function a(){r-=c,c=0;var s=r/.5;s>1&&(c=.25,s=1),function(s){t.text2.style.filter="blur(".concat(Math.min(8/s-8,100),"px)"),t.text2.style.opacity="".concat(100*Math.pow(s,.4),"%"),s=1-s,t.text1.style.filter="blur(".concat(Math.min(8/s-8,100),"px)"),t.text1.style.opacity="".concat(100*Math.pow(s,.4),"%"),t.text1.textContent=e[n%e.length],t.text2.textContent=e[(n+1)%e.length]}(s)}t.text1.textContent=e[n%e.length],t.text2.textContent=e[(n+1)%e.length],function e(){requestAnimationFrame(e);var i=new Date,o=c>0,l=(i-s)/1e3;s=i,(c-=l)<=0?(o&&n++,a()):(r=0,t.text2.style.filter="",t.text2.style.opacity="100%",t.text1.style.filter="",t.text1.style.opacity="0%")}()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"container",children:[Object(u.jsx)("span",{id:"text1"}),Object(u.jsx)("span",{id:"text2"})]}),Object(u.jsx)("svg",{id:"filters",children:Object(u.jsx)("defs",{children:Object(u.jsx)("filter",{id:"threshold",children:Object(u.jsx)("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"1 0 0 0 0\r 0 1 0 0 0\r 0 0 1 0 0\r 0 0 0 255 -140"})})})})]})}function j(t){var e,n=t.post;return Object(u.jsxs)("li",{className:"post-card",children:[Object(u.jsxs)("p",{className:"post-name",children:[Object(u.jsxs)("a",{href:n.url,className:"post-title",children:[n.title," "]}),f(n.url)]}),Object(u.jsx)("p",{className:"post-info",children:Object(u.jsxs)("span",{className:"font-grey",children:[(e=n.score,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("i",{className:"fas fa-thumbs-up"})," ",e," points"]}))," | ",x(n.by)," | ",h(n.time)," | ",n.descendants," comments"]})})]},n.id)}function h(t){var e=new Date,n=Math.ceil(Math.abs(e-new Date(1e3*t))/36e5);return Object(u.jsxs)("span",{title:e.toISOString().split(".")[0],span:!0,className:"post-url cursor-pointer",children:[n," hours ago"]})}function x(t){var e="https://news.ycombinator.com/user?id=".concat(t);return Object(u.jsx)("a",{className:"post-author",href:e,children:t})}function f(t){var e=new URL(t).origin;return Object(u.jsxs)("a",{href:t,className:"font-grey post-url",children:["(",e,")"]})}function d(t){var e=t.posts;return Object(u.jsx)("ol",{children:e.map((function(t){if(void 0!=t.url)return Object(u.jsx)(j,{post:t})}))})}var b="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";function m(t){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(i.a.mark((function t(e){var n,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(i.a.mark((function t(e){var n,s,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map((function(t){return fetch("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json?print=pretty"))})),t.next=3,Promise.all(n);case 3:return s=t.sent,t.next=6,Promise.all(s.map((function(t){return t.json()})));case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w=function(){var t=Object(s.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(s.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(b);case 2:return(e=t.sent).length>25&&(e=e.slice(0,25)),t.next=6,v(e);case 6:n=t.sent,r(n);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{className:"",children:[Object(u.jsxs)("h1",{className:"row",children:[" ",Object(u.jsx)("span",{className:"brand",children:"F"})," Hacker News"]}),Object(u.jsxs)("div",{className:"",children:[0==n.length&&Object(u.jsx)(p,{}),n&&Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(d,{posts:n})})]})]})};n(13);c.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d918db05.chunk.js.map