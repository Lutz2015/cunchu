/**
 * @file pagebtn.js
 */

define(function (require, exports, module) {
    require('widget/pagebtn/html/pagebtn');
    var dust = window.dust;

    var currentNum;
    var maxNum;
    var parentdom;
    var callback;

    function bindEvent(options) {
        $('.j-w-pagebtn-item').on('click', function (e) {
            e.stopPropagation();
            var num = this.dataset.num
            if (num === '...') {
                return false;
            } else {
                num = Number(num);
                callback(num);
                currentNum = num;
                render();
            }
        });

        $('.j-w-pagebtn-goleft').on('click', function (e) {
            e.stopPropagation();
            currentNum--;
            callback(currentNum);
            render();
        });

        $('.j-w-pagebtn-goright').on('click', function (e) {
            e.stopPropagation();
            currentNum++;
            callback(currentNum);
            render();
        });
    }

    function handlerData() {
        var res = {};
        var result = res.result = [];
        var currentData = {
            checked: true,
            num: currentNum
        }
        if (currentNum === 1) {
            res.showLeft = false;
            result.push(currentData);
        } else {
            res.showLeft = true;
            if (currentNum > 6) {
                result.push({num: 1});
                result.push({num: '...'});
                result.push({num: currentNum - 2});
                result.push({num: currentNum - 1});
                result.push(currentData);
            } else {
                for (var i = 1; i < currentNum; i++) {
                    result.push({
                        num: i
                    });
                }
                result.push(currentData);
            }
        }
        if (currentNum === maxNum) {
            res.showRight = false;
        } else {
            res.showRight = true;
            if (maxNum > currentNum + 2) {
                result.push({num: currentNum + 1});
                result.push({num: currentNum + 2});
                result.push({num: '...'});
                result.push({num: maxNum});
            } else {
                for (var i = currentNum + 1; i < maxNum + 1; i++) {
                    result.push({
                        num: i
                    });
                }
            }
        }
        return res;
    }

    function render() {
        var data = handlerData();
        dust.render('widget/pagebtn/html/pagebtn', data, function (error, out) {
            $(parentdom).html(out);
            bindEvent();
        });
    }

    function init(options) {
        currentNum = typeof options.currentNum === 'undefined' ? 1 : Number(options.currentNum);
        maxNum = typeof options.maxNum === 'undefined' ? 1 : Number(options.maxNum);
        parentdom = options.dom;
        callback = options.callback;
        render();
    }

    module.exports = {
        init: init
    };
});