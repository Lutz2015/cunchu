define(function(require,exports,module){function a(a){$(".j-w-pagebtn-item").on("click",function(a){a.stopPropagation();var b=this.dataset.num;return"..."===b?!1:(b=Number(b),h(b),e=b,c(),void 0)}),$(".j-w-pagebtn-goleft").on("click",function(a){a.stopPropagation(),e--,h(e),c()}),$(".j-w-pagebtn-goright").on("click",function(a){a.stopPropagation(),e++,h(e),c()})}function b(){var a={},b=a.result=[],c={checked:!0,num:e};if(1===e)a.showLeft=!1,b.push(c);else if(a.showLeft=!0,e>6)b.push({num:1}),b.push({num:"..."}),b.push({num:e-2}),b.push({num:e-1}),b.push(c);else{for(var d=1;e>d;d++)b.push({num:d});b.push(c)}if(e===f)a.showRight=!1;else if(a.showRight=!0,f>e+2)b.push({num:e+1}),b.push({num:e+2}),b.push({num:"..."}),b.push({num:f});else for(var d=e+1;f+1>d;d++)b.push({num:d});return a}function c(){var c=b();i.render("widget/pagebtn/html/pagebtn",c,function(b,c){$(g).html(c),a()})}function d(a){e="undefined"==typeof a.currentNum?1:Number(a.currentNum),f="undefined"==typeof a.maxNum?1:Number(a.maxNum),g=a.dom,h=a.callback,c()}require("widget/pagebtn/html/pagebtn");var e,f,g,h,i=window.dust;module.exports={init:d}});