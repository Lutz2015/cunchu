define(function(require,exports,module){function a(){var a=new $.Deferred;return g.get({url:i.getUserCarList,success:function(b){a.resolve(b.result)}}),a}function b(){$(".j-user-car").on("click",function(a){var b=$(this),c=b.find(".c-user-car-name").text(),d=b.data("cid"),e=b.data("uccode"),f=b.data("logo"),h=b.data("ucid"),i=b.data("bid"),j=b.data("sid"),k=b.data("ucdate"),l={cname:c,cid:d,bid:i,sid:j,uccode:e,logo:f,ucid:h,ucdate:k},m={};m.currentCar=l,g.setLocalData("myCar",m),g.setLocalData("hasOldCar",!0),g.setLocalData("isFromMyCar",!0),g.setLocalData("changeOldCar",!1),location.href="#addcar/"})}function c(){$(".j-add-user-car").on("click",function(a){g.setLocalData("hasOldCar",!1),g.setLocalData("isFromMyCar",!0),g.setLocalData("changeOldCar",!1),location.href="#carselect/"}),$(".j-user-car-login").on("click",function(a){var b=location.href;g.appointLogin(b)}),$(".j-mycar-go-personal").on("click",function(a){location.href="#personal/"})}function d(){h.render("template/mycar",{},function(d,e){j.html(e),c();var f=a();f.then(function(a){a&&a.length>0?(h.render("template/usercarlist",{result:a,carLogo:carLogo},function(a,c){$(".j-user-car-list").html(c),b()}),$(".j-mycar-go-personal").removeClass("hide")):($(".c-add-user-car").addClass("hide"),$(".j-mycar-go-personal").addClass("hide"),$(".c-add-user-car-empty").show())})})}function e(){if(g.isBox)return document.title="我的爱车",!1;var a=require("widget/head/js/head");a.init({hasBack:1,title:"我的爱车",dom:"#mycarhead",loginout:0})}function f(){e(),d(),g.toggleContent("#mycar")}require("template/mycar"),require("template/usercarlist");var g=window.sharp,h=window.dust,i=window.sharpApi,j=$("#mycarcontent");module.exports={init:f}});