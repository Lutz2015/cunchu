define(function(require,exports,module){require("widget/head/html/head");var a={dom:"",title:"订单中心",hasEdit:!1,rightTitle:"编辑",callback:function(){}},b={_bindEvent:function(a){$(a.dom+" .j-header-back").on("click",function(){void 0!=a.opt&&0==a.opt&&localStorage.setItem("isservice",0),void 0!=a.opt&&1==a.opt&&localStorage.setItem("isservice",1),history.go(-1),$(".w-mask").addClass("hide"),$(".w-time-choose").remove()});var b=$(a.dom+" .j-header-reload");b.on("click",function(){location.reload()});var c=$(a.dom+" .j-header-edit");c.on("click",function(){$.isFunction(a.callback)&&a.callback.call(this),"编辑"==c.html()?c.html("完成"):c.html("编辑")})},_init:function(c){var c=$.extend({},a,c);dust.render("widget/head/html/head",c,function(a,b){c&&c.dom&&$(c.dom).html(b)}),b._bindEvent(c)}};module.exports={init:b._init}});