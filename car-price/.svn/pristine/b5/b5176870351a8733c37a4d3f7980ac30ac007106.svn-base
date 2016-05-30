/**
 * @file home.js
 * @description 服务商上传汽车保养价格管理
 * @author wangbin24
 **/

define(function(require, exports, module) {
    require('template/home');
    require('template/table');
    require('template/seriesbtnlist');
    require('template/seriesmenulist');

    var CENGINE = ['', '自然吸气', '涡轮增压', '机械增压', '电动', '混动'];
    var CDRIVING = ['', '两驱', '四驱'];
    var CGEARBOX = {
        'MT': '手动',
        'AT': '自动',
        'DCT': '双离合',
        'CVT': 'CVT',
        'AMT': 'AMT'
    };
    // 车系menu list显示的最大数
    var SHOWMENUNUMBER = 8;
    // 车型表格显示的最大数
    var SHOWTABLENUMBER = 10;
    // 车型信息类型数量
    var SHOWTABLEHEADNUMBER = 7;

    var brandinfo = window.brandinfo;
    var appid = window.appid;
    var hasPopup = false;
    // 当前直达号选择的车系信息
    var currentSelectSeries = [];
    // 车系menu list翻页参数
    var currentMenuNum = 0;
    // 车型表格翻页参数
    var tablePageNum = 1;
    // 车型表格最大翻页数
    var tablePageMaxNum = 1;
    // 车型列表数据缓存
    var carListData = {};

    function init() {
        sharp.showLoading('.j-content');
        render();
    }

    function render() {
        var currentSeriesData = {};
        getCurrentSeries().then(function (currentSeriesRes) {
            currentSeriesData = currentSeriesRes;
            return getSeries();
        }).then(function (seriesData) {
            var currentSeries = currentSeriesData.result;
            var series = seriesData.result;
            for (var ci = 0; ci < currentSeries.length; ci++) {
                var curSerItems = currentSeries[ci];
                for (var si = 0; si < series.length; si++) {
                    var serItems = series[si];
                    if (serItems.key === curSerItems.key) {
                        var curSerCars = curSerItems.cars;
                        var serCars = serItems.cars;
                        for (var cj = 0; cj < curSerCars.length; cj++) {
                            var curSerItem = curSerCars[cj];
                            for (var sj = 0; sj < serCars.length; sj ++) {
                                var serItem = serCars[sj];
                                if (serItem.sid === curSerItem.sid) {
                                    serItem.checked = true;
                                }
                            }

                            currentSelectSeries.push({
                                sid: curSerItem.sid,
                                name: curSerItems.key + curSerItem.sname,
                                hasPrice: true
                            });
                        }
                    }
                }
            }
            dust.render('template/home', {
                brand: brandinfo,
                series: series
            }, function (error, out) {
                $('.j-content').html(out);
                bindEvent();
                renderCurrentSeries();
                renderTable();
            });
        });
    }

    function renderMenuList() {
        var data = [];
        var length = (currentMenuNum + 1) * SHOWMENUNUMBER;
        for (var i = currentMenuNum * SHOWMENUNUMBER; i < length; i++) {
            if (currentSelectSeries[i]) {
                data.push(currentSelectSeries[i]);
            } else {
                break;
            }
        }
        var renderData = {result: data};
        if (currentSelectSeries.length > ((currentMenuNum + 1) * SHOWMENUNUMBER)) {
            renderData.showRight = true;
        }
        if (currentMenuNum > 0) {
            renderData.showLeft = true;
        }
        dust.render('template/seriesmenulist', renderData, function (error, out) {
            $('.j-series-menu').html(out);
            bindMenuListEvent();
        });
    }

    function bindMenuListEvent() {
        $('.j-s-menu-goleft').on('click', function (e) {
            e.stopPropagation();
            currentMenuNum--;
            renderTable();
        });

        $('.j-s-menu-goright').on('click', function (e) {
            e.stopPropagation();
            currentMenuNum++;
            renderTable();
        });

        $('.j-s-menu-item').on('click', function (e) {
            e.stopPropagation();
            var dom = $(this);
            if (dom.hasClass('checked')) {
                return false;
            } else {
                $('.j-s-menu-item.checked').removeClass('checked');
                dom.addClass('checked');
                var sid = dom.data('sid');
                renderTbody(sid);
                renderPageBtns();
            }
        });

        $('.j-s-menu-item .iclose').on('click', function (e) {
            e.stopPropagation();
            changeCurrentSelectSeries({sid: this.parentElement.dataset.sid}, false);
        });
    }

    function getmaintaincarlist(sid) {
        var res = carListData[sid];
        var d = new $.Deferred();
        if (res) {
            tablePageMaxNum = res.maxNum;
            d.resolve(res);
        } else {
            sharp.get({
                url: sharpApi.getmaintaincarlist,
                data: {
                    bid: brandinfo.bid,
                    sid: sid
                },
                beforeSend: function (e) {
                    sharp.showLoading('.j-series-table');
                },
                success: function (data) {
                    tablePageMaxNum = data.maxNum = Math.ceil(data.result.length / SHOWTABLENUMBER);
                    carListData[sid] = data;
                    d.resolve(data);
                }
            });
        }
        return d;
    }

    function bindTbodyEvent(sid) {
        $('.j-s-price-create').on('click', function (e) {
            e.stopPropagation();
            var parentDom = e.target.parentElement;
            var title = parentDom.dataset.cname;
            var cid = parentDom.dataset.cid;
            var dialog = require('widget/dialog/js/dialog');
            dialog.init({
                type: 0,
                title: title,
                cid: cid
            });
        });
        $('.j-s-price-read').on('click', function (e) {
            e.stopPropagation();
            window.open(sharpApi.downloadcarsolutionprice + '?cid=' + e.target.parentElement.dataset.cid + '&appid=' + appid);
        });
        $('.j-s-price-update').on('click', function (e) {
            e.stopPropagation();
            var parentDom = e.target.parentElement;
            var title = parentDom.dataset.cname;
            var cid = parentDom.dataset.cid;
            var dialog = require('widget/dialog/js/dialog');
            dialog.init({
                type: 1,
                title: title,
                cid: cid
            });
        });
        $('.j-s-price-delete').on('click', function (e) {
            e.stopPropagation();
            var cid = e.target.parentElement.dataset.cid;
            var popup = require('widget/popup/js/popupBox');
            popup.init({
                text: '确定删除该条价格配置',
                confirm: function () {
                    sharp.post({
                        url: sharpApi.deletecarsolutionprice,
                        data: {
                            appid: appid,
                            cid: cid
                        },
                        success: function (data) {
                            if (data.error === 0) {
                                var res = carListData[sid].result;
                                var length = tablePageNum * SHOWTABLENUMBER;
                                for (var i = (tablePageNum - 1) * SHOWTABLENUMBER; i < length; i++) {
                                    var item = res[i];
                                    if (item.cid === cid) {
                                        item.hasPrice = 0;
                                    } else {
                                        break;
                                    }
                                }
                                renderTbody();
                            } else {
                                console.log(data.message);
                            }
                        }
                    });
                },
                cancel: function () {
                }
            });
        });
    }

    function renderTbody(sid) {
        if (typeof sid === 'undefined') {
            sid = currentSelectSeries[currentMenuNum * SHOWMENUNUMBER].sid;
        }
        getmaintaincarlist(sid).then(function (data) {
            var renderData = {
                result: []
            };
            var res = data.result;
            if (res.length === 0) {
                renderData.isEmpty = true;
            } else {
                var length = tablePageNum * SHOWTABLENUMBER;
                for (var i = (tablePageNum - 1) * SHOWTABLENUMBER; i < length; i++) {
                    var item = res[i];
                    if (item) {
                        item.cengine = CENGINE[item.cengine] || item.cengine;
                        item.cdriving = CDRIVING[item.cdriving] || item.cdriving;
                        item.cgearbox = CGEARBOX[item.cgearbox] || item.cgearbox;
                        renderData.result.push(item);
                    } else {
                        break;
                    }
                }
            }
            if (renderData.result.length < SHOWTABLENUMBER) {
                renderData.colspan = 7;
                renderData.rowspan = (SHOWTABLENUMBER - renderData.result.length);
                renderData.trHeight = renderData.rowspan * 41 - 1;
            }
            
            dust.render('template/table', renderData, function (error, out) {
                $('.j-series-table').html(out);
                bindTbodyEvent(sid);
            });
        });
    }

    function renderPageBtns() {
        if (tablePageMaxNum === 0) {
            $('.j-series-pagebtn').addClass('hide');
        } else {
            $('.j-series-pagebtn').removeClass('hide');
        }
        var pagebtn = require('widget/pagebtn/js/pagebtn');
        pagebtn.init({
            dom: '.j-series-pagebtn',
            currentNum: tablePageNum,
            maxNum: tablePageMaxNum,
            callback: function (num) {
                tablePageNum = num;
                renderTbody();
            }
        });
    }

    function renderTable() {
        tablePageNum = 1;
        renderMenuList();
        renderTbody();
        renderPageBtns();
    }

    function changeCurrentSelectSeries(item, isAdd, fromCheckbox) {
        if (isAdd) {
            currentSelectSeries.push(item);
            handlerSeriesView(item, isAdd);
            sharp.post({
                url: sharpApi.addserieslistbyappid,
                data: {
                    type: 1,
                    sid: item.sid,
                    appid: appid
                }
            });
        } else {
            var popup = require('widget/popup/js/popupBox');
            popup.init({
                text: '确认删除整个车系的数据？',
                confirm: function () {
                    for (var i = 0; i < currentSelectSeries.length; i++) {
                        var currentSeries = currentSelectSeries[i];
                        if (currentSeries.sid === item.sid) {
                            sharp.post({
                                url: sharpApi.deletecarsolutionprice,
                                data: {
                                    appid: appid,
                                    sid: item.sid
                                },
                                success: function (data) {
                                    if (data.error === 0) {
                                        sharp.post({
                                            url: sharpApi.delserieslistbyappid,
                                            data: {
                                                type: 1,
                                                sid: item.sid,
                                                appid: appid
                                            },
                                            success: function (data) {
                                                if (data.error !== 0) {
                                                    console.log(data.message);
                                                }
                                            }
                                        });
                                    } else {
                                        console.log(data.message);
                                    }
                                }
                            });
                            currentSelectSeries.splice(i, 1);
                            break;
                        }
                    }
                    handlerSeriesView(item, isAdd);
                },
                cancel: function () {
                    if (fromCheckbox) {
                        hasPopup = true;
                        $('#ser-' + item.sid).trigger('click');
                    }
                }
            });
        }
    }

    function handlerSeriesView(item, isAdd) {
        renderCurrentSeries();

        var checkboxDom = $('#ser-' + item.sid);
        if (isAdd) {
            checkboxDom.attr('checked', 'checked');
        } else {
            checkboxDom.attr('checked', false);
        }

        renderTable();
    }

    function bindEvent() {
        var currentSeriesBoxDom = $('.j-cur-seri-box');
        var curSerUnfoldDom = $('.j-cur-ser-unfold');
        var unfoldTextDom = curSerUnfoldDom.find('.j-cur-ser-unfold-text');
        curSerUnfoldDom.on('click', function (e) {
            e.stopPropagation();
            if (currentSeriesBoxDom.hasClass('t-unfold')) {
                unfoldTextDom.html('展开全部');
                curSerUnfoldDom.find('.iup').removeClass('iup').addClass('idown');
            } else {
                unfoldTextDom.html('收起');
                curSerUnfoldDom.find('.idown').removeClass('idown').addClass('iup');
            }
            currentSeriesBoxDom.toggleClass('t-unfold');
        });

        currentSeriesBoxDom.on('click', function (e) {
            var dom = e.target;
            if (dom.className === 'iclose') {
                e.stopPropagation();
                changeCurrentSelectSeries({sid: dom.dataset.sid}, false);
            }
        });

        var seriesBoxDom = $('.j-series-box');
        seriesBoxDom.on('click', function (e) {
            e.stopPropagation();
        });
        var seriesBtnDom = $('.j-series-btn');
        var seriesBtnidownDom = seriesBtnDom.find('.idown');
        seriesBtnDom.on('click', function (e) {
            e.stopPropagation();
            seriesBoxDom.toggleClass('hide');
            seriesBtnidownDom.toggleClass('idown').toggleClass('iup');
        });
        $('.j-content').on('click', function (e) {
            e.stopPropagation();
            if (seriesBtnidownDom.hasClass('iup')) {
                seriesBoxDom.toggleClass('hide');
                seriesBtnidownDom.toggleClass('idown').toggleClass('iup');
            }
        });
        seriesBoxDom.find('input').on('change', function (e) {
            e.stopPropagation();
            if (hasPopup) {
                hasPopup = false;
                return false;
            }
            var dom = e.target;
            var item = {
                sid: dom.value,
                name: dom.dataset.name
            }
            changeCurrentSelectSeries(item, dom.checked, true);
        });

    }

    function getCurrentSeries() {
        return sharp.get({
            url: sharpApi.getserieslistbyappid,
            data: {
                bid: brandinfo.bid
            }
        });
    }

    function getSeries() {
        return sharp.get({
            url: sharpApi.getSeriesList,
            data: {
                bid: brandinfo.bid
            }
        });
    }

    /**
     * 已有车系按钮列表
     * @return {[type]} [description]
     */
    function renderCurrentSeries() {
        if (currentSelectSeries.length === 0) {
            $('.j-current-series').addClass('hide');
        } else {
            dust.render('template/seriesbtnlist', {
                currentSeries: currentSelectSeries
            }, function (error, out) {
                $('.j-cur-seri-box').html(out);
                $('.j-current-series').removeClass('hide');
                if (currentSelectSeries.length > SHOWMENUNUMBER) {
                    $('.j-cur-ser-unfold').removeClass('hide');
                } else {
                    $('.j-cur-ser-unfold').addClass('hide');
                }
            });
        }
    }

    init();
});
