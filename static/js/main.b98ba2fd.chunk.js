(this["webpackJsonptest-mockup"]=this["webpackJsonptest-mockup"]||[]).push([[0],{143:function(e,t,c){},242:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(24),s=c.n(r),i=(c(143),c(135)),o=c(56),l=c(44),u=c(37),d="SET_USERS",j="FETCH_USERS",b="IS_LOADING",O="SET_USER_AVATAR",h={users:[],avatarPhoto:"",isLoading:!0};var f=function(e){return{type:b,isLoading:e}},x=c(252),m=c(62),g=c(247),v=c(128),p=c.n(v),w=c(7),C=function(e){var t=e.avatar,c=e.instaId,n=e.userFullName;return Object(w.jsx)("div",{className:"dflex-center",children:Object(w.jsxs)("a",{href:"https://www.instagram.com/".concat(c),title:"".concat(n),target:"_blank",rel:"noreferrer",children:[Object(w.jsx)(p.a,{src:t,size:118,alt:"@".concat(c)}),Object(w.jsxs)("p",{className:"userIdPar",children:["@",c]})]})})},N=c(40),y=c(55),k=function(){return Object(w.jsxs)("div",{className:"dflex-center",children:[Object(w.jsx)("h3",{className:"menuHeading",children:"\u0421\u0441\u044b\u043b\u043a\u0438 \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(w.jsx)("div",{className:"menuDivider"}),Object(w.jsx)(y.b,{exact:!0,to:"/mysite",className:"userMenuLinks",activeClassName:"activeLink",children:"\u041c\u043e\u0439 \u0441\u0430\u0439\u0442"}),Object(w.jsx)(y.b,{to:"/whatsapp",className:"userMenuLinks",activeClassName:"activeLink",children:"WhatsApp"}),Object(w.jsx)(y.b,{to:"/telegramm",className:"userMenuLinks",activeClassName:"activeLink",children:"Telegram"}),Object(w.jsx)(y.b,{to:"/cooperation",className:"userMenuLinks",activeClassName:"activeLink",children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})]})},L=x.a.Sider,I=function(e){var t=e.avatar,c=e.instaId,n=e.userFullName;return Object(w.jsx)(N.a,{lg:4,xs:24,children:Object(w.jsxs)(L,{style:{backgroundColor:"#fff",marginLeft:"5rem"},className:"xs-top",children:[Object(w.jsx)(C,{avatar:t,instaId:c,userFullName:n}),Object(w.jsx)(k,{})]})})},E=c(253),F=c(251),S=x.a.Header,T=["\u041e\u0434\u0435\u0436\u0434\u0430","\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438","\u0414\u0435\u0442\u044f\u043c","\u041a\u043d\u0438\u0433\u0438"],_=function(){return Object(w.jsx)(S,{className:"xs-hide",style:{backgroundColor:"#fff",paddingLeft:"0"},children:Object(w.jsx)(E.b,{size:"middle",children:T.map((function(e,t){return 0===t?Object(w.jsx)(F.a,{className:"headerMenuButtons",autoFocus:!0,children:e},t):Object(w.jsx)(F.a,{className:"headerMenuButtons",children:e},t)}))})})},R=c(94),M=c(249),U=c(96),H=c(97),A=c(248),B=function(e,t){for(var c=[],n=0;n<Math.ceil(e.length/t);n++)c[n]=e.slice(n*t,n*t+t);return c},P=function(e){var t=e.goodsFromCollection,c=e.width,a=Object(n.useRef)(),r=A.a.Meta,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"uproduct";return e.map((function(e){return{id:e.id,name:e[t].name,price:e[t].price,imgUrl:e.imgUrl,storyText:e[t].storyText}}))}(t),i=B(s,c>992?8:3).map((function(e,t){return Object(w.jsx)("div",{children:Object(w.jsx)(m.a,{gutter:16,children:e.map((function(e){return Object(w.jsxs)(N.a,{lg:6,xs:8,children:[Object(w.jsxs)(A.a,{className:"gutter-row custAntCard",title:e.name,bordered:!0,hoverable:!0,children:[Object(w.jsx)("img",{src:e.imgUrl,alt:e.storyText}),Object(w.jsx)(r,{title:"".concat(e.price," \u20bd")})]}),Object(w.jsx)("div",{className:"cardButton",children:Object(w.jsx)(F.a,{className:"headerMenuButtons",children:"\u0412 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"})})]},e.id)}))})},t)}));return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"sliderHeader",children:[Object(w.jsx)("h3",{className:"blockHeader",children:"\u0413\u0434\u0435 \u043a\u0443\u043f\u0438\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0435\u0435?"}),Object(w.jsxs)("div",{className:"sliderHeaderButtons",children:[Object(w.jsx)(F.a,{onClick:function(){return a.current.prev()},icon:Object(w.jsx)(U.a,{})}),Object(w.jsx)(F.a,{onClick:function(){return a.current.next()},icon:Object(w.jsx)(H.a,{}),autoFocus:!0})]})]}),Object(w.jsx)(M.a,{ref:a,dots:!1,style:{overflow:"hidden"},children:i})]})},D=function(e){var t=e.collectionId,c="https://looks.umastyle.club/liveimg/".concat(t);return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{className:"blockHeader xs-hide",children:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0430 \u043f\u043b\u0430\u0442\u044c\u0435\u0432"}),Object(w.jsx)(A.a,{className:"collectionCard",children:Object(w.jsx)("img",{src:c,alt:"Dresses Collection",className:"dressesCollectionImg"})})]})},z=c(250),G=c(246),W=function(e){var t=e.collectionId,c=e.goodsFromCollection,n=e.width;return Object(w.jsx)(N.a,{lg:17,xs:22,offset:1,children:Object(w.jsxs)(x.a,{style:{width:"100%",backgroundColor:"#fff"},children:[Object(w.jsx)(_,{}),Object(w.jsx)(R.Content,{style:{width:"100%",backgroundColor:"#fff"},children:Object(w.jsxs)(m.a,{gutter:16,children:[Object(w.jsx)(N.a,{xs:24,lg:10,children:Object(w.jsx)(z.a,{active:!0,loading:!t,children:Object(w.jsx)(D,{collectionId:t})})}),Object(w.jsx)(z.a,{active:!0,loading:!c,children:Object(w.jsx)(N.a,{xs:{span:24,offset:0},lg:{span:13,offset:1},className:"gutter-row",children:Object(w.jsx)(P,{goodsFromCollection:c,width:n})})})]})}),Object(w.jsx)(G.a,{plain:!0,style:{borderTop:"1px solid #666666"},className:"xs-hide"}),Object(w.jsx)(R.Content,{style:{width:"100%",backgroundColor:"#fff"},className:"xs-hide",children:Object(w.jsxs)(m.a,{gutter:16,children:[Object(w.jsx)(N.a,{xs:24,lg:10,children:Object(w.jsx)(z.a,{active:!0,loading:!t,children:Object(w.jsx)(D,{collectionId:t})})}),Object(w.jsx)(z.a,{active:!0,loading:!c,children:Object(w.jsx)(N.a,{xs:{span:24,offset:0},lg:{span:13,offset:1},className:"gutter-row",children:Object(w.jsx)(P,{goodsFromCollection:c,width:n})})})]})})]})})},J=c.p+"static/media/avatar.f532e0a5.png";function V(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var q=function(){var e=Object(l.b)();Object(n.useEffect)((function(){e({type:j})}),[e]);var t=Object(l.c)((function(e){return e.usersReducer.users.fullName})),c=Object(l.c)((function(e){return e.usersReducer.avatarPhoto})),a=Object(l.c)((function(e){return e.usersReducer.users.extUserUrl})),r=Object(l.c)((function(e){return e.usersReducer.isLoading})),s=Object(n.useState)(null),u=Object(o.a)(s,2),d=u[0],b=u[1],O=Object(l.c)((function(e){return e.goodsCollectionReducer.collections.list})),h=O?O["".concat(d)].collagePictId:"",f=Object(l.c)((function(e){return e.goodsCollectionReducer.goodsFromCollection.list})),v=f?Object(i.a)(f):"",p=Object(n.useState)(J),C=Object(o.a)(p,2),N=C[0],k=C[1],L=Object(n.useState)("aevsai"),E=Object(o.a)(L,2),F=E[0],S=E[1],T=Object(n.useState)(r),_=Object(o.a)(T,2),R=_[0],M=_[1],U=function(){var e=Object(n.useState)(V()),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){a(V())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}().width;return Object(n.useEffect)((function(){k(c||J)}),[c,N]),Object(n.useEffect)((function(){M(r)}),[r]),Object(n.useEffect)((function(){S(a)}),[a]),Object(n.useEffect)((function(){b(7)}),[d,b]),Object(w.jsx)(y.a,{children:R?Object(w.jsx)(g.a,{tip:"Loading...",size:"large",style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}):Object(w.jsx)(x.a,{style:{width:"100%",maxWidth:"1440px",margin:"0 auto",backgroundColor:"#fff",paddingTop:"33px"},children:Object(w.jsxs)(m.a,{style:{width:"100%"},children:[Object(w.jsx)(I,{avatar:N,instaId:F,userFullName:t}),Object(w.jsx)(W,{collectionId:h,goodsFromCollection:v,width:U})]})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,254)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},Q=c(54),X=c(136),Y=c(35),Z=c.n(Y),$=c(27),ee=c(134),te=c.n(ee).a.create({baseURL:"https://looks.umastyle.club/"}),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tanya_tilcha";return te.get("custapi/allrest/fashion/publicuser?mnem=".concat(e))},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tanya_tilcha",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:184;return te.get("custapi/allrest/fashion/listfilteredfashion?styleUserMnem=".concat(e,"&page=").concat(t,"&classId=").concat(c))},ae=function(e){return te.get("custapi/allrest/fashion/listfashionprod?fashionId=".concat(e))},re=Z.a.mark(ie),se=Z.a.mark(oe);function ie(e){var t,c;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.b)(ce,e.mnem);case 2:return t=n.sent,n.next=5,Object($.c)((a=t.data,{type:d,payload:a}));case 5:return c="https://looks.umastyle.club/liveimg/".concat(t.data.photoId,"?width=118&height=118&mode=stretch"),n.next=8,Object($.c)({type:O,userAvatar:c});case 8:return n.next=10,Object($.c)(f(!1));case 10:case"end":return n.stop()}var a}),re)}function oe(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)(j,ie);case 2:case"end":return e.stop()}}),se)}var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;return function(t){return t.goodsCollectionReducer.collections.list[e].id}},ue="SET_COLLECTION",de="FETCH_COLLECTION",je="GET_GOODS_FROM_COLLECTION",be={collections:[],goodsFromCollection:[]};var Oe=function(e){return{type:je,payload:e}},he=Z.a.mark(xe),fe=Z.a.mark(me);function xe(e){var t,c,n;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object($.b)(ne,e.styleUserMnem,e.page,e.classId);case 2:return t=a.sent,a.next=5,Object($.c)((r=t.data,{type:ue,payload:r}));case 5:return a.next=7,Object($.d)(le(7));case 7:return c=a.sent,a.next=10,Object($.b)(ae,c);case 10:return n=a.sent,a.next=13,Object($.c)(Oe(n.data));case 13:return a.next=15,Object($.c)(f(!1));case 15:case"end":return a.stop()}var r}),he)}function me(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)(j,xe);case 2:return e.next=4,Object($.e)(de,xe);case 4:case"end":return e.stop()}}),fe)}var ge=Z.a.mark(ve);function ve(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([oe(),me()]);case 2:case"end":return e.stop()}}),ge)}var pe=Object(X.a)(),we=Object(Q.c)(Object(Q.a)(pe)),Ce=Object(Q.b)({usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{users:t.payload});case b:return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.isLoading});case O:return Object(u.a)(Object(u.a)({},e),{},{avatarPhoto:t.userAvatar});default:return e}},goodsCollectionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(u.a)(Object(u.a)({},e),{},{collections:t.payload});case je:return Object(u.a)(Object(u.a)({},e),{},{goodsFromCollection:t.payload});default:return e}}}),Ne=Object(Q.d)(Ce,we),ye=Ne;window.__store__=Ne,pe.run(ve),s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(l.a,{store:ye,children:Object(w.jsx)(q,{})})}),document.getElementById("root")),K()}},[[242,1,2]]]);
//# sourceMappingURL=main.b98ba2fd.chunk.js.map