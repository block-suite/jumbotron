!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){var o=n(15),r=n(16),i=n(17);e.exports=function(e,t){return o(e)||r(e,t)||i()}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(21),r=n(2);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var o=n(22);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e){e.exports=JSON.parse('{"name":"sortabrilliant/jumbotron","category":"common","attributes":{"videos":{"type":"array","default":[],"source":"query","selector":"ul.jumbotron-gallery .jumbotron-gallery-item","query":{"id":{"source":"attribute","selector":"a","attribute":"data-id"},"title":{"type":"string","source":"text","selector":"a"},"url":{"source":"attribute","selector":"a","attribute":"href"},"description":{"source":"attribute","selector":"a","attribute":"data-desc"},"fileLength":{"type":"string","source":"text","selector":".jumbotron-gallery-item__time"}}}}}')},function(e,t,n){var o=n(18),r=n(19),i=n(20);e.exports=function(e){return o(e)||r(e)||i()}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(o=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},,,,function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),i=Object(o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 40"},Object(o.createElement)(r.G,null,Object(o.createElement)(r.Path,{d:"M21.5,30h-19C1.122,30,0,28.879,0,27.5v-13C0,13.122,1.122,12,2.5,12h19c1.379,0,2.5,1.122,2.5,2.5v13C24,28.879,22.879,30,21.5,30z M2.5,14C2.225,14,2,14.225,2,14.5v13C2,27.775,2.225,28,2.5,28h19c0.275,0,0.5-0.225,0.5-0.5v-13c0-0.276-0.225-0.5-0.5-0.5H2.5z"}),Object(o.createElement)(r.Path,{d:"M27,26c-0.553,0-1-0.447-1-1V10.5c0-0.276-0.225-0.5-0.5-0.5H4c-0.552,0-1-0.448-1-1s0.448-1,1-1h21.5c1.379,0,2.5,1.122,2.5,2.5V25C28,25.553,27.553,26,27,26z"}),Object(o.createElement)(r.Path,{d:"M31,22c-0.553,0-1-0.447-1-1V6.5C30,6.225,29.775,6,29.5,6H8C7.448,6,7,5.552,7,5s0.448-1,1-1h21.5C30.879,4,32,5.122,32,6.5V21C32,21.553,31.553,22,31,22z"}),Object(o.createElement)(r.G,null,Object(o.createElement)(r.Polygon,{points:"15.125,21 9.875,18 9.875,24"}),Object(o.createElement)(r.Path,{d:"M9.875,25c-0.173,0-0.347-0.045-0.502-0.135C9.065,24.686,8.875,24.356,8.875,24v-6c0-0.356,0.19-0.686,0.498-0.865c0.31-0.178,0.688-0.18,0.998-0.003l5.25,3c0.312,0.178,0.504,0.51,0.504,0.868s-0.192,0.69-0.504,0.868l-5.25,3C10.217,24.956,10.046,25,9.875,25z M10.875,19.724v2.553L13.109,21L10.875,19.724z"})))),c=n(4),l=n.n(c),a=n(5),u=n.n(a),s=n(12),p=n.n(s),f=n(6),b=n.n(f),d=n(7),m=n.n(d),v=n(8),y=n.n(v),j=n(9),h=n.n(j),O=n(2),g=n.n(O),E=n(10),w=n.n(E),S=n(3),x=function(e){var t=e.video;return t?Object(o.createElement)("figure",{className:"jumbotron-player"},Object(o.createElement)(r.Disabled,null,Object(o.createElement)("video",{controls:!0,src:t.url})),t.description&&Object(o.createElement)("figcaption",null,Object(o.createElement)(o.RawHTML,null,t.description))):null},M=function(e){function t(){var e;return b()(this,t),(e=y()(this,h()(t).apply(this,arguments))).onSelectVideo=e.onSelectVideo.bind(g()(e)),e}return w()(t,e),m()(t,[{key:"onSelectVideo",value:function(e){e.preventDefault(),this.props.onSelectVideo()}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,i=e.url,c=e.description,l=e.fileLength,a=e.isFirstItem,u=e.isLastItem,s=e.onMoveUp,p=e.onMoveDown;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("a",{href:i,className:"jumbotron-gallery-item__link","data-id":t,"data-desc":c,onClick:this.onSelectVideo},n),Object(o.createElement)("span",{className:"jumbotron-gallery-item__time"},l),Object(o.createElement)("span",{className:"jumbotron-gallery-item__movers"},Object(o.createElement)(r.IconButton,{icon:"arrow-up",onClick:a?void 0:s,className:"jumbotron-gallery-item__move-up",label:"Move video up","aria-disabled":a}),Object(o.createElement)(r.IconButton,{icon:"arrow-down",onClick:u?void 0:p,className:"jumbotron-gallery-item__move-down",label:"Move video down","aria-disabled":u})))}}]),t}(o.Component),_=function(e){var t=e.attributes,n=e.isSelected,r=e.mediaPlaceholder,i=e.onSelectVideo,c=e.onMoveUp,a=e.onMoveDown,u=t.videos;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("ul",{className:"jumbotron-gallery"},u.map((function(e,t){return Object(o.createElement)("li",{className:"jumbotron-gallery-item",key:e.id||e.url},Object(o.createElement)(M,l()({},e,{isFirstItem:0===t,isLastItem:t+1===u.length,onMoveUp:c(t),onMoveDown:a(t),onSelectVideo:i(e)})))}))),n&&r)},V=n(13);var k=["video"],N=function(e){function t(){var e;return b()(this,t),(e=y()(this,h()(t).apply(this,arguments))).onSelectVideo=e.onSelectVideo.bind(g()(e)),e.onMove=e.onMove.bind(g()(e)),e.onMoveUp=e.onMoveUp.bind(g()(e)),e.onMoveDown=e.onMoveDown.bind(g()(e)),e.onSelectVideos=e.onSelectVideos.bind(g()(e)),e.state={selectedVideo:null},e}return w()(t,e),m()(t,[{key:"onSelectVideo",value:function(e){var t=this;return function(){t.state.selectedVideo!==e&&t.setState({selectedVideo:e})}}},{key:"onMove",value:function(e,t){var n=p()(this.props.attributes.videos);n.splice(t,1,this.props.attributes.videos[e]),n.splice(e,1,this.props.attributes.videos[t]),this.props.setAttributes({videos:n})}},{key:"onMoveUp",value:function(e){var t=this;return function(){0!==e&&t.onMove(e,e-1)}}},{key:"onMoveDown",value:function(e){var t=this;return function(){e!==t.props.attributes.videos.length-1&&t.onMove(e,e+1)}}},{key:"onSelectVideos",value:function(e){this.props.setAttributes({videos:e.map((function(e){return function(e){return Object(V.pick)(e,["id","title","url","description","fileLength"])}(e)}))})}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,c=e.isSelected,a=e.noticeOperations,s=e.noticeUI,p=this.state.selectedVideo,f=t.videos,b=!!f.length,d=Object(o.createElement)(S.MediaPlaceholder,{addToGallery:b,isAppender:b,className:n,disableMediaButtons:b&&!c,icon:!b&&Object(o.createElement)(S.BlockIcon,{icon:i}),labels:{title:!b&&"Jumbotron",instructions:!b&&"Drag videos, upload new ones or select files from your library."},onSelect:this.onSelectVideos,accept:"video/*",allowedTypes:k,multiple:!0,value:f,onError:a.createErrorNotice,notices:b?void 0:s}),m=Object(o.createElement)(S.BlockControls,null,b&&Object(o.createElement)(r.Toolbar,null,Object(o.createElement)(S.MediaUpload,{onSelect:this.onSelectVideos,allowedTypes:k,multiple:!0,value:f.map((function(e){return e.id})),render:function(e){var t=e.open;return Object(o.createElement)(r.IconButton,{className:"components-toolbar__control",label:"Edit gallery",icon:"edit",onClick:t})}})));if(!b)return d;var v=u()(f,1)[0];return Object(o.createElement)(o.Fragment,null,m,s,Object(o.createElement)("div",{className:n},Object(o.createElement)(x,{video:p||v}),Object(o.createElement)(_,l()({},this.props,{mediaPlaceholder:d,onSelectVideo:this.onSelectVideo,onMoveUp:this.onMoveUp,onMoveDown:this.onMoveDown}))))}}]),t}(o.Component),C=Object(r.withNotices)(N),P=function(e){var t=e.attributes,n=e.className,r=t.videos,i=u()(r,1)[0];return Object(o.createElement)("div",{className:n},Object(o.createElement)("figure",{className:"jumbotron-player"},Object(o.createElement)("video",{controls:!0,src:i.url}),i.description&&Object(o.createElement)("figcaption",null,Object(o.createElement)(o.RawHTML,null,i.description))),Object(o.createElement)("ul",{className:"jumbotron-gallery"},r.map((function(e){return Object(o.createElement)("li",{className:"jumbotron-gallery-item",key:e.id},Object(o.createElement)("a",{href:e.url,className:"jumbotron-gallery-item__link","data-id":e.id,"data-desc":e.description},e.title),Object(o.createElement)("span",{className:"jumbotron-gallery-item__time"},e.fileLength))}))))},T=n(11),A=n(14),D=T.name,I=T.category,L=T.attributes;Object(A.registerBlockType)(D,{title:"Jumbotron",description:"",keywords:["videos","gallery"],icon:i,category:I,attributes:L,edit:C,save:P})}]);