"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[787],{787:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t=r(885),o=r(791),i=r(739);var c,s,a,d,l,h=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=62f49978977e44c6bb0e3dfa31d10c8e")).then((function(n){return n.json()}))},x=r(168),p=r(731),u=r(444),f=u.ZP.div(c||(c=(0,x.Z)(["\nmargin: 10px 15px;\n"]))),g=u.ZP.div(s||(s=(0,x.Z)(["\ndisplay: flex;\n"]))),v=u.ZP.img(a||(a=(0,x.Z)(["\nmargin-right: 15px\n"]))),b=(0,u.ZP)(p.OL)(d||(d=(0,x.Z)(["\ndisplay: block;\nwidth: 90px;\nheight: 25px;\nborder: 1px solid grey;\ncolor: black;\ntext-decoration: none;\nborder-radius: 4px;\nfont-size: 20px;\nfont-weight: 500;\ntext-align: center;\n\n&:active {\n    border: 1px solid green;\n    background-color: grey;\n    color: white;\n}\n\n&:hover:not(:active), &:focus:not(:active) {\n    border: 1px solid green;\n    background-color: grey;\n    color: white;\n}\n&:not(:last-child) {\n    margin-bottom: 10px;\n}\n"]))),m=(0,u.ZP)(p.rU)(l||(l=(0,x.Z)(["\nwidth: 90px;\nheight: 20px;\nborder: 1px dashed black;\nbackground-color: darkslategrey;\ncolor: white;\ntext-decoration: none;\nmargin-left: 20px;\ncursor: pointer;\n\n&:hover, &:focus{\n    border: 2px solid green;\n}\n"]))),j=r(184),w=function(){var n=(0,o.useState)(null),e=(0,t.Z)(n,2),r=e[0],c=e[1],s=(0,i.TH)(),a=(0,i.UO)().id;if((0,o.useEffect)((function(){h(a).then((function(n){c(n)}))}),[a]),r){var d=r.poster_path,l=r.original_title,x=r.genres,p=r.overview,u=r.vote_average,w=r.id,k=u.toFixed(0),_=x.map((function(n){return n.name})).join(", ");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(m,{type:"button",to:s.state.from,children:" \u2190 Go back"}),(0,j.jsxs)(f,{children:[(0,j.jsxs)(g,{children:[d?(0,j.jsx)(v,{src:"https://image.tmdb.org/t/p/w300".concat(d)}):"We couldn`t found this foto",(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:l}),(0,j.jsxs)("p",{children:["User score: ",k,"%"]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:p}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:_})]})]}),(0,j.jsx)("p",{children:"Additional information:"}),(0,j.jsx)(b,{to:"actors",state:{id:w,from:s.state.from},children:"Cast"}),(0,j.jsx)(b,{to:"review",state:{id:w,from:s.state.from},children:"Reviews"}),(0,j.jsx)(o.Suspense,{fallback:null,children:(0,j.jsx)(i.j3,{})})]})]})}}}}]);
//# sourceMappingURL=787.69ade2e0.chunk.js.map