(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){},107:function(e,t,c){},113:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c.n(s),a=c(35),i=c.n(a),r=(c(102),c(103),c(55)),o=Object(r.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),l=o.actions,j=l.login,d=l.logout,u=function(e){return e.user.user},b=o.reducer,O=c(48),h=(c(105),c(143),O.a.initializeApp({apiKey:"AIzaSyDmtrMWLxzkO6-uKPG4DvO3qi74Ii3zmhA",authDomain:"linkedin-clone-72503.firebaseapp.com",projectId:"linkedin-clone-72503",storageBucket:"linkedin-clone-72503.appspot.com",messagingSenderId:"1016299886169",appId:"1:1016299886169:web:7b94769868647247ee4348"}).firestore()),p=O.a.auth(),m=(c(107),c(76)),x=c.n(m),f=c.p+"static/media/logo2.7a5eab93.png",v=c(154),g=c(29),N=(c(113),c(6));var w=function(e){var t=e.avatar,c=e.Icon,s=e.title,n=e.onClick,a=Object(g.c)(u);return Object(N.jsxs)("div",{onClick:n,className:"HeaderOption",children:[c&&Object(N.jsx)(c,{className:"headerOption_icon"}),t&&Object(N.jsx)(v.a,{className:"headerOption_icon",children:null===a||void 0===a?void 0:a.email[0]}),Object(N.jsx)("h3",{className:"HeaderOption_title",children:s})]})},y=c(77),_=c.n(y),I=c(78),k=c.n(I),C=c(79),S=c.n(C),U=c(80),E=c.n(U),R=c(81),A=c.n(R),L=c(82),P=c.n(L);var D=function(){return Object(N.jsxs)("div",{className:"header",children:[Object(N.jsxs)("div",{className:"header_left",children:[Object(N.jsx)("img",{src:f,alt:"logo"}),Object(N.jsxs)("div",{className:"header_search",children:[Object(N.jsx)(x.a,{}),Object(N.jsx)("input",{placeholder:"search",src:"text"})]})]}),Object(N.jsxs)("div",{className:"header_right",children:[Object(N.jsx)(w,{Icon:_.a,title:"Home"}),Object(N.jsx)(w,{Icon:k.a,title:"My Network"}),Object(N.jsx)(w,{Icon:S.a,title:"Jobs"}),Object(N.jsx)(w,{Icon:E.a,title:"Messaging"}),Object(N.jsx)(w,{Icon:A.a,title:"Notifications"}),Object(N.jsx)(w,{avatar:!0,title:"me"}),Object(N.jsx)(w,{Icon:P.a,title:"logout",onClick:function(){p.signOut()}})]})]})};c(116),c(117);var W=function(e){var t=e.topic;return Object(N.jsxs)("div",{className:"sidebar_recentItem",children:[Object(N.jsx)("span",{className:"sidebar_hash",children:"#"}),Object(N.jsx)("p",{children:t})]})};var B=function(){var e=Object(g.c)(u);return Object(N.jsxs)("div",{className:"sidebar",children:[Object(N.jsxs)("div",{className:"sidebar_top",children:[Object(N.jsx)("img",{src:"https://libg.s3.us-east-2.amazonaws.com/download/Rainbow-Drip.jpg",alt:""}),Object(N.jsx)(v.a,{src:e.photoURL,className:"sidebar_avatar",children:e.email[0]}),Object(N.jsx)("h2",{children:e.displayName}),Object(N.jsx)("h4",{children:e.email})]}),Object(N.jsxs)("div",{className:"sidebar_stats",children:[Object(N.jsxs)("div",{className:"sidebar_stat",children:[Object(N.jsx)("p",{children:"Who viewed you"}),Object(N.jsx)("p",{className:"sidebar_statNumber",children:"256"})]}),Object(N.jsxs)("div",{className:"sidebar_stat",children:[Object(N.jsx)("p",{children:"Views on post"}),Object(N.jsx)("p",{className:"sidebar_statNumber",children:"256"})]})]}),Object(N.jsxs)("div",{className:"sidebar_bottom",children:[Object(N.jsx)("p",{children:"Recent"}),Object(N.jsx)(W,{topic:"developer"}),Object(N.jsx)(W,{topic:"engineer"}),Object(N.jsx)(W,{topic:"devsOps"}),Object(N.jsx)(W,{topic:"design"}),Object(N.jsx)(W,{topic:"linux"})]})]})},z=c(15),H=(c(118),c(87)),J=c.n(H),T=c(88),K=c.n(T);c(119);var M=function(e){var t=e.Icon,c=e.title,s=e.color;return Object(N.jsxs)("div",{className:"InputOption",children:[Object(N.jsx)(t,{style:{color:s}}),Object(N.jsx)("h4",{children:c})]})},F=c(89),V=c.n(F),q=c(90),G=c.n(q),$=c(91),Q=c.n($),X=c(83),Y=c.n(X),Z=c(84),ee=c.n(Z),te=c(85),ce=c.n(te),se=c(86),ne=c.n(se),ae=(c(120),Object(s.forwardRef)((function(e,t){var c=e.name,s=e.description,n=e.message,a=e.photoUrl;return Object(N.jsxs)("div",{ref:t,className:"post",children:[Object(N.jsxs)("div",{className:"post_header",children:[Object(N.jsx)(v.a,{src:a,children:c[0]}),Object(N.jsxs)("div",{className:"post_Info",children:[Object(N.jsx)("h2",{children:c}),Object(N.jsx)("p",{children:s})]})]}),Object(N.jsx)("div",{className:"post_content",children:Object(N.jsx)("p",{children:n})}),Object(N.jsxs)("div",{className:"post_buttons",children:[Object(N.jsx)(M,{Icon:Y.a,title:"like",color:"gray"}),Object(N.jsx)(M,{Icon:ee.a,title:"Comment",color:"gray"}),Object(N.jsx)(M,{Icon:ce.a,title:"Share",color:"gray"}),Object(N.jsx)(M,{Icon:ne.a,title:"Send",color:"gray"})]})]})}))),ie=c(92);var re=function(){var e=Object(s.useState)(""),t=Object(z.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(z.a)(a,2),r=i[0],o=i[1],l=Object(g.c)(u);return Object(s.useEffect)((function(){h.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(N.jsxs)("div",{className:"feed",children:[Object(N.jsxs)("div",{className:"feed_inputContainer",children:[Object(N.jsxs)("div",{className:"feed_input",children:[Object(N.jsx)(J.a,{}),Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{value:c,onChange:function(e){return n(e.target.value)},type:"text"}),Object(N.jsx)("button",{onClick:function(e){e.preventDefault(),h.collection("posts").add({name:l.displayName,description:l.email,message:c,photoUrl:l.photoUrl||"",timestamp:O.a.firestore.FieldValue.serverTimestamp()}),n("")},type:"submit",children:"Send"})]})]}),Object(N.jsxs)("div",{className:"feed_inputOptions",children:[Object(N.jsx)(M,{Icon:K.a,title:"Photo",color:"#70B5F9"}),Object(N.jsx)(M,{Icon:V.a,title:"Video",color:"#E7A33E"}),Object(N.jsx)(M,{Icon:G.a,title:"Event",color:"#C0CBCD"}),Object(N.jsx)(M,{Icon:Q.a,title:"Write article",color:"#7FC15E"})]})]}),Object(N.jsxs)(ie.a,{children:[r.map((function(e){var t=e.id,c=e.data,s=c.name,n=c.description,a=c.message,i=c.photoUrl;return Object(N.jsx)(ae,{name:s,description:n,message:a,photoUrl:i},t)})),Object(N.jsx)(ae,{name:"Nonelela Cele",description:"Just testing",message:"Hello react"})]})]})},oe=(c(121),c.p+"static/media/Linkedin_logo.1ce2cfc6.png");var le=function(){var e=Object(s.useState)(""),t=Object(z.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(z.a)(a,2),r=i[0],o=i[1],l=Object(s.useState)(""),d=Object(z.a)(l,2),u=d[0],b=d[1],O=Object(s.useState)(""),h=Object(z.a)(O,2),m=h[0],x=h[1],f=Object(g.b)();return Object(N.jsxs)("div",{className:"login",children:[Object(N.jsx)("img",{src:oe,alt:"logo"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)},placeholder:"full name",type:"text"}),Object(N.jsx)("input",{value:c,onChange:function(e){return n(e.target.value)},placeholder:"Email",type:"email"}),Object(N.jsx)("input",{value:m,onChange:function(e){return x(e.target.value)},placeholder:"Profile picture url",type:"text"}),Object(N.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)},placeholder:"Password",type:"password"}),Object(N.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(c,r).then((function(e){f(j({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,photoURL:e.user.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(N.jsxs)("p",{children:["Not registered?",Object(N.jsx)("span",{className:"login_registerNow",onClick:function(){if(!u)return alert("A full name is required");p.createUserWithEmailAndPassword(c,r).then((function(e){e.user.updateProfile({displayName:u,photoURL:m}).then((function(){f(j({email:e.user.email,uid:e.user.uid,displayName:u,photoURL:m}))}))})).catch((function(e){return alert(e)}))},children:"Register Now!"})]})]})},je=c(0),de=c.n(je),ue=c(2),be=c(93),Oe=c.n(be),he=(c(139),c(94)),pe=c.n(he),me=c(62),xe=c.n(me);c(140);var fe=function(e){var t=e.heading,c=e.subtitle;return Object(N.jsxs)("div",{className:"widgets_article",children:[Object(N.jsx)("div",{className:"widgets_articleLeft",children:Object(N.jsx)(xe.a,{className:"mu_icon"})}),Object(N.jsxs)("div",{className:"widgets_articleRight",children:[Object(N.jsx)("h4",{children:t}),Object(N.jsx)("p",{children:c})]})]})};var ve=function(){var e=Object(s.useState)([]),t=Object(z.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){console.log("API CHECK");var e=function(){var e=Object(ue.a)(de.a.mark((function e(){var t;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad1a4fed72b440a2ad53ae82e248e2d7");case 2:t=e.sent,n(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()})),Object(N.jsxs)("div",{className:"widgets",children:[Object(N.jsxs)("div",{className:"widgets_header",children:[Object(N.jsx)("h2",{children:"LinkedIn News"}),Object(N.jsx)(pe.a,{})]}),console.log("hello widges"),Object(N.jsx)(fe,{heading:"Java making waves",subtitle:"Top news"}),Object(N.jsx)(fe,{heading:"Unemployment South Africa",subtitle:"Top news-South Africa"}),Object(N.jsx)(fe,{heading:"25% increase in Telsa shares",subtitle:"Top news-Global"}),c.map((function(e){var t=e.description,c=e.title;return Object(N.jsx)(fe,{title:c,description:t})})),console.log(c)]})};var ge=function(){var e=Object(g.c)(u),t=Object(g.b)();return Object(s.useEffect)((function(){p.onAuthStateChanged((function(e){t(e?j({email:e.email,uid:e.uid,displayName:e.displayName,photoURL:e.photoURL}):d())}))}),[]),Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)(D,{}),e?Object(N.jsxs)("div",{className:"app_body",children:[Object(N.jsx)(B,{}),Object(N.jsx)(re,{}),Object(N.jsx)(ve,{})]}):Object(N.jsx)(le,{})]})},Ne=Object(r.a)({reducer:{user:b}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(g.a,{store:Ne,children:Object(N.jsx)(ge,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.6cbc57cb.chunk.js.map