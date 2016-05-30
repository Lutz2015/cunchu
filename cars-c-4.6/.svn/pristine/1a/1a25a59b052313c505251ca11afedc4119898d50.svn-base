// Zepto 1.1.6 (generated with Zepto Builder) - zepto event ajax form ie callbacks deferred detect - zeptojs.com/license 
var Zepto=function(){function t(t){return null==t?String(t):J[X.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return A.call(t,function(t){return null!=t})}function u(t){return t.length>0?j.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in Z?Z[t]:Z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||D[c(t)]?e:e+"px"}function h(t){var e,n;return F[t]||(e=M.createElement(t),M.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),F[t]=n),F[t]}function p(t){return"children"in t?k.call(t.children):j.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function m(t,e,n){for(S in e)n&&(o(e[S])||Q(e[S]))?(o(e[S])&&!o(t[S])&&(t[S]={}),Q(e[S])&&!Q(t[S])&&(t[S]=[]),m(t[S],e[S],n)):e[S]!==E&&(t[S]=e[S])}function v(t,e){return null==e?j(t):j(t).filter(e)}function g(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",r=n&&n.baseVal!==E;return e===E?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function x(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?j.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)w(t.childNodes[n],e)}var E,S,j,T,C,O,P=[],N=P.concat,A=P.filter,k=P.slice,M=window.document,F={},Z={},D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,W=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],z=["after","prepend","before","append"],B=M.createElement("table"),I=M.createElement("tr"),V={tr:M.createElement("tbody"),tbody:B,thead:B,tfoot:B,td:I,th:I,"*":M.createElement("div")},H=/complete|loaded|interactive/,U=/^[\w-]*$/,J={},X=J.toString,K={},Y=M.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return K.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=Y).appendChild(t),r=~K.qsa(i,e).indexOf(t),o&&Y.removeChild(t),r},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},K.fragment=function(t,e,n){var r,i,a;return $.test(t)&&(r=j(M.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(_,"<$1></$2>")),e===E&&(e=L.test(t)&&RegExp.$1),e in V||(e="*"),a=V[e],a.innerHTML=""+t,r=j.each(k.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=j(r),j.each(n,function(t,e){q.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},K.Z=function(t,e){return new d(t,e)},K.isZ=function(t){return t instanceof K.Z},K.init=function(t,n){var r;if(!t)return K.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&L.test(t))r=K.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);r=K.qsa(M,t)}else{if(e(t))return j(M).ready(t);if(K.isZ(t))return t;if(Q(t))r=s(t);else if(i(t))r=[t],t=null;else if(L.test(t))r=K.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return j(n).find(t);r=K.qsa(M,t)}}return K.Z(r,t)},j=function(t,e){return K.init(t,e)},j.extend=function(t){var e,n=k.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},K.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=U.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:k.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=M.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=Q,j.isPlainObject=o,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},j.camelCase=C,j.trim=function(t){return null==t?"":String.prototype.trim.call(t)},j.uuid=0,j.support={},j.expr={},j.noop=function(){},j.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},j.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},j.grep=function(t,e){return A.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){J["[object "+e+"]"]=e.toLowerCase()}),j.fn={constructor:K.Z,length:0,forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,splice:P.splice,indexOf:P.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=K.isZ(e)?e.toArray():e;return N.apply(K.isZ(this)?this.toArray():this,n)},map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j(k.apply(this,arguments))},ready:function(t){return H.test(M.readyState)&&M.body?t(j):M.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===E?k.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(A.call(this,function(e){return K.matches(e,t)}))},add:function(t,e){return j(O(this.concat(j(t,e))))},is:function(t){return this.length>0&&K.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?k.call(t):j(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return i(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:j(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?j(t).filter(function(){var t=this;return P.some.call(n,function(e){return j.contains(e,t)})}):1==this.length?j(K.qsa(this[0],t)):this.map(function(){return K.qsa(this,t)}):j()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=j(t));n&&!(i?i.indexOf(n)>=0:K.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(O(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||k.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=j(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=j(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;j(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(S in t)y(this,S,t[S]);else y(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(W,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?x(r):E},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=j(this),r=g(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(!j.contains(M.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[C(e)]||r.getPropertyValue(e);if(Q(e)){var o={};return j.each(e,function(t,e){o[e]=i.style[C(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(S in e)e[S]||0===e[S]?a+=c(S)+":"+f(S,e[S])+";":this.each(function(){this.style.removeProperty(c(S))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(b(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){T=[];var n=b(this),r=g(this,t,e,n);r.split(/\s+/g).forEach(function(t){j(this).hasClass(t)||T.push(t)},this),T.length&&b(this,n+(n?" ":"")+T.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return b(this,"");T=b(this),g(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(l(t)," ")}),b(this,T.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=j(this),i=g(this,t,n,b(this));i.split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,r.top+=parseFloat(j(e[0]).css("border-top-width"))||0,r.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||M.body;t&&!R.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});j.fn[t]=function(i){var o,a=this[0];return i===E?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=j(this),a.css(t,g(this,i,e,a[t]()))})}}),z.forEach(function(e,n){var r=n%2;j.fn[e]=function(){var e,i,o=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:K.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=j.contains(M.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return j(t).remove();i.insertBefore(t,e),s&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},j.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),K.Z.prototype=d.prototype=j.fn,K.uniq=O,K.deserializeValue=x,j.zepto=K,j}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==S?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",S="text/html",j=/^\s*$/,T=y.createElement("a");T.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:S,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i,u=t.extend({},e||{}),p=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===u[m]&&(u[m]=t.ajaxSettings[m]);r(u),u.crossDomain||(n=y.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=T.protocol+"//"+T.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(i=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,i)),h(u);var d=u.dataType,g=/\?.+=\?/.test(u.url);if(g&&(d="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=d&&"jsonp"!=d)||(u.url=f(u.url,"_="+Date.now())),"jsonp"==d)return g||(u.url=f(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,p);var b,x=u.accepts[d],w={},E=function(t,e){w[t.toLowerCase()]=[t,e]},S=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,C=u.xhr(),O=C.setRequestHeader;if(p&&p.promise(C),u.crossDomain||E("X-Requested-With","XMLHttpRequest"),E("Accept",x||"*/*"),(x=u.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(x)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&E("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(v in u.headers)E(v,u.headers[v]);if(C.setRequestHeader=E,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=c,clearTimeout(b);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==S){d=d||l(u.mimeType||C.getResponseHeader("content-type")),e=C.responseText;try{"script"==d?(1,eval)(e):"xml"==d?e=C.responseXML:"json"==d&&(e=j.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?s(n,"parsererror",C,u,p):a(e,C,u,p)}else s(C.statusText||null,C.status?"error":"abort",C,u,p)}},o(C,u)===!1)return C.abort(),s(null,"abort",C,u,p),C;if(u.xhrFields)for(v in u.xhrFields)C[v]=u.xhrFields[v];var P="async"in u?u.async:!0;C.open(u.type,u.url,P,u.username,u.password);for(v in w)O.apply(C,w[v]);return u.timeout>0&&(b=setTimeout(function(){C.onreadystatechange=c,C.abort(),s(null,"timeout",C,u,p)},u.timeout)),C.send(u.data?u.data:null),C},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(e)+"="+C(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,r,i,o,a,s,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,r=!0,s=o||0,o=0,a=u.length,i=!0;u&&a>s;++s)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var r=u.length,s=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&s(n)})};s(arguments),i?a=u.length:n&&(o=r,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var r;(r=t.inArray(n,u,r))>-1;)u.splice(r,1),i&&(a>=r&&--a,s>=r&&--s)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return a=u.length=0,this},disable:function(){return u=c=n=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||r&&!c||(e=e||[],e=[t,e.slice?e.slice():e],i?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!r}};return f}}(Zepto),function(t){function e(n){var r=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],i="pending",o={state:function(){return i},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(r,function(r,i){var s=t.isFunction(n[r])&&n[r];a[i[1]](function(){var n=s&&s.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var r=this===o?e.promise():this,a=s?[n]:arguments;e[i[0]+"With"](r,a)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},a={};return t.each(r,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){i=s},r[1^t][2].disable,r[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this},a[e[0]+"With"]=n.fireWith}),o.promise(a),n&&n.call(a,a),a}var n=Array.prototype.slice;t.when=function(r){var i,o,a,s=n.call(arguments),u=s.length,c=0,l=1!==u||r&&t.isFunction(r.promise)?u:0,f=1===l?r:e(),h=function(t,e,r){return function(o){e[t]=this,r[t]=arguments.length>1?n.call(arguments):o,r===i?f.notifyWith(e,r):--l||f.resolveWith(e,r)}};if(u>1)for(i=new Array(u),o=new Array(u),a=new Array(u);u>c;++c)s[c]&&t.isFunction(s[c].promise)?s[c].promise().done(h(c,a,s)).fail(f.reject).progress(h(c,o,i)):--l;return l||f.resolveWith(a,s),f.promise()},t.Deferred=e}(Zepto),function(t){function e(t,e){var n=this.os={},r=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),o=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=!!t.match(/\(Macintosh\; Intel /),s=t.match(/(iPad).*OS\s([\d_]+)/),u=t.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),l=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),f=/Win\d{2}|Windows/.test(e),h=t.match(/Windows Phone ([\d.]+)/),p=l&&t.match(/TouchPad/),d=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),v=t.match(/(BlackBerry).*Version\/([\d.]+)/),g=t.match(/(BB10).*Version\/([\d.]+)/),y=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),b=t.match(/PlayBook/),x=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),w=t.match(/Firefox\/([\d.]+)/),E=t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),S=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),j=!x&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),T=j||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(r.webkit=!!i)&&(r.version=i[1]),o&&(n.android=!0,n.version=o[2]),c&&!u&&(n.ios=n.iphone=!0,n.version=c[2].replace(/_/g,".")),s&&(n.ios=n.ipad=!0,n.version=s[2].replace(/_/g,".")),u&&(n.ios=n.ipod=!0,n.version=u[3]?u[3].replace(/_/g,"."):null),h&&(n.wp=!0,n.version=h[1]),l&&(n.webos=!0,n.version=l[2]),p&&(n.touchpad=!0),v&&(n.blackberry=!0,n.version=v[2]),g&&(n.bb10=!0,n.version=g[2]),y&&(n.rimtabletos=!0,n.version=y[2]),b&&(r.playbook=!0),d&&(n.kindle=!0,n.version=d[1]),m&&(r.silk=!0,r.version=m[1]),!m&&n.android&&t.match(/Kindle Fire/)&&(r.silk=!0),x&&(r.chrome=!0,r.version=x[1]),w&&(r.firefox=!0,r.version=w[1]),E&&(n.firefoxos=!0,n.version=E[1]),S&&(r.ie=!0,r.version=S[1]),T&&(a||n.ios||f)&&(r.safari=!0,n.ios||(r.version=T[1])),j&&(r.webview=!0),n.tablet=!!(s||b||o&&!t.match(/Mobile/)||w&&t.match(/Tablet/)||S&&!t.match(/Phone/)&&t.match(/Touch/)),n.phone=!(n.tablet||n.ipod||!(o||c||l||v||g||x&&t.match(/Android/)||x&&t.match(/CriOS\/([\d.]+)/)||w&&t.match(/Mobile/)||S&&t.match(/Touch/)))}e.call(t,navigator.userAgent,navigator.platform),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,i,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(j,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)S.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(i===f||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,c||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}();
// 公共方法
var sharp = {
    carSelectType: 4, //1代表一级，4代表四级
    islogin: 0,
    isAndroid: false,
    isBox: (typeof BLightApp !== 'undefined') || (apptype == 'baidu'),
    hasOldCar: false,
    isFromMyCar: false,
    isShowError: false,
    carModels: false,
    carSeries: false,
    setLoading: function () {
        var self = this;
        var $loading = $('.loading-n');
        $loading.removeClass('hide');
    },
    disLoading: function () {
        var $loading = $('.loading-n');
        $loading.addClass('hide');
    },
    toggleContent: function (dom) {
        var _this = this;
        if (sharp.isAndroid) {
            $(dom).removeClass('hide').siblings().addClass('hide');
        } else {
            setTimeout(function () {
                $(dom).removeClass('hide').siblings().addClass('hide');
            }, 200);
        }
        _this.disLoading();
        $('.w-mask').addClass('hide');
        $('.j-popup-box-container').remove();
    },
    maskToggle: function (dom, callback, appendDom) {
        var html = '<div class="w-mask"></div>';
        appendDom || (appendDom = "body");
        var bindEvent = function (dom) {
            $('.w-mask').on('click', function (e) {
                if ($.isFunction(callback)) {
                    callback();
                };
                $(this).remove();
                if (dom) {
                    $(dom).remove();
                }
            }).on('touchmove', function (e) {
                e.preventDefault();
            });
        };
        var maskDom = $('.w-mask');
        if (maskDom.length > 0) {
            maskDom.remove();
        }
        $(appendDom).append(html);
        bindEvent(dom);
    },
    checklocalStorage: function () {
        var checkBrower = 'localStorage' in window && window['localStorage'] !== null;
        var checkDom = window.localStorage && window.localStorage.getItem;
        if (checkBrower && checkDom) {
            return true;
        }
    },
    setLocalData: function (name, data) {
        var self = this;
        var check = self.checklocalStorage();
        if (check && typeof data !== 'undefined') {
            var data = JSON.stringify(data);
            try {
                window.localStorage.setItem(name, data);
            } catch (e) {
                window.localStorage.clear();
                window.localStorage.setItem(name, data);
            }
        }
    },
    getLocalData: function (name) {
        var self = this;
        var check = self.checklocalStorage();
        if (check) {
            return JSON.parse(window.localStorage.getItem(name));
        }
    },
    appointLogin: function (page) {
        clouda.lightInit({
            ak: 'wc7LInPe6Vx0OezEVZSel3O3',
            module: [
                'account'
            ]
        });

        function appointLogin(page) {
            var options = {};
            // 仅框内支持成功和失败回调，浏览器不支持
            options.onsuccess = function () {
                clouda.mbaas.account.closeLoginDialog();
                location.reload();
            };
            options.onfail = function () {
                window.history.go(-1);
                clouda.mbaas.account.closeLoginDialog();
            };
            // 支持短信账号切换方式
            options.login_type = 'sms';
            options.tpl = 'creative';
            // 仅浏览器支持登录成功的回跳地址，回跳地址为页面本身，框内不支持
            options.u = page;
            clouda.mbaas.account.bdLogin(options);
        }
        appointLogin(page);
    },
    request: function (options, conf) {
        var url = options.url,
            data = options.data || {},
            success = options.success || (function () {}),
            errorCallback = options.error || (function () {}),
            dataType = options.dataType || conf.dataType || 'json',
            type = conf.type || 'GET';

        data.appid = appid;

        return $.ajax({
            type: type,
            url: url,
            data: data,
            dataType: dataType,
            success: function (msg) {
                if (parseInt(msg.islogin, 10) === 1) {
                    sharp.islogin = 1;
                } else {
                    sharp.islogin = 0;
                }

                var error = msg.error == null ? -1 : parseInt(msg.error, 10);
                if (error === 0 || (msg.uii_err == 0)) {
                    success(msg);
                } else {
                    if (msg.message != '提示：当前用户登录状态异常') {
                        console.log(msg.message);
                    } else {
                        errorCallback(msg);
                    }
                }
            },
            error: function (msg) {
                // to do 统一处理error
            }
        });
    },
    get: function (options) {
        var self = this;
        return self.request(options, {
            dataType: 'json',
            type: 'GET'
        });
    },
    post: function (options) {
        var self = this;
        return self.request(options, {
            dataType: 'json',
            type: 'POST'
        });
    },
    showError: function (text) {
        if (sharp.isShowError) {
            return;
        }
        sharp.isShowError = true;
        text = new String(text);
        $('.c-error-message').text(text);
        var boxElem = $('.c-error-message-box');
        boxElem.removeClass('fadeOut hide').addClass('fadeIn');
        setTimeout(function () {
            boxElem.removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function () {
                boxElem.addClass('hide');
                sharp.isShowError = false;
            }, 300);
        }, 2000);
    }
};

sharp.getLocalData('personInfo') || sharp.setLocalData('personInfo', {});
sharp.getLocalData('serviceInfo') || sharp.setLocalData('serviceInfo', {});
sharp.getLocalData('otherInfo') || sharp.setLocalData('otherInfo', {});

/*if (navigator && navigator.userAgent && /Mac OS X/.test(navigator.userAgent)) {
    window.addEventListener('hashchange', function (e) {
        var newUrlType = /#/.test(e.newURL) ? e.newURL.split('#')[1].split('/')[0] : 'nav';
        var oldUrlType = /#/.test(e.oldURL) ? e.oldURL.split('#')[1].split('/')[0] : 'nav';
        var urlMap = {
            'nav': 0,
            'mycar': 1,
            'car': 1,
            'carselect': 2,
            'seriesselect': 3,
            'modelselect': 4,
            'addcar': 5,
            'shop': 6,
            'services': 7,
            'payorder': 8,
            'orderlists': 9,
            'orderlist': 10
        }
        var from;
        if (newUrlType == 'mycar' && oldUrlType == 'addcar') {
            from = 'left';
        } else if (urlMap[newUrlType] < urlMap[oldUrlType]) {
            from = 'right';
        } else {
            from = 'left';
        }
        
        $('#' + newUrlType).removeClass('left right').addClass('center');
        $('#' + oldUrlType).removeClass('center').addClass(from);
    }, false);
} else {
    document.getElementsByTagName('html')[0].className = 'android';
    sharp.isAndroid = true;
}
*/
if (sharp.isBox) {
    document.getElementsByTagName('html')[0].classList.add('baidu');
}












// 配置ajax

var sharpApi = {
    getsugschemes: apiurl + '/api/getsugschemes',
    getcarschemes: apiurl + '/api/getcarschemes',
    orderCreate: apiurl + '/api/ordercreate',
    orderPay: apiurl + '/api/orderpay',
    islogin: apiurl + '/api/login',
    getShopList: apiurl + '/api/getshoplist',
    getUserInfor: apiurl + '/api/getuserinfor',
    deleteUserCar: apiurl + '/api/delusercar',
    deleteUserPhone: apiurl + '/api/deluserphone',
    deleteUserAddress: apiurl + '/api/deluseraddr',
    getSeriesList: apiurl + '/api/getserieslist',
    getBrandList: apiurl + '/api/getbrandlist',
    getCarList: apiurl + '/api/getcarlist',
    getUserCarList: apiurl + '/api/getusercarlist',
    getAreaList: 'http://map.baidu.com/?qt=sub_area_list&level=1',
    getOrderList: apiurl + '/api/getorderdetail',
    getOrderLists: apiurl + '/api/getorderlist',
    applyrefund: apiurl + '/api/applyrefund',
    orderpay: apiurl + '/api/orderpay',
    settlement: apiurl + '/api/settlement', //确认服务
    complaint: apiurl + '/api/complaint', //投诉
    addUserCar: apiurl + '/api/addusercar',
    updateUserCar: apiurl + '/api/updateusercar',
    checkCarSchemeState: apiurl + '/api/checkcarschemestate',
    indexGetzhida: apiurl + '/api/getzhida',
    indexGetdemo: apiurl + '/api/getdemo',
    getappschemestate: apiurl + '/api/getappschemestate',
    orderRefund: apiurl + '/api/orderrefund',
};

/*! Dust - Asynchronous Templating - v2.6.0
* http://linkedin.github.io/dustjs/
* Copyright (c) 2015 Aleksander Williams; Released under the MIT License */
!function(root){function Context(a,b,c,d){this.stack=a,this.global=b,this.blocks=c,this.templateName=d}function Stack(a,b,c,d){this.tail=b,this.isObject=a&&"object"==typeof a,this.head=a,this.index=c,this.of=d}function Stub(a){this.head=new Chunk(this),this.callback=a,this.out=""}function Stream(){this.head=new Chunk(this)}function Chunk(a,b,c){this.root=a,this.next=b,this.data=[],this.flushable=!1,this.taps=c}function Tap(a,b){this.head=a,this.tail=b}var dust={version:"2.6.0"},NONE="NONE",ERROR="ERROR",WARN="WARN",INFO="INFO",DEBUG="DEBUG",loggingLevels=[DEBUG,INFO,WARN,ERROR,NONE],EMPTY_FUNC=function(){},logger={},originalLog,loggerContext;dust.debugLevel=NONE,dust.config={whitespace:!1,amd:!1},dust._aliases={write:"w",end:"e",map:"m",render:"r",reference:"f",section:"s",exists:"x",notexists:"nx",block:"b",partial:"p",helper:"h"},root&&root.console&&root.console.log&&(loggerContext=root.console,originalLog=root.console.log),logger.log=loggerContext?function(){logger.log="function"==typeof originalLog?function(){originalLog.apply(loggerContext,arguments)}:function(){var a=Array.prototype.slice.apply(arguments).join(" ");originalLog(a)},logger.log.apply(this,arguments)}:function(){},dust.log=function(a,b){b=b||INFO,dust.debugLevel!==NONE&&dust.indexInArray(loggingLevels,b)>=dust.indexInArray(loggingLevels,dust.debugLevel)&&(dust.logQueue||(dust.logQueue=[]),dust.logQueue.push({message:a,type:b}),logger.log("[DUST:"+b+"]",a))},dust.helpers={},dust.cache={},dust.register=function(a,b){a&&(dust.cache[a]=b)},dust.render=function(a,b,c){var d=new Stub(c).head;try{dust.load(a,d,Context.wrap(b,a)).end()}catch(e){d.setError(e)}},dust.stream=function(a,b){var c=new Stream,d=c.head;return dust.nextTick(function(){try{dust.load(a,c.head,Context.wrap(b,a)).end()}catch(e){d.setError(e)}}),c},dust.renderSource=function(a,b,c){return dust.compileFn(a)(b,c)},dust.compileFn=function(a,b){b=b||null;var c=dust.loadSource(dust.compile(a,b));return function(a,d){var e=d?new Stub(d):new Stream;return dust.nextTick(function(){"function"==typeof c?c(e.head,Context.wrap(a,b)).end():dust.log(new Error("Template ["+b+"] cannot be resolved to a Dust function"),ERROR)}),e}},dust.load=function(a,b,c){var d=dust.cache[a];return d?d(b,c):dust.onLoad?b.map(function(b){dust.onLoad(a,function(d,e){return d?b.setError(d):(dust.cache[a]||dust.loadSource(dust.compile(e,a)),void dust.cache[a](b,c).end())})}):b.setError(new Error("Template Not Found: "+a))},dust.loadSource=function(source,path){return eval(source)},dust.isArray=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},dust.indexInArray=function(a,b,c){if(c=+c||0,Array.prototype.indexOf)return a.indexOf(b,c);if(void 0===a||null===a)throw new TypeError('cannot call method "indexOf" of null');var d=a.length;for(1/0===Math.abs(c)&&(c=0),0>c&&(c+=d,0>c&&(c=0));d>c;c++)if(a[c]===b)return c;return-1},dust.nextTick=function(){return function(a){setTimeout(a,0)}}(),dust.isEmpty=function(a){return dust.isArray(a)&&!a.length?!0:0===a?!1:!a},dust.filter=function(a,b,c){if(c)for(var d=0,e=c.length;e>d;d++){var f=c[d];"s"===f?b=null:"function"==typeof dust.filters[f]?a=dust.filters[f](a):dust.log("Invalid filter ["+f+"]",WARN)}return b&&(a=dust.filters[b](a)),a},dust.filters={h:function(a){return dust.escapeHtml(a)},j:function(a){return dust.escapeJs(a)},u:encodeURI,uc:encodeURIComponent,js:function(a){return dust.escapeJSON(a)},jp:function(a){return JSON?JSON.parse(a):(dust.log("JSON is undefined.  JSON parse has not been used on ["+a+"]",WARN),a)}},dust.makeBase=function(a){return new Context(new Stack,a)},Context.wrap=function(a,b){return a instanceof Context?a:new Context(new Stack(a),{},null,b)},Context.prototype.get=function(a,b){return"string"==typeof a&&("."===a[0]&&(b=!0,a=a.substr(1)),a=a.split(".")),this._get(b,a)},Context.prototype._get=function(a,b){var c,d,e,f,g,h=this.stack,i=1;if(d=b[0],e=b.length,a&&0===e)f=h,h=h.head;else{if(a)h&&(h=h.head?h.head[d]:void 0);else{for(;h&&(!h.isObject||(f=h.head,c=h.head[d],void 0===c));)h=h.tail;h=void 0!==c?c:this.global?this.global[d]:void 0}for(;h&&e>i;)f=h,h=h[b[i]],i++}return"function"==typeof h?(g=function(){try{return h.apply(f,arguments)}catch(a){throw dust.log(a,ERROR),a}},g.__dustBody=!!h.__dustBody,g):(void 0===h&&dust.log("Cannot find the value for reference [{"+b.join(".")+"}] in template ["+this.getTemplateName()+"]"),h)},Context.prototype.getPath=function(a,b){return this._get(a,b)},Context.prototype.push=function(a,b,c){return new Context(new Stack(a,this.stack,b,c),this.global,this.blocks,this.getTemplateName())},Context.prototype.rebase=function(a){return new Context(new Stack(a),this.global,this.blocks,this.getTemplateName())},Context.prototype.current=function(){return this.stack.head},Context.prototype.getBlock=function(a){if("function"==typeof a){var b=new Chunk;a=a(b,this).data.join("")}var c=this.blocks;if(!c)return void dust.log("No blocks for context[{"+a+"}] in template ["+this.getTemplateName()+"]",DEBUG);for(var d,e=c.length;e--;)if(d=c[e][a])return d},Context.prototype.shiftBlocks=function(a){var b,c=this.blocks;return a?(b=c?c.concat([a]):[a],new Context(this.stack,this.global,b,this.getTemplateName())):this},Context.prototype.getTemplateName=function(){return this.templateName},Stub.prototype.flush=function(){for(var a=this.head;a;){if(!a.flushable)return a.error?(this.callback(a.error),dust.log("Chunk error ["+a.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.out+=a.data.join(""),a=a.next,this.head=a}this.callback(null,this.out)},Stream.prototype.flush=function(){for(var a=this.head;a;){if(!a.flushable)return a.error?(this.emit("error",a.error),dust.log("Chunk error ["+a.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.emit("data",a.data.join("")),a=a.next,this.head=a}this.emit("end")},Stream.prototype.emit=function(a,b){if(!this.events)return dust.log("No events to emit",INFO),!1;var c=this.events[a];if(!c)return dust.log("Event type ["+a+"] does not exist",WARN),!1;if("function"==typeof c)c(b);else if(dust.isArray(c))for(var d=c.slice(0),e=0,f=d.length;f>e;e++)d[e](b);else dust.log("Event Handler ["+c+"] is not of a type that is handled by emit",WARN)},Stream.prototype.on=function(a,b){return this.events||(this.events={}),this.events[a]?"function"==typeof this.events[a]?this.events[a]=[this.events[a],b]:this.events[a].push(b):b?this.events[a]=b:dust.log("Callback for type ["+a+"] does not exist. Listener not registered.",WARN),this},Stream.prototype.pipe=function(a){return this.on("data",function(b){try{a.write(b,"utf8")}catch(c){dust.log(c,ERROR)}}).on("end",function(){try{return a.end()}catch(b){dust.log(b,ERROR)}}).on("error",function(b){a.error(b)}),this},Chunk.prototype.write=function(a){var b=this.taps;return b&&(a=b.go(a)),this.data.push(a),this},Chunk.prototype.end=function(a){return a&&this.write(a),this.flushable=!0,this.root.flush(),this},Chunk.prototype.map=function(a){var b=new Chunk(this.root,this.next,this.taps),c=new Chunk(this.root,b,this.taps);this.next=c,this.flushable=!0;try{a(c)}catch(d){dust.log(d,ERROR),c.setError(d)}return b},Chunk.prototype.tap=function(a){var b=this.taps;return this.taps=b?b.push(a):new Tap(a),this},Chunk.prototype.untap=function(){return this.taps=this.taps.tail,this},Chunk.prototype.render=function(a,b){return a(this,b)},Chunk.prototype.reference=function(a,b,c,d){return"function"==typeof a&&(a=a.apply(b.current(),[this,b,null,{auto:c,filters:d}]),a instanceof Chunk)?a:dust.isEmpty(a)?this:this.write(dust.filter(a,c,d))},Chunk.prototype.section=function(a,b,c,d){if("function"==typeof a&&!a.__dustBody){try{a=a.apply(b.current(),[this,b,c,d])}catch(e){return dust.log(e,ERROR),this.setError(e)}if(a instanceof Chunk)return a}var f=c.block,g=c["else"];if(d&&(b=b.push(d)),dust.isArray(a)){if(f){var h=a.length,i=this;if(h>0){b.stack.head&&(b.stack.head.$len=h);for(var j=0;h>j;j++)b.stack.head&&(b.stack.head.$idx=j),i=f(i,b.push(a[j],j,h));return b.stack.head&&(b.stack.head.$idx=void 0,b.stack.head.$len=void 0),i}if(g)return g(this,b)}}else if(a===!0){if(f)return f(this,b)}else if(a||0===a){if(f)return f(this,b.push(a))}else if(g)return g(this,b);return dust.log("Not rendering section (#) block in template ["+b.getTemplateName()+"], because above key was not found",DEBUG),this},Chunk.prototype.exists=function(a,b,c){var d=c.block,e=c["else"];if(dust.isEmpty(a)){if(e)return e(this,b)}else if(d)return d(this,b);return dust.log("Not rendering exists (?) block in template ["+b.getTemplateName()+"], because above key was not found",DEBUG),this},Chunk.prototype.notexists=function(a,b,c){var d=c.block,e=c["else"];if(dust.isEmpty(a)){if(d)return d(this,b)}else if(e)return e(this,b);return dust.log("Not rendering not exists (^) block check in template ["+b.getTemplateName()+"], because above key was found",DEBUG),this},Chunk.prototype.block=function(a,b,c){var d=c.block;return a&&(d=a),d?d(this,b):this},Chunk.prototype.partial=function(a,b,c){var d;d=dust.makeBase(b.global),d.blocks=b.blocks,b.stack&&b.stack.tail&&(d.stack=b.stack.tail),c&&(d=d.push(c)),"string"==typeof a&&(d.templateName=a),d=d.push(b.stack.head);var e;return e="function"==typeof a?this.capture(a,d,function(a,b){d.templateName=d.templateName||a,dust.load(a,b,d).end()}):dust.load(a,this,d)},Chunk.prototype.helper=function(a,b,c,d){var e=this;if(!dust.helpers[a])return dust.log("Invalid helper ["+a+"]",WARN),e;try{return dust.helpers[a](e,b,c,d)}catch(f){return dust.log("Error in "+a+" helper: "+f,ERROR),e.setError(f)}},Chunk.prototype.capture=function(a,b,c){return this.map(function(d){var e=new Stub(function(a,b){a?d.setError(a):c(b,d)});a(e.head,b).end()})},Chunk.prototype.setError=function(a){return this.error=a,this.root.flush(),this};for(var f in Chunk.prototype)dust._aliases[f]&&(Chunk.prototype[dust._aliases[f]]=Chunk.prototype[f]);Tap.prototype.push=function(a){return new Tap(a,this)},Tap.prototype.go=function(a){for(var b=this;b;)a=b.head(a),b=b.tail;return a};var HCHARS=/[&<>"']/,AMP=/&/g,LT=/</g,GT=/>/g,QUOT=/\"/g,SQUOT=/\'/g;dust.escapeHtml=function(a){return"string"==typeof a||a&&"function"==typeof a.toString?("string"!=typeof a&&(a=a.toString()),HCHARS.test(a)?a.replace(AMP,"&amp;").replace(LT,"&lt;").replace(GT,"&gt;").replace(QUOT,"&quot;").replace(SQUOT,"&#39;"):a):a};var BS=/\\/g,FS=/\//g,CR=/\r/g,LS=/\u2028/g,PS=/\u2029/g,NL=/\n/g,LF=/\f/g,SQ=/'/g,DQ=/"/g,TB=/\t/g;dust.escapeJs=function(a){return"string"==typeof a?a.replace(BS,"\\\\").replace(FS,"\\/").replace(DQ,'\\"').replace(SQ,"\\'").replace(CR,"\\r").replace(LS,"\\u2028").replace(PS,"\\u2029").replace(NL,"\\n").replace(LF,"\\f").replace(TB,"\\t"):a},dust.escapeJSON=function(a){return JSON?JSON.stringify(a).replace(LS,"\\u2028").replace(PS,"\\u2029").replace(LT,"\\u003c"):(dust.log("JSON is undefined.  JSON stringify has not been used on ["+a+"]",WARN),a)},"function"==typeof define&&define.amd&&define.amd.dust===!0?define("dust.core",function(){return dust}):"object"==typeof exports?module.exports=dust:root.dust=dust}(function(){return this}()),"function"==typeof define&&define.amd&&define.amd.dust===!0&&define(["require","dust.core"],function(require,dust){return dust.onLoad=function(a,b){require([a],function(){b()})},dust});
/*! dustjs-helpers - v1.2.0
* https://github.com/linkedin/dustjs-helpers
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
!function(dust){function isSelect(a){var b=a.current();return"object"==typeof b&&b.isSelect===!0}function jsonFilter(a,b){return"function"==typeof b?b.toString().replace(/(^\s+|\s+$)/gm,"").replace(/\n/gm,"").replace(/,\s*/gm,", ").replace(/\)\{/gm,") {"):b}function filter(a,b,c,d,e){d=d||{};var f,g,h=c.block,i=d.filterOpType||"";if("undefined"!=typeof d.key)f=dust.helpers.tap(d.key,a,b);else{if(!isSelect(b))return _console.log("No key specified for filter in:"+i+" helper "),a;f=b.current().selectKey,b.current().isResolved&&(e=function(){return!1})}return g=dust.helpers.tap(d.value,a,b),e(coerce(g,d.type,b),coerce(f,d.type,b))?(isSelect(b)&&(b.current().isResolved=!0),h?a.render(h,b):(_console.log("Missing body block in the "+i+" helper "),a)):c["else"]?a.render(c["else"],b):a}function coerce(a,b,c){if(a)switch(b||typeof a){case"number":return+a;case"string":return String(a);case"boolean":return a="false"===a?!1:a,Boolean(a);case"date":return new Date(a);case"context":return c.get(a)}return a}var _console="undefined"!=typeof console?console:{log:function(){}},helpers={tap:function(a,b,c){if("function"!=typeof a)return a;var d,e="";return d=b.tap(function(a){return e+=a,""}).render(a,c),b.untap(),d.constructor!==b.constructor?d:""===e?!1:e},sep:function(a,b,c){var d=c.block;return b.stack.index===b.stack.of-1?a:d?c.block(a,b):a},idx:function(a,b,c){var d=c.block;return d?c.block(a,b.push(b.stack.index)):a},contextDump:function(a,b,c,d){var e,f=d||{},g=f.to||"output",h=f.key||"current";return g=dust.helpers.tap(g,a,b),h=dust.helpers.tap(h,a,b),e="full"===h?JSON.stringify(b.stack,jsonFilter,2):JSON.stringify(b.stack.head,jsonFilter,2),"console"===g?(_console.log(e),a):a.write(e)},"if":function(chunk,context,bodies,params){var body=bodies.block,skip=bodies["else"];if(params&&params.cond){var cond=params.cond;if(cond=dust.helpers.tap(cond,chunk,context),eval(cond))return body?chunk.render(bodies.block,context):(_console.log("Missing body block in the if helper!"),chunk);if(skip)return chunk.render(bodies["else"],context)}else _console.log("No condition given in the if helper!");return chunk},math:function(a,b,c,d){if(d&&"undefined"!=typeof d.key&&d.method){var e=d.key,f=d.method,g=d.operand,h=d.round,i=null;switch(e=dust.helpers.tap(e,a,b),g=dust.helpers.tap(g,a,b),f){case"mod":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan!"),i=parseFloat(e)%parseFloat(g);break;case"add":i=parseFloat(e)+parseFloat(g);break;case"subtract":i=parseFloat(e)-parseFloat(g);break;case"multiply":i=parseFloat(e)*parseFloat(g);break;case"divide":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan/Infinity!"),i=parseFloat(e)/parseFloat(g);break;case"ceil":i=Math.ceil(parseFloat(e));break;case"floor":i=Math.floor(parseFloat(e));break;case"round":i=Math.round(parseFloat(e));break;case"abs":i=Math.abs(parseFloat(e));break;default:_console.log("method passed is not supported")}return null!==i?(h&&(i=Math.round(i)),c&&c.block?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:i})):a.write(i)):a}return _console.log("Key is a required parameter for math helper along with method/operand!"),a},select:function(a,b,c,d){var e=c.block;if(d&&"undefined"!=typeof d.key){var f=dust.helpers.tap(d.key,a,b);return e?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:f})):(_console.log("Missing body block in the select helper "),a)}return _console.log("No key given in the select helper!"),a},eq:function(a,b,c,d){return d&&(d.filterOpType="eq"),filter(a,b,c,d,function(a,b){return b===a})},ne:function(a,b,c,d){return d?(d.filterOpType="ne",filter(a,b,c,d,function(a,b){return b!==a})):a},lt:function(a,b,c,d){return d?(d.filterOpType="lt",filter(a,b,c,d,function(a,b){return a>b})):void 0},lte:function(a,b,c,d){return d?(d.filterOpType="lte",filter(a,b,c,d,function(a,b){return a>=b})):a},gt:function(a,b,c,d){return d?(d.filterOpType="gt",filter(a,b,c,d,function(a,b){return b>a})):a},gte:function(a,b,c,d){return d?(d.filterOpType="gte",filter(a,b,c,d,function(a,b){return b>=a})):a},"default":function(a,b,c,d){return d&&(d.filterOpType="default"),filter(a,b,c,d,function(){return!0})},size:function(a,b,c,d){var e,f,g,h=0;if(d=d||{},e=d.key,e&&e!==!0)if(dust.isArray(e))h=e.length;else if(!isNaN(parseFloat(e))&&isFinite(e))h=e;else if("object"==typeof e){f=0;for(g in e)Object.hasOwnProperty.call(e,g)&&f++;h=f}else h=(e+"").length;else h=0;return a.write(h)}};dust.helpers=helpers}("undefined"!=typeof exports?module.exports=require("dustjs-linkedin"):dust);
var requirejs,require,define;!function(Z){function H(a){return"[object Function]"===L.call(a)}function I(a){return"[object Array]"===L.call(a)}function y(a,b){if(a){var c;for(c=0;c<a.length&&(!a[c]||!b(a[c],c,a));c+=1);}}function M(a,b){if(a){var c;for(c=a.length-1;c>-1&&(!a[c]||!b(a[c],c,a));c-=1);}}function t(a,b){return ga.call(a,b)}function l(a,b){return t(a,b)&&a[b]}function F(a,b){for(var c in a)if(t(a,c)&&b(a[c],c))break}function Q(a,b,c,d){return b&&F(b,function(b,e){(c||!t(a,e))&&(d&&"string"!=typeof b?(a[e]||(a[e]={}),Q(a[e],b,c,d)):a[e]=b)}),a}function u(a,b){return function(){return b.apply(a,arguments)}}function aa(a){throw a}function ba(a){if(!a)return a;var b=Z;return y(a.split("."),function(a){b=b[a]}),b}function A(a,b,c,d){return b=Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a),b.requireType=a,b.requireModules=d,c&&(b.originalError=c),b}function ha(a){function b(a,b,c){var d,e,f,g,h,i,j,k=b&&b.split("/");d=k;var m=C.map,n=m&&m["*"];if(a&&"."===a.charAt(0))if(b){for(d=l(C.pkgs,b)?k=[b]:k.slice(0,k.length-1),b=a=d.concat(a.split("/")),d=0;b[d];d+=1)if(e=b[d],"."===e)b.splice(d,1),d-=1;else if(".."===e){if(1===d&&(".."===b[2]||".."===b[0]))break;d>0&&(b.splice(d-1,2),d-=2)}d=l(C.pkgs,b=a[0]),a=a.join("/"),d&&a===b+"/"+d.main&&(a=b)}else 0===a.indexOf("./")&&(a=a.substring(2));if(c&&m&&(k||n)){for(b=a.split("/"),d=b.length;d>0;d-=1){if(f=b.slice(0,d).join("/"),k)for(e=k.length;e>0;e-=1)if((c=l(m,k.slice(0,e).join("/")))&&(c=l(c,f))){g=c,h=d;break}if(g)break;!i&&n&&l(n,f)&&(i=l(n,f),j=d)}!g&&i&&(g=i,h=j),g&&(b.splice(0,h,g),a=b.join("/"))}return a}function c(a){z&&y(document.getElementsByTagName("script"),function(b){return b.getAttribute("data-requiremodule")===a&&b.getAttribute("data-requirecontext")===w.contextName?(b.parentNode.removeChild(b),!0):void 0})}function d(a){var b=l(C.paths,a);return b&&I(b)&&1<b.length?(b.shift(),w.require.undef(a),w.require([a]),!0):void 0}function e(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function f(a,c,d,f){var g,h,i=null,j=c?c.name:null,k=a,m=!0,n="";return a||(m=!1,a="_@r"+(M+=1)),a=e(a),i=a[0],a=a[1],i&&(i=b(i,j,f),h=l(K,i)),a&&(i?n=h&&h.normalize?h.normalize(a,function(a){return b(a,j,f)}):b(a,j,f):(n=b(a,j,f),a=e(n),i=a[0],n=a[1],d=!0,g=w.nameToUrl(n))),d=!i||h||d?"":"_unnormalized"+(N+=1),{prefix:i,name:n,parentMap:c,unnormalized:!!d,url:g,originalName:k,isDefine:m,id:(i?i+"!"+n:n)+d}}function g(a){var b=a.id,c=l(D,b);return c||(c=D[b]=new w.Module(a)),c}function h(a,b,c){var d=a.id,e=l(D,d);!t(K,d)||e&&!e.defineEmitComplete?(e=g(a),e.error&&"error"===b?c(e.error):e.on(b,c)):"defined"===b&&c(K[d])}function i(a,b){var c=a.requireModules,d=!1;b?b(a):(y(c,function(b){(b=l(D,b))&&(b.error=a,b.events.error&&(d=!0,b.emit("error",a)))}),d||j.onError(a))}function k(){R.length&&(ia.apply(J,[J.length-1,0].concat(R)),R=[])}function m(a){delete D[a],delete E[a]}function n(a,b,c){var d=a.map.id;a.error?a.emit("error",a.error):(b[d]=!0,y(a.depMaps,function(d,e){var f=d.id,g=l(D,f);g&&!a.depMatched[e]&&!c[f]&&(l(b,f)?(a.defineDep(e,K[f]),a.check()):n(g,b,c))}),c[d]=!0)}function o(){var a,b,e,f,g=(e=1e3*C.waitSeconds)&&w.startTime+e<(new Date).getTime(),h=[],j=[],k=!1,l=!0;if(!s){if(s=!0,F(E,function(e){if(a=e.map,b=a.id,e.enabled&&(a.isDefine||j.push(e),!e.error))if(!e.inited&&g)d(b)?k=f=!0:(h.push(b),c(b));else if(!e.inited&&e.fetched&&a.isDefine&&(k=!0,!a.prefix))return l=!1}),g&&h.length)return e=A("timeout","Load timeout for modules: "+h,null,h),e.contextName=w.contextName,i(e);l&&y(j,function(a){n(a,{},{})}),g&&!f||!k||!z&&!da||B||(B=setTimeout(function(){B=0,o()},50)),s=!1}}function p(a){t(K,a[0])||g(f(a[0],null,!0)).init(a[1],a[2])}function q(a){var a=a.currentTarget||a.srcElement,b=w.onScriptLoad;return a.detachEvent&&!W?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1),b=w.onScriptError,(!a.detachEvent||W)&&a.removeEventListener("error",b,!1),{node:a,id:a&&a.getAttribute("data-requiremodule")}}function r(){var a;for(k();J.length;){if(a=J.shift(),null===a[0])return i(A("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));p(a)}}var s,v,w,x,B,C={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},D={},E={},G={},J=[],K={},L={},M=1,N=1;return x={require:function(a){return a.require?a.require:a.require=w.makeRequire(a.map)},exports:function(a){return a.usingExports=!0,a.map.isDefine?a.exports?a.exports:a.exports=K[a.map.id]={}:void 0},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){var b=l(C.pkgs,a.map.id);return(b?l(C.config,a.map.id+"/"+b.main):l(C.config,a.map.id))||{}},exports:K[a.map.id]}}},v=function(a){this.events=l(G,a.id)||{},this.map=a,this.shim=l(C.shim,a.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},v.prototype={init:function(a,b,c,d){d=d||{},this.inited||(this.factory=b,c?this.on("error",c):this.events.error&&(c=u(this,function(a){this.emit("error",a)})),this.depMaps=a&&a.slice(0),this.errback=c,this.inited=!0,this.ignore=d.ignore,d.enabled||this.enabled?this.enable():this.check())},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0,w.startTime=(new Date).getTime();var a=this.map;if(!this.shim)return a.prefix?this.callPlugin():this.load();w.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}))}},load:function(){var a=this.map.url;L[a]||(L[a]=!0,w.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var d=this.exports,e=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(H(e)){if(this.events.error&&this.map.isDefine||j.onError!==aa)try{d=w.execCb(c,e,b,d)}catch(f){a=f}else d=w.execCb(c,e,b,d);if(this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==this.exports?d=b.exports:void 0===d&&this.usingExports&&(d=this.exports)),a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",i(this.error=a)}else d=e;this.exports=d,this.map.isDefine&&!this.ignore&&(K[c]=d,j.onResourceLoad)&&j.onResourceLoad(w,this.map,this.depMaps),m(c),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,c=a.id,d=f(a.prefix);this.depMaps.push(d),h(d,"defined",u(this,function(d){var e,k;k=this.map.name;var n=this.map.parentMap?this.map.parentMap.name:null,o=w.makeRequire(a.parentMap,{enableBuildCallback:!0});this.map.unnormalized?(d.normalize&&(k=d.normalize(k,function(a){return b(a,n,!0)})||""),d=f(a.prefix+"!"+k,this.map.parentMap),h(d,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),(k=l(D,d.id))&&(this.depMaps.push(d),this.events.error&&k.on("error",u(this,function(a){this.emit("error",a)})),k.enable())):(e=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),e.error=u(this,function(a){this.inited=!0,this.error=a,a.requireModules=[c],F(D,function(a){0===a.map.id.indexOf(c+"_unnormalized")&&m(a.map.id)}),i(a)}),e.fromText=u(this,function(b,d){var h=a.name,k=f(h),l=O;d&&(b=d),l&&(O=!1),g(k),t(C.config,c)&&(C.config[h]=C.config[c]);try{j.exec(b)}catch(m){return i(A("fromtexteval","fromText eval for "+c+" failed: "+m,m,[c]))}l&&(O=!0),this.depMaps.push(k),w.completeLoad(h),o([h],e)}),d.load(a.name,o,e,C))})),w.enable(d,this),this.pluginMaps[d.id]=d},enable:function(){E[this.map.id]=this,this.enabling=this.enabled=!0,y(this.depMaps,u(this,function(a,b){var c,d;if("string"==typeof a){if(a=f(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[b]=a,c=l(x,a.id))return this.depExports[b]=c(this),void 0;this.depCount+=1,h(a,"defined",u(this,function(a){this.defineDep(b,a),this.check()})),this.errback&&h(a,"error",u(this,this.errback))}c=a.id,d=D[c],!t(x,c)&&d&&!d.enabled&&w.enable(a,this)})),F(this.pluginMaps,u(this,function(a){var b=l(D,a.id);b&&!b.enabled&&w.enable(a,this)})),this.enabling=!1,this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]),c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)}),"error"===a&&delete this.events[a]}},w={config:C,contextName:a,registry:D,defined:K,urlFetched:L,defQueue:J,Module:v,makeModuleMap:f,nextTick:j.nextTick,onError:i,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=C.pkgs,c=C.shim,d={paths:!0,config:!0,map:!0};F(a,function(a,b){d[b]?"map"===b?(C.map||(C.map={}),Q(C[b],a,!0,!0)):Q(C[b],a,!0):C[b]=a}),a.shim&&(F(a.shim,function(a,b){I(a)&&(a={deps:a}),!a.exports&&!a.init||a.exportsFn||(a.exportsFn=w.makeShimExports(a)),c[b]=a}),C.shim=c),a.packages&&(y(a.packages,function(a){a="string"==typeof a?{name:a}:a,b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ja,"").replace(ea,"")}}),C.pkgs=b),F(D,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=f(b))}),(a.deps||a.callback)&&w.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;return a.init&&(b=a.init.apply(Z,arguments)),b||a.exports&&ba(a.exports)}},makeRequire:function(d,e){function h(b,c,k){var l,m;return e.enableBuildCallback&&c&&H(c)&&(c.__requireJsBuild=!0),"string"==typeof b?H(c)?i(A("requireargs","Invalid require call"),k):d&&t(x,b)?x[b](D[d.id]):j.get?j.get(w,b,d,h):(l=f(b,d,!1,!0),l=l.id,t(K,l)?K[l]:i(A("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+a+(d?"":". Use require([])")))):(r(),w.nextTick(function(){r(),m=g(f(null,d)),m.skipMap=e.skipMap,m.init(b,c,k,{enabled:!0}),o()}),h)}return e=e||{},Q(h,{isBrowser:z,toUrl:function(a){var c,e=a.lastIndexOf("."),f=a.split("/")[0];return-1!==e&&("."!==f&&".."!==f||e>1)&&(c=a.substring(e,a.length),a=a.substring(0,e)),w.nameToUrl(b(a,d&&d.id,!0),c,!0)},defined:function(a){return t(K,f(a,d,!1,!0).id)},specified:function(a){return a=f(a,d,!1,!0).id,t(K,a)||t(D,a)}}),d||(h.undef=function(a){k();var b=f(a,d,!0),e=l(D,a);c(a),delete K[a],delete L[b.url],delete G[a],e&&(e.events.defined&&(G[a]=e.events),m(a))}),h},enable:function(a){l(D,a.id)&&g(a).enable()},completeLoad:function(a){var b,c,e=l(C.shim,a)||{},f=e.exports;for(k();J.length;){if(c=J.shift(),null===c[0]){if(c[0]=a,b)break;b=!0}else c[0]===a&&(b=!0);p(c)}if(c=l(D,a),!b&&!t(K,a)&&c&&!c.inited){if(C.enforceDefine&&(!f||!ba(f)))return d(a)?void 0:i(A("nodefine","No define call for "+a,null,[a]));p([a,e.deps||[],e.exportsFn])}o()},nameToUrl:function(a,b,c){var d,e,f,g,h,i;if(j.jsExtRegExp.test(a))g=a+(b||"");else{for(d=C.paths,e=C.pkgs,g=a.split("/"),h=g.length;h>0;h-=1){if(i=g.slice(0,h).join("/"),f=l(e,i),i=l(d,i)){I(i)&&(i=i[0]),g.splice(0,h,i);break}if(f){a=a===f.name?f.location+"/"+f.main:f.location,g.splice(0,h,a);break}}g=g.join("/"),g+=b||(/^data\:|\?/.test(g)||c?"":".js"),g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":C.baseUrl)+g}return C.urlArgs?g+((-1===g.indexOf("?")?"?":"&")+C.urlArgs):g},load:function(a,b){j.load(w,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))&&(P=null,a=q(a),w.completeLoad(a.id))},onScriptError:function(a){var b=q(a);return d(b.id)?void 0:i(A("scripterror","Script error for: "+b.id,a,[b.id]))}},w.require=w.makeRequire(),w}var j,w,x,C,J,D,P,K,q,fa,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ja=/^\.\//;w=Object.prototype;var L=w.toString,ga=w.hasOwnProperty,ia=Array.prototype.splice,z=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),da=!z&&"undefined"!=typeof importScripts,ka=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,W="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),E={},s={},R=[],O=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(H(requirejs))return;s=requirejs,requirejs=void 0}"undefined"!=typeof require&&!H(require)&&(s=require,require=void 0),j=requirejs=function(a,b,c,d){var e,f="_";return!I(a)&&"string"!=typeof a&&(e=a,I(b)?(a=b,b=c,c=d):a=[]),e&&e.context&&(f=e.context),(d=l(E,f))||(d=E[f]=j.s.newContext(f)),e&&d.configure(e),d.require(a,b,c)},j.config=function(a){return j(a)},j.nextTick="undefined"!=typeof setTimeout?function(a){setTimeout(a,4)}:function(a){a()},require||(require=j),j.version="2.1.9",j.jsExtRegExp=/^\/|:|\?|\.js$/,j.isBrowser=z,w=j.s={contexts:E,newContext:ha},j({}),y(["toUrl","undef","defined","specified"],function(a){j[a]=function(){var b=E._;return b.require[a].apply(b,arguments)}}),z&&(x=w.head=document.getElementsByTagName("head")[0],C=document.getElementsByTagName("base")[0])&&(x=w.head=C.parentNode),j.onError=aa,j.createNode=function(a){var b=a.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return b.type=a.scriptType||"text/javascript",b.charset="utf-8",b.async=!0,b},j.load=function(a,b,c){var d=a&&a.config||{};if(z)return d=j.createNode(d,b,c),d.setAttribute("data-requirecontext",a.contextName),d.setAttribute("data-requiremodule",b),!d.attachEvent||d.attachEvent.toString&&0>d.attachEvent.toString().indexOf("[native code")||W?(d.addEventListener("load",a.onScriptLoad,!1),d.addEventListener("error",a.onScriptError,!1)):(O=!0,d.attachEvent("onreadystatechange",a.onScriptLoad)),d.src=c,K=d,C?x.insertBefore(d,C):x.appendChild(d),K=null,d;if(da)try{importScripts(c),a.completeLoad(b)}catch(e){a.onError(A("importscripts","importScripts failed for "+b+" at "+c,e,[b]))}},z&&!s.skipDataMain&&M(document.getElementsByTagName("script"),function(a){return x||(x=a.parentNode),(J=a.getAttribute("data-main"))?(q=J,s.baseUrl||(D=q.split("/"),q=D.pop(),fa=D.length?D.join("/")+"/":"./",s.baseUrl=fa),q=q.replace(ea,""),j.jsExtRegExp.test(q)&&(q=J),s.deps=s.deps?s.deps.concat(q):[q],!0):void 0}),define=function(a,b,c){var d,e;"string"!=typeof a&&(c=b,b=a,a=null),I(b)||(c=b,b=null),!b&&H(c)&&(b=[],c.length&&(c.toString().replace(la,"").replace(ma,function(a,c){b.push(c)}),b=(1===c.length?["require"]:["require","exports","module"]).concat(b))),O&&((d=K)||(P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),function(a){return"interactive"===a.readyState?P=a:void 0}),d=P),d&&(a||(a=d.getAttribute("data-requiremodule")),e=E[d.getAttribute("data-requirecontext")])),(e?e.defQueue:R).push([a,b,c])},define.amd={jQuery:!0},j.exec=function(b){return eval(b)},j(s)}}(this);
/*!
 * routie - a tiny hash router
 * v0.3.2
 * http://projects.jga.me/routie
 * copyright Greg Allen 2013
 * MIT License
 */
 
