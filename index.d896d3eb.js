var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("2shzp");function s({poster_path:e,name:t,title:a,release_date:r,vote_average:n,first_air_date:s}){return`<div class="card">\n    <img src="https://image.tmdb.org/t/p/original${e}" alt="A FISTFUL OF LEAD" class="card_image" width="300">\n    <h2 class="card_name">${t||a}</h2>\n    <div class='card_item'>\n      <p class="card_title">Genre </p>\n      <p class='card_year'>${r?r.slice(0,4):s.slice(0,4)}</p>\n      <p class="card_rating">  ${n.toFixed(1)}</p>\n    </div>\n</div>`}(new class{async fetchImage(){const e={key:"3ff086ca8fded08ba42938358b3327b4"};let{key:t}=e;const a=(await n.default.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${t}`)).data;return this.page+=1,console.log(a.results),a}clearForm(){this.page=1}get searchQuery(){return this.images}set searchQuery(e){this.images=e}constructor(){this.images="",this.page=1}}).fetchImage().then((e=>{!function(e){const t=e.results.map((e=>s(e))).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",t)}(e)}));
//# sourceMappingURL=index.d896d3eb.js.map
