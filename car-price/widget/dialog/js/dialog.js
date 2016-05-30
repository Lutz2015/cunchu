/**
 * Created by steve on 15-9-1.
 */
define(function (require, exports, module) {
    require('widget/dialog/html/dialog');
    var sharp = window.sharp;
    var dust = window.dust;

    var TITLES = ['配置价格', '修改价格'];
    var cid;
    var type;

    function bindEvent(opt) {
        $('.j-dialog-step1-download').on('click', function (e) {
            if (type === 0) {
                window.open(sharpApi.downloadcarsolutionpricetpl + '?cid=' + cid);
            } else if (type === 1) {
                window.open(sharpApi.downloadcarsolutionprice + '?cid=' + cid + '&appid=' + appid);
            }
        });
        $('.j-dialog-step3-upload').on('click', function (e) {
            $('.j-dialog-step3-input').trigger('click');
        });
        $('.j-dialog-confirm').on('click', function (e) {
            var data = new FormData();
            var file = $('.j-dialog-step3-input')[0].files[0];
            data.append('file', file);
            data.append('cid', cid);
            data.append('appid', appid);
            $.ajax({
                url: sharpApi.addcarsolutionprice,
                data: data,
                dataType: 'json',
                type: 'POST',
                processData: false,
                contentType: false,
                beforeSend: function () {
                    uploading();
                },
                success: function (data) {
                    function close() {
                        if ($('.j-uploading-timeline').css('width') !== '690px') {
                            setTimeout(function () {
                                close();
                            }, 1000);
                        } else {
                            if (data.error === 0) {
                                closeUpload(true);
                            } else {
                                closeUpload(false, data.message);
                            }
                        }
                    }
                    close();
                }
            });
        });
        $('.j-dialog-cancel').on('click', function (e) {
            closeDialog();
        });
    }

    function closeUpload(isSuccess, message) {
        $('.j-uploading-text').addClass('hide');
        $('.j-uploading-timeline').removeClass('animate').css('width', '700px');
        if (isSuccess) {
            $('.j-uploading-success').removeClass('hide');
            setTimeout(function () {
                $('.j-uploading').addClass('hide');
                sharp.uploadMaskToggle();
                closeDialog();
            }, 1000);
        } else {
            sharp.uploadMaskToggle();
            $('.j-uploading').addClass('hide');
            $('.j-dialog-content').addClass('hide');
            $('.j-dialog-message').removeClass('hide');
            $('.j-dialog-message-text').html(message);
            $('.j-dialog-footer').addClass('c-showone');
        }
    }

    function uploading() {
        sharp.uploadMaskToggle();
        $('.j-uploading').removeClass('hide');
        $('.j-uploading-timeline').addClass('animate');
    }

    function closeDialog() {
        $('.j-uploading').remove();
        $('.j-dialog').remove();
        sharp.maskToggle();
    }

    function render(options) {
        dust.render('widget/dialog/html/dialog', {
            title1: TITLES[type],
            title2: options.title
        }, function (error, out) {
            $('body').append(out);
            bindEvent(options);
        });
    }

    function init(options) {
        cid = options.cid;
        type = options.type;
        sharp.maskToggle();
        render(options);
    }

    module.exports = {
        init: init
    };
});
