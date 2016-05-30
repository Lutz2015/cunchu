// 公共方法
var sharp = {
    showLoading: function (dom) {
        $(dom).html($('.j-loading').clone().removeClass('hide'));
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
        if (check) {
            window.localStorage.setItem(name, data);
        }
    },
    getLocalData: function (name) {
        var self = this;
        var check = self.checklocalStorage();
        if (check) {
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
    request: function (options) {
        var appid = window.appid;
        if (options.data) {
            options.data.appid = appid;
        } else {
            options.data = {
                appid: appid
            };
        }
        if (!options.success || !$.isFunction(options.success)) {
            options.success = function () {};
        }
        if (!options.error || !$.isFunction(options.error)) {
            options.error = function () {};
        }
        if (!options.dataType) {
            options.dataType = 'json';
        }
        if (!options.type) {
            options.type = 'GET';
        }

        return $.ajax(options);
    },
    get: function (options) {
        var self = this;
        return self.request(options);
    },
    post: function (options) {
        var self = this;
        if (!options) {
            options = {};
        }
        options.type = 'POST';
        return self.request(options);
    },
    maskToggle: function () {
        $('.j-mask').toggleClass('hide');
    },
    uploadMaskToggle: function (dom) {
        $('.j-mask').toggleClass('upload');
    }
};
