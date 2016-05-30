/**
 * @file addcar.js
 * @author wangbin
 */
define(function (require, exports, module) {
    require('template/addcar');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var carContainer = $('#addcarcontent');
    var dialog = require('widget/dialog/js/dialog');

    function getCurrentCar() {
        var data = {};
        if (sharp.getLocalData('hasOldCar')) {
            var currentCar = sharp.getLocalData('myCar').currentCar;
        } else {
            var currentCar = sharp.getLocalData('otherInfo').currentCar;
        }

        if (sharp.getLocalData('changeOldCar') == 2) {
            var newCar = sharp.getLocalData('otherInfo').newCar;
            data.cname = newCar.bname + newCar.sname + newCar.cname;
            data.cid = newCar.cid;
        } else {
            data.cid = currentCar.cid;
            if (currentCar.bname && currentCar.sname) {
                data.cname = currentCar.bname + currentCar.sname + currentCar.cname;
            } else {
                data.cname = currentCar.cname;
            }
        }

        if (currentCar.ucid) {
            data.ucid = currentCar.ucid;
        }
        if (currentCar.ucdate) {
            data.ucdate = currentCar.ucdate;
        }
        if (currentCar.uccode) {
            data.uccode1 = currentCar.uccode.match(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使]{1}|WJ/)[0];
            data.uccode2 = currentCar.uccode.replace(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使]{1}|WJ/, "");
        } else {
            data.uccode1 = "京";
        }

        return data;
    }

    var _currentCar;
    function render() {
        _currentCar = getCurrentCar();

        dust.render('template/addcar', _currentCar, function (error, out) {
            carContainer.html(out);
            bindEvent();
        });
    }

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

    function bindEvent() {
        var uccode1Elem = $('.j-addcar-uccode1');
        uccode1Elem.on('click', function (e) {
            var uccode = require('widget/uccode/js/uccode');
            var textElem = uccode1Elem.find('.j-addcar-uccode1-text');
            uccode.init({
                appendDom: '#addcar',
                text: textElem.text(),
                callback: function (res) {
                    textElem.text(res);
                }
            });
        });

        var uccode2Elem = $('.c-addcar-uccode2');
        uccode2Elem.on('focus', function (e) {
            if (uccode2Elem.hasClass('red')) {
                uccode2Elem.val('');
                uccode2Elem.removeClass('red');
            }
        });

        $('.j-addcar-select-car').on('click', function (e) {
            sharp.setLocalData('changeOldCar', true);
            location.href = "#carselect/";
        });

        var dateElem = $('.j-addcar-date');
        var datePlaceholderElem = $('.c-date-placeholder');
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

        $('.j-addcar-submit').on('click', function (e) {
            if (uccode2Elem.hasClass('red')) {
                return;
            }
            var uccode2 = $.trim(uccode2Elem.val()).toLocaleUpperCase();
            if (uccode2 == '') {
                uccode2Elem.addClass('red').val('请输入车牌号');
                return;
            }
            var uccode = uccode1Elem.text() + uccode2;
            if (!/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}[0-9,A-Z]{5}$/.test(uccode)) {
                sharp.showError('您输入的车牌格式不正确');
                return;
            }

            var ucdate = $('.j-addcar-date').val();
            if (!ucdate) {
                sharp.showError('请选择购车日期');
                return;
            }
            if (new Date(ucdate).getTime() > new Date().getTime()) {
                sharp.showError('您输入的日期大于当前日期');
                return;
            }

            var carElem = $('.j-addcar-select-car');
            var cid = carElem.data('cid');

            if (sharp.getLocalData('hasOldCar') && _currentCar.cid == cid && _currentCar.ucdate == ucdate && _currentCar.uccode == uccode) {
                location.href="#mycar/";
            }

            var data = {
                cid: cid,
                uccode: uccode,
                ucdate: ucdate
            }
            if (sharp.getLocalData('hasOldCar')) {
                data.ucid = carElem.data('ucid');
                var promise = updateUserCar(data);
            } else {
                var promise = addUserCar(data);
            }
            promise.then(function (res) {
                if (res == 0) {
                    sharp.showError('汽车牌照重复，请重新填写。');
                    return;
                }
                if (sharp.getLocalData('hasOldCar') || sharp.getLocalData('isFromMyCar')) {
                    location.href="#mycar/";
                } else {
                    var otherInfo = sharp.getLocalData('otherInfo');
                    var currentCar = otherInfo.currentCar;
                    currentCar.uccode = data.uccode;
                    currentCar.ucid = res;
                    currentCar.cname = currentCar.bname + currentCar.sname + currentCar.cname;

                    var promise = getShops();
                    promise.then(function (result) {
                        if (result.length > 1) {
                            sharp.setLocalData('otherInfo', otherInfo);
                            location.href = "#shop/";
                        } else if (result.length == 1) {
                            otherInfo.currentShop = result[0];
                            sharp.setLocalData('otherInfo', otherInfo);
                            location.href = '#services/';
                        }
                    });
                }
            });
        });

        $('.j-addcar-delete').on('click', function (e) {
            dialog.init({
                hasCancel: true,
                hasHead: false,
                confirm: '确认删除',
                content: '<div class="c-delete-car-confirm-info">确认删除该车辆信息吗？</div>',
                dom: '#addcar',
                thirty: true,
                callback: function () {
                    sharp.post({
                        url: sharpApi.deleteUserCar,
                        data: {
                            ucid: $('.j-addcar-select-car').data('ucid')
                        },
                        success: function (res) {
                            location.href = "#mycar/";
                        }
                    });
                }
            });
        });
    }

    function deleteUserCar(data) {
        var d = new $.Deferred();
        sharp.post({
            url: sharpApi.deleteUserCar,
            data: data,
            success: function (data) {
                d.resolve(data.result);
            }
        });
        return d;
    }

    function addUserCar(data) {
        var d = new $.Deferred();
        sharp.post({
            url: sharpApi.addUserCar,
            data: data,
            success: function (data) {
                d.resolve(data.result);
            }
        });
        return d;
    }

    function updateUserCar(data) {
        var d = new $.Deferred();
        sharp.post({
            url: sharpApi.updateUserCar,
            data: data,
            success: function (data) {
                d.resolve(data.result);
            }
        });
        return d;
    }

    function renderHead() {
        if (sharp.isBox) {
            return false;
            document.title = _title;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                hasHref: 'http://www.baidu.com',
                title: _title,
                dom: '#addcarhead',
                loginout: 0
            });
        }
    }

    var _title = '添加爱车';

    function _init() {
        if (sharp.getLocalData('hasOldCar')) {
            _title = '修改爱车';
        }
        $('.c-uccode-select').remove();
        renderHead();
        render();
        sharp.toggleContent('#addcar');
    };

    module.exports = {
        init: _init
    }
});