"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[366],{366:function(e,n,i){i.r(n),i.d(n,{default:function(){return u}});var t=i(439),r=i(791),s=i(87),c=i(689),o=i(184),a=function(){var e,n,i=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,o.jsx)("div",{children:(0,o.jsx)(s.rU,{to:i,children:"Go back"})})},l=i(577),d={};var u=function(){var e,n,i=(0,r.useState)(null),u=(0,t.Z)(i,2),h=u[0],v=u[1],m=(0,c.UO)().movieId,f=(0,c.TH)();if((0,r.useEffect)((function(){(0,l.WZ)(m).then((function(e){v(e)}))}),[m]),h){var j=h.name,x=h.title,_=h.release_date,p=h.overview,g=h.genres,w=h.poster_path,k=h.vote_average,b=new Date(_),N="https://image.tmdb.org/t/p/w500".concat(w);w||(N="https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg");var D=null!==(e=null===(n=f.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("section",{className:d.section,children:[(0,o.jsx)(a,{}),(0,o.jsxs)("div",{className:d.movieDetails,children:[(0,o.jsx)("img",{className:d.movieDetails__img,src:N,alt:x||j,width:"240",height:"320"}),(0,o.jsxs)("div",{className:d.movieDetails__desc,children:[(0,o.jsxs)("h2",{children:[x||j," (",b.getFullYear(),")"]}),(0,o.jsxs)("p",{children:["User score: ",Math.round(10*k)," %"]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:p}),(0,o.jsx)("h4",{children:"Genres"}),(0,o.jsx)("p",{children:g&&g.length>0&&g.map((function(e){return e.name})).join(", ")})]})]}),(0,o.jsxs)("div",{className:d.movieDetails__info,children:[(0,o.jsx)("p",{children:"Addination information"}),(0,o.jsxs)("ul",{className:d.movieDetails__nav,children:[(0,o.jsx)("li",{children:(0,o.jsx)(s.OL,{to:"cast",className:d.navLink,state:{from:D},children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.OL,{to:"reviews",className:d.navLink,children:"Reviews"})})]})]})]}),(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)("section",{children:(0,o.jsx)(c.j3,{})})})]})}}},577:function(e,n,i){i.d(n,{Fm:function(){return c},Md:function(){return s},WZ:function(){return l},nA:function(){return o},sc:function(){return a}});var t="https://api.themoviedb.org/3",r="19011014b9b53c4fd496d37c25f2b619",s="/trending/all/day",c="/search/movie",o="/reviews";function a(e,n){return fetch("".concat(t).concat(e,"?api_key=").concat(r,"&query=").concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0430\u0436\u0430\u043b\u044c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))}function l(e,n){return fetch("".concat(t,"/movie/").concat(e).concat(n,"?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0430\u0436\u0430\u043b\u044c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"))}))}}}]);
//# sourceMappingURL=366.ad00acb7.chunk.js.map