(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{24:function(e,t,c){},43:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),s=c.n(a),r=c(17),i=c.n(r),l=(c(24),c(3)),o=c.n(l),j=c(6),u=c(7),b=c(18),d=c.n(b),p=(c(43),function(e){var t=e.picture,c=t.urls,a=t.location.name,s=t.user,r=s.profile_image,i=s.username,l=s.updated_at;return console.log(t),Object(n.jsx)("section",{className:"section",children:void 0===t?Object(n.jsx)("p",{className:"loading",children:"loading..."}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{className:"picture_info",children:[Object(n.jsx)("i",{className:"fas fa-map-marker-alt"}),"\xa0",a]}),Object(n.jsx)("p",{className:"bakImg",children:Object(n.jsx)("img",{src:c.regular,alt:a})}),Object(n.jsxs)("div",{className:"pic_info",children:[Object(n.jsx)("p",{className:"pic_date",children:new Date(l).toLocaleDateString()}),Object(n.jsxs)("div",{className:"pic_user",children:[Object(n.jsx)("span",{className:"photo_by",children:"photo by"}),Object(n.jsx)("p",{className:"user_img",children:Object(n.jsx)("img",{src:r.small,alt:i})}),Object(n.jsx)("p",{className:"user_name",children:i})]})]})]})})});var h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(0),i=Object(u.a)(r,2),l=i[0],b=i[1],h=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"bridge",e.next=3,d()("https://api.unsplash.com/photos/random?query=".concat("bridge","&count=30&client_id=").concat("L0trhxYmM2hCHMWYccqb7b6xjKaMoqcQFjwV9foYDXI"));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(a.useCallback)(Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().then((function(e){var t,c=e.data;c=c.filter((function(e){return null!==e.location.name&&null!==e.location.urls})),s(c),b((t=c.length,Math.floor(Math.random()*t)))}));case 2:case"end":return e.stop()}}),e)}))));return Object(a.useEffect)((function(){m()}),[]),Object(n.jsxs)("div",{id:"wrap",children:[Object(n.jsx)("header",{id:"header",children:Object(n.jsxs)("h1",{className:"logo",children:[Object(n.jsx)("span",{className:"logoImg",children:Object(n.jsx)("img",{src:"images/bridge.png",alt:"bridge icon"})}),Object(n.jsx)("span",{children:"World bridges"})]})}),c.length>0&&Object(n.jsx)(p,{picture:c[l]}),Object(n.jsx)("button",{className:"button",onClick:function(){m()},children:"Explore bridges of the world!"}),c.length>0&&Object(n.jsx)("button",{children:"true"})]})};c(44);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0b71b439.chunk.js.map