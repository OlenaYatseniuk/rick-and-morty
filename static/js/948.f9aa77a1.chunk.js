"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[948],{4948:function(e,r,a){a.r(r),a.d(r,{default:function(){return W}});var n=a(4165),t=a(5861),c=a(9439),s=a(2791),o=a(1087),l=a(7689),i=a(5872),u=a(4805),_=a(4390),m=a(4388),g=a(8644),p={gallery:"CharacterGallery_gallery__-OnL6",gallery__item:"CharacterGallery_gallery__item__4c2l3",gallery__link:"CharacterGallery_gallery__link__yjBAr",gallery__image:"CharacterGallery_gallery__image__IYWJy",gallery__info:"CharacterGallery_gallery__info__TNXrp",gallery__name:"CharacterGallery_gallery__name__PxUOo",gallery__species:"CharacterGallery_gallery__species__xWrEa"},f=a(184),h=function(e){var r=e.items,a=(0,l.TH)();return(0,f.jsx)("ul",{className:p.gallery,children:r.map((function(e){var r=e.id,n=e.name,t=e.species,c=e.image;return(0,f.jsx)("li",{className:p.gallery__item,children:(0,f.jsx)(o.rU,{className:p.gallery__link,to:"/".concat(r),state:{from:a},children:(0,f.jsxs)("div",{className:p.gallery__itemWrapper,children:[(0,f.jsx)("img",{className:p.gallery__image,src:c,alt:n}),(0,f.jsxs)("div",{className:p.gallery__info,children:[(0,f.jsx)("p",{className:p.gallery__name,children:n}),(0,f.jsx)("p",{className:p.gallery__species,children:t})]})]})})},r)}))})},d=a(6355),v={searchForm:"SearchBar_searchForm__b1YgJ",searchForm__button:"SearchBar_searchForm__button__Vf1AB",searchForm__label:"SearchBar_searchForm__label__s4qcn",searchForm__input:"SearchBar_searchForm__input__l2cTW"};var y=function(e){e.filter;var r,a=(0,o.lr)(),n=(0,c.Z)(a,2),t=n[0],s=n[1],l=null!==(r=t.get("query"))&&void 0!==r?r:"",i=function(e){e.preventDefault()};return(0,f.jsxs)("form",{className:v.searchForm,onSubmit:i,children:[(0,f.jsx)(d.Ozl,{style:{fill:"rgba(0, 0, 0, 0.54)",cursor:"pointer",padding:"2px",width:"55px",height:"24px"},onClick:i}),(0,f.jsx)("input",{className:v.searchForm__input,value:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Filter by name...",onChange:function(e){var r=e.target.value;s({query:r})}})]})},x=a(7271),b=a(4702),j=a(9085),N=a(6856),Z="HomePage_wrapper__I8IQh",k="HomePage_logo__v+kfE",w="HomePage_info__kFLfW",C="HomePage_loginButton__GtgPG",S="HomePage_name__1DWqs",P="HomePage_paginationContainer__NV8hN",F="HomePage_button__jZCT+",G="HomePage_disabled__DGNEa",H="HomePage_pageTitle__PMus5",W=function(){var e,r,a=(0,s.useState)([]),p=(0,c.Z)(a,2),d=p[0],v=p[1],W=(0,s.useState)([]),q=(0,c.Z)(W,2),I=q[0],B=q[1],E=(0,o.lr)(),A=(0,c.Z)(E,2),O=A[0],T=A[1],z=(0,l.s0)(),D=null!==(e=O.get("page"))&&void 0!==e?e:1,J=null!==(r=O.get("query"))&&void 0!==r?r:"",L=localStorage.getItem("name")?JSON.parse(localStorage.getItem("name")):null,M=(0,s.useState)(!0),V=(0,c.Z)(M,2),Q=V[0],U=V[1],Y=(0,u.useMediaQuery)({maxWidth:767}),K=(0,s.useState)(1),X=(0,c.Z)(K,2),R=X[0],$=X[1],ee=function(e){T(J?{query:J,page:e}:{page:e})},re=(0,s.useMemo)((function(){return d.sort((function(e,r){return e.name.localeCompare(r.name)}))}),[d]);(0,s.useEffect)((function(){(0,t.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,(0,_.f_)(D);case 3:r=e.sent,U(!1),v(r.results),$(r.info.pages);case 7:case"end":return e.stop()}}),e)})))()}),[D]),(0,s.useEffect)((function(){(0,t.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae(J,D);case 3:(r=e.sent)||(T({}),j.Am.error("Sorry, the are no characters by your search. Please try to search another name")),$(r.data.info.pages),j.Am.success("Wow! We found ".concat(r.data.info.count," ").concat(r.data.info.count>1?"characters":"character"," for you!")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error in searching:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[J,T,D]);var ae=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(r,a){var t,c,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,(0,_.mq)(r,a);case 3:return s=e.sent,U(!1),null===s||void 0===s||null===(t=s.data)||void 0===t||t.results.sort((function(e,r){return e.name.localeCompare(r.name)})),B(null===s||void 0===s||null===(c=s.data)||void 0===c?void 0:c.results),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}();return Q?(0,f.jsx)(g.Z,{}):(0,f.jsx)("div",{className:Z,children:(0,f.jsxs)(m.Z,{children:[(0,f.jsxs)("div",{className:w,children:[(0,f.jsxs)("div",{className:S,children:["Hello, ",L,"!"]}),(0,f.jsx)("button",{className:C,onClick:function(){return(0,i.Kz)(),localStorage.removeItem("token"),localStorage.removeItem("name"),void z("/login",{replace:!0})},children:"Log Out with Google"})]}),(0,f.jsx)("div",{className:k,children:(0,f.jsx)("img",{alt:"logo",src:Y?b:x})}),(0,f.jsx)(y,{filter:ae}),(0,f.jsx)(h,{items:null!==I&&void 0!==I&&I.length?I:re}),R>1&&(0,f.jsxs)("div",{className:P,children:[(0,f.jsx)("button",{disabled:1===Number(D),className:1===Number(D)?G:F,onClick:function(){return ee(Number(D)-1)},children:(0,f.jsx)(N.sG8,{})}),(0,f.jsxs)("p",{className:H,children:["Page ",D," of ",R]}),(0,f.jsx)("button",{className:Number(D)===R?G:F,onClick:function(){return ee(Number(D)+1)},disabled:Number(D)===R,children:(0,f.jsx)(N.AeI,{})})]})]})})}},4390:function(e,r,a){a.d(r,{Vc:function(){return l},f_:function(){return o},mq:function(){return i}});var n=a(4165),t=a(5861),c=a(1243),s="https://rickandmortyapi.com/api/character",o=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(r){var a,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(s,"?page=").concat(r));case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error("Something went wrong"+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(r){var a,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(s,"/").concat(r));case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error("Something went wrong in searching by id"+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(r,a){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(s,"/?name=").concat(r,"&page=").concat(a));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error("Something went wrong in searching by name"+e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,a){return e.apply(this,arguments)}}()},4388:function(e,r,a){a.d(r,{Z:function(){return c}});a(2791);var n={container:"Container_container__jzxfz"},t=a(184);var c=function(e){var r=e.children;return(0,t.jsx)("div",{className:n.container,children:r})}},7271:function(e,r,a){e.exports=a.p+"static/media/logo-desktop.55b7a1463d7a78a489cd.png"},4702:function(e,r,a){e.exports=a.p+"static/media/logo-mobile.5843d2192365561e07bd.png"}}]);
//# sourceMappingURL=948.f9aa77a1.chunk.js.map