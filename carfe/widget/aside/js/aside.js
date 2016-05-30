/**
 * @file aside.js
 */

define(function (require, exports, module) {
    require('widget/aside/html/aside');
    var dust = window.dust;

    function render(options) {
        dust.render('widget/aside/html/aside', {}, function (error, out) {//把dust转换成为html页面
            $(options.dom).html(out);
            bindEvent();
            if (options.showDom == 'asideseries') {
                $('.j-series-addcolor').addClass('add-color').siblings().removeClass('add-color')
            } else if (options.showDom == 'asidecare') {
                $('.j-care-addcolor').addClass('add-color').siblings().removeClass('add-color');
            }
        });
    }

    function bindEvent() {
        $('.j-aside-series').on('click', function (e) {
            location.href = '#series/';
        });
        $('.j-aside-care').on('click', function (e) {
            location.href = '#care/';
        });
    }

    function init(options) {

        render(options);
    }

    module.exports = {
        init: init
    }
});

