(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{JNau:function(n,e,t){var l=t("mp5j");n.exports=(l.default||l).template({1:function(n,e,t,l,a){var r,o,c=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,u=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="card mb-3 blok-img" style="max-width: 800px;">\r\n    <div class="row g-0 bg-light">\r\n        <div class="col-md-4">\r\n            <img src='+u("function"==typeof(o=null!=(o=s(t,"flag")||(null!=e?s(e,"flag"):e))?o:i)?o.call(c,{name:"flag",hash:{},data:a,loc:{start:{line:5,column:21},end:{line:5,column:29}}}):o)+' alt="flag" width="240" height="200">\r\n        </div>\r\n        <div class="col-md-8">\r\n            <div class="card-body">\r\n                <h2 class="card-title">'+u("function"==typeof(o=null!=(o=s(t,"name")||(null!=e?s(e,"name"):e))?o:i)?o.call(c,{name:"name",hash:{},data:a,loc:{start:{line:9,column:39},end:{line:9,column:47}}}):o)+'</h2>\r\n                <p class="card-text">Capital: '+u("function"==typeof(o=null!=(o=s(t,"capital")||(null!=e?s(e,"capital"):e))?o:i)?o.call(c,{name:"capital",hash:{},data:a,loc:{start:{line:10,column:46},end:{line:10,column:57}}}):o)+'</p>\r\n                <p class="card-text">Population: '+u("function"==typeof(o=null!=(o=s(t,"population")||(null!=e?s(e,"population"):e))?o:i)?o.call(c,{name:"population",hash:{},data:a,loc:{start:{line:11,column:49},end:{line:11,column:63}}}):o)+'</p>\r\n                <p class="card-text">Languages:</p>\r\n                <ul class="card-text">\r\n'+(null!=(r=s(t,"each").call(c,null!=e?s(e,"languages"):e,{name:"each",hash:{},fn:n.program(2,a,0),inverse:n.noop,data:a,loc:{start:{line:14,column:20},end:{line:16,column:29}}}))?r:"")+"                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"},2:function(n,e,t,l,a){var r,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"                    <li>"+n.escapeExpression("function"==typeof(r=null!=(r=o(t,"name")||(null!=e?o(e,"name"):e))?r:n.hooks.helperMissing)?r.call(null!=e?e:n.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:15,column:24},end:{line:15,column:32}}}):r)+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,l,a){var r;return null!=(r=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:22,column:9}}}))?r:""},useData:!0})},L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);var l=t("jffb"),a=t.n(l),r=t("QJ3N"),o=t("WSJ9");t("bzha"),t("zrP5");t("JBxO"),t("FdtR");var c=function(n){return fetch("https://restcountries.eu/rest/v2/name/"+n).then((function(n){if(n.ok)return n.json();throw new Error("Error fetching data")}))},i=(t("lmye"),t("D/wG"),{inputSearch:document.querySelector(".js-input"),listCountries:document.querySelector(".js-list"),cardBlock:document.querySelector(".js-container")});var u=t("JNau"),s=t.n(u);function p(n){n.length>10?(r.defaultModules.set(o,{}),Object(r.info)({text:"Too many matches found. Please enter a more specific query!"}),d()):n.length>1&&n.length<=10?(d(),function(n){n.map((function(n){var e=n.name;return i.listCountries.insertAdjacentHTML("beforeend","<li>"+e+"</li>")}))}(n)):(d(),function(n){d();var e=s()(n);i.cardBlock.insertAdjacentHTML("beforeend",e)}(n))}function d(){i.listCountries.innerHTML="",i.cardBlock.innerHTML=""}t("L1EO");i.inputSearch.addEventListener("input",a()((function(){var n=i.inputSearch.value;""!==n&&c(n).then((function(n){n&&p(n)})).catch((function(n){console.log("Error: ",n),r.defaultModules.set(o,{}),Object(r.error)({text:"Incorrect country entry!"}),d()}));d()}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a25c21137e02ae934d60.js.map