(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-963d0ab2"],{"0b42":function(a,e,r){var t=r("e8b5"),s=r("68ee"),o=r("861d"),n=r("b622"),i=n("species");a.exports=function(a){var e;return t(a)&&(e=a.constructor,s(e)&&(e===Array||t(e.prototype))?e=void 0:o(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},"159b":function(a,e,r){var t=r("da84"),s=r("fdbc"),o=r("785a"),n=r("17c2"),i=r("9112"),u=function(a){if(a&&a.forEach!==n)try{i(a,"forEach",n)}catch(e){a.forEach=n}};for(var c in s)s[c]&&u(t[c]&&t[c].prototype);u(o)},"17c2":function(a,e,r){"use strict";var t=r("b727").forEach,s=r("a640"),o=s("forEach");a.exports=o?[].forEach:function(a){return t(this,a,arguments.length>1?arguments[1]:void 0)}},"48ca":function(a,e,r){"use strict";r.r(e);var t=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"login-page"},[r("div",{staticClass:"users"},[a._v(" Users for log in "),r("pre",[a._v(a._s(a.users))])]),r("div",{staticClass:"circle"}),r("div",{staticClass:"square"}),r("div",{staticClass:"login-page__box login-area p-5 mx-2"},[r("div",{staticClass:"login-area__title text-center text-white font-weight-bold"},[a._v("Login")]),r("form",{staticClass:"login-area__action"},[r("div",{staticClass:"form-group mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.userData.userName,expression:"userData.userName"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email","aria-describedby":"emailHelp",required:""},domProps:{value:a.userData.userName},on:{input:function(e){e.target.composing||a.$set(a.userData,"userName",e.target.value)}}})]),r("div",{staticClass:"form-group mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:a.userData.password,expression:"userData.password"}],staticClass:"form-control",attrs:{type:"password",required:"",placeholder:"Password"},domProps:{value:a.userData.password},on:{input:function(e){e.target.composing||a.$set(a.userData,"password",e.target.value)}}})]),r("button",{staticClass:"btn btn-success mx-auto d-block",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),a.login()}}},[a._v("Submit")])])])])},s=[],o=(r("159b"),{data:function(){return{userData:{userName:null,password:null},users:[{userName:"admin",password:"admin"},{userName:"John",password:"123"},{userName:"Manager",password:"123"}]}},methods:{login:function(){var a=this;this.userData.userName&&this.userData.password&&this.users.forEach((function(e){e.userName==a.userData.userName&&e.password==a.userData.password&&(a.$store.commit("SET_USER_STATUS",!0),a.$store.dispatch("GET_USER",{username:e.userName,password:e.password}),a.$router.push("/"))}))}}}),n=o,i=(r("51a7"),r("2877")),u=Object(i["a"])(n,t,s,!1,null,"db8104e6",null);e["default"]=u.exports},"51a7":function(a,e,r){"use strict";r("e57f")},"65f0":function(a,e,r){var t=r("0b42");a.exports=function(a,e){return new(t(a))(0===e?0:e)}},a640:function(a,e,r){"use strict";var t=r("d039");a.exports=function(a,e){var r=[][a];return!!r&&t((function(){r.call(null,e||function(){throw 1},1)}))}},b727:function(a,e,r){var t=r("0366"),s=r("44ad"),o=r("7b0b"),n=r("07fa"),i=r("65f0"),u=[].push,c=function(a){var e=1==a,r=2==a,c=3==a,l=4==a,d=6==a,f=7==a,p=5==a||d;return function(m,v,b,h){for(var w,g,_=o(m),x=s(_),D=t(v,b,3),E=n(x),N=0,y=h||i,C=e?y(m,E):r||f?y(m,0):void 0;E>N;N++)if((p||N in x)&&(w=x[N],g=D(w,N,_),a))if(e)C[N]=g;else if(g)switch(a){case 3:return!0;case 5:return w;case 6:return N;case 2:u.call(C,w)}else switch(a){case 4:return!1;case 7:u.call(C,w)}return d?-1:c||l?l:C}};a.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},e57f:function(a,e,r){},e8b5:function(a,e,r){var t=r("c6b6");a.exports=Array.isArray||function(a){return"Array"==t(a)}}}]);
//# sourceMappingURL=chunk-963d0ab2.2a2bfeca.js.map