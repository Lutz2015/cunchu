/**
 * @file 公共方法
 */
var sharp={
    islogin: 0,
    //isShowError: false,
    setLoading: function () {
        var self = this;
        var $loading = $('.loading-n');
        $loading.removeClass('hide');
    },
    disLoading: function () {
        var $loading = $('.loading-n');
        $loading.addClass('hide');
    },
    changeCss:function(id,addcss,removecss){
        $(id).addCalss(addcss).removeClass(removecss);
    },
    toggleContent:function(dom){
        var _this=this;
        $(dom).removeClass('hide').siblings().addClass('hide');
        _this.disLoading();
    },
    checklocalStorage:function(){//检查是否有缓存
        var checkBrower='localStorage' in window &&window['localStorage']!==null;
        var checkDom=window.localStorage && window.localStorage.getItem;
        if(checkBrower&&checkDom){
            return true;
        }
    },
    setLocalData:function(name,data){//设置本地缓存数据
        var self=this;
        var check=self.checklocalStorage();
        if(check){
            window.localStorage.setItem(name,data);
        }
    },
    getLocalData:function(){//获取本地缓存数据
        var self=this;
        var check=self.checklocalStorage();
        if(check){
            return JSON.parse(window.localStorage.getItem(name));
        }
    },
    appointLogin :function (page) {
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
    },
        //appointLogin(page);

    request:function(options,conf){
        var url=options.url;
        var data=options.data||{};
        var success=options.success||(function(){});
        var dataType=conf.dataType||'json';
        var type=conf.type||'GET';
        return $.ajax({
            url:url,
            data:data,
            dataType:dataType,
            type: type,
            success:function(msg){
                if (parseInt(msg.islogin, 10) === 1) {
                    sharp.islogin = 1;
                } else {
                    sharp.islogin = 0;
                }

                var error = msg.error == null ? -1 : parseInt(msg.error, 10);
                if (error === 0 || (msg.uii_err == 0)) {
                    success(msg);
                } else {
                    if (msg.message !== '提示：当前用户登录状态异常') {
                        alert(msg.message);
                    } else {
                        errorCallback(msg);
                    }
                }
            },
            error:function(msg){
                // to do 统一处理error
            }
        });
    },
    get:function(options){
        var self=this;
        return self.request(options,{
            dataType:'json',
            type:'GET'
        });
    },
    post: function (options) {
        var self = this;
        return self.request(options, {
            dataType: 'json',
            type: 'POST'
        });
    }
};
