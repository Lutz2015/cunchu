define(function(require,exports,module){function a(){e.get({url:g.getOrderLists,success:function(a){if(0==a.islogin){var c=location.href;e.appointLogin(c)}else a.result.length>0?f.render("template/orderLists",{result:a.result,appid:appid},function(a,c){h.html(c),b()}):h.html('<div class="c-no-order">暂无订单</div>')},error:function(){}})}function b(){$(".j-pay").click(function(){var a=$(this).data("oid");return location.href=payurl+"/lightapp/pay/v2/order?id="+a,!1});var a=e.getLocalData("phone_num");a&&""!==a?($(".c-orderlist-tell").attr("href","tel:"+a),$(".c-orderlist-tell").addClass("show").removeClass("hide")):$(".c-orderlist-tell").addClass("hide").removeClass("show")}function c(){if(e.isBox)return document.title="我的订单",!1;var a=require("widget/head/js/head");a.init({hasBack:"1",hasHref:"http://www.baidu.com",title:"我的订单",dom:"#orderlistshead",loginout:0})}function d(){var b=$(".w-district-choose");1===b.length&&b.remove(),h.html()||c(),a(),e.toggleContent("#orderlists")}require("template/orderLists");var e=window.sharp,f=window.dust,g=window.sharpApi,h=$("#orderlistscontent");module.exports={init:d}});