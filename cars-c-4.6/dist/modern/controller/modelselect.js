define(function(require,exports,module){function a(){var a=require("widget/car/js/car");a.init({type:3,dom:"#modelselectcontent"})}function b(){if(d.isBox)return document.title="选择车型",!1;var a=require("widget/head/js/head");a.init({hasBack:1,hasHref:"http://www.baidu.com",title:"选择车型",dom:"#modelselecthead"})}function c(){b(),a(),d.toggleContent("#modelselect")}var d=window.sharp;window.dust,window.sharpApi,$("#modelselectcontent");module.exports={init:c}});