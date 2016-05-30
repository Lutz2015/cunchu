/**
 * @file payorder
 * @author sundi
 */
define(function (require, exports, module) {
    require('template/payorder');

    var tips = require('widget/tips/js/tips');
    var payorderDom = $('#payorder');
    var payorderContentDom = payorderDom.find('.content');

    var payorder = {
        renderHead: function () {
            if (sharp.isBox) {
                document.title = '订单填写';
                return false;
            } else {
                var head = require('widget/head/js/head');
                head.init({
                    dom: '#payorder .comhead',
                    hasBack: 1,
                    title: '订单填写',
                    opt: 1
                });
            }
        },
        _init: function () {
            var _this = this;

            //只有第一次进入页面才会渲染head
            if (!payorderContentDom.html()) {
                _this.renderHead();
            }

            var otherInfo = sharp.getLocalData('otherInfo');
            _this.currentCar= otherInfo.currentCar;
            _this.currentShop = otherInfo.currentShop;
            _this.personInfo = sharp.getLocalData('personInfo');
            var orderInfo = sharp.getLocalData('orderInfo');

            _this.orderInfo = {
                sp_no: _this.currentShop.sp_no,
                logo: _this.currentCar.logo,
                uccode: _this.currentCar.uccode,
                cname: _this.currentCar.cname,
                goods_id: orderInfo.goods_id,
                goods_name: orderInfo.order_name,
                goods_desc: orderInfo.order_desc,
                user_name: _this.personInfo.uname,
                user_phone: _this.personInfo.phone,
                service_time: '',
                total_amount: orderInfo.order_price,
                sctoken: orderInfo.sctoken,
                remark: ''
            };

            _this._renderTpl();
        },
        _renderTpl: function () {
            var _this = this;

            var cur = _this.currentCar;
            var shop = _this.currentShop;
            var cares = _this._handleCares();
            var data = {
                cname: cur.cname,
                uccode: cur.uccode,
                logo: cur.logo,
                ucid: cur.ucid,
                sp_address: shop.sp_address,
                sp_name: shop.sp_name,
                phone: _this.personInfo.phone,
                carLogo: carLogo,
                cares: cares
            };

            dust.render('template/payorder', data, function (error, out) {
                payorderContentDom.html(out);
                payorderDom.attr('hasRender', true);
            });
            _this._bindEvents();
        },
        _handleCares: function () {
            var orderInfop = sharp.getLocalData('orderInfo');
            $('.j-order-price-num').text(orderInfop.order_price);

            var cares = [];

            var base = {
                name: orderInfop.order_name,
                price: orderInfop.base_price
            }
            cares.push(base);

            var res = orderInfop.order_desc.split('#')[1];
            if (res) {
                var sugs = res.replace(/\(/g, '').split(')');
                for (var i = 0, l = sugs.length; i < l; i++) {
                    if (sugs[i]) {
                        var sugsItem = sugs[i].split('/');
                        cares.push({
                            name: sugsItem[0],
                            price: sugsItem[3],
                        });
                    }
                }
            }

            return cares;
        },
        _createOrder: function () {
            var _this = this;
            var data = _this.orderInfo;
            sharp.post({
                url: sharpApi.orderPay,
                data: data,
                success: function (msg) {
                    location.href = msg.result.url;
                }
            });
        },
        _bindEvents: function () {
            var _this = this;

            var usernameElem = $('.j-order-user-name');
            usernameElem.on('focus', function (e) {
                if (usernameElem.hasClass('red')) {
                    usernameElem.removeClass('red').val('');
                }
            });

            var dateElem = $('.j-order-service-time');
            var datePlaceholderElem = $('.c-order-date-placeholder');
            dateElem.on('focus', function (e) {
                datePlaceholderElem.addClass('hide');
            });
            dateElem.on('blur', function (e) {
                if (!dateElem.val()) {
                    datePlaceholderElem.removeClass('hide');
                }
            });
            datePlaceholderElem.on('click', function (e) {
                dateElem.focus();
            });

            var isClick = false;
            $('.j-go-to-pay').on('click', function () {
                if (isClick) {
                    return false;
                }
                isClick = true;

                if (usernameElem.hasClass('red')) {
                    isClick = false;
                    return false;
                }
                var userName= $.trim(usernameElem.val());
                if (!userName) {
                    usernameElem.addClass('red').val('请输入您的姓名。');
                    isClick = false;
                    return false;
                }
                if (userName.replace(/[\u4e00-\u9fa5]/g, 'ss').length > 12) {
                    sharp.showError('姓名只能输入12个字符以内。');
                    isClick = false;
                    return false;
                }
                if (!(/^[a-zA-Z\u4e00-\u9fa5]+$/.test(userName))) {
                    sharp.showError('姓名只能输入中文或英文。');
                    isClick = false;
                    return false;
                }

                _this.orderInfo.user_name = userName;

                var phone = $.trim($('.j-order-user-phone').val());
                if (!phone) {
                    sharp.showError('请输入您的电话。');
                    isClick = false;
                    return false;
                }
                if (!(/^1[3578][0-9]{9}$/).test(phone)) {
                    sharp.showError('请输入正确的手机号码。');
                    isClick = false;
                    return false;
                }
                _this.orderInfo.user_phone = phone;

                var time = $.trim($('.j-order-service-time').val());
                if (time == '') {
                    sharp.showError('请输入服务日期。');
                    isClick = false;
                    return false;
                }
                var currentTime = new Date();
                var nextTime = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
                if (new Date(time).getTime() < new Date(nextTime).getTime()) {
                    sharp.showError('您输入的日期小于当前日期');
                    isClick = false;
                    return false;
                }
                _this.orderInfo.service_time = time + ' 23:59:59';

                _this._createOrder();
            });
        }
    };

    var _init = function () {
        payorder._init();
        sharp.toggleContent('#payorder');
    };

    module.exports = {
        init: _init
    }
});
