/**
 * @file carselect.js
 * @author wangbin
 */
define(function (require, exports, module) {
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;

    var carSelectContainer = $('#seriesselectcontent');

    function render () {
        var car = require('widget/car/js/car');
        car.init({
            type: 2,
            dom: '#seriesselectcontent'
        });
    }

    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '选择车系';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                hasHref: 'http://www.baidu.com',
                title: '选择车系',
                dom: '#seriesselecthead'
            });
        }
    }

    function _init() {
        renderHeadAndFooter();
        render();
        sharp.toggleContent('#seriesselect');
    };

    module.exports = {
        init: _init
    }
});
