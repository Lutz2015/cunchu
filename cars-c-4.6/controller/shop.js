/**
 * @file shop.js
 * @author wangbin
 */
define(function (require, exports, module) {
    require('template/shop');

    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var sharp = window.sharp;
    var currentLocation = sharp.map;

    var shopContainer = $('#shopcontent');

    function getShops() {
        var d = new $.Deferred();

        sharp.get({
            url: sharpApi.getShopList,
            success: function (data) {
                d.resolve(data.result);
            }
        });

        return d;
    }

    function render() {
        var shopPromise = getShops();

        shopPromise.then(function (shops) {
            if (shops.length == 0) {
                return false;
            }
            dust.render('template/shop', {
                result: shops
            }, function (error, out) {
                shopContainer.html(out);
                bindEvent();
            });
        });
    }

    function bindEvent() {
        $('.j-shop-box').on('click', function (e) {
            e.preventDefault();
            var elem = $(this);
            var currentShop = {
                sp_no: elem.data('sp_no'),
                sp_address: elem.data('sp_address'),
                sp_name: elem.data('sp_name'),
                business_time: elem.data('business_time'),
                hotline: elem.data('hotline'),
                coordinate_y: elem.data('coordinate_y'),
                coordinate_x: elem.data('coordinate_x')
            };
            var otherInfo = sharp.getLocalData('otherInfo');
            otherInfo.currentShop = currentShop;
            sharp.setLocalData('otherInfo', otherInfo);

            location.href = '#services/';
        });
    }

    function renderHead() {
        if (sharp.isBox) {
            document.title = '选择门店';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                hasHref: 'http://www.baidu.com',
                title: '选择门店',
                dom: '#shophead',
                loginout: 0
            });
        }
    }

    function _init() {
        renderHead();
        render();

        sharp.toggleContent('#shop');
    }

    module.exports = {
        init: _init
    }
});
