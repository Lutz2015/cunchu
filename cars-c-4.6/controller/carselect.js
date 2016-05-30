/**
 * @file carselect.js
 * @author wangbin
 */
define(function (require, exports, module) {
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;

    var carSelectContainer = $('#carselectcontent');

    function render () {
        var car = require('widget/car/js/car');
        car.init({
            type: 1,
            dom: '#carselectcontent'
        });
    }

    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '选择品牌';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                title: '选择品牌',
                dom: '#carselecthead'
            });
        }
    }

    function _init() {
        renderHeadAndFooter();
        render();
        sharp.toggleContent('#carselect');
    };

    module.exports = {
        init: _init
    }
});
