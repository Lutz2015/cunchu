/**
 * @file personal.js
 * @author caozengzeng
 */
define(function (require, exports, module) {
    require('template/personal');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var carContainer = $('#personalcontent');

    function getUname() {
        sharp.get({
            url: sharpApi.getUserInfor,
            success: function (data) {
                /*console.log(data);*/
                if(data.islogin == 0){
                    var page = location.href;
                    sharp.appointLogin(page);
                }else{
                    dust.render('template/personal', data, function (error, out) {
                        carContainer.html(out);
                        bindEvent();
                    });
                }
            },
            error: function () {
            }
        });
    }

    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '个人中心';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                hasHref: 'http://www.baidu.com',
                title: '个人中心',
                dom: '#personalhead',
                loginout: 0
            });
        }
    }

    function bindEvent() {
        $('.j-h-img').load(function(){
            $(this).css({'width':'auto','height':'auto'});
            var screenImage = $('.j-h-img');
            var theImage = new Image();
            theImage.src = screenImage.attr("src");
            var widthh = theImage.width;
            var heightt = theImage.height;
            if(widthh > heightt){
                $('.j-h-img').height('62px');
                $('.j-h-img').width('auto');
                var scroal=heightt/62;
                $('.j-h-img').css('margin-left',-parseFloat(widthh/scroal)/2);
            }else{
                $('.j-h-img').width('62px');
                $('.j-h-img').height('auto');
                var scroal=widthh/62;
                $('.j-h-img').css('margin-top',-parseFloat(heightt/scroal)/2);
            }
        });
        $('.j-personal-go-nav').on('click', function (e) {
            location.href = '#';
        });
    }

    function _init() {
        //在shop页面后退的容错处理
        var wDistrictChoose = $('.w-district-choose');
        if (wDistrictChoose.length === 1) {
            wDistrictChoose.remove();
        }

        if (!carContainer.html()) {
            renderHeadAndFooter();
        }

        getUname();

        sharp.toggleContent('#personal');
    };

    module.exports = {
        init: _init
    }
});
