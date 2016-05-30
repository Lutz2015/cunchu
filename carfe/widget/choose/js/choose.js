/**
 * @file choose.js
 */

define(function (require, exports, module) {
    require('widget/choose/html/choose');
    var dust = window.dust;
    var sharp = window.sharp;
    var sharpApi = window.sharpApi;

    function bindEvent() {
        var brandBtnDom = $('.j-brand-btn');
        var brandDownDom = $('.j-choose-brand-down');
        var seriesBtnDom = $('.j-series-btn');
        var seriesDownDom = $('.j-choose-series-down');

        brandBtnDom.on('click', function (e) {
            e.stopPropagation();
            brandDownDom.removeClass('hide');
            seriesDownDom.addClass('hide');
            $(this).css('border-color','#4497ff');
            if(brandBtnDom.val()){
                seriesBtnDom.css('border-color','#e0e0e0');
            }
        });
        seriesBtnDom.on('click', function (e) {
            e.stopPropagation();
            seriesDownDom.removeClass('hide');
            brandDownDom.addClass('hide');
            if(brandBtnDom.val()){
                $(this).css('border-color','#4497ff');
            }else {
                brandBtnDom.css('border-color','#e0e0e0');
                seriesBtnDom.css('border-color','#e0e0e0');
            }
        });
        $(document).on('click',function(e){
            e.stopPropagation();
            brandBtnDom.css('border-color','#e0e0e0');
            seriesBtnDom.css('border-color','#e0e0e0');
            brandDownDom.addClass('hide');
            seriesDownDom.addClass('hide');
        });
    }

    //通过请求接口获取数据
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

    //获取汽车品牌brand数据
    function getBrand() {
        return getData({
            url: sharpApi.getbrandlist
        });
    }

    //获取汽车车系数据
    function getSeries(bid) {
        return getData({
            url: sharpApi.getserieslist,
            data: {bid: bid}
        });
    }

    function renderBrand() {
        var brand = getBrand();
        brand.then(function (data) {
            var dataType = {
                'A': '0', 'B': '0', 'C': '0', 'D': '0', 'E': '0',
                'F': '1', 'G': '1', 'H': '1', 'I': '1', 'J': '1',
                'K': '2', 'L': '2', 'M': '2', 'N': '2', 'O': '2',
                'P': '3', 'Q': '3', 'R': '3', 'S': '3', 'T': '3',
                'V': '4', 'W': '4', 'X': '4', 'Y': '4', 'Z': '4'
            };
            var res = [[], [], [], [], []];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                Array.prototype.push.apply(res[dataType[item.key]], data[i].cars)
            }
            if (data.length > 0) {
                require('widget/choose/html/brand');
                dust.render('widget/choose/html/brand', {result: res}, function (error, out) {
                    $('.j-choose-brand-down').html(out);
                    bindBrandEvent();
                });
            }
        });
    }

    function renderSeries(bid) {
        var series = getSeries(bid);
        series.then(function (data) {
            require('widget/choose/html/carseries');
            dust.render('widget/choose/html/carseries', {result: data}, function (error, out) {
                $('.j-choose-series-down').html(out);
                bindSeriesEvent();
            });
        });
    }

    function bindBrandEvent() {
        $('.c-tab-item').on('click', function (e) {
            e.stopPropagation();
            $(this).addClass('hotbrand-select').siblings().removeClass('hotbrand-select');
            $('.j-tab-carbrand').hide().eq($(this).index()).show();
        });
        $('.j-tab-carbrand').on('click', function (e) {
            e.stopPropagation();
            $('.j-brand-btn').val(e.target.dataset.bname)
                .attr('data-bid', e.target.dataset.bid).css('border-color','#e0e0e0');
            renderSeries(e.target.dataset.bid);
            $('.j-series-btn').val('').removeClass('addcar-color');
            $('.j-choose-brand-down').addClass('hide');
        });
    }

    function bindSeriesEvent() {
        $('.c-tab-item').on('click', function (e) {
            e.stopPropagation();
            $(this).addClass('series-select').siblings().removeClass('series-select');
            $(".j-tab-carseries").hide().eq($(this).index()).show();
        });
        $('.j-tab-carseries').on('click', function (e) {
            e.stopPropagation();
            $('.j-choose-brand-down').addClass('hide');
            $('.j-series-btn').val(e.target.dataset.sname)
                .attr('data-sid', e.target.dataset.sid).css('border-color','#e0e0e0');
            $('.j-choose-series-down').addClass('hide');
        });
    }

    function render(options) {
        dust.render('widget/choose/html/choose', {
            title: options.title
        }, function (error, out) {
            $(options.dom).html(out);
            bindEvent();
            renderBrand();
        });
    }

    function _init(options) {
        render(options);
    }

    module.exports = {
        init: _init
    }
});

