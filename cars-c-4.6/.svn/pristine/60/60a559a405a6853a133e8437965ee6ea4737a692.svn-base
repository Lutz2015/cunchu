require.config({
    baseUrl: url + '/controller',
    urlArgs: 'v=' + version,
    paths: {
        'static': '../static',
        'template': '../template',
        'widget': '../widget'
    }
});

define(function () {
    var init = function () {
        var currentPage;
        routie({
            'test/*': function () {
                require(['test'], function (test){
                    test.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'home/*': function () {
                require(['home'], function (home) {
                    home.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'addcar/*': function () {
                require(['addcar'], function (addcar) {
                    addcar.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'mycar/*': function () {
                require(['mycar'], function (mycar) {
                    mycar.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'carselect/*': function () {
                require(['carselect'], function (carselect) {
                    carselect.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'seriesselect/*': function () {
                require(['seriesselect'], function (seriesselect) {
                    seriesselect.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'modelselect/*': function () {
                require(['modelselect'], function (modelselect) {
                    modelselect.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'shop/*': function () {
                require(['shop'], function (shop) {
                    shop.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'services/*': function () {
                sharp.setLoading();
                require(['services'], function (services) {
                    services.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'payorder/*': function () {
                sharp.setLoading();
                require(['payorder'], function (payorder) {
                    payorder.init();
                    clouda.lego.smartBar.hide();
                });
            },
            '': function () {
                require(['nav'], function (nav) { 
                    clouda.lego.smartBar.show();
                    nav.init();
                });
            },
            'nav/*': function () {
                require(['nav'], function (nav) {
                    clouda.lego.smartBar.show();
                    nav.init();
                });
            },
            'car/*': function () {
                require(['car'], function (car) {
                    car.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'orderlist/:oid': function (oid) {
                require(['orderlist'], function (orderList) {
                    orderList.init(oid);
                    clouda.lego.smartBar.hide();
                });
            },
            'orderlists/*': function () {
                require(['orderlists'], function (orderLists) {
                    orderLists.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'personal/*': function () {
                require(['personal'], function (personal) {
                    personal.init();
                    clouda.lego.smartBar.hide();
                });
            },
            'profile/*': function () {
                require(['profile'], function (profile) {
                    profile.init();
                    clouda.lego.smartBar.hide();
                });
            }
        });
    };
    init();
});
