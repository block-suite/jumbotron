!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=25)}({25:function(t,e){var r;(r=document.querySelectorAll(".wp-block-sortabrilliant-jumbotron")).length&&r.forEach((function(t){var e=t.querySelectorAll(".jumbotron-gallery-item__link");t.addEventListener("click",(function(r){if(r.preventDefault(),Array.from(e).includes(r.target)){var n={src:r.target.href,id:r.target.getAttribute("data-id"),desc:r.target.getAttribute("data-desc")};!function(t,e){var r=t.querySelector(".jumbotron-player"),n='\n\t\t\t<figure class="jumbotron-player">\n\t\t\t\t<video controls="true" src='.concat(e.src,"></video>\n\t\t\t\t<figcaption>").concat(e.desc,"</figcaption>\n\t\t\t</figure>\n\t\t");r.outerHTML=n}(t,n)}}))}))}});