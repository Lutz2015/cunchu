/**
 * @file head.js
 */

define(function (require, exports, module) {
    require('widget/head/html/head');
    var dust = window.dust;
    var buname = window.buname;
    var logouturl = window.logouturl;

    function render(options) {
        dust.render('widget/head/html/head', {
            title: options.title,
            buname: buname
        }, function (error, out) {
            $(options.dom).html(out);
            bindEvent();
        });
    }

    function bindEvent() {
        $('.j-logout').on('click', function (e) {
            location.href = logouturl;
        });
    }

    function init(options) {
        render(options);
    }

    module.exports = {
        init: init
    }
});

