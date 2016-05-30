/**
 * @file 保养项目
 */
define(function (require, exports, module) {
    require('template/care');
    var sharp = window.sharp;
    var dust = window.dust;
    var sharpApi = window.sharpApi;
    var care = $('#care');

    function getData(options) {
        var d = new $.Deferred();
        var data = options.data;
        sharp.get({
            url: options.url,
            data: data,
            success: function (data) {
                d.resolve(data.result);
            }
        });
        return d;
    }

    //获取保养项目名称数据
    function getNameData() {
        return getData({
            url: sharpApi.getcarelist
        })
    }

    function renderNewCare() {
        var newCare = require('widget/dialog/js/dialog');
        require('template/newCare');
        dust.render('template/newCare', {}, function (err, out) {
            newCare.init({
                dom: '.j-care-newcreate',
                title: '添加保养项目',
                confirm: '确认添加',
                content: out,
                callback: function () {
                    var caname = $('.j-newcare-caname').val();
                    if (caname) {
                        var capart = $('.j-newcare-capart').val();
                        sharp.post({
                            url: sharpApi.addcare,
                            data: {
                                caname: caname,
                                capart: capart
                            },
                            success: function (res) {
                                if (res.error == 0) {
                                    //添加一条数据到列表下--就是重新刷新页面
                                    $('.j-dialog').remove();
                                    renderCare()
                                }
                            }
                        });
                    } else {
                        $('.j-newcare-check').removeClass('hide');
                    }
                }
            });

            $('.j-newcare-caname').focus();
            bindNewCare();
        });
    }

    function bindNewCare() {
        $('.j-newcare-caname').on('keydown', function (e) {
            $('.j-newcare-check').addClass('hide');
        });
    }

    function renderCare() {
        var careName = getNameData();
        careName.then(function (data) {
            dust.render('template/care', {result: data}, function (error, out) {
                care.html(out);
                //bindNewCreate();
            });
        }).then(function () {
            $('.j-care-create').on('click', function () {
                renderNewCare();
            })
        })
    }

    function renderHead() {
        var head = require('widget/head/js/head');
        head.init({
            title: '百度爱车后台内部管理平台',
            dom: '#head'
        });
    }

    function renderAside() {
        var aside = require('widget/aside/js/aside');
        aside.init({
            dom: '#aside',
            showDom: 'asidecare'
        });
    }

    function init() {
        renderHead();
        renderAside();
        renderCare();
        sharp.toggleContent('#care');
    }

    module.exports = {
        init: init
    };
});

