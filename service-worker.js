"use strict";var precacheConfig=[["/index.html","0d1af230f2eaf462472cd92f1e227d95"],["/static/css/main.f91c2ae6.css","bb73483a896dec86618502816cc8d64e"],["/static/js/main.55a9efde.js","9a7701f96b1d2309a3e2d03bea7938e1"],["/static/media/Cplusplus-logo.2824a7c1.png","2824a7c16704c8f02248debb8a169281"],["/static/media/apache-solr.677c2ebb.png","677c2ebb03385340e8b55e5cc27e3364"],["/static/media/asu-logo.44a7fcf3.png","44a7fcf30f594dab83439dbb97e0c0eb"],["/static/media/asu_logo.272679bf.png","272679bfc9c4e06c837a307da4d81958"],["/static/media/avatar.78d4db3c.jpg","78d4db3ccd6db4264e0b36ffccedabdf"],["/static/media/bootstrap-logo.ef38030f.png","ef38030fbdc5927456af8b962476c1f3"],["/static/media/c-logo.aefba360.png","aefba360a3939bef954f7293670577c6"],["/static/media/c-sharp.0511565f.png","0511565f30d0aa23e97d19ebb264e3d1"],["/static/media/css-logo.174ea553.png","174ea553e5dd660091ae2ad813d8bd22"],["/static/media/d3.043ff197.png","043ff19740577c2444280e958eadf210"],["/static/media/es-logo.b77ef362.png","b77ef362149284a4219aac5d4cc9d4e2"],["/static/media/jquery.b34e848e.png","b34e848e1f0c59afa5efaa7862cddd5b"],["/static/media/logo.ee7cd8ed.svg","ee7cd8ed2dcec943251eb2763684fc6f"],["/static/media/nodejs.f8dab57d.png","f8dab57d048fabd69ea16c67e1615b86"],["/static/media/pict-logo.62712bd7.png","62712bd700a3f64b96f806a830ab45ed"],["/static/media/postgres.de71b010.png","de71b01020f6354aee76587758508ac8"],["/static/media/react.ea42bd8f.png","ea42bd8fbe2fc8e997626d6037a01185"],["/static/media/rolocule-logo.257e7a64.png","257e7a64aa9014c84c7d482cf632dc86"],["/static/media/unity-logo.bcbbeb5b.png","bcbbeb5b467a3f4f22a1e66985804357"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});