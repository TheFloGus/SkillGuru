(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[7],{103:function(e,t,n){"use strict";n.r(t);var r=n(45),c=n(0),o=n(9),s=n(47);var i=n(46);function a(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n(19),l=n(14),b=n(1);var j=function(e){var t=e.name,n=e.technologies,r=e.description,c=e.edit,s=e.setEdit,i=e.id,a=Object(o.c)((function(e){return e.courses.courses})),j=Object(o.b)();return Object(b.jsxs)(b.Fragment,{children:[c?Object(b.jsx)("button",{className:"course-button",onClick:function(){var e=Object(u.a)(Object(u.a)({},a.find((function(e){return e.id===i}))),{},{name:t,technologies:n.filter(Boolean),description:r});j(Object(l.b)({id:i,newValue:e})),s(!1)},children:"Confirm"}):Object(b.jsx)("button",{className:"course-button",onClick:function(){return s(!0)},children:"Edit"}),Object(b.jsx)("button",{className:"course-button",onClick:function(){return j(Object(l.d)(i))},children:"Delete"})]})},d=n(13),f=n(3);var h=function(e){var t=e.item,n=e.index,s=Object(c.useState)(!1),i=Object(r.a)(s,2),u=i[0],h=i[1],O=Object(c.useState)(!1),m=Object(r.a)(O,2),p=m[0],g=m[1],x=Object(c.useState)(t.name),v=Object(r.a)(x,2),y=v[0],N=v[1],C=Object(c.useState)(t.technologies),S=Object(r.a)(C,2),k=S[0],w=S[1],A=Object(c.useState)(t.description),I=Object(r.a)(A,2),L=I[0],E=I[1],D=Object(o.c)((function(e){return e.userData.isLoggedIn})),P=Object(o.c)((function(e){return e.userData.currentUser})),q=Object(o.c)((function(e){return e.courses.courses})),F=Object(f.g)(),J=Object(o.b)();return Object(b.jsxs)("li",{className:"course-item "+(u?" open":""),onClick:function(){return h(!0)},style:{backgroundColor:t.color},children:[Object(b.jsxs)("div",{className:"course-text",children:[p?Object(b.jsx)("input",{type:"text",className:"course-title-input",value:y,onChange:function(e){return N(e.target.value)}}):Object(b.jsx)("h3",{className:"course-title",children:t.name}),Object(b.jsxs)("p",{className:"course-technologies"+(u?" open-tech":""),children:["Languages:",t.technologies.map((function(e,n){return p?Object(b.jsx)("input",{type:"text",className:"course-technique-input",value:k[n],onChange:function(e){return function(e,t){var n=a(k);n[t]=e.target.value,w(n)}(e,n)}},n):Object(b.jsx)("span",{className:"course-technique"+(u?" open-tech":""),children:n===t.technologies.length-1?e:e+","},n)})),p&&Object(b.jsx)("button",{onClick:function(){return J(Object(l.a)(n))},children:"+"})]}),u&&(p?Object(b.jsx)("textarea",{maxLength:"2000",className:"course-description-input",value:L,onChange:function(e){return E(e.target.value)}}):Object(b.jsx)("p",{className:"course-description",children:t.description}))]}),Object(b.jsxs)("div",{className:"course-image",children:[Object(b.jsx)("img",{src:t.logo,width:"100px",height:"100px",className:"course-logo "+(u?" open-logo":""),alt:"course-logo"}),u&&Object(b.jsxs)("div",{className:"course-buttons",children:[D?P.userCourses.some((function(e){return e===t.id}))?Object(b.jsx)("p",{children:"You already have it"}):Object(b.jsx)("button",{className:"course-button green",onClick:function(e){e.stopPropagation(),J(Object(d.b)({courseId:q[n].id,index:P.index})),J(Object(d.e)(P.index)),h(!1),g(!1)},children:"Get"}):Object(b.jsx)("button",{className:"course-button green",onClick:function(){return F.push("/auth/login")},children:"Login"}),D&&P.isAdmin?Object(b.jsx)(j,{name:y,technologies:k,description:L,edit:p,setEdit:g,id:t.id}):null,p?Object(b.jsx)("button",{className:"course-button",onClick:function(e){g(!1),e.stopPropagation(),N(t.name),w(t.technologies),E(t.description)},children:"Cancel"}):Object(b.jsx)("button",{className:"course-button",onClick:function(e){h(!1),e.stopPropagation()},children:"Close"})]})]})]})};t.default=function(){var e=Object(o.c)((function(e){return e.courses.courses})),t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],i=n[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"courses",children:[Object(b.jsx)("div",{className:"course-serach",children:Object(b.jsx)("input",{type:"text",className:"course-search-input",onChange:function(e){return i(e.target.value)},placeholder:"Serach..."})}),Object(b.jsx)("ul",{className:"course-list",children:e.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).map((function(e,t){return Object(b.jsx)(h,{item:e,index:t},e.id)}))})]})})}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(46);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(a){c=!0,o=a}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(47);function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},47:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=7.e7eb0e01.chunk.js.map