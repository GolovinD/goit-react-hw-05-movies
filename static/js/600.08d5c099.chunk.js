"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[600],{126:function(t,n,e){var r=e(689),c=e(87),o=e(184);n.Z=function(t){var n=t.movieList,e=(0,r.TH)();return(0,o.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.title,u=t.name;return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:e},children:r||u})},n)}))})}},600:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(439),c=e(791),o=e(87),u={},i=e(184);var a=function(t){var n=t.onSubmit,e=(0,c.useState)([]),o=(0,r.Z)(e,2),a=o[0],s=o[1];return(0,i.jsx)("div",{children:(0,i.jsxs)("form",{className:u.form,onSubmit:function(t){t.preventDefault();var e=a.toLowerCase();""!==e.trim()?(n(e),s("")):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442")},children:[(0,i.jsx)("input",{className:u.input,type:"text",value:a,onChange:function(t){s(t.currentTarget.value)},autocomplete:"off",placeholder:"Search movie",autofocus:!0}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})})},s=e(126),f=e(577);var l=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],u=n[1],l=(0,c.useState)(""),m=(0,r.Z)(l,2),v=m[0],h=m[1],d=(0,o.lr)(""),p=(0,r.Z)(d,2),j=p[0],b=p[1];(0,c.useEffect)((function(){h(j.get("query")),""!==v&&v&&(0,f.sc)(f.Fm,v).then((function(t){var n=t.results;u(n)}))}),[v,j]);var x=e.length>0&&v;return(0,i.jsxs)("section",{children:[(0,i.jsx)(a,{onSubmit:function(t){b({query:t})}}),x&&(0,i.jsx)(s.Z,{movieList:e})]})}},577:function(t,n,e){e.d(n,{Fm:function(){return u},Md:function(){return o},WZ:function(){return s},nA:function(){return i},sc:function(){return a}});var r="https://api.themoviedb.org/3",c="19011014b9b53c4fd496d37c25f2b619",o="/trending/all/day",u="/search/movie",i="/reviews";function a(t,n){return fetch("".concat(r).concat(t,"?api_key=").concat(c,"&query=").concat(n)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0430\u0436\u0430\u043b\u044c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))}function s(t,n){return fetch("".concat(r,"/movie/").concat(t).concat(n,"?api_key=").concat(c)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0430\u0436\u0430\u043b\u044c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))}}}]);
//# sourceMappingURL=600.08d5c099.chunk.js.map