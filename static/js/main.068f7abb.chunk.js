(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var i,c,a,o,r,s,l,d,j,u,b,x,f,O,p,v,h,m,g,y,C,k,z,S,w,E,F=t(0),A=t.n(F),L=t(26),R=t.n(L),J=t(49),B=t(10),G=t(115),M=t(6),N=t(7),I=N.a.div(i||(i=Object(M.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),U=t(2),V=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(U.jsx)(G.a,{children:Object(U.jsx)(I,{size:t,bold:c,children:i})})},q=t(45),H=t(43),P=t(50),T=t(14),D=t(142),K=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(U.jsx)(D.a,{size:n,color:t,thickness:i,variant:c})},Q=t(149),W=t(143),X=N.a.div(c||(c=Object(M.a)([""]))),Y=function(e){var n=e.isChecked,t=e.onChange,i=e.label,c=e.value;return Object(U.jsx)(X,{children:Object(U.jsx)(W.a,{control:Object(U.jsx)(Q.a,{checked:n,onChange:function(){t(c)},color:"primary"}),label:i})})},Z=t(144),$=t(44),_=t.n($),ee=N.a.div(a||(a=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ne=N.a.div(o||(o=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),te=N.a.div(r||(r=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ie=N.a.div(s||(s=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ce=N.a.img(l||(l=Object(M.a)(["\n  border-radius: 45%;\n"]))),ae=N.a.div(d||(d=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),oe=N.a.div(j||(j=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),re=N.a.div(u||(u=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),se=function(e){var n=e.users,t=e.isLoading,i=Object(F.useState)({BR:!1,AU:!1,CA:!1,GE:!1,FR:!1}),c=Object(T.a)(i,2),a=c[0],o=c[1],r=Object(F.useState)({Brazil:"BR",Australia:"AU",Canada:"CA",Germany:"GE",France:"FR"}),s=Object(T.a)(r,2),l=s[0],d=(s[1],Object(F.useState)(0)),j=Object(T.a)(d,2),u=j[0],b=j[1],x=Object(F.useState)(),f=Object(T.a)(x,2),O=f[0],p=f[1],v=Object(F.useState)([]),h=Object(T.a)(v,2),m=h[0],g=h[1];Object(F.useEffect)((function(){g(JSON.parse(localStorage.getItem("favorites")))}),[]),Object(F.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(m))}),[m]);var y=function(e){a[e]?b(u-1):b(u+1),o(Object(P.a)(Object(P.a)({},a),{},Object(H.a)({},e,!a[e])))},C=function(){p()},k=function(e){return!(e!==O&&!m.includes(e))};return Object(U.jsxs)(ee,{children:[Object(U.jsxs)(re,{children:[Object(U.jsx)(Y,{value:"BR",label:"Brazil",onChange:y,isChecked:a.BR}),Object(U.jsx)(Y,{value:"AU",label:"Australia",onChange:y,isChecked:a.AU}),Object(U.jsx)(Y,{value:"CA",label:"Canada",onChange:y,isChecked:a.CA}),Object(U.jsx)(Y,{value:"GE",label:"Germany",onChange:y,isChecked:a.GE}),Object(U.jsx)(Y,{value:"FR",label:"France",onChange:y,isChecked:a.FR})]}),Object(U.jsxs)(ne,{children:[n.filter((function(e){return 0===u||1==a[l[e.location.country]]})).map((function(e,n){return Object(U.jsxs)(te,{onMouseEnter:function(){return function(e){p(e)}(e)},onClick:function(){return function(e){if(m.includes(e)){var n=m.indexOf(e);g(m.slice(0,n).concat(m.slice(n+1)))}else g([].concat(Object(q.a)(m),[e]))}(e)},onMouseLeave:C,children:[Object(U.jsx)(ce,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(U.jsxs)(ie,{children:[Object(U.jsxs)(V,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(U.jsx)(V,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(U.jsxs)(V,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(U.jsxs)(V,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(U.jsx)(oe,{isVisible:k(e),children:Object(U.jsx)(Z.a,{children:Object(U.jsx)(_.a,{color:"error"})})})]},n)})),t&&Object(U.jsx)(ae,{children:Object(U.jsx)(K,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},le=t(51),de=t.n(le),je=t(75),ue=t(76),be=t.n(ue),xe=function(){var e=Object(F.useState)([]),n=Object(T.a)(e,2),t=n[0],i=n[1],c=Object(F.useState)(!1),a=Object(T.a)(c,2),o=a[0],r=a[1];function s(){return l.apply(this,arguments)}function l(){return(l=Object(je.a)(de.a.mark((function e(){var n;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,be.a.get("https://randomuser.me/api/?results=25&page=1");case 3:n=e.sent,r(!1),i(n.data.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(F.useEffect)((function(){s()}),[]),{users:t,isLoading:o,fetchUsers:s}},fe=N.a.div(b||(b=Object(M.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),Oe=N.a.div(x||(x=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),pe=N.a.div(f||(f=Object(M.a)(["\n  display: flex;\n"]))),ve=(N.a.div(O||(O=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=xe(),n=e.users,t=e.isLoading;return Object(U.jsx)(fe,{children:Object(U.jsxs)(Oe,{children:[Object(U.jsx)(pe,{children:Object(U.jsx)(V,{size:"64px",bold:!0,children:"PplFinder"})}),Object(U.jsx)(se,{users:n,isLoading:t})]})})}),he=N.a.div(p||(p=Object(M.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),me=N.a.div(v||(v=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),ge=N.a.div(h||(h=Object(M.a)(["\n  display: flex;\n"]))),ye=(N.a.div(m||(m=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),N.a.div(g||(g=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"])))),Ce=N.a.div(y||(y=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),ke=N.a.div(C||(C=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ze=N.a.div(k||(k=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),Se=N.a.img(z||(z=Object(M.a)(["\n  border-radius: 45%;\n"]))),we=N.a.div(S||(S=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Ee=N.a.div(w||(w=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),Fe=(N.a.div(E||(E=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),function(e){var n=e.isLoading,t=Object(F.useState)(),i=Object(T.a)(t,2),c=i[0],a=i[1],o=Object(F.useState)([]),r=Object(T.a)(o,2),s=r[0],l=r[1];Object(F.useEffect)((function(){l(JSON.parse(localStorage.getItem("favorites"))),console.log(JSON.parse(localStorage.getItem("favorites")))}),[]),Object(F.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(s))}),[s]);var d=function(){a()},j=function(e){return!(e!==c&&!s.includes(e))};return Object(U.jsx)(ye,{children:Object(U.jsxs)(Ce,{children:[s.map((function(e,n){return Object(U.jsxs)(ke,{onMouseEnter:function(){return function(e){a(e)}(e)},onClick:function(){return function(e){if(s.includes(e)){var n=s.indexOf(e);l(s.slice(0,n).concat(s.slice(n+1)))}else l([].concat(Object(q.a)(s),[e]))}(e)},onMouseLeave:d,children:[Object(U.jsx)(Se,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(U.jsxs)(ze,{children:[Object(U.jsxs)(V,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(U.jsx)(V,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(U.jsxs)(V,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(U.jsxs)(V,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(U.jsx)(Ee,{isVisible:j(e),children:Object(U.jsx)(Z.a,{children:Object(U.jsx)(_.a,{color:"error"})})})]},n)})),n&&Object(U.jsx)(we,{children:Object(U.jsx)(K,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})})}),Ae=function(){var e=xe().isLoading;return Object(U.jsx)(he,{children:Object(U.jsxs)(me,{children:[Object(U.jsx)(ge,{children:Object(U.jsx)(V,{size:"64px",bold:!0,children:"Favorites"})}),Object(U.jsx)(Fe,{isLoading:e})]})})},Le=t(77),Re=t(145),Je=t(146),Be=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=A.a.useMemo((function(){return Object(Le.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(U.jsxs)(Re.a,{theme:i,children:[Object(U.jsx)(Je.a,{}),n]})},Ge=t(150),Me=t(148),Ne=t(147),Ie=function(e){var n=Object(F.useState)(0),t=Object(T.a)(n,2),i=t[0],c=t[1],a=Object(B.f)();return Object(U.jsx)(Ge.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(U.jsxs)(Me.a,{value:i,onChange:function(e,n){c(n),console.log(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(U.jsx)(Ne.a,{label:"Home",index:0,onClick:function(){a.push("/")}}),Object(U.jsx)(Ne.a,{label:"Favorites",index:1,onClick:function(){a.push("/Favorites")}})]})})},Ue=function(){return Object(U.jsx)(Be,{children:Object(U.jsxs)(J.a,{children:[Object(U.jsx)(Ie,{}),Object(U.jsxs)(B.c,{children:[Object(U.jsx)(B.a,{exact:!0,path:"/",component:ve}),Object(U.jsx)(B.a,{path:"/Favorites",component:Ae})]})]})})};R.a.render(Object(U.jsx)(Ue,{}),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.068f7abb.chunk.js.map