(function (w) {
    var routes = [];
    var map = {};
    var reference = "routie";
    var oldReference = w[reference];

    var Route = function (path, name) {
        this.name = name;
        this.path = path;
        this.keys = [];
        this.fns = [];
        this.params = {};
        this.regex = pathToRegexp(this.path, this.keys, false, false);

    };

    Route.prototype.addHandler = function (fn) {
        this.fns.push(fn);
    };

    Route.prototype.removeHandler = function (fn) {
        for (var i = 0, c = this.fns.length; i < c; i++) {
            var f = this.fns[i];
            if (fn == f) {
                this.fns.splice(i, 1);
                return;
            }
        }
    };

    Route.prototype.run = function (params) {
        for (var i = 0, c = this.fns.length; i < c; i++) {
            this.fns[i].apply(this, params);
        }
    };

    Route.prototype.match = function (path, params) {
        var m = this.regex.exec(path);

        if (!m) return false;
        for (var i = 1, len = m.length; i < len; ++i) {
            var key = this.keys[i - 1];
            var val = ('string' == typeof m[i]) ? decodeURIComponent(m[i]) : m[i];
            if (key) {
                this.params[key.name] = val;
            }
            params.push(val);
        }

        return true;
    };

    Route.prototype.toURL = function (params) {
        var path = this.path;
        for (var param in params) {
            path = path.replace('/:' + param, '/' + params[param]);
        }
        path = path.replace(/\/:.*\?/g, '/').replace(/\?/g, '');
        if (path.indexOf(':') != -1) {
            throw new Error('missing parameters for url: ' + path);
        }
        return path;
    };

    var pathToRegexp = function (path, keys, sensitive, strict) {
        if (path instanceof RegExp) return path;
        if (path instanceof Array) path = '(' + path.join('|') + ')';
        path = path
            .concat(strict ? '' : '/?')
            .replace(/\/\(/g, '(?:/')
            .replace(/\+/g, '__plus__')
            .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function (_, slash, format, key, capture, optional) {
                keys.push({
                    name: key,
                    optional: !!optional
                });
                slash = slash || '';
                return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')' + (optional || '');
            })
            .replace(/([\/.])/g, '\\$1')
            .replace(/__plus__/g, '(.+)')
            .replace(/\*/g, '(.*)');
        return new RegExp('^' + path + '$', sensitive ? '' : 'i');
    };

    var addHandler = function (path, fn) {
        var s = path.split(' ');
        var name = (s.length == 2) ? s[0] : null;
        path = (s.length == 2) ? s[1] : s[0];

        if (!map[path]) {
            map[path] = new Route(path, name);
            routes.push(map[path]);
        }
        map[path].addHandler(fn);
    };

    var routie = function (path, fn) {
        
        if (typeof fn == 'function') {
            addHandler(path, fn);
            routie.reload();
        } else if (typeof path == 'object') {
            for (var p in path) {
                addHandler(p, path[p]);
            }
            routie.reload();
        } else if (typeof fn === 'undefined') {
            routie.navigate(path);
        }
    };

    routie.lookup = function (name, obj) {
        for (var i = 0, c = routes.length; i < c; i++) {
            var route = routes[i];
            if (route.name == name) {
                return route.toURL(obj);
            }
        }
    };

    routie.remove = function (path, fn) {
        var route = map[path];
        if (!route)
            return;
        route.removeHandler(fn);
    };

    routie.removeAll = function () {
        map = {};
        routes = [];
    };

    routie.navigate = function (path, options) {
        options = options || {};
        var silent = options.silent || false;

        if (silent) {
            removeListener();
        }
        setTimeout(function () {
            window.location.hash = path;

            if (silent) {
                setTimeout(function () {
                    addListener();
                }, 1);
            }

        }, 1);
    };

    routie.noConflict = function () {
        w[reference] = oldReference;
        return routie;
    };

    var getHash = function () {
        return window.location.hash.substring(1);
    };

    var checkRoute = function (hash, route) {
        var params = [];
        if (route.match(hash, params)) {
            route.run(params);
            return true;
        }
        return false;
    };

    var hashChanged = routie.reload = function () {
        var hash = getHash();

        for (var i = 0, c = routes.length; i < c; i++) {
            var route = routes[i];
            if (checkRoute(hash, route)) {
                return;
            }
        }
    };

    var addListener = function () {
        if (w.addEventListener) {
            w.addEventListener('hashchange', hashChanged, false);
        } else {
            w.attachEvent('onhashchange', hashChanged);
        }
    };

    var removeListener = function () {
        if (w.removeEventListener) {
            w.removeEventListener('hashchange', hashChanged);
        } else {
            w.detachEvent('onhashchange', hashChanged);
        }
    };
    addListener();

    w[reference] = routie;

})(window);
