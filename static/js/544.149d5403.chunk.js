"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{126:function(n,t,e){var r=e(689),c=e(87),o=e(184);t.Z=function(n){var t=n.movieList,e=(0,r.TH)();return(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.title,i=n.name;return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:r||i})},t)}))})}},544:function(n,t,e){e.r(t);var r=e(439),c=e(791),o=e(126),i=e(577),u=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],a=t[1];return(0,c.useEffect)((function(){(0,i.sc)(i.Md).then((function(n){var t=n.results;a(t)}))}),[]),(0,u.jsxs)("section",{children:[(0,u.jsx)("h1",{children:"Trending today"}),e.length>0&&(0,u.jsx)(o.Z,{movieList:e})]})}},577:function(n,t,e){e.d(t,{Fm:function(){return i},Md:function(){return o},WZ:function(){return s},nA:function(){return u},sc:function(){return a}});var r="https://api.themoviedb.org/3",c="19011014b9b53c4fd496d37c25f2b619",o="/trending/all/day",i="/search/movie",u="/reviews";function a(n,t){return fetch("".concat(r).concat(n,"?api_key=").concat(c,"&query=").concat(t)).then((function(n){return n.ok?n.json():Promise.reject(new Error("\u041d\u0430\u0436\u0430\u043b\u044c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))}function s(n,t){return fetch("".concat(r,"/movie/").concat(n).concat(t,"?api_key=").concat(c)).then((function(n){return n.ok?n.json():Promise.reject(new Error("\u041d\u0430\u0436\u0430\u043b\u044c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))}}}]);
//# sourceMappingURL=544.149d5403.chunk.js.map