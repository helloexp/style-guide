(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(45),c=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(49),i=a(182),u=a(16),m=a(89),s=a(90),E=a(85),h=a(32),d={admin:!1};var p={rehydrated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"persist/REHYDRATE":return!0;default:return e}},User:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return t.data?Object(h.a)({},e,{admin:t.data}):d;default:return e}}},f={key:"root",storage:s.a,blacklist:["status"]},b=Object(m.a)(f,p),g=[E.a],v=function(){return{store:Object(u.e)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(u.d)(u.a.apply(void 0,g)))}},y=a(183),O=a(184),S=a(165),j=function(){return l.a.createElement(S.a,null,l.a.createElement("h1",null,"Oops! Page does not exist"))},w=a(174),x=a(19),k=a(31),L=a(21),C=a(20),N=a(22),D=a(8),_=a(166),I=a(167),R=a(168),A=a(169),B=a(170),U=a(171),F=a(172),T=a(173),M=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(L.a)(this,Object(C.a)(t).call(this,e))).toggle=a.toggle.bind(Object(D.a)(Object(D.a)(a))),a.state={isOpen:!1},a}return Object(N.a)(t,e),Object(k.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(_.a,{color:"light",light:!0,expand:"md"},l.a.createElement(I.a,{href:"/"},"Uniqlo Style Guide"),l.a.createElement(R.a,{onClick:this.toggle}),l.a.createElement(A.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(B.a,{className:"ml-auto",navbar:!0},l.a.createElement(U.a,null,l.a.createElement(F.a,{href:"/components"},"Components")),l.a.createElement(U.a,null,l.a.createElement(F.a,{href:"/style"},"Style")),l.a.createElement(U.a,null,l.a.createElement(F.a,{href:"/colors"},"Colors")),l.a.createElement(T.a,{style:{width:"250px"},placeholder:"Search"})))))}}]),t}(n.Component),G=function(){return l.a.createElement("div",{style:{height:"40px"}},l.a.createElement("p",{className:"text-center flex flex-center",style:{margin:"0"}},"All Rights Reserved "))},X=function(e){return l.a.createElement(w.a,{fluid:!0,style:{}},l.a.createElement(M,null),l.a.createElement(w.a,{style:{marginTop:"40px",marginBottom:"50px",minHeight:"calc(100vh - 187px)"}},e.children),l.a.createElement(G,null))},P=a(175),z=a(176),K=a(178),W=a(177),H=function(){return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement("h1",null,"Style Guide")),l.a.createElement("div",{className:"section-divide"},l.a.createElement("h3",null,"Download Style Assets"),l.a.createElement("button",null,"Default Stylesheet"),l.a.createElement("button",null,"Desktop Stylesheet"),l.a.createElement("button",null,"Mobile Stylesheet")),l.a.createElement("div",{className:"section-divide"},l.a.createElement("h3",null,"Quick Guide"),l.a.createElement(P.a,null,l.a.createElement(z.a,{sm:4},l.a.createElement(W.a,{to:"/components"},l.a.createElement(K.a,{className:"flex flex-center"},l.a.createElement("h5",{className:"text-center"},"Components")))),l.a.createElement(z.a,{sm:4},l.a.createElement(W.a,{to:"/style"},l.a.createElement(K.a,{className:"flex flex-center"},l.a.createElement("h5",{className:"text-center"},"Style Reference")))),l.a.createElement(z.a,{sm:4},l.a.createElement(W.a,{to:"/colors"},l.a.createElement(K.a,{className:"flex flex-center"},l.a.createElement("h5",{className:"text-center "},"Colors")))))))},J=function(e){return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement("h1",null,"Admin Dashboard")))},V=function(e){function t(){return Object(x.a)(this,t),Object(L.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"sidebar-nav"},l.a.createElement(B.a,{vertical:!0},l.a.createElement(U.a,null,l.a.createElement(F.a,{href:"#"},"Link")),l.a.createElement(U.a,null,l.a.createElement(F.a,{href:"#"},"Link")),l.a.createElement(U.a,null,l.a.createElement(F.a,{href:"#"},"Another Link"))),l.a.createElement("hr",null),l.a.createElement("p",null,"Link based"),l.a.createElement(B.a,{vertical:!0},l.a.createElement(F.a,{href:"#"},"Link")," ",l.a.createElement(F.a,{href:"#"},"Link")," ",l.a.createElement(F.a,{href:"#"},"Another Link")," ",l.a.createElement(F.a,{disabled:!0,href:"#"},"Disabled Link")))}}]),t}(n.Component),q=function(e){return l.a.createElement(P.a,{style:{marginTop:"50px",height:"100vh"}},l.a.createElement(z.a,{sm:9},e.children),l.a.createElement(z.a,{sm:3},l.a.createElement(V,null)))},Q=function(e){return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement("h1",null,"Components")),l.a.createElement(q,null,e.Layout?e.Layout:l.a.createElement("div",null,l.a.createElement("h1",null,"Basic Snippets"),l.a.createElement("p",null,"Most popular items"))))},Y=function(e){return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement("h1",null,"CSS Style")),l.a.createElement(q,null,e.Layout?e.Layout:l.a.createElement("div",null,l.a.createElement("h1",null,"Basic Snippets"),l.a.createElement("p",null,"Most popular items"))))},$=function(e){return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement("h1",null,"Colors")),l.a.createElement(q,null,e.Layout?e.Layout:l.a.createElement("div",null,l.a.createElement("h1",null,"Basic Snippets"),l.a.createElement("p",null,"Most popular items"))))},Z=a(46),ee=a(179),te=a(180),ae=a(181),ne=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(L.a)(this,Object(C.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Z.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.onFormSubmit,l=t.history;n(a.state).then(function(){l.push("/dashboard")}).catch(function(e){console.log("Error: ".concat(e))})},a.state={email:"",password:""},a.handleChange=a.handleChange.bind(Object(D.a)(Object(D.a)(a))),a}return Object(N.a)(t,e),Object(k.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return l.a.createElement("div",{className:"login"},l.a.createElement("h1",null,"Login"),l.a.createElement(ee.a,{onSubmit:this.handleSubmit},l.a.createElement(te.a,null,l.a.createElement(ae.a,null,"Email"),l.a.createElement(T.a,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(te.a,null,l.a.createElement(ae.a,null,"Password"),l.a.createElement(T.a,{value:this.state.password,name:"password",onChange:this.handleChange,type:"password"})),l.a.createElement("button",{disabled:!this.validateForm(),type:"submit"},"Login")))}}]),t}(n.Component),le=a(87),re={apiKey:"AIzaSyCIloTtNMTb2RuXECk_wmfz-pDpr-gxFBU",authDomain:"style-guide-a94ff.firebaseapp.com",databaseURL:"https://style-guide-a94ff.firebaseio.com",projectId:"style-guide-a94ff",storageBucket:"style-guide-a94ff.appspot.com",messagingSenderId:"718543382375"},ce={apiKey:re.apiKey,authDomain:re.authDomain,databaseURL:re.databaseURL,projectId:re.projectId,storageBucket:re.storageBucket,messagingSenderId:re.messagingSenderId},oe=le.initializeApp(ce);var ie=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(L.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){return(0,a.props.onFormSubmit)(e).catch(function(e){throw a.setState({errorMessage:e}),e})},a.render=function(){var e=a.props,t=e.user,n=e.Layout,r=e.history;return l.a.createElement(n,{user:t,history:r,onFormSubmit:a.onFormSubmit})},a}return Object(N.a)(t,e),t}(n.Component),ue={onFormSubmit:function(e){var t=e.email,a=e.password;return function(e){return new Promise(function(n,l){oe.auth().signInWithEmailAndPassword(t,a).then(function(t){e({type:"USER_LOGIN",data:!0})}).catch(function(e){console.log(e)})})}}},me=Object(o.b)(function(e){return{user:e.user||{}}},ue)(ie),se=function(){return l.a.createElement(y.a,null,l.a.createElement(O.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(X,null,l.a.createElement(H,e))}}),l.a.createElement(O.a,{exact:!0,path:"/components",render:function(e){return l.a.createElement(X,null,l.a.createElement(Q,e))}}),l.a.createElement(O.a,{exact:!0,path:"/style",render:function(e){return l.a.createElement(X,null,l.a.createElement(Y,e))}}),l.a.createElement(O.a,{exact:!0,path:"/colors",render:function(e){return l.a.createElement(X,null,l.a.createElement($,e))}}),l.a.createElement(O.a,{exact:!0,path:"/dashboard",render:function(e){return l.a.createElement(X,null,l.a.createElement(J,e))}}),l.a.createElement(O.a,{exact:!0,path:"/login",render:function(e){return l.a.createElement(X,null,l.a.createElement(me,Object.assign({},e,{Layout:ne})))}}),l.a.createElement(O.a,{render:function(e){return l.a.createElement(X,null,l.a.createElement(j,e))}}))},Ee=(a(161),a(162),a(163),v().store),he=document.getElementById("root");c.a.render(l.a.createElement(function(){return l.a.createElement(o.a,{store:Ee},l.a.createElement(i.a,null,l.a.createElement(se,null)))},null),he),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(164)}},[[91,1,2]]]);
//# sourceMappingURL=main.f1eba9b9.chunk.js.map