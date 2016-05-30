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











