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
            '': function () {
                require(['series'], function (series) {
                    series.init();
                });
            },
            'series/*': function () {
                require(['series'], function (series) {
                    series.init();
                });
            },
            'care/*': function () {
                require(['care'], function (care) {
                    care.init();
                });
            }
        })
    };
    init();
});
