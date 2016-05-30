/**
 * @file carselect.js
 * @author wangbin
 */
define(function (require, exports, module) {
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;

    var carSelectContainer = $('#modelselectcontent');

    function render () {
        var car = require('widget/car/js/car');
        car.init({
            type: 3,
            dom: '#modelselectcontent'
        });
    }

    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '选择车型';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                hasHref: 'http://www.baidu.com',
                title: '选择车型',
                dom: '#modelselecthead'
            });
        }
    }

    function _init() {
        renderHeadAndFooter();
        render();
        sharp.toggleContent('#modelselect');
    };

    module.exports = {
        init: _init
    }
});
