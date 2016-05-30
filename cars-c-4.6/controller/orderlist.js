define(function (require, exports, module) {

    require('template/orderList');
    require('template/detailpay');
    var tips = require('widget/tips/js/tips');
    var dialog = require('widget/dialog/js/dialog');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var orderContent = $('#orderdetailcontent');
    var _oid;

    var base = {
        _bindEvent: function () {

            //申请退款
            $('.j-orderrefund').on('click',function(){
                dialog.init({
                    hasCancel: true,
                    hasHead: true,
                    title: '申请退款',
                    confirm: '确定',
                    content: '<div class="c-order-dialog-refund">确认退款吗？</div>',
                    dom: '#orderlist',
                    callback:function(){
                        $('.j-dialog').remove();
                        $('.w-mask').addClass('hide');
                        $.ajax({
                            type: 'POST',
                            url: sharpApi.orderRefund,
                            data: { 
                                oid: _oid,
                                appid:appid
                             },
                            dataType: 'json',
                            success: function(data){
                                if(data.error == 1){
                                    tips.init({
                                        time: 1000,
                                        content: data.message,
                                        type: 2
                                    });
                                }else{
                                    tips.init({
                                        time: 1000,
                                        content:'已成功发起退款，请稍候刷新',
                                        type: 2
                                    });
                                }
                            },
                            error: function(xhr, type){
                            }
                        });

                    }

                });

            });

        },
        getOrderData: function () {
            sharp.get({
                url: sharpApi.getOrderList,
                data: {
                    oid: _oid,
                    appid:appid
                },
                success: function (data) {
                    data.result.carLogo = window.carLogo;
                    data.result.payurl = window.payurl;
                    dust.render('template/orderList', data.result, function (error, out) {
                        if(data.islogin == 0){
                            var page = location.href;
                            sharp.appointLogin(page);
                        }else{
                            if(data.result.status == 0){
                                $('#orderdetailcontent').css({
                                    "bottom":"50px"
                                })
                            }else if(data.result.status == 1 ){
                                $('#orderdetailcontent').css({
                                    "bottom":"50px"
                                })
                            }else if( data.result.ecode == ''){
                                $('#orderdetailcontent').css({
                                    "bottom":"0"
                                })
                            }else{

                            }
                            $('#orderdetailcontent').html(out);
                            function makeTable(){
                                var desc = data.result.goods_desc;
                                // var desc = '(常规保养检查/45/0/45)(更换机油/45/225.00/270)#(更换机油滤清器/30/23.51/53.51)';
                                var leftDesc = desc.split('#')[0];
                                var rightDesc = desc.split('#')[1];
                                
                                var regleft=new RegExp("\\(","g");
                                var regright=new RegExp("\\)","g");
                                var nametd=new RegExp("\\/","g");

                                leftDesc=leftDesc.replace(regleft, "<tr><td>");
                                leftDesc=leftDesc.replace(nametd, "</td><td>￥");
                                leftDesc=leftDesc.replace(regright, "</tr>");
                                $('.c-order-tbody').html(leftDesc);

                                if(rightDesc != undefined && rightDesc != '' && rightDesc != ' '){
                                    rightDesc=rightDesc.replace(regleft, "<tr><td>");
                                    rightDesc=rightDesc.replace(nametd, "</td><td>￥");
                                    rightDesc=rightDesc.replace(regright, "</tr>");
                                    $('.c-order-tbody2').html(rightDesc);
                                }else{
                                    $('.c-order-check-infos').hide();
                                    $('.c-order-table2').hide();
                                }
                            }
                            try{
                                makeTable();
                            }catch(e){
                                console.log(e);
                            }
                            
                        }
                    });
                
                    dust.render('template/detailpay',data.result,function(error,out){
                        $('#orderdetailfoot').html(out);
                        if (/pos/.test(data.result.order_no)) {
                            $('#orderdetailfoot').addClass('hide');
                        } else {
                            $('#orderdetailfoot').removeClass('hide');
                        }
                        if(data.result.status == 4 || data.result.ecode == ''){
                            $('#orderdetailfoot').addClass('hide');
                            $('#orderdetailcontent').css({
                                'bottom':'0'
                            });
                        }
                        if(data.result.status == 2){
                            $('#orderdetailcontent').css({
                                'bottom':'50px'
                            });
                        }
                        if(data.result.status == 5){
                            $('#orderdetailfoot').addClass('hide');
                            $('#orderdetailcontent').css({
                                'bottom':'0'
                            });
                        }
                        if(data.result.status == 1 && data.result.ecode == ''){
                            $('#orderdetailcontent').css({
                                "bottom":"50px"
                            })
                        }
                    });

                    base._bindEvent();
                },
                error: function () {
                }
            });


            
        },
        _init: function (oid) {
            if (!orderContent.html()) {
                if(sharp.isBox){
                    document.title = '订单详情';
                }else{
                    var head = require('widget/head/js/head');
                    head.init({
                        dom: '#orderlistdetailhead',
                        hasBack: '1',
                        title: '订单详情'
                    });
                }   
            }

            _oid = oid;
            base.getOrderData();
            sharp.toggleContent('#orderlist');
        }
    };

    module.exports = {
        init: base._init
    }
});
