!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var i=r("bpxeT"),c=r("8MBJY"),o=r("a2hTj"),s=r("2TvXO"),d=r("dIxxU");function l(e){var t=e.poster_path,n=e.name,a=e.title,r=e.release_date,i=e.vote_average,c=e.first_air_date;return'<div class="card">\n    <img src="'.concat("https://image.tmdb.org/t/p/original").concat(t,'" alt="A FISTFUL OF LEAD" class="card_image" width="300">\n    <h2 class="card_name">').concat(n||a,"</h2>\n    <div class='card_item'>\n      <p class=\"card_title\">Genre </p>\n      <p class='card_year'>").concat(r?r.slice(0,4):c.slice(0,4),'</p>\n      <p class="card_rating">  ').concat(i.toFixed(1),"</p>\n    </div>\n</div>")}(new(function(){"use strict";function t(){e(c)(this,t),this.images="",this.page=1}return e(o)(t,[{key:"fetchImage",value:function(){var t=this;return e(i)(e(s).mark((function n(){var a,r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",a={key:"3ff086ca8fded08ba42938358b3327b4"}.key,e.next=5,d.default.get("".concat("https://api.themoviedb.org/3/trending/all/day","?api_key=").concat(a));case 5:return r=e.sent,i=r.data,t.page+=1,console.log(i.results),e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"clearForm",value:function(){this.page=1}},{key:"searchQuery",get:function(){return this.images},set:function(e){this.images=e}}]),t}())).fetchImage().then((function(e){!function(e){var t=e.results.map((function(e){return l(e)})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",t)}(e)}))}();
//# sourceMappingURL=index.992544fc.js.map
