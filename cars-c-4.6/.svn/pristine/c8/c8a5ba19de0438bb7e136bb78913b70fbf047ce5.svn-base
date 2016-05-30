/**
 * @file car.js
 * @author caozengzeng
 */
define(function (require, exports, module) {
    require('template/orderLists');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var carContainer = $('#orderlistscontent');
    /*var json={
        "error": 0,
        "result": [
            {
                "oid": "14262096",
                "oprice": "200",
                "goods_id": "1.1.1",
                "goods_name": "200000公里保养套餐",
                "uname": "李金玲",
                "uphone": "13220825177",
                "cname": "北京现代第九代索纳塔",
                "uccode": "京N12345",
                "service_time": "2015-03-09 11:00~12:00",
                "status":4 //0 待支付  1 支付成功  2 支付中  3 退款中  4 已退款  5 订单已关闭
            },
            {
                "oid": "155555",
                "oprice": "200",
                "goods_id": "1.1.1",
                "goods_name": "200000公里保养套餐",
                "uname": "李金玲",
                "uphone": "13220825177",
                "cname": "北京现代第九代索纳塔",
                "uccode": "京N12345",
                "service_time": "2015-03-09 11:00~12:00",
                "status":5 //0 待支付  1 支付成功  2 支付中  3 退款中  4 已退款  5 订单已关闭
            },
            {
                "oid": "155555",
                "oprice": "200",
                "goods_id": "1.1.1",
                "goods_name": "200000公里保养套餐",
                "uname": "李金玲",
                "uphone": "13220825177",
                "cname": "北京现代第九代索纳塔",
                "uccode": "京N12345",
                "service_time": "2015-03-09 11:00~12:00",
                "status":0 //0 待支付  1 支付成功  2 支付中  3 退款中  4 已退款  5 订单已关闭
            }
        ]
    };*/
    function getUname() {
        sharp.get({
            url: sharpApi.getOrderLists,
            success: function (data) {
               /* console.log(data);*/
                if(data.islogin == 0){
                    var page = location.href;
                    sharp.appointLogin(page);
                }else{
                    if(data.result.length > 0){
                        dust.render('template/orderLists', {
                            result: data.result,
                            appid: appid
                        }, function (error, out) {
                            carContainer.html(out);
                            bindEvent();
                        });
                    }else{
                        carContainer.html('<div class="c-no-order">暂无订单</div>');
                    }
                }
            },
            error: function () {
            }
        });
    }
    function bindEvent() {
        $('.j-pay').click(function(){
            var oid = $(this).data('oid');
            location.href = payurl + '/lightapp/pay/v2/order?id='+oid;
            return false;
        });
        var phonenum = sharp.getLocalData('phone_num');
        if(phonenum && phonenum !== ''){
            $('.c-orderlist-tell').attr('href','tel:'+phonenum+'');
            $('.c-orderlist-tell').addClass('show').removeClass('hide');
        }else{
            $('.c-orderlist-tell').addClass('hide').removeClass('show');
        }
    }
    function renderHeadAndFooter() {
        if (sharp.isBox) {
            document.title = '我的订单';
            return false;
        } else {
            var head = require('widget/head/js/head');
            head.init({
                hasBack: "1",
                hasHref: 'http://www.baidu.com',
                title: '我的订单',
                dom: '#orderlistshead',
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

        sharp.toggleContent('#orderlists');
    };

    module.exports = {
        init: _init
    }
});
