/**
 * @file profile.js
 * @author caozengzeng
 */
define(function (require, exports, module) {
    require('template/profile');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var carContainer = $('#profilecontent');

    function getUname() {
        sharp.get({
            url: sharpApi.getShopList,
            success: function (data) {
                if(data.islogin == 0){
                    var page = location.href;
                    sharp.appointLogin(page);
                }else{
                    if(data.result && data.result.length > 0){
                        if(data.result[0].sp_address && data.result[0].coordinate_x && data.result[0].coordinate_y && parseFloat(data.result[0].coordinate_x) > 0 && parseFloat(data.result[0].coordinate_y) > 0 ){
                            data.result[0].add_map = 1;
                        }else{
                            data.result[0].add_map = null;
                        }
                        var phonenum = sharp.getLocalData('phone_num');
                        if(phonenum && phonenum !== ""){
                            data.result[0].phonenum = phonenum;
                        }else{
                            data.result[0].phonenum = null;
                        }
                        dust.render('template/profile', {
                            result: data.result[0]
                        }, function (error, out) {
                            carContainer.html(out);
                            if(phonenum && phonenum !== ""){
                                $('.c-profile-address').removeClass('c-no-bd');
                            }else{
                                $('.c-profile-address').addClass('c-no-bd');
                            }
                        });
                    }else{
                        carContainer.html('<div class="c-no-order">暂无结算店铺</div>');
                    }
                }
            },
            error: function () {
            }
        });
    }

    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '联系我们';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: 1,
                hasHref: 'http://www.baidu.com',
                title: '联系我们',
                dom: '#profilehead',
                loginout: 0
            });
        }
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

        sharp.toggleContent('#profile');
    };

    module.exports = {
        init: _init
    }
});
