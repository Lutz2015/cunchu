/**
 * @file service
 * @author sundi
 */
define(function (require, exports, module) {
    require('template/service_list'); //推荐套餐详情
    require('template/service_info'); //推荐套餐列表
    require('template/service'); //service上部主体页面
    require('template/services_table'); //查看明细表格

    var sharp = window.sharp;
    var dialog = require('widget/dialog/js/dialog'); //弹窗组件
    var servicesDom = $('#services .content');
    if (sharp.isBox) {
        var headHeight = 0;
    } else {
        var headHeight = 45;
    }

    var services = {
        _init: function () {
            var _this = this;
            _this._otherInfoData = sharp.getLocalData('otherInfo');

            _this._renderHead();

            // 缓存数据
            _this.orderInfo = {};

            $('.j-services-price-num').text(0);
            $('.j-price-button').addClass('disabled');

            _this._renderMain();
        },
        _renderHead: function () {
            if (sharp.isBox) {
                document.title = '选择服务';
                return false;
            } else {
                var head = require('widget/head/js/head');
                head.init({
                    hasBack: 1,
                    title: '选择服务',
                    dom: '#services .comhead',
                    opt: 0
                });
            }
        },
        _renderMain: function () {
            var _this = this;
            //数据来源于选择车及店铺信息
            var curCar = _this._otherInfoData.currentCar;
            var curShop = _this._otherInfoData.currentShop;

            var data = {
                logo: curCar.logo,
                cname: curCar.cname,
                uccode: curCar.uccode,
                sname: curShop.sp_name,
                saddress: curShop.sp_address,
                carLogo: carLogo
            };

            dust.render('template/service', data, function (error, out) {
                servicesDom.html(out);
                _this._bindEvent();
            });
        },
        _disableServicesHtml: function () {
            $('.j-services-listdom').html('').addClass('hide');
            $('.j-services-carelist').html('');
            $('.j-services-price-num').text(0);
            $('.j-price-button').addClass('disabled');
        },
        _bindEvent: function () {
            var _this = this;
            var curcar = _this._otherInfoData;
            $('.j-price-button').on('click', function (e) {
                e.preventDefault();
                if (!$(e.currentTarget).hasClass('disabled')) {
                    _this._cacheData();
                    sharp.setLocalData('orderInfo', _this.orderInfo);
                    location.href = "#payorder/";
                }
            });
            var serviceInput = $('.j-service-distance-val');
            serviceInput.on('input', function (e) {
                var value = serviceInput.val();
                var pattern = /^\d*$/;

                if (value == '') {
                    return;
                } else if (value !== '' && pattern.test(value)) {
                    if (curcar) {
                        _this._getData(value, curcar.currentCar);
                    }
                } else {
                    sharp.showError('请输入正确的公里数。');
                }
                _this._disableServicesHtml();
            });
            $('.j-service-info-car').on('click', function (e) {
                location.href = '#car/'
            });
        }, //获取套餐列表
        _getData: function (distance, currentCar) {
            var _this = this;
            sharp.get({
                url: sharpApi.getsugschemes,
                data: {
                    mile: distance,
                    bid: currentCar.bid,
                    sid: currentCar.sid,
                    cid: currentCar.cid,
                    skm: currentCar.skm,
                    dkm: currentCar.dkm
                },
                success: function (res) {
                    var d = res.result;
                    if (d.length == 0) {
                        return false;
                    }
                    $.each(d, function (i, k) {
                        if (k.scname.indexOf('(推荐)') > 0) {
                            k.recommend = 1;
                            k.scname = k.scname.split('(推荐)')[0];
                        } else {
                            k.recommend = 0;
                        }
                    });
                    var data = {
                        result: d
                    };
                    _this._renderHtml(data);
                }
            });
        }, //render 套餐列表
        _renderHtml: function (data) {
            var _this = this;
            dust.render('template/service_info', data, function (error, out) {
                $('.j-services-listdom').removeClass('hide').html(out);
            });
            _this._bindHtmlEvent();
        }, //套餐列表事件
        _bindHtmlEvent: function () {
            var _this = this;
            $('.j-service-list-item').on('click', function (e) {
                $('.j-service-list-item.check').removeClass('check');
                $this = $(e.currentTarget);
                $this.addClass('check');

                _this.orderInfo.order_name = $this.data('sname');

                var distance = $this.attr('data-mileage');
                if (distance !== '') {
                    _this._getCareListData(distance);
                }
            });
        },
        handlerBaseCare: function (baseCare) {
            var tnames = [];
            var cares = [];
            var totals = {};
            var middleCarePrices = {};
            for (var i = 0; i < 3; i++) {
                var subCare = baseCare[i];
                tnames.push(subCare.name)
                var sumPrice = 0;
                var subCares = subCare.list;
                for (var j = 0; j < subCares.length; j++) {
                    var scname = subCares[j].scname;
                    if (totals[scname]) {
                        totals[scname] += 1;
                    } else {
                        totals[scname] = 1;
                    }
                    sumPrice += Number(subCares[j].scsumprice);

                    if (i === 1) {
                        middleCarePrices[scname] = subCares[j].scsumprice;
                    }
                }

                var care = {};
                care.carelist = subCares;
                care.sumprice = sumPrice;
                care.tname = subCare.name;
                cares.push(care);
            }
            for (var i = 0; i < 3; i++) {
                var care = cares[i].carelist;
                var sameCares3 = [];
                var sameCares2 = [];
                var sameCares1 = [];
                for (var j = 0; j < care.length; j++) {
                    var num = totals[care[j].scname];
                    if (num == 3) {
                        var middlePrice = Number(middleCarePrices[care[j].scname]);
                        if (middlePrice) {
                            if (i == 0) {
                                if (Number(care[j].scsumprice) < middlePrice) {
                                    care[j].green = 'green';
                                }
                            }
                            if (i == 2) {
                                if (Number(care[j].scsumprice) > middlePrice) {
                                    care[j].red = 'red';
                                }
                            }
                        }
                        sameCares3.push(care[j]);
                    } else if (num == 2) {
                        sameCares2.push(care[j]);
                    } else if (num == 1) {
                        sameCares1.push(care[j]);
                    }
                }
                var subCares = sameCares3.sort(function (a, b) {
                    return a.scname > b.scname;
                }).concat(sameCares2);
                subCares = subCares.concat(sameCares1);
                cares[i].carelist = subCares;
            }
            return {
                tnames: tnames,
                baseCare: cares
            };
        },
        handlerSugsCare: function (sugsCare) {
            return sugsCare;
        },
        _getCareListData: function (distance, ccode) {
            var _this = this;
            var currentCar = _this._otherInfoData.currentCar;
            var city = (sharp.map && sharp.map.address.city.replace('市', '') || '北京');
            sharp.get({
                url: sharpApi.getcarschemes,
                data: {
                    mile: distance,
                    bid: currentCar.bid,
                    sid: currentCar.sid,
                    cid: currentCar.cid
                },
                success: function (res) {
                    var data = res.result;
                    if (data.basecare) {
                        var baseCare = _this.handlerBaseCare(data.basecare);
                        data.basecare = baseCare.baseCare;
                        data.tnames0 = baseCare.tnames[0];
                        data.tnames1 = baseCare.tnames[1];
                        data.tnames2 = baseCare.tnames[2];
                    }
                    if (data.sugscare) {
                        var sugsCare = _this.handlerSugsCare(data.sugscare);
                        data.sugscare = sugsCare;
                    }
                    sharp.setLocalData('serviceCareDetail', data);
                    _this._renderCare(data);
                }
            });
        },
        _renderCare: function (data) {
            var _this = this;
            dust.render('template/service_list', data, function (error, out) {
                $('.j-services-carelist').html(out);
                _this._priceAll();
            });
            _this._bindCareEvent();
            _this._sugsEvents();
        },
        _bindCareEvent: function () {
            var _this = this;
            var boxElem = $('.c-service-box');
            setTimeout(function () {
                var height = Math.round(boxElem.offset().top + servicesDom.scrollTop() - headHeight);
                _this._scrollTop(height);
            }, 600);

            var oldMenu = 1;
            var menuElem = $('.j-service-menu');
            var middleMenuElem = menuElem.find('.c-service-middle');
            menuElem.find('li').on('click', function (e) {
                var _elem = $(this);
                var index = _elem.data('index');
                if (index == oldMenu) {
                    return;
                } else {
                    menuElem.find('.check').removeClass('check');
                    _elem.addClass('check');
                    var oldElem = $('.c-service-base .check');
                    var currentElem = $('.j-service-base' + index);

                    oldElem.removeClass('check');
                    currentElem.addClass('check');
                    if (index == 1) {
                        middleMenuElem.css('border-width', 1);
                    } else if (index == 2) {
                        middleMenuElem.css('border-right-width', 0).css('border-left-width', 1);
                    } else if (index == 0) {
                        middleMenuElem.css('border-right-width', 1).css('border-left-width', 0);
                    }
                }
                oldMenu = index;
                _this._priceAll();
            });

            $('.j-services-btn-bottom').on('click', function (e) {
                var targetElem = $(e.target);
                if (targetElem.hasClass('c-service-taocan-info')) {
                    dialog.init({
                        hasHead: true,
                        confirm: '知道了',
                        title: '套餐组合说明',
                        content: '<div class="c-service-dialog-illustrate">此公里数下的保养项目主要来源于车主使用手册,车主需要按照车主手册上的保养周期进行正确的保养， 以确保车辆处于最佳状态,如车辆在恶劣环境下行驶,则需要更频繁地进行保养,有助于确保行车安全， 这些保养通常不在车辆的保修范围内， 车主需要支付使用的工时及配件费用。</div>',
                        dom: '#services'
                    });
                    return false;
                } else if (targetElem.hasClass('c-service-detail-info')) {
                    var index = $('.j-service-menu .check').data('index');
                    var data = sharp.getLocalData('serviceCareDetail');
                    $.extend(data, {index: index});
                    dust.render('template/services_table', data, function (error, out) {
                        dialog.init({
                            hasHead: false,
                            confirm: '知道了',
                            title: '提示',
                            content: out,
                            dom: '#services',
                            bindEvent: _this._bindServiceTableEvent
                        });
                    });
                    return false;
                }
            });
        },
        _bindServiceTableEvent: function () {
            function middleMenuResize(index) {
                var middleMenuElem = $('.j-service-table-menu .c-service-middle');
                if (index == 1) {
                    middleMenuElem.css('border-width', 1);
                } else if (index == 2) {
                    middleMenuElem.css('border-right-width', 0).css('border-left-width', 1);
                } else if (index == 0) {
                    middleMenuElem.css('border-right-width', 1).css('border-left-width', 0);
                }
            }
            var oldMenu = $('.j-service-menu .check').data('index');
            middleMenuResize(oldMenu);
            $('.j-service-table-menu li')[oldMenu].classList.add('check');
            $('.j-service-table-menu').on('click', function (e) {
                var menuElem = $(e.target);
                var index = menuElem.data('index');
                if (index == oldMenu) {
                    return;
                } else {
                    oldMenu = index;
                    $(this).find('.check').removeClass('check');
                    menuElem.addClass('check');
                    $('.c-service-table.check').removeClass('check');
                    var currentElem = $('.j-service-table' + index);
                    currentElem.addClass('check');
                    middleMenuResize(index);
                }
            });
        },
        _sugsEvents: function () {
            var _this = this;
            $('.j-service-sugs-item').on('click', function (e) {
                var elem = $(e.currentTarget);
                elem.toggleClass('check');
                _this._priceAll();
            });
        },
        getCheckBaseCare: function () {
            var desc = '';
            var scid = [];
            var sctoken = '';
            $('.c-service-base .check .j-service-base-subitem').each(function(index, el) {
                var elem = $(el);
                desc += [
                    '(',
                    elem.find('.j-service-base-cname').text(),
                    '/',
                    elem.data('scwprice'),
                    '/',
                    elem.data('scpprice'),
                    '/',
                    elem.data('subprice'),
                    ')'
                ].join('');
                scid.push(elem.data('scid'));
                sctoken += [
                    elem.data('scid'),
                    '-',
                    elem.data('subprice'),
                    '-',
                    elem.data('sctoken'),
                    '|'
                ].join('');
            });
            return {
                desc: desc,
                scid: scid,
                sctoken: sctoken
            };
        },
        getCheckSugsCare: function () {
            var desc = '';
            var scid = [];
            var sctoken = '';
            $('.c-service-sugs-item.check').each(function(index, el) {
                var elem = $(el);
                desc += [
                    '(',
                    elem.find('.j-service-sugs-name').text(),
                    '/',
                    elem.data('scwprice'),
                    '/',
                    elem.data('scpprice'),
                    '/',
                    elem.data('subprice'),
                    ')'
                ].join('');
                scid.push(elem.data('scid'));
                sctoken += [
                    elem.data('scid'),
                    '-',
                    elem.data('subprice'),
                    '-',
                    elem.data('sctoken'),
                    '|'
                ].join('');
            });
            return {
                desc: desc,
                scid: scid,
                sctoken: sctoken
            };
        },
        _cacheData: function (priceall) {
            var _this = this;
            var base = _this.getCheckBaseCare();
            var sugs = _this.getCheckSugsCare();
            _this.orderInfo.order_desc = base.desc + "#" + sugs.desc;
            var sctoken = (base.sctoken + sugs.sctoken).replace(/\|{1,2}$/, '');
            var scid = '';
            if (base.scid.length > 0) {
                scid += base.scid.join('-');
            }
            if (sugs.scid.length > 0) {
                scid += '-' + sugs.scid.join('-');
            }
            _this.orderInfo.goods_id = scid.slice(0, 49);
            _this.orderInfo.sctoken = sctoken;
            _this.orderInfo.base_price = $('.check .j-service-base-total').data('sump');
        },
        _priceAll: function () {
            var _this = this;
            var priceall = 0;
            var total = $('.c-service-base .check .j-service-base-total').data('sump');
            $('.c-service-sugs-item.check').each(function(index, el) {
                priceall += Number(el.dataset.subprice);
            });
            priceall += parseFloat(total);
            $('.j-services-price-num').text(priceall.toFixed(2));
            $('.j-price-button').removeClass('disabled');

            _this.orderInfo.order_price = priceall

            return {
                priceall: priceall
            };
        },
        _scrollTop: function (scrollTo) {
            var _this = this;
            var scrollFrom = parseFloat(servicesDom.offset().top);
            var i = 0;
            var scrollTo = parseFloat(scrollTo);
            var time = 5;
            function scrollAnimation() {
                if (i >= time) {
                    return;
                }
                i++;
                servicesDom.scrollTop((scrollTo - scrollFrom) / time * i + scrollFrom);
                animation(scrollAnimation);
            }
            scrollAnimation();
            function animation(callback) {
                if (window.requestAnimationFrame) {
                    return window.requestAnimationFrame(callback);
                } else if (window.webkitRequestAnimationFrame) {
                    return window.webkitRequestAnimationFrame(callback);
                }
            }
        }
    };
    function _init() {
        var dialogElem = $('#services .j-dialog');
        if (dialogElem.length > 0) {
            dialogElem.remove();
        }
        services._init();
        sharp.toggleContent('#services');
    };

    module.exports = {
        init: _init
    }
});
