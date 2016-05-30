/**
 * @file dialog.js
 */
define(function (require, exports, module) {
    require('widget/dialog/html/dialog');
    var sharp = window.sharp;
    var dust = window.dust;
    var options = {
        hasCancel: true,
        hasHead: true,
        confirm: '确认',
        title: '提示',
        content: ''
    };

    function bindEvent(opt) {
        $('.j-dialog-confirm').on('click', function (e) {
            var callback = opt.callback;
            if (callback && $.isFunction(callback)) {
                callback();
            }
        });
        $('.j-dialog-default').on('click', function (e) {
            closedialog();
        });
        $('.j-dialog-close').on('click', function (e) {
            closedialog();
        });
        if (opt.bindEvent && $.isFunction(opt.bindEvent)) {
            opt.bindEvent();
        }
    }

    function closedialog() {
        $('.j-dialog').remove();
    }

    function render(opt) {
        var data = $.extend({}, options, opt);
        dust.render('widget/dialog/html/dialog', data, function (error, out) {
            $(opt.dom).append(out);
            $('.j-dialog-content').html(opt.content);
            bindEvent(opt);
        });
    }

    function _init(opt) {
        render(opt);
    }

    module.exports = {
        init: _init
    };
});
