(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[8],{107:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(0),s=n(3),c=n(13),u=n(45),i=n(1);var o=function(e){var t=e.userField,n=e.userIndex,s=e.userKey,o=Object(a.useState)(!1),l=Object(u.a)(o,2),d=l[0],b=l[1],j=Object(a.useState)(t),h=Object(u.a)(j,2),f=h[0],O=h[1],m=Object(r.c)((function(e){return e.userData.users})),x=Object(r.b)();return Object(i.jsxs)("div",{className:"dash-edit",children:[d?"feedback"===s?Object(i.jsx)("textarea",{className:"dash-input-textarea",value:f,onChange:function(e){return O(e.target.value)},maxLength:"350"}):Object(i.jsx)("input",{className:"dash-input",value:f,onChange:function(e){return O(e.target.value)}}):Object(i.jsx)("div",{className:"dash-item "+("feedback"===s?"textarea":""),children:t}),d?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"dash-edit-btn",onClick:function(){O(t),b(!1)},children:"X"}),Object(i.jsx)("button",{className:"dash-edit-btn",onClick:function(){"userLogin"===s&&m.some((function(e){return e.userLogin.toLowerCase()===f.toLowerCase()}))?alert("This username is already taken"):(x(Object(c.c)({index:n,userKey:s,newValue:f})),x(Object(c.e)(n)),b(!1))},children:"Conf"})]}):Object(i.jsx)("button",{className:"dash-edit-btn",onClick:function(){return b(!d)},children:"Edit"})]})};t.default=function(){var e=Object(s.g)(),t=Object(r.c)((function(e){return e.userData.currentUser})),n=Object(r.b)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"dashboard",children:[Object(i.jsxs)("div",{className:"dash-user-info",children:[Object(i.jsx)("div",{className:"dash-avatar",children:Object(i.jsx)("img",{src:t.userAvatar,className:"user-avatar",alt:"user avatar"})}),Object(i.jsxs)("div",{className:"dash-data",children:[Object(i.jsx)("p",{className:"dash-title",children:"Name:"}),Object(i.jsx)(o,{userKey:"userName",userField:t.userName,userIndex:t.index}),Object(i.jsx)("p",{className:"dash-title",children:"Surname:"}),Object(i.jsx)(o,{userKey:"userSurname",userField:t.userSurname,userIndex:t.index}),Object(i.jsx)("p",{className:"dash-title",children:"Login:"}),Object(i.jsx)(o,{userKey:"userLogin",userField:t.userLogin,userIndex:t.index}),Object(i.jsx)("p",{className:"dash-title",children:"Feedback"}),Object(i.jsx)(o,{userKey:"feedback",userField:t.feedback,userIndex:t.index})]})]}),Object(i.jsxs)("div",{className:"dash-buttons",children:[Object(i.jsx)("button",{className:"dash-button back",onClick:function(){return e.push("/home")},children:"Back"}),Object(i.jsx)("button",{className:"dash-button logout",onClick:function(){n(Object(c.g)()),n(Object(c.h)({}))},children:"LogOut"})]})]})})}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(46);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,s=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,s=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(47);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},47:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=8.4a9f5764.chunk.js.map