define(function(require,exports,module){function a(){K.render("template/series",{},function(a,b){M.html(b);var c=require("widget/choose/js/choose");c.init({dom:".j-addcare-choose"}),f(),h(),k(),m()})}function b(a){var b=new $.Deferred,c=a.data;return J.get({url:a.url,data:c,success:function(a){b.resolve(a.result)}}),b}function c(a,c){return b({url:L.getmaintaincarlist,data:{bid:a,sid:c},success:function(a){}})}function d(a){for(var b=0;b<N.length;b++)for(var c=0;c<a.length;c++)a[c].cengine==N[b].cgid&&(a[c].cengine_name=N[b].cgname);for(var b=0;b<O.length;b++)for(var c=0;c<a.length;c++)a[c].cdriving==O[b].cvid&&(a[c].cdriving_name=O[b].cvname);for(var b=0;b<P.length;b++)for(var c=0;c<a.length;c++)a[c].cgearbox==P[b].cbid&&(a[c].cgearbox_name=P[b].cbname);return a}function e(){$(".j-btn-group").addClass("hide");var a=$(".j-brand-btn").attr("data-bid"),b=$(".j-series-btn").attr("data-sid");if(a&&b){var e=c(a,b);e.then(function(a){a=d(a),K.render("template/search",{result:a},function(a,b){$(".j-search-baoyang").html(b),$(".j-group-create").removeClass("hide"),g(),r(),B(),F()})})}else $(".j-search-baoyang").html("无数据,请选择汽车品牌和车系")}function f(){$(".j-choose-search").on("click",function(a){e()})}function g(){$(".j-addcare-radio").on("click",function(){$(".j-btn-group").removeClass("hide")})}function h(){$(".j-action-create").on("click",function(){j()})}function i(){var a=$(".j-dialog-cname"),b=a.val();if(!b)return a.next().removeClass("hide"),!1;cdiDom=$(".j-dialog-cdisplacement");var c=cdiDom.val();if(!c)return cdiDom.next().removeClass("hide").html("请输入排量"),!1;if(!/^[1-9]\.\d$|^0\.[1-9]$|^10.0$/.test(c))return cdiDom.next().removeClass("hide").html("请输入0.1-10.0的一位小数"),!1;var d=$(".j-dialog-ccylinder"),e=d.val();if(Number(e)<1||Number(e)>20)return d.next().removeClass("hide").html("请输入1-20的整数"),!1;var f=$.trim($(".j-brand-btn").data("bid")),g=$.trim($(".j-series-btn").data("sid")),h=$(".j-dialog-cengine").val(),i=$(".j-dialog-cgearbox").val(),j=$(".j-dialog-cdriving").val(),k={cname:b,bid:f,sid:g,cdisplacement:c,cengine:h,ccylinder:e,cgearbox:i,cdriving:j};return k}function j(){var a=require("widget/dialog/js/dialog");require("template/dialogContent"),K.render("template/dialogContent",{cgearbox:P,cengine:N,cdriving:O},function(b,c){a.init({dom:".j-box-create",title:"新增保养项目",confirm:"确认新增",content:c,callback:function(){var a=i();a&&J.post({url:L.addmaintaincar,data:a,success:function(a){0==a.error&&($(".j-dialog").remove(),e(),$(".j-btn-group").addClass("hide"))}})}}),o(),p(),q()})}function k(){$(".j-action-amend").on("click",function(){l()})}function l(){var a=require("widget/dialog/js/dialog");require("template/dialogContent");var b=$('input[name="rcars"]:checked'),c=b.parents().parents().children("td"),d={cengine:N,cgearbox:P,cdriving:O,cid:b.siblings('input[name="cid"]').val(),bid:$(".j-brand-btn").data("bid"),sid:$(".j-series-btn").data("sid"),cname:c.children(".j-series-cname").data("cname"),cdisplacement:c.children(".j-series-cdisplacement").data("cdisplacement"),ccylinder:c.children(".j-series-ccylinder").data("ccylinder"),oldcgid:c.children(".j-series-cengine").data("cengine"),oldcbid:c.children(".j-series-cgearbox").data("cgearbox"),oldcvid:c.children(".j-series-cdriving").data("cdriving")};K.render("template/dialogContent",d,function(b,c){a.init({confirm:"确认修改",title:"修改保养项目",dom:".j-box-amend",content:c,callback:function(){var a=i();a&&(a.cid=$(".j-addcare-radio:checked").next().val(),J.post({url:L.updatemaintaincar,data:a,success:function(a){0==a.error&&($(".j-dialog").remove(),e(),$(".j-btn-group").addClass("hide"))}}))}}),o(),p(),q()})}function m(){$(".j-action-del").on("click",function(){n()})}function n(){var a=require("widget/dialog/js/dialog");a.init({dom:".j-box-del",title:"删除保养项目",content:'<p class="c-dialog-sure">真的要删除吗？</p>',confirm:"确认删除",callback:function(){var a=$('input[name="rcars"]:checked').siblings('input[name="cid"]').val();J.post({url:L.deletemaintaincar,data:{cid:a},success:function(a){0==a.error&&($('input[name="rcars"]:checked').parent().parent("tr").remove(),$(".j-dialog").remove(),e(),$(".j-btn-group").addClass("hide"))}})}})}function o(){var a=$(".j-dialog-cname");a.on("keydown",function(b){a.next().addClass("hide")})}function p(){var a=$(".j-dialog-cdisplacement");a.on("keydown",function(b){a.next().addClass("hide")})}function q(){var a=$(".j-dialog-ccylinder");a.on("keydown",function(b){a.next().addClass("hide")})}function r(){$(".j-edit").on("click",function(){var a=$(".j-brand-btn").data("bid"),b=$(".j-series-btn").data("sid"),c=$(this).parent().data("cid");x(a,b,c)})}function s(a){return b({url:L.getsolutions,data:a})}function t(){return b({url:L.getcarelist})}function u(a,b,c){require("template/soBasicData"),require("template/soAllData");var d=$(".j-solutions-sokm option:selected").val(),e=$(".j-solutions-sopackage option:selected").val(),f=$(".j-solutions-sotype option:selected").val(),g={bid:a,sid:b,cid:c,sokm:d,sopackpage:e,sotype:f},h=s(g),i=t();h.then(function(a){K.render("template/soBasicData",{result:a},function(a,b){$(".j-solutions-basic-tab").html(b)}),i.then(function(b){for(var c=0;c<a.length;c++)for(var d=a[c].caid,e=0;e<b.length;e++){var f=b[e];+f.caid===+d&&(f.checked=!0)}K.render("template/soAllData",{result:b},function(a,b){$(".j-solutions-all-tab").html(b),$(".j-solutions-sup").scrollTop(0)})})})}function v(){var a=$('.j-solutions-all input[name="checked"]'),b=$(".j-solutions-basic-tbody").find(".j-basic-span"),c=[],d=[];b.each(function(){d.push($(this).data("caid"))});for(var e in a)a[e].checked&&-1==jQuery.inArray(Number(a[e].value),d)&&c.push(Number(a[e].value));return JSON.stringify(c)}function w(){for(var a=[],b=1;16>=b;b++)a.push(5e3*b);return a}function x(a,b,c){var d=require("widget/dialog/js/dialog");require("template/solutions");var e=w();K.render("template/solutions",{allSokm:e},function(e,f){d.init({dom:".j-box-edit",title:"保养明细",hasCancel:!1,confirm:"保存",content:f,callback:function(){var d=$(".j-solutions-sokm option:selected").val(),e=$(".j-solutions-sopackage option:selected").val(),f=$(".j-solutions-sotype option:selected").val(),g=v(),h={bid:a,sid:b,cid:c,sokm:d,sopackage:e,sotype:f,caids:g};J.post({url:L.updatesolutions,data:h,success:function(d){0==d.error&&(alert("保存成功"),u(a,b,c))}})}})}),u(a,b,c),y(a,b,c),z(a,b,c),A(a,b,c)}function y(a,b,c){$(".j-solutions-sokm").change(function(){u(a,b,c)})}function z(a,b,c){$(".j-solutions-sopackage").change(function(){u(a,b,c)})}function A(a,b,c){$(".j-solutions-sotype").change(function(){u(a,b,c)})}function B(){$(".j-uploading").click(function(a){C($(this).parent().data("cid"))})}function C(a){require("template/uploading"),K.render("template/uploading",{},function(b,c){$(".j-box-uploading").html(c),D(a)})}function D(a){$(".j-solutions-confirm").click(function(b){b.preventDefault();var c=$('[type="file"]').get(0).files[0],d=new FormData;c&&bdtoken&&(d.append("file",c),d.append("bdstoken",bdtoken),d.append("cid",a));var f=E(d);f.then(function(a){0===a.error?($(".j-uploading-success").removeClass("hide"),$(".j-solutions-confirm").addClass("hide"),$(".j-uploading-confirm").removeClass("hide"),e()):$(".j-uploading-err").removeClass("hide").text(a.message)})}),$(".j-uploading-close").on("click",function(a){$(".j-box-uploading").html("")}),$(".j-uploading-confirm").on("click",function(a){$(".j-box-uploading").html("")})}function E(a){var b=new $.Deferred;return $.ajax({url:L.addcarsolutions,data:a,dataType:"json",type:"POST",processData:!1,contentType:!1,beforeSend:function(){J.setLoading()},success:function(a){b.resolve(a)},complete:function(){J.disLoading()}}),b}function F(){$(".j-download").on("click",function(){var a=$(this).parent().data("cid");window.open(L.downloadcarsolutions+"?cid="+a)})}function G(){var a=require("widget/head/js/head");a.init({title:"百度爱车后台内部管理平台",dom:"#head"})}function H(){var a=require("widget/aside/js/aside");a.init({dom:"#aside",showDom:"asideseries"})}function I(){G(),H(),a(),J.toggleContent("#series")}require("template/series"),require("template/search");var J=window.sharp,K=window.dust,L=window.sharpApi,M=$("#series"),N=[{cgid:1,cgname:"自然吸气"},{cgid:2,cgname:"涡轮增压"},{cgid:3,cgname:"机械增压"},{cgid:4,cgname:"电动"},{cgid:5,cgname:"混动"}],O=[{cvid:"1",cvname:"两驱"},{cvid:"2",cvname:"四驱"}],P=[{cbid:"MT",cbname:"手动"},{cbid:"AT",cbname:"自动"},{cbid:"DCT",cbname:"双离合"},{cbid:"CVT",cbname:"CVT"},{cbid:"AMT",cbname:"AMT"}];module.exports={init:I}});