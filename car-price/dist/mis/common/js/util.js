var sharp={showLoading:function(a){$(a).html($(".j-loading").clone().removeClass("hide"))},checklocalStorage:function(){var a="localStorage"in window&&null!==window.localStorage,b=window.localStorage&&window.localStorage.getItem;return a&&b?!0:void 0},setLocalData:function(a,b){var c=this,d=c.checklocalStorage();d&&window.localStorage.setItem(a,b)},getLocalData:function(a){var b=this,c=b.checklocalStorage();return c?JSON.parse(window.localStorage.getItem(a)):void 0},appointLogin:function(a){var b={};b.onsuccess=function(){clouda.mbaas.account.closeLoginDialog(),location.reload()},b.onfail=function(){window.history.go(-1),clouda.mbaas.account.closeLoginDialog()},b.login_type="sms",b.tpl="creative",b.u=a,clouda.mbaas.account.bdLogin(b)},request:function(a){var b=window.appid;return a.data?a.data.appid=b:a.data={appid:b},a.success&&$.isFunction(a.success)||(a.success=function(){}),a.error&&$.isFunction(a.error)||(a.error=function(){}),a.dataType||(a.dataType="json"),a.type||(a.type="GET"),$.ajax(a)},get:function(a){var b=this;return b.request(a)},post:function(a){var b=this;return a||(a={}),a.type="POST",b.request(a)},maskToggle:function(){$(".j-mask").toggleClass("hide")},uploadMaskToggle:function(a){$(".j-mask").toggleClass("upload")}};