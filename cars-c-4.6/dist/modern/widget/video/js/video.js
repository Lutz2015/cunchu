define(function(require,exports,module){require(["http://kankan.baidu.com/Public/js/baidu_cam.js"],function(){});var a=function(a){var b={width:$(window).width(),height:"181",div_id:"player",type:"live"};b.device_id=a;var c=new baidu_cam(b);c.play()},b=function(b){a(b)};module.exports={init:b}});