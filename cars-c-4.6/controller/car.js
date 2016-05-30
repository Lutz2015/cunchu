/**
 * @file car.js
 * @author wangbin
 */
define(function (require, exports, module) {
    require('template/car');
    require('template/usercarlist');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var carContainer = $('#carcontent');

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

    function checkCarSchemeState(data) {
        var d = new $.Deferred();
        sharp.get({
            url: sharpApi.checkCarSchemeState,
            data: data,
            success: function (data) {
                d.resolve(data.result);
            }
        });
        return d;
    }

    function bindUserCarListEvent(dom) {
        $(dom).on('click', function (e) {
            var elem = $(this);
            var cid = elem.data('cid');
            var bid = elem.data('bid');
            var sid = elem.data('sid');
            var data = {
                cid: cid,
                bid: bid,
                sid: sid,
            }
            var promise = checkCarSchemeState(data);
            promise.then(function (result) {
                if (result.onecarwithscheme == 0) {
                    sharp.showError('您选择的车辆不在该直达号保养范围内');
                    return false;
                }
                var cname = elem.find('.c-user-car-name').text();
                var uccode = elem.data('uccode');
                var logo = elem.data('logo');
                var ucid = elem.data('ucid');
                var skm = elem.data('skm');
                var dkm = elem.data('dkm');
                var currentCar = {
                    cid: cid,
                    bid: bid,
                    sid: sid,
                    cname: cname,
                    uccode: uccode,
                    logo: logo,
                    ucid: ucid,
                    skm: skm,
                    dkm: dkm
                };
                var otherInfo = sharp.getLocalData('otherInfo');
                otherInfo.currentCar = currentCar;
                if (result.spnum > 1) {
                    sharp.setLocalData('otherInfo', otherInfo);
                    location.href = "#shop/";
                } else if (result.spnum == 1) {
                    var currentShop = {
                        sp_no: result.spno,
                        sp_address: result.spaddress,
                        sp_name: result.spname,
                    };
                    otherInfo.currentShop = currentShop;
                    sharp.setLocalData('otherInfo', otherInfo);
                    location.href = "#services/";
                }
            });
        });
    }

    function bindCarEvent() {
        //添加新车辆
        $('.j-add-user-car').on('click', function (e) {
            sharp.setLocalData('hasOldCar', false);
            sharp.setLocalData('isFromMyCar', false);
            sharp.setLocalData('changeOldCar', false);
            location.href = "#carselect/";
        });
        $('.j-user-car-login').on('click', function (e) {
            var page = location.href;
            sharp.appointLogin(page);
        });
    }

    function render() {
        dust.render('template/car', {}, function (error, out) {
            carContainer.html(out);
            bindCarEvent();
            var userCarPromise = getUserCar();
            userCarPromise.then(function (userCars) {
                if (userCars && userCars.length > 0) {
                    dust.render('template/usercarlist', {
                        result: userCars,
                        carLogo: carLogo,
                        showTitle: true
                    }, function (error, out) {
                        $('.j-user-car-list').html(out);
                        bindUserCarListEvent('.j-user-car');
                    });
                } else if (sharp.getLocalData('isFromNav')) {
                    sharp.setLocalData('isFromNav', false);
                    location.href = "#carselect/";
                }
            });
        });
    }

    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '选择车辆';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                hasHref: 'http://www.baidu.com',
                title: '选择车辆',
                dom: '#carhead',
                loginout: 0
            });
        }
    }

    function _init() {
        renderHeadAndFooter();
        render();
        sharp.toggleContent('#car');
    };

    module.exports = {
        init: _init
    }
});
