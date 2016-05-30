/**
 * @file mycar.js
 * @author wangbin
 */
define(function (require, exports, module) {
    require('template/mycar');
    require('template/usercarlist');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var carContainer = $('#mycarcontent');
    var historyStatus;

    function getUserCar() {
        var d = new $.Deferred();
        sharp.get({
            url: sharpApi.getUserCarList,
            success: function (data) {
                d.resolve(data.result);
            }
        });
        return d;
    }

    function bindUserCarListEvent() {
        $('.j-user-car').on('click', function (e) {
            var elem = $(this);
            var cname = elem.find('.c-user-car-name').text();
            var cid = elem.data('cid');
            var uccode = elem.data('uccode');
            var logo = elem.data('logo');
            var ucid = elem.data('ucid');
            var bid = elem.data('bid');
            var sid = elem.data('sid');
            var ucdate = elem.data('ucdate');
            var currentCar = {
                cname: cname,
                cid: cid,
                bid: bid,
                sid: sid,
                uccode: uccode,
                logo: logo,
                ucid: ucid,
                ucdate: ucdate
            };
            var myCar = {};
            myCar.currentCar = currentCar;
            sharp.setLocalData('myCar', myCar);

            sharp.setLocalData('hasOldCar', true);
            sharp.setLocalData('isFromMyCar', true);
            sharp.setLocalData('changeOldCar', false);

            location.href = "#addcar/";
        });
    }

    function bindCarEvent() {
        //添加新车辆
        $('.j-add-user-car').on('click', function (e) {
            sharp.setLocalData('hasOldCar', false);
            sharp.setLocalData('isFromMyCar', true);
            sharp.setLocalData('changeOldCar', false);
            location.href = "#carselect/";
        });
        $('.j-user-car-login').on('click', function (e) {
            var page = location.href;
            sharp.appointLogin(page);
        });
        $('.j-mycar-go-personal').on('click', function (e) {
            location.href = "#personal/";
        });
    }

    function render() {
        dust.render('template/mycar', {}, function (error, out) {
            carContainer.html(out);
            bindCarEvent();
            var userCarPromise = getUserCar();
            userCarPromise.then(function (userCars) {
                if (userCars && userCars.length > 0) {
                    dust.render('template/usercarlist', {
                        result: userCars,
                        carLogo: carLogo
                    }, function (error, out) {
                        $('.j-user-car-list').html(out);
                        bindUserCarListEvent();
                    });
                    $('.j-mycar-go-personal').removeClass('hide');
                } else {
                    $('.c-add-user-car').addClass('hide');
                    $('.j-mycar-go-personal').addClass('hide');
                    $('.c-add-user-car-empty').show();
                }
            });
        });
    }

    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '我的爱车';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                title: '我的爱车',
                dom: '#mycarhead',
                loginout: 0
            });
        }
    }

    function _init() {
        renderHeadAndFooter();
        render();
        sharp.toggleContent('#mycar');
    };

    module.exports = {
        init: _init
    }
});
