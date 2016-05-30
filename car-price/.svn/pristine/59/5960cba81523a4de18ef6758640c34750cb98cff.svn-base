/**
 * @file popupBox.js
 */

define(function (require, exports, module) {
    require('widget/popup/html/popupBox');
    var dust = window.dust;

    var popupCache;

    function bindEvent(options) {
        popupCache = $('.j-popup');
        popupCache.find('.j-popup-confirm').on('click', function (e) {
            if ($.isFunction(options.confirm)) {
                options.confirm();
            }
            closePopup();
        });
        popupCache.find('.j-popup-cancel').on('click', function (e) {
            if ($.isFunction(options.cancel)) {
                options.cancel();
            }
            closePopup();
        });
    }

    function closePopup() {
        popupCache.remove();
        sharp.maskToggle();
    }

    function render(options) {
        dust.render('widget/popup/html/popupBox', {text: options.text}, function (error, out) {
            $('body').append(out);
            bindEvent(options);
        });
    }

    function init(options) {
        sharp.maskToggle();
        render(options);
    }

    module.exports = {
        init: init
    };
});