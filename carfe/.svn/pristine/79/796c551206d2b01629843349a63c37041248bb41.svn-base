/**
 * @file 公共方法
 */
var sharp={
    islogin: 0,
    //isShowError: false,
    setLoading: function () {
        var self = this;
        var $loading = $('.loading-n');
        $loading.removeClass('hide');
    },
    disLoading: function () {
        var $loading = $('.loading-n');
        $loading.addClass('hide');
    },
    changeCss:function(id,addcss,removecss){
        $(id).addCalss(addcss).removeClass(removecss);
    },
    toggleContent:function(dom){
        var _this=this;
        $(dom).removeClass('hide').siblings().addClass('hide');
        _this.disLoading();
    },
    checklocalStorage:function(){//检查是否有缓存
        var checkBrower='localStorage' in window &&window['localStorage']!==null;
        var checkDom=window.localStorage && window.localStorage.getItem;
        if(checkBrower&&checkDom){
            return true;
        }
    },
    setLocalData:function(name,data){//设置本地缓存数据
        var self=this;
        var check=self.checklocalStorage();
        if(check){
            window.localStorage.setItem(name,data);
        }
    },
    getLocalData:function(){//获取本地缓存数据
        var self=this;
        var check=self.checklocalStorage();
        if(check){
            return JSON.parse(window.localStorage.getItem(name));
        }
    },
    appointLogin :function (page) {
        var options = {};
        // 仅框内支持成功和失败回调，浏览器不支持
        options.onsuccess = function () {
            clouda.mbaas.account.closeLoginDialog();
            location.reload();
        };
        options.onfail = function () {
            window.history.go(-1);
            clouda.mbaas.account.closeLoginDialog();
        };
        // 支持短信账号切换方式
        options.login_type = 'sms';
        options.tpl = 'creative';
        // 仅浏览器支持登录成功的回跳地址，回跳地址为页面本身，框内不支持
        options.u = page;
        clouda.mbaas.account.bdLogin(options);
    },
        //appointLogin(page);

    request:function(options,conf){
        var url=options.url;
        var data=options.data||{};
        var success=options.success||(function(){});
        var dataType=conf.dataType||'json';
        var type=conf.type||'GET';
        return $.ajax({
            url:url,
            data:data,
            dataType:dataType,
            type: type,
            success:function(msg){
                if (parseInt(msg.islogin, 10) === 1) {
                    sharp.islogin = 1;
                } else {
                    sharp.islogin = 0;
                }

                var error = msg.error == null ? -1 : parseInt(msg.error, 10);
                if (error === 0 || (msg.uii_err == 0)) {
                    success(msg);
                } else {
                    if (msg.message !== '提示：当前用户登录状态异常') {
                        alert(msg.message);
                    } else {
                        errorCallback(msg);
                    }
                }
            },
            error:function(msg){
                // to do 统一处理error
            }
        });
    },
    get:function(options){
        var self=this;
        return self.request(options,{
            dataType:'json',
            type:'GET'
        });
    },
    post: function (options) {
        var self = this;
        return self.request(options, {
            dataType: 'json',
            type: 'POST'
        });
    }
};

// 配置api

var apiurl = window.apiurl;

var sharpApi = {
    getmaintaincarlist: apiurl +'/carmis/getmaintaincarlist',
    addmaintaincar: apiurl +'/carmis/addmaintaincar',
    updatemaintaincar: apiurl +'/carmis/updatemaintaincar',
    deletemaintaincar: apiurl +'/carmis/deletemaintaincar',
    getbrandlist: 'http://aiche.baidu.com/api/getbrandlist',
    getserieslist: 'http://aiche.baidu.com/api/getserieslist',
    getcarelist: apiurl +'/carmis/getcarelist',
    downloadcarsolutions: apiurl +'/carmis/downloadcarsolutions',
    addcarsolutions: apiurl +'/carmis/addcarsolutions',
    updatesolutions: apiurl +'/carmis/updatesolutions',
    getsolutions: apiurl +'/carmis/getsolutions',
    addcare: apiurl +'/carmis/addcare'
};

/*! Dust - Asynchronous Templating - v2.6.0
* http://linkedin.github.io/dustjs/
* Copyright (c) 2015 Aleksander Williams; Released under the MIT License */
!function(root){function Context(a,b,c,d){this.stack=a,this.global=b,this.blocks=c,this.templateName=d}function Stack(a,b,c,d){this.tail=b,this.isObject=a&&"object"==typeof a,this.head=a,this.index=c,this.of=d}function Stub(a){this.head=new Chunk(this),this.callback=a,this.out=""}function Stream(){this.head=new Chunk(this)}function Chunk(a,b,c){this.root=a,this.next=b,this.data=[],this.flushable=!1,this.taps=c}function Tap(a,b){this.head=a,this.tail=b}var dust={version:"2.6.0"},NONE="NONE",ERROR="ERROR",WARN="WARN",INFO="INFO",DEBUG="DEBUG",loggingLevels=[DEBUG,INFO,WARN,ERROR,NONE],EMPTY_FUNC=function(){},logger={},originalLog,loggerContext;dust.debugLevel=NONE,dust.config={whitespace:!1,amd:!1},dust._aliases={write:"w",end:"e",map:"m",render:"r",reference:"f",section:"s",exists:"x",notexists:"nx",block:"b",partial:"p",helper:"h"},root&&root.console&&root.console.log&&(loggerContext=root.console,originalLog=root.console.log),logger.log=loggerContext?function(){logger.log="function"==typeof originalLog?function(){originalLog.apply(loggerContext,arguments)}:function(){var a=Array.prototype.slice.apply(arguments).join(" ");originalLog(a)},logger.log.apply(this,arguments)}:function(){},dust.log=function(a,b){b=b||INFO,dust.debugLevel!==NONE&&dust.indexInArray(loggingLevels,b)>=dust.indexInArray(loggingLevels,dust.debugLevel)&&(dust.logQueue||(dust.logQueue=[]),dust.logQueue.push({message:a,type:b}),logger.log("[DUST:"+b+"]",a))},dust.helpers={},dust.cache={},dust.register=function(a,b){a&&(dust.cache[a]=b)},dust.render=function(a,b,c){var d=new Stub(c).head;try{dust.load(a,d,Context.wrap(b,a)).end()}catch(e){d.setError(e)}},dust.stream=function(a,b){var c=new Stream,d=c.head;return dust.nextTick(function(){try{dust.load(a,c.head,Context.wrap(b,a)).end()}catch(e){d.setError(e)}}),c},dust.renderSource=function(a,b,c){return dust.compileFn(a)(b,c)},dust.compileFn=function(a,b){b=b||null;var c=dust.loadSource(dust.compile(a,b));return function(a,d){var e=d?new Stub(d):new Stream;return dust.nextTick(function(){"function"==typeof c?c(e.head,Context.wrap(a,b)).end():dust.log(new Error("Template ["+b+"] cannot be resolved to a Dust function"),ERROR)}),e}},dust.load=function(a,b,c){var d=dust.cache[a];return d?d(b,c):dust.onLoad?b.map(function(b){dust.onLoad(a,function(d,e){return d?b.setError(d):(dust.cache[a]||dust.loadSource(dust.compile(e,a)),void dust.cache[a](b,c).end())})}):b.setError(new Error("Template Not Found: "+a))},dust.loadSource=function(source,path){return eval(source)},dust.isArray=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},dust.indexInArray=function(a,b,c){if(c=+c||0,Array.prototype.indexOf)return a.indexOf(b,c);if(void 0===a||null===a)throw new TypeError('cannot call method "indexOf" of null');var d=a.length;for(1/0===Math.abs(c)&&(c=0),0>c&&(c+=d,0>c&&(c=0));d>c;c++)if(a[c]===b)return c;return-1},dust.nextTick=function(){return function(a){setTimeout(a,0)}}(),dust.isEmpty=function(a){return dust.isArray(a)&&!a.length?!0:0===a?!1:!a},dust.filter=function(a,b,c){if(c)for(var d=0,e=c.length;e>d;d++){var f=c[d];"s"===f?b=null:"function"==typeof dust.filters[f]?a=dust.filters[f](a):dust.log("Invalid filter ["+f+"]",WARN)}return b&&(a=dust.filters[b](a)),a},dust.filters={h:function(a){return dust.escapeHtml(a)},j:function(a){return dust.escapeJs(a)},u:encodeURI,uc:encodeURIComponent,js:function(a){return dust.escapeJSON(a)},jp:function(a){return JSON?JSON.parse(a):(dust.log("JSON is undefined.  JSON parse has not been used on ["+a+"]",WARN),a)}},dust.makeBase=function(a){return new Context(new Stack,a)},Context.wrap=function(a,b){return a instanceof Context?a:new Context(new Stack(a),{},null,b)},Context.prototype.get=function(a,b){return"string"==typeof a&&("."===a[0]&&(b=!0,a=a.substr(1)),a=a.split(".")),this._get(b,a)},Context.prototype._get=function(a,b){var c,d,e,f,g,h=this.stack,i=1;if(d=b[0],e=b.length,a&&0===e)f=h,h=h.head;else{if(a)h&&(h=h.head?h.head[d]:void 0);else{for(;h&&(!h.isObject||(f=h.head,c=h.head[d],void 0===c));)h=h.tail;h=void 0!==c?c:this.global?this.global[d]:void 0}for(;h&&e>i;)f=h,h=h[b[i]],i++}return"function"==typeof h?(g=function(){try{return h.apply(f,arguments)}catch(a){throw dust.log(a,ERROR),a}},g.__dustBody=!!h.__dustBody,g):(void 0===h&&dust.log("Cannot find the value for reference [{"+b.join(".")+"}] in template ["+this.getTemplateName()+"]"),h)},Context.prototype.getPath=function(a,b){return this._get(a,b)},Context.prototype.push=function(a,b,c){return new Context(new Stack(a,this.stack,b,c),this.global,this.blocks,this.getTemplateName())},Context.prototype.rebase=function(a){return new Context(new Stack(a),this.global,this.blocks,this.getTemplateName())},Context.prototype.current=function(){return this.stack.head},Context.prototype.getBlock=function(a){if("function"==typeof a){var b=new Chunk;a=a(b,this).data.join("")}var c=this.blocks;if(!c)return void dust.log("No blocks for context[{"+a+"}] in template ["+this.getTemplateName()+"]",DEBUG);for(var d,e=c.length;e--;)if(d=c[e][a])return d},Context.prototype.shiftBlocks=function(a){var b,c=this.blocks;return a?(b=c?c.concat([a]):[a],new Context(this.stack,this.global,b,this.getTemplateName())):this},Context.prototype.getTemplateName=function(){return this.templateName},Stub.prototype.flush=function(){for(var a=this.head;a;){if(!a.flushable)return a.error?(this.callback(a.error),dust.log("Chunk error ["+a.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.out+=a.data.join(""),a=a.next,this.head=a}this.callback(null,this.out)},Stream.prototype.flush=function(){for(var a=this.head;a;){if(!a.flushable)return a.error?(this.emit("error",a.error),dust.log("Chunk error ["+a.error+"] thrown. Ceasing to render this template.",WARN),void(this.flush=EMPTY_FUNC)):void 0;this.emit("data",a.data.join("")),a=a.next,this.head=a}this.emit("end")},Stream.prototype.emit=function(a,b){if(!this.events)return dust.log("No events to emit",INFO),!1;var c=this.events[a];if(!c)return dust.log("Event type ["+a+"] does not exist",WARN),!1;if("function"==typeof c)c(b);else if(dust.isArray(c))for(var d=c.slice(0),e=0,f=d.length;f>e;e++)d[e](b);else dust.log("Event Handler ["+c+"] is not of a type that is handled by emit",WARN)},Stream.prototype.on=function(a,b){return this.events||(this.events={}),this.events[a]?"function"==typeof this.events[a]?this.events[a]=[this.events[a],b]:this.events[a].push(b):b?this.events[a]=b:dust.log("Callback for type ["+a+"] does not exist. Listener not registered.",WARN),this},Stream.prototype.pipe=function(a){return this.on("data",function(b){try{a.write(b,"utf8")}catch(c){dust.log(c,ERROR)}}).on("end",function(){try{return a.end()}catch(b){dust.log(b,ERROR)}}).on("error",function(b){a.error(b)}),this},Chunk.prototype.write=function(a){var b=this.taps;return b&&(a=b.go(a)),this.data.push(a),this},Chunk.prototype.end=function(a){return a&&this.write(a),this.flushable=!0,this.root.flush(),this},Chunk.prototype.map=function(a){var b=new Chunk(this.root,this.next,this.taps),c=new Chunk(this.root,b,this.taps);this.next=c,this.flushable=!0;try{a(c)}catch(d){dust.log(d,ERROR),c.setError(d)}return b},Chunk.prototype.tap=function(a){var b=this.taps;return this.taps=b?b.push(a):new Tap(a),this},Chunk.prototype.untap=function(){return this.taps=this.taps.tail,this},Chunk.prototype.render=function(a,b){return a(this,b)},Chunk.prototype.reference=function(a,b,c,d){return"function"==typeof a&&(a=a.apply(b.current(),[this,b,null,{auto:c,filters:d}]),a instanceof Chunk)?a:dust.isEmpty(a)?this:this.write(dust.filter(a,c,d))},Chunk.prototype.section=function(a,b,c,d){if("function"==typeof a&&!a.__dustBody){try{a=a.apply(b.current(),[this,b,c,d])}catch(e){return dust.log(e,ERROR),this.setError(e)}if(a instanceof Chunk)return a}var f=c.block,g=c["else"];if(d&&(b=b.push(d)),dust.isArray(a)){if(f){var h=a.length,i=this;if(h>0){b.stack.head&&(b.stack.head.$len=h);for(var j=0;h>j;j++)b.stack.head&&(b.stack.head.$idx=j),i=f(i,b.push(a[j],j,h));return b.stack.head&&(b.stack.head.$idx=void 0,b.stack.head.$len=void 0),i}if(g)return g(this,b)}}else if(a===!0){if(f)return f(this,b)}else if(a||0===a){if(f)return f(this,b.push(a))}else if(g)return g(this,b);return dust.log("Not rendering section (#) block in template ["+b.getTemplateName()+"], because above key was not found",DEBUG),this},Chunk.prototype.exists=function(a,b,c){var d=c.block,e=c["else"];if(dust.isEmpty(a)){if(e)return e(this,b)}else if(d)return d(this,b);return dust.log("Not rendering exists (?) block in template ["+b.getTemplateName()+"], because above key was not found",DEBUG),this},Chunk.prototype.notexists=function(a,b,c){var d=c.block,e=c["else"];if(dust.isEmpty(a)){if(d)return d(this,b)}else if(e)return e(this,b);return dust.log("Not rendering not exists (^) block check in template ["+b.getTemplateName()+"], because above key was found",DEBUG),this},Chunk.prototype.block=function(a,b,c){var d=c.block;return a&&(d=a),d?d(this,b):this},Chunk.prototype.partial=function(a,b,c){var d;d=dust.makeBase(b.global),d.blocks=b.blocks,b.stack&&b.stack.tail&&(d.stack=b.stack.tail),c&&(d=d.push(c)),"string"==typeof a&&(d.templateName=a),d=d.push(b.stack.head);var e;return e="function"==typeof a?this.capture(a,d,function(a,b){d.templateName=d.templateName||a,dust.load(a,b,d).end()}):dust.load(a,this,d)},Chunk.prototype.helper=function(a,b,c,d){var e=this;if(!dust.helpers[a])return dust.log("Invalid helper ["+a+"]",WARN),e;try{return dust.helpers[a](e,b,c,d)}catch(f){return dust.log("Error in "+a+" helper: "+f,ERROR),e.setError(f)}},Chunk.prototype.capture=function(a,b,c){return this.map(function(d){var e=new Stub(function(a,b){a?d.setError(a):c(b,d)});a(e.head,b).end()})},Chunk.prototype.setError=function(a){return this.error=a,this.root.flush(),this};for(var f in Chunk.prototype)dust._aliases[f]&&(Chunk.prototype[dust._aliases[f]]=Chunk.prototype[f]);Tap.prototype.push=function(a){return new Tap(a,this)},Tap.prototype.go=function(a){for(var b=this;b;)a=b.head(a),b=b.tail;return a};var HCHARS=/[&<>"']/,AMP=/&/g,LT=/</g,GT=/>/g,QUOT=/\"/g,SQUOT=/\'/g;dust.escapeHtml=function(a){return"string"==typeof a||a&&"function"==typeof a.toString?("string"!=typeof a&&(a=a.toString()),HCHARS.test(a)?a.replace(AMP,"&amp;").replace(LT,"&lt;").replace(GT,"&gt;").replace(QUOT,"&quot;").replace(SQUOT,"&#39;"):a):a};var BS=/\\/g,FS=/\//g,CR=/\r/g,LS=/\u2028/g,PS=/\u2029/g,NL=/\n/g,LF=/\f/g,SQ=/'/g,DQ=/"/g,TB=/\t/g;dust.escapeJs=function(a){return"string"==typeof a?a.replace(BS,"\\\\").replace(FS,"\\/").replace(DQ,'\\"').replace(SQ,"\\'").replace(CR,"\\r").replace(LS,"\\u2028").replace(PS,"\\u2029").replace(NL,"\\n").replace(LF,"\\f").replace(TB,"\\t"):a},dust.escapeJSON=function(a){return JSON?JSON.stringify(a).replace(LS,"\\u2028").replace(PS,"\\u2029").replace(LT,"\\u003c"):(dust.log("JSON is undefined.  JSON stringify has not been used on ["+a+"]",WARN),a)},"function"==typeof define&&define.amd&&define.amd.dust===!0?define("dust.core",function(){return dust}):"object"==typeof exports?module.exports=dust:root.dust=dust}(function(){return this}()),"function"==typeof define&&define.amd&&define.amd.dust===!0&&define(["require","dust.core"],function(require,dust){return dust.onLoad=function(a,b){require([a],function(){b()})},dust});
/*! dustjs-helpers - v1.2.0
* https://github.com/linkedin/dustjs-helpers
* Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
!function(dust){function isSelect(a){var b=a.current();return"object"==typeof b&&b.isSelect===!0}function jsonFilter(a,b){return"function"==typeof b?b.toString().replace(/(^\s+|\s+$)/gm,"").replace(/\n/gm,"").replace(/,\s*/gm,", ").replace(/\)\{/gm,") {"):b}function filter(a,b,c,d,e){d=d||{};var f,g,h=c.block,i=d.filterOpType||"";if("undefined"!=typeof d.key)f=dust.helpers.tap(d.key,a,b);else{if(!isSelect(b))return _console.log("No key specified for filter in:"+i+" helper "),a;f=b.current().selectKey,b.current().isResolved&&(e=function(){return!1})}return g=dust.helpers.tap(d.value,a,b),e(coerce(g,d.type,b),coerce(f,d.type,b))?(isSelect(b)&&(b.current().isResolved=!0),h?a.render(h,b):(_console.log("Missing body block in the "+i+" helper "),a)):c["else"]?a.render(c["else"],b):a}function coerce(a,b,c){if(a)switch(b||typeof a){case"number":return+a;case"string":return String(a);case"boolean":return a="false"===a?!1:a,Boolean(a);case"date":return new Date(a);case"context":return c.get(a)}return a}var _console="undefined"!=typeof console?console:{log:function(){}},helpers={tap:function(a,b,c){if("function"!=typeof a)return a;var d,e="";return d=b.tap(function(a){return e+=a,""}).render(a,c),b.untap(),d.constructor!==b.constructor?d:""===e?!1:e},sep:function(a,b,c){var d=c.block;return b.stack.index===b.stack.of-1?a:d?c.block(a,b):a},idx:function(a,b,c){var d=c.block;return d?c.block(a,b.push(b.stack.index)):a},contextDump:function(a,b,c,d){var e,f=d||{},g=f.to||"output",h=f.key||"current";return g=dust.helpers.tap(g,a,b),h=dust.helpers.tap(h,a,b),e="full"===h?JSON.stringify(b.stack,jsonFilter,2):JSON.stringify(b.stack.head,jsonFilter,2),"console"===g?(_console.log(e),a):a.write(e)},"if":function(chunk,context,bodies,params){var body=bodies.block,skip=bodies["else"];if(params&&params.cond){var cond=params.cond;if(cond=dust.helpers.tap(cond,chunk,context),eval(cond))return body?chunk.render(bodies.block,context):(_console.log("Missing body block in the if helper!"),chunk);if(skip)return chunk.render(bodies["else"],context)}else _console.log("No condition given in the if helper!");return chunk},math:function(a,b,c,d){if(d&&"undefined"!=typeof d.key&&d.method){var e=d.key,f=d.method,g=d.operand,h=d.round,i=null;switch(e=dust.helpers.tap(e,a,b),g=dust.helpers.tap(g,a,b),f){case"mod":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan!"),i=parseFloat(e)%parseFloat(g);break;case"add":i=parseFloat(e)+parseFloat(g);break;case"subtract":i=parseFloat(e)-parseFloat(g);break;case"multiply":i=parseFloat(e)*parseFloat(g);break;case"divide":(0===g||g===-0)&&_console.log("operand for divide operation is 0/-0: expect Nan/Infinity!"),i=parseFloat(e)/parseFloat(g);break;case"ceil":i=Math.ceil(parseFloat(e));break;case"floor":i=Math.floor(parseFloat(e));break;case"round":i=Math.round(parseFloat(e));break;case"abs":i=Math.abs(parseFloat(e));break;default:_console.log("method passed is not supported")}return null!==i?(h&&(i=Math.round(i)),c&&c.block?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:i})):a.write(i)):a}return _console.log("Key is a required parameter for math helper along with method/operand!"),a},select:function(a,b,c,d){var e=c.block;if(d&&"undefined"!=typeof d.key){var f=dust.helpers.tap(d.key,a,b);return e?a.render(c.block,b.push({isSelect:!0,isResolved:!1,selectKey:f})):(_console.log("Missing body block in the select helper "),a)}return _console.log("No key given in the select helper!"),a},eq:function(a,b,c,d){return d&&(d.filterOpType="eq"),filter(a,b,c,d,function(a,b){return b===a})},ne:function(a,b,c,d){return d?(d.filterOpType="ne",filter(a,b,c,d,function(a,b){return b!==a})):a},lt:function(a,b,c,d){return d?(d.filterOpType="lt",filter(a,b,c,d,function(a,b){return a>b})):void 0},lte:function(a,b,c,d){return d?(d.filterOpType="lte",filter(a,b,c,d,function(a,b){return a>=b})):a},gt:function(a,b,c,d){return d?(d.filterOpType="gt",filter(a,b,c,d,function(a,b){return b>a})):a},gte:function(a,b,c,d){return d?(d.filterOpType="gte",filter(a,b,c,d,function(a,b){return b>=a})):a},"default":function(a,b,c,d){return d&&(d.filterOpType="default"),filter(a,b,c,d,function(){return!0})},size:function(a,b,c,d){var e,f,g,h=0;if(d=d||{},e=d.key,e&&e!==!0)if(dust.isArray(e))h=e.length;else if(!isNaN(parseFloat(e))&&isFinite(e))h=e;else if("object"==typeof e){f=0;for(g in e)Object.hasOwnProperty.call(e,g)&&f++;h=f}else h=(e+"").length;else h=0;return a.write(h)}};dust.helpers=helpers}("undefined"!=typeof exports?module.exports=require("dustjs-linkedin"):dust);
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function (a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function (a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return m.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function () {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m()
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function () {
                    return [0]
                }),
                last: nb(function (a, b) {
                    return [b - 1]
                }),
                eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                    return a === b
                }, h, !0), l = rb(function (a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function (a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function (a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return m.sibling(a.firstChild)
        },
        contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function (b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function () {
                    return h && m.each(arguments, function (a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function (a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], e = 0, this
                },
                disable: function () {
                    return h = i = c = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, c || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return m.Deferred(function (c) {
                            m.each(b, function (b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function (b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function () {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function (a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function () {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function (a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function () {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        },
        html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function (a) {
        return a.currentStyle
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                },
                boxSizingReliable: function () {
                    return null == f && i(), f
                },
                pixelPosition: function () {
                    return null == e && i(), e
                },
                reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Vb(this, !0)
        },
        hide: function () {
            return Vb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function () {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function (a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function (a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function () {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function (a, b) {
            var c = m.fn[b];
            m.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            m.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function () {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function (a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function () {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function () {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function (a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        function () {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function (a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function () {
        for (var a in Xc) Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});

(function(r){r.fn.qrcode=function(h){var s;function u(a){this.mode=s;this.data=a}function o(a,c){this.typeNumber=a;this.errorCorrectLevel=c;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function q(a,c){if(void 0==a.length)throw Error(a.length+"/"+c);for(var d=0;d<a.length&&0==a[d];)d++;this.num=Array(a.length-d+c);for(var b=0;b<a.length-d;b++)this.num[b]=a[b+d]}function p(a,c){this.totalCount=a;this.dataCount=c}function t(){this.buffer=[];this.length=0}u.prototype={getLength:function(){return this.data.length},
write:function(a){for(var c=0;c<this.data.length;c++)a.put(this.data.charCodeAt(c),8)}};o.prototype={addData:function(a){this.dataList.push(new u(a));this.dataCache=null},isDark:function(a,c){if(0>a||this.moduleCount<=a||0>c||this.moduleCount<=c)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var a=1,a=1;40>a;a++){for(var c=p.getRSBlocks(a,this.errorCorrectLevel),d=new t,b=0,e=0;e<c.length;e++)b+=c[e].dataCount;
for(e=0;e<this.dataList.length;e++)c=this.dataList[e],d.put(c.mode,4),d.put(c.getLength(),j.getLengthInBits(c.mode,a)),c.write(d);if(d.getLengthInBits()<=8*b)break}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++)this.modules[d][b]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,c);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,c){for(var d=-1;7>=d;d++)if(!(-1>=a+d||this.moduleCount<=a+d))for(var b=-1;7>=b;b++)-1>=c+b||this.moduleCount<=c+b||(this.modules[a+d][c+b]=
0<=d&&6>=d&&(0==b||6==b)||0<=b&&6>=b&&(0==d||6==d)||2<=d&&4>=d&&2<=b&&4>=b?!0:!1)},getBestMaskPattern:function(){for(var a=0,c=0,d=0;8>d;d++){this.makeImpl(!0,d);var b=j.getLostPoint(this);if(0==d||a>b)a=b,c=d}return c},createMovieClip:function(a,c,d){a=a.createEmptyMovieClip(c,d);this.make();for(c=0;c<this.modules.length;c++)for(var d=1*c,b=0;b<this.modules[c].length;b++){var e=1*b;this.modules[c][b]&&(a.beginFill(0,100),a.moveTo(e,d),a.lineTo(e+1,d),a.lineTo(e+1,d+1),a.lineTo(e,d+1),a.endFill())}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=j.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var d=0;d<a.length;d++){var b=a[c],e=a[d];if(null==this.modules[b][e])for(var f=-2;2>=f;f++)for(var i=-2;2>=i;i++)this.modules[b+f][e+i]=-2==f||2==f||-2==i||2==i||0==f&&0==i?!0:!1}},setupTypeNumber:function(a){for(var c=
j.getBCHTypeNumber(this.typeNumber),d=0;18>d;d++){var b=!a&&1==(c>>d&1);this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=b}for(d=0;18>d;d++)b=!a&&1==(c>>d&1),this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=b},setupTypeInfo:function(a,c){for(var d=j.getBCHTypeInfo(this.errorCorrectLevel<<3|c),b=0;15>b;b++){var e=!a&&1==(d>>b&1);6>b?this.modules[b][8]=e:8>b?this.modules[b+1][8]=e:this.modules[this.moduleCount-15+b][8]=e}for(b=0;15>b;b++)e=!a&&1==(d>>b&1),8>b?this.modules[8][this.moduleCount-
b-1]=e:9>b?this.modules[8][15-b-1+1]=e:this.modules[8][15-b-1]=e;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var d=-1,b=this.moduleCount-1,e=7,f=0,i=this.moduleCount-1;0<i;i-=2)for(6==i&&i--;;){for(var g=0;2>g;g++)if(null==this.modules[b][i-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1));j.getMask(c,b,i-g)&&(n=!n);this.modules[b][i-g]=n;e--; -1==e&&(f++,e=7)}b+=d;if(0>b||this.moduleCount<=b){b-=d;d=-d;break}}}};o.PAD0=236;o.PAD1=17;o.createData=function(a,c,d){for(var c=p.getRSBlocks(a,
c),b=new t,e=0;e<d.length;e++){var f=d[e];b.put(f.mode,4);b.put(f.getLength(),j.getLengthInBits(f.mode,a));f.write(b)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;if(b.getLengthInBits()>8*a)throw Error("code length overflow. ("+b.getLengthInBits()+">"+8*a+")");for(b.getLengthInBits()+4<=8*a&&b.put(0,4);0!=b.getLengthInBits()%8;)b.putBit(!1);for(;!(b.getLengthInBits()>=8*a);){b.put(o.PAD0,8);if(b.getLengthInBits()>=8*a)break;b.put(o.PAD1,8)}return o.createBytes(b,c)};o.createBytes=function(a,c){for(var d=
0,b=0,e=0,f=Array(c.length),i=Array(c.length),g=0;g<c.length;g++){var n=c[g].dataCount,h=c[g].totalCount-n,b=Math.max(b,n),e=Math.max(e,h);f[g]=Array(n);for(var k=0;k<f[g].length;k++)f[g][k]=255&a.buffer[k+d];d+=n;k=j.getErrorCorrectPolynomial(h);n=(new q(f[g],k.getLength()-1)).mod(k);i[g]=Array(k.getLength()-1);for(k=0;k<i[g].length;k++)h=k+n.getLength()-i[g].length,i[g][k]=0<=h?n.get(h):0}for(k=g=0;k<c.length;k++)g+=c[k].totalCount;d=Array(g);for(k=n=0;k<b;k++)for(g=0;g<c.length;g++)k<f[g].length&&
(d[n++]=f[g][k]);for(k=0;k<e;k++)for(g=0;g<c.length;g++)k<i[g].length&&(d[n++]=i[g][k]);return d};s=4;for(var j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,
78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=j.getBCHDigit(c)-j.getBCHDigit(j.G15);)c^=j.G15<<j.getBCHDigit(c)-j.getBCHDigit(j.G15);return(a<<10|c)^j.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;0<=j.getBCHDigit(c)-
j.getBCHDigit(j.G18);)c^=j.G18<<j.getBCHDigit(c)-j.getBCHDigit(j.G18);return a<<12|c},getBCHDigit:function(a){for(var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){return j.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case 0:return 0==(c+d)%2;case 1:return 0==c%2;case 2:return 0==d%3;case 3:return 0==(c+d)%3;case 4:return 0==(Math.floor(c/2)+Math.floor(d/3))%2;case 5:return 0==c*d%2+c*d%3;case 6:return 0==(c*d%2+c*d%3)%2;case 7:return 0==(c*d%3+(c+d)%2)%2;default:throw Error("bad maskPattern:"+
a);}},getErrorCorrectPolynomial:function(a){for(var c=new q([1],0),d=0;d<a;d++)c=c.multiply(new q([1,l.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&10>c)switch(a){case 1:return 10;case 2:return 9;case s:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(27>c)switch(a){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(41>c)switch(a){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+
a);}else throw Error("type:"+c);},getLostPoint:function(a){for(var c=a.getModuleCount(),d=0,b=0;b<c;b++)for(var e=0;e<c;e++){for(var f=0,i=a.isDark(b,e),g=-1;1>=g;g++)if(!(0>b+g||c<=b+g))for(var h=-1;1>=h;h++)0>e+h||c<=e+h||0==g&&0==h||i==a.isDark(b+g,e+h)&&f++;5<f&&(d+=3+f-5)}for(b=0;b<c-1;b++)for(e=0;e<c-1;e++)if(f=0,a.isDark(b,e)&&f++,a.isDark(b+1,e)&&f++,a.isDark(b,e+1)&&f++,a.isDark(b+1,e+1)&&f++,0==f||4==f)d+=3;for(b=0;b<c;b++)for(e=0;e<c-6;e++)a.isDark(b,e)&&!a.isDark(b,e+1)&&a.isDark(b,e+
2)&&a.isDark(b,e+3)&&a.isDark(b,e+4)&&!a.isDark(b,e+5)&&a.isDark(b,e+6)&&(d+=40);for(e=0;e<c;e++)for(b=0;b<c-6;b++)a.isDark(b,e)&&!a.isDark(b+1,e)&&a.isDark(b+2,e)&&a.isDark(b+3,e)&&a.isDark(b+4,e)&&!a.isDark(b+5,e)&&a.isDark(b+6,e)&&(d+=40);for(e=f=0;e<c;e++)for(b=0;b<c;b++)a.isDark(b,e)&&f++;a=Math.abs(100*f/c/c-50)/5;return d+10*a}},l={glog:function(a){if(1>a)throw Error("glog("+a+")");return l.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return l.EXP_TABLE[a]},EXP_TABLE:Array(256),
LOG_TABLE:Array(256)},m=0;8>m;m++)l.EXP_TABLE[m]=1<<m;for(m=8;256>m;m++)l.EXP_TABLE[m]=l.EXP_TABLE[m-4]^l.EXP_TABLE[m-5]^l.EXP_TABLE[m-6]^l.EXP_TABLE[m-8];for(m=0;255>m;m++)l.LOG_TABLE[l.EXP_TABLE[m]]=m;q.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength()+a.getLength()-1),d=0;d<this.getLength();d++)for(var b=0;b<a.getLength();b++)c[d+b]^=l.gexp(l.glog(this.get(d))+l.glog(a.get(b)));return new q(c,0)},mod:function(a){if(0>
this.getLength()-a.getLength())return this;for(var c=l.glog(this.get(0))-l.glog(a.get(0)),d=Array(this.getLength()),b=0;b<this.getLength();b++)d[b]=this.get(b);for(b=0;b<a.getLength();b++)d[b]^=l.gexp(l.glog(a.get(b))+c);return(new q(d,0)).mod(a)}};p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],
[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,
116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,
43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,
3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,
55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,
45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];p.getRSBlocks=function(a,c){var d=p.getRsBlockTable(a,c);if(void 0==d)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+c);for(var b=d.length/3,e=[],f=0;f<b;f++)for(var h=d[3*f+0],g=d[3*f+1],j=d[3*f+2],l=0;l<h;l++)e.push(new p(g,j));return e};p.getRsBlockTable=function(a,c){switch(c){case 1:return p.RS_BLOCK_TABLE[4*(a-1)+0];case 0:return p.RS_BLOCK_TABLE[4*(a-1)+1];case 3:return p.RS_BLOCK_TABLE[4*
(a-1)+2];case 2:return p.RS_BLOCK_TABLE[4*(a-1)+3]}};t.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,c){for(var d=0;d<c;d++)this.putBit(1==(a>>>c-d-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var c=Math.floor(this.length/8);this.buffer.length<=c&&this.buffer.push(0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};"string"===typeof h&&(h={text:h});h=r.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,
correctLevel:2,background:"#ffffff",foreground:"#000000"},h);return this.each(function(){var a;if("canvas"==h.render){a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();var c=document.createElement("canvas");c.width=h.width;c.height=h.height;for(var d=c.getContext("2d"),b=h.width/a.getModuleCount(),e=h.height/a.getModuleCount(),f=0;f<a.getModuleCount();f++)for(var i=0;i<a.getModuleCount();i++){d.fillStyle=a.isDark(f,i)?h.foreground:h.background;var g=Math.ceil((i+1)*b)-Math.floor(i*b),
j=Math.ceil((f+1)*b)-Math.floor(f*b);d.fillRect(Math.round(i*b),Math.round(f*e),g,j)}}else{a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();c=r("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",h.background);d=h.width/a.getModuleCount();b=h.height/a.getModuleCount();for(e=0;e<a.getModuleCount();e++){f=r("<tr></tr>").css("height",b+"px").appendTo(c);for(i=0;i<a.getModuleCount();i++)r("<td></td>").css("width",
d+"px").css("background-color",a.isDark(e,i)?h.foreground:h.background).appendTo(f)}}a=c;jQuery(a).appendTo(this)})}})(jQuery);

/*!
 * MockJax - jQuery Plugin to Mock Ajax requests
 *
 * Version:  1.6.2
 * Released:
 * Home:   https://github.com/jakerella/jquery-mockjax
 * Author:   Jonathan Sharp (http://jdsharp.com)
 * License:  MIT,GPL
 *
 * Copyright (c) 2014 appendTo, Jordan Kasper
 * NOTE: This repository was taken over by Jordan Kasper (@jakerella) October, 2014
 *
 * Dual licensed under the MIT or GPL licenses.
 * http://opensource.org/licenses/MIT OR http://www.gnu.org/licenses/gpl-2.0.html
 */
(function(f){var d=f.ajax,e=[],l=[],u=[],n=/=\?(&|$)/,p=(new Date()).getTime();function m(w){if(window.DOMParser==undefined&&window.ActiveXObject){DOMParser=function(){};DOMParser.prototype.parseFromString=function(C){var B=new ActiveXObject("Microsoft.XMLDOM");B.async="false";B.loadXML(C);return B}}try{var y=(new DOMParser()).parseFromString(w,"text/xml");if(f.isXMLDoc(y)){var x=f("parsererror",y);if(x.length==1){throw new Error("Error: "+f(y).text())}}else{throw new Error("Unable to parse XML")}return y}catch(z){var A=(z.name==undefined?z:z.name+": "+z.message);f(document).trigger("xmlParseError",[A]);return undefined}}function g(w,x){var y=true;if(typeof x==="string"){return f.isFunction(w.test)?w.test(x):w==x}f.each(w,function(z){if(x[z]===undefined){y=false;return y}else{if(typeof x[z]==="object"&&x[z]!==null){if(y&&f.isArray(x[z])){y=f.isArray(w[z])&&x[z].length===w[z].length}y=y&&g(w[z],x[z])}else{if(w[z]&&f.isFunction(w[z].test)){y=y&&w[z].test(x[z])}else{y=y&&(w[z]==x[z])}}}});return y}function b(w,x){return w[x]===f.mockjaxSettings[x]}function s(w,y){if(f.isFunction(w)){return w(y)}if(f.isFunction(w.url.test)){if(!w.url.test(y.url)){return null}}else{var x=w.url.indexOf("*");if(w.url!==y.url&&x===-1||!new RegExp(w.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/\*/g,".+")).test(y.url)){return null}}if(w.data){if(!y.data||!g(w.data,y.data)){return null}}if(w&&w.type&&w.type.toLowerCase()!=y.type.toLowerCase()){return null}return w}function v(y){if(f.isArray(y)){var x=y[0];var w=y[1];return(typeof x==="number"&&typeof w==="number")?Math.floor(Math.random()*(w-x))+x:null}else{return(typeof y==="number")?y:null}}function h(x,z,w){var y=(function(A){return function(){return(function(){this.status=x.status;this.statusText=x.statusText;this.readyState=1;var B=function(){this.readyState=4;var C;if(z.dataType=="json"&&(typeof x.responseText=="object")){this.responseText=JSON.stringify(x.responseText)}else{if(z.dataType=="xml"){if(typeof x.responseXML=="string"){this.responseXML=m(x.responseXML);this.responseText=x.responseXML}else{this.responseXML=x.responseXML}}else{if(typeof x.responseText==="object"&&x.responseText!==null){x.contentType="application/json";this.responseText=JSON.stringify(x.responseText)}else{this.responseText=x.responseText}}}if(typeof x.status=="number"||typeof x.status=="string"){this.status=x.status}if(typeof x.statusText==="string"){this.statusText=x.statusText}C=this.onreadystatechange||this.onload;if(f.isFunction(C)){if(x.isTimeout){this.status=-1}C.call(this,x.isTimeout?"timeout":undefined)}else{if(x.isTimeout){this.status=-1}}};if(f.isFunction(x.response)){if(x.response.length===2){x.response(w,function(){B.call(A)});return}else{x.response(w)}}B.call(A)}).apply(A)}})(this);if(x.proxy){d({global:false,url:x.proxy,type:x.proxyType,data:x.data,dataType:z.dataType==="script"?"text/plain":z.dataType,complete:function(A){x.responseXML=A.responseXML;x.responseText=A.responseText;if(b(x,"status")){x.status=A.status}if(b(x,"statusText")){x.statusText=A.statusText}this.responseTimer=setTimeout(y,v(x.responseTime)||0)}})}else{if(z.async===false){y()}else{this.responseTimer=setTimeout(y,v(x.responseTime)||50)}}}function i(y,z,w,x){y=f.extend(true,{},f.mockjaxSettings,y);if(typeof y.headers==="undefined"){y.headers={}}if(typeof z.headers==="undefined"){z.headers={}}if(y.contentType){y.headers["content-type"]=y.contentType}return{status:y.status,statusText:y.statusText,readyState:1,open:function(){},send:function(){x.fired=true;h.call(this,y,z,w)},abort:function(){clearTimeout(this.responseTimer)},setRequestHeader:function(B,A){z.headers[B]=A},getResponseHeader:function(A){if(y.headers&&y.headers[A]){return y.headers[A]}else{if(A.toLowerCase()=="last-modified"){return y.lastModified||(new Date()).toString()}else{if(A.toLowerCase()=="etag"){return y.etag||""}else{if(A.toLowerCase()=="content-type"){return y.contentType||"text/plain"}}}}},getAllResponseHeaders:function(){var A="";if(y.contentType){y.headers["Content-Type"]=y.contentType}f.each(y.headers,function(C,B){A+=C+": "+B+"\n"});return A}}}function k(C,A,w){c(C);C.dataType="json";if(C.data&&n.test(C.data)||n.test(C.url)){q(C,A,w);var y=/^(\w+:)?\/\/([^\/?#]+)/,B=y.exec(C.url),z=B&&(B[1]&&B[1]!==location.protocol||B[2]!==location.host);C.dataType="script";if(C.type.toUpperCase()==="GET"&&z){var x=o(C,A,w);if(x){return x}else{return true}}}return null}function c(w){if(w.type.toUpperCase()==="GET"){if(!n.test(w.url)){w.url+=(/\?/.test(w.url)?"&":"?")+(w.jsonp||"callback")+"=?"}}else{if(!w.data||!n.test(w.data)){w.data=(w.data?w.data+"&":"")+(w.jsonp||"callback")+"=?"}}}function o(z,y,w){var x=w&&w.context||z,A=null;if(y.response&&f.isFunction(y.response)){y.response(w)}else{if(typeof y.responseText==="object"){f.globalEval("("+JSON.stringify(y.responseText)+")")}else{f.globalEval("("+y.responseText+")")}}setTimeout(function(){j(z,x,y);r(z,x,y)},v(y.responseTime)||0);if(f.Deferred){A=new f.Deferred();if(typeof y.responseText=="object"){A.resolveWith(x,[y.responseText])}else{A.resolveWith(x,[f.parseJSON(y.responseText)])}}return A}function q(z,y,w){var x=w&&w.context||z;var A=z.jsonpCallback||("jsonp"+p++);if(z.data){z.data=(z.data+"").replace(n,"="+A+"$1")}z.url=z.url.replace(n,"="+A+"$1");window[A]=window[A]||function(B){data=B;j(z,x,y);r(z,x,y);window[A]=undefined;try{delete window[A]}catch(C){}}}function j(y,w,x){if(y.success){y.success.call(w,x.responseText||"",status,{})}if(y.global){(y.context?f(y.context):f.event).trigger("ajaxSuccess",[{},y])}}function r(x,w){if(x.complete){x.complete.call(w,{},status)}if(x.global){(x.context?f(x.context):f.event).trigger("ajaxComplete",[{},x])}if(x.global&&!--f.active){f.event.trigger("ajaxStop")}}function a(y,w){var C,B,A,z;if(typeof y==="object"){w=y;y=undefined}else{w=w||{};w.url=y}B=f.extend(true,{},f.ajaxSettings,w);z=function(F,E){var D=w[F.toLowerCase()];return function(){if(f.isFunction(D)){D.apply(this,[].slice.call(arguments))}E["onAfter"+F]()}};for(var x=0;x<e.length;x++){if(!e[x]){continue}A=s(e[x],B);if(!A){continue}l.push(B);f.mockjaxSettings.log(A,B);if(B.dataType&&B.dataType.toUpperCase()==="JSONP"){if((C=k(B,A,w))){return C}}A.cache=B.cache;A.timeout=B.timeout;A.global=B.global;if(A.isTimeout){if(A.responseTime>1){w.timeout=A.responseTime-1}else{A.responseTime=2;w.timeout=1}A.isTimeout=false}if(f.isFunction(A.onAfterSuccess)){w.success=z("Success",A)}if(f.isFunction(A.onAfterError)){w.error=z("Error",A)}if(f.isFunction(A.onAfterComplete)){w.complete=z("Complete",A)}t(A,w);(function(F,G,D,E){C=d.call(f,f.extend(true,{},D,{xhr:function(){return i(F,G,D,E)}}))})(A,B,w,e[x]);return C}u.push(w);if(f.mockjaxSettings.throwUnmocked===true){throw new Error("AJAX not mocked: "+w.url)}else{return d.apply(f,[w])}}function t(z,x){if(!(z.url instanceof RegExp)){return}if(!z.hasOwnProperty("urlParams")){return}var w=z.url.exec(x.url);if(w.length===1){return}w.shift();var A=0,y=w.length,C=z.urlParams.length,D=Math.min(y,C),B={};for(A;A<D;A++){var E=z.urlParams[A];B[E]=w[A]}x.urlParams=B}f.extend({ajax:a});f.mockjaxSettings={log:function(y,A){if(y.logging===false||(typeof y.logging==="undefined"&&f.mockjaxSettings.logging===false)){return}if(window.console&&console.log){var x="MOCK "+A.type.toUpperCase()+": "+A.url;var w=f.extend({},A);if(typeof console.log==="function"){console.log(x,w)}else{try{console.log(x+" "+JSON.stringify(w))}catch(z){console.log(x)}}}},logging:true,status:200,statusText:"OK",responseTime:500,isTimeout:false,throwUnmocked:false,contentType:"text/plain",response:"",responseText:"",responseXML:"",proxy:"",proxyType:"GET",lastModified:null,etag:"",headers:{etag:"IJF@H#@923uf8023hFO@I#H#","content-type":"text/plain"}};f.mockjax=function(x){var w=e.length;e[w]=x;return w};f.mockjax.clear=function(w){if(arguments.length==1){e[w]=null}else{e=[]}l=[];u=[]};f.mockjaxClear=function(w){window.console&&window.console.warn&&window.console.warn("DEPRECATED: The $.mockjaxClear() method has been deprecated in 1.6.0. Please use $.mockjax.clear() as the older function will be removed soon!");f.mockjax.clear()};f.mockjax.handler=function(w){if(arguments.length==1){return e[w]}};f.mockjax.mockedAjaxCalls=function(){return l};f.mockjax.unfiredHandlers=function(){var y=[];for(var x=0,w=e.length;x<w;x++){var z=e[x];if(z!==null&&!z.fired){y.push(z)}}return y};f.mockjax.unmockedAjaxCalls=function(){return u}})(jQuery);
var requirejs,require,define;!function(Z){function H(a){return"[object Function]"===L.call(a)}function I(a){return"[object Array]"===L.call(a)}function y(a,b){if(a){var c;for(c=0;c<a.length&&(!a[c]||!b(a[c],c,a));c+=1);}}function M(a,b){if(a){var c;for(c=a.length-1;c>-1&&(!a[c]||!b(a[c],c,a));c-=1);}}function t(a,b){return ga.call(a,b)}function l(a,b){return t(a,b)&&a[b]}function F(a,b){for(var c in a)if(t(a,c)&&b(a[c],c))break}function Q(a,b,c,d){return b&&F(b,function(b,e){(c||!t(a,e))&&(d&&"string"!=typeof b?(a[e]||(a[e]={}),Q(a[e],b,c,d)):a[e]=b)}),a}function u(a,b){return function(){return b.apply(a,arguments)}}function aa(a){throw a}function ba(a){if(!a)return a;var b=Z;return y(a.split("."),function(a){b=b[a]}),b}function A(a,b,c,d){return b=Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a),b.requireType=a,b.requireModules=d,c&&(b.originalError=c),b}function ha(a){function b(a,b,c){var d,e,f,g,h,i,j,k=b&&b.split("/");d=k;var m=C.map,n=m&&m["*"];if(a&&"."===a.charAt(0))if(b){for(d=l(C.pkgs,b)?k=[b]:k.slice(0,k.length-1),b=a=d.concat(a.split("/")),d=0;b[d];d+=1)if(e=b[d],"."===e)b.splice(d,1),d-=1;else if(".."===e){if(1===d&&(".."===b[2]||".."===b[0]))break;d>0&&(b.splice(d-1,2),d-=2)}d=l(C.pkgs,b=a[0]),a=a.join("/"),d&&a===b+"/"+d.main&&(a=b)}else 0===a.indexOf("./")&&(a=a.substring(2));if(c&&m&&(k||n)){for(b=a.split("/"),d=b.length;d>0;d-=1){if(f=b.slice(0,d).join("/"),k)for(e=k.length;e>0;e-=1)if((c=l(m,k.slice(0,e).join("/")))&&(c=l(c,f))){g=c,h=d;break}if(g)break;!i&&n&&l(n,f)&&(i=l(n,f),j=d)}!g&&i&&(g=i,h=j),g&&(b.splice(0,h,g),a=b.join("/"))}return a}function c(a){z&&y(document.getElementsByTagName("script"),function(b){return b.getAttribute("data-requiremodule")===a&&b.getAttribute("data-requirecontext")===w.contextName?(b.parentNode.removeChild(b),!0):void 0})}function d(a){var b=l(C.paths,a);return b&&I(b)&&1<b.length?(b.shift(),w.require.undef(a),w.require([a]),!0):void 0}function e(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function f(a,c,d,f){var g,h,i=null,j=c?c.name:null,k=a,m=!0,n="";return a||(m=!1,a="_@r"+(M+=1)),a=e(a),i=a[0],a=a[1],i&&(i=b(i,j,f),h=l(K,i)),a&&(i?n=h&&h.normalize?h.normalize(a,function(a){return b(a,j,f)}):b(a,j,f):(n=b(a,j,f),a=e(n),i=a[0],n=a[1],d=!0,g=w.nameToUrl(n))),d=!i||h||d?"":"_unnormalized"+(N+=1),{prefix:i,name:n,parentMap:c,unnormalized:!!d,url:g,originalName:k,isDefine:m,id:(i?i+"!"+n:n)+d}}function g(a){var b=a.id,c=l(D,b);return c||(c=D[b]=new w.Module(a)),c}function h(a,b,c){var d=a.id,e=l(D,d);!t(K,d)||e&&!e.defineEmitComplete?(e=g(a),e.error&&"error"===b?c(e.error):e.on(b,c)):"defined"===b&&c(K[d])}function i(a,b){var c=a.requireModules,d=!1;b?b(a):(y(c,function(b){(b=l(D,b))&&(b.error=a,b.events.error&&(d=!0,b.emit("error",a)))}),d||j.onError(a))}function k(){R.length&&(ia.apply(J,[J.length-1,0].concat(R)),R=[])}function m(a){delete D[a],delete E[a]}function n(a,b,c){var d=a.map.id;a.error?a.emit("error",a.error):(b[d]=!0,y(a.depMaps,function(d,e){var f=d.id,g=l(D,f);g&&!a.depMatched[e]&&!c[f]&&(l(b,f)?(a.defineDep(e,K[f]),a.check()):n(g,b,c))}),c[d]=!0)}function o(){var a,b,e,f,g=(e=1e3*C.waitSeconds)&&w.startTime+e<(new Date).getTime(),h=[],j=[],k=!1,l=!0;if(!s){if(s=!0,F(E,function(e){if(a=e.map,b=a.id,e.enabled&&(a.isDefine||j.push(e),!e.error))if(!e.inited&&g)d(b)?k=f=!0:(h.push(b),c(b));else if(!e.inited&&e.fetched&&a.isDefine&&(k=!0,!a.prefix))return l=!1}),g&&h.length)return e=A("timeout","Load timeout for modules: "+h,null,h),e.contextName=w.contextName,i(e);l&&y(j,function(a){n(a,{},{})}),g&&!f||!k||!z&&!da||B||(B=setTimeout(function(){B=0,o()},50)),s=!1}}function p(a){t(K,a[0])||g(f(a[0],null,!0)).init(a[1],a[2])}function q(a){var a=a.currentTarget||a.srcElement,b=w.onScriptLoad;return a.detachEvent&&!W?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1),b=w.onScriptError,(!a.detachEvent||W)&&a.removeEventListener("error",b,!1),{node:a,id:a&&a.getAttribute("data-requiremodule")}}function r(){var a;for(k();J.length;){if(a=J.shift(),null===a[0])return i(A("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));p(a)}}var s,v,w,x,B,C={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},D={},E={},G={},J=[],K={},L={},M=1,N=1;return x={require:function(a){return a.require?a.require:a.require=w.makeRequire(a.map)},exports:function(a){return a.usingExports=!0,a.map.isDefine?a.exports?a.exports:a.exports=K[a.map.id]={}:void 0},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){var b=l(C.pkgs,a.map.id);return(b?l(C.config,a.map.id+"/"+b.main):l(C.config,a.map.id))||{}},exports:K[a.map.id]}}},v=function(a){this.events=l(G,a.id)||{},this.map=a,this.shim=l(C.shim,a.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},v.prototype={init:function(a,b,c,d){d=d||{},this.inited||(this.factory=b,c?this.on("error",c):this.events.error&&(c=u(this,function(a){this.emit("error",a)})),this.depMaps=a&&a.slice(0),this.errback=c,this.inited=!0,this.ignore=d.ignore,d.enabled||this.enabled?this.enable():this.check())},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0,w.startTime=(new Date).getTime();var a=this.map;if(!this.shim)return a.prefix?this.callPlugin():this.load();w.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}))}},load:function(){var a=this.map.url;L[a]||(L[a]=!0,w.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var d=this.exports,e=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(H(e)){if(this.events.error&&this.map.isDefine||j.onError!==aa)try{d=w.execCb(c,e,b,d)}catch(f){a=f}else d=w.execCb(c,e,b,d);if(this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==this.exports?d=b.exports:void 0===d&&this.usingExports&&(d=this.exports)),a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",i(this.error=a)}else d=e;this.exports=d,this.map.isDefine&&!this.ignore&&(K[c]=d,j.onResourceLoad)&&j.onResourceLoad(w,this.map,this.depMaps),m(c),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,c=a.id,d=f(a.prefix);this.depMaps.push(d),h(d,"defined",u(this,function(d){var e,k;k=this.map.name;var n=this.map.parentMap?this.map.parentMap.name:null,o=w.makeRequire(a.parentMap,{enableBuildCallback:!0});this.map.unnormalized?(d.normalize&&(k=d.normalize(k,function(a){return b(a,n,!0)})||""),d=f(a.prefix+"!"+k,this.map.parentMap),h(d,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),(k=l(D,d.id))&&(this.depMaps.push(d),this.events.error&&k.on("error",u(this,function(a){this.emit("error",a)})),k.enable())):(e=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),e.error=u(this,function(a){this.inited=!0,this.error=a,a.requireModules=[c],F(D,function(a){0===a.map.id.indexOf(c+"_unnormalized")&&m(a.map.id)}),i(a)}),e.fromText=u(this,function(b,d){var h=a.name,k=f(h),l=O;d&&(b=d),l&&(O=!1),g(k),t(C.config,c)&&(C.config[h]=C.config[c]);try{j.exec(b)}catch(m){return i(A("fromtexteval","fromText eval for "+c+" failed: "+m,m,[c]))}l&&(O=!0),this.depMaps.push(k),w.completeLoad(h),o([h],e)}),d.load(a.name,o,e,C))})),w.enable(d,this),this.pluginMaps[d.id]=d},enable:function(){E[this.map.id]=this,this.enabling=this.enabled=!0,y(this.depMaps,u(this,function(a,b){var c,d;if("string"==typeof a){if(a=f(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[b]=a,c=l(x,a.id))return this.depExports[b]=c(this),void 0;this.depCount+=1,h(a,"defined",u(this,function(a){this.defineDep(b,a),this.check()})),this.errback&&h(a,"error",u(this,this.errback))}c=a.id,d=D[c],!t(x,c)&&d&&!d.enabled&&w.enable(a,this)})),F(this.pluginMaps,u(this,function(a){var b=l(D,a.id);b&&!b.enabled&&w.enable(a,this)})),this.enabling=!1,this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]),c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)}),"error"===a&&delete this.events[a]}},w={config:C,contextName:a,registry:D,defined:K,urlFetched:L,defQueue:J,Module:v,makeModuleMap:f,nextTick:j.nextTick,onError:i,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=C.pkgs,c=C.shim,d={paths:!0,config:!0,map:!0};F(a,function(a,b){d[b]?"map"===b?(C.map||(C.map={}),Q(C[b],a,!0,!0)):Q(C[b],a,!0):C[b]=a}),a.shim&&(F(a.shim,function(a,b){I(a)&&(a={deps:a}),!a.exports&&!a.init||a.exportsFn||(a.exportsFn=w.makeShimExports(a)),c[b]=a}),C.shim=c),a.packages&&(y(a.packages,function(a){a="string"==typeof a?{name:a}:a,b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ja,"").replace(ea,"")}}),C.pkgs=b),F(D,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=f(b))}),(a.deps||a.callback)&&w.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;return a.init&&(b=a.init.apply(Z,arguments)),b||a.exports&&ba(a.exports)}},makeRequire:function(d,e){function h(b,c,k){var l,m;return e.enableBuildCallback&&c&&H(c)&&(c.__requireJsBuild=!0),"string"==typeof b?H(c)?i(A("requireargs","Invalid require call"),k):d&&t(x,b)?x[b](D[d.id]):j.get?j.get(w,b,d,h):(l=f(b,d,!1,!0),l=l.id,t(K,l)?K[l]:i(A("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+a+(d?"":". Use require([])")))):(r(),w.nextTick(function(){r(),m=g(f(null,d)),m.skipMap=e.skipMap,m.init(b,c,k,{enabled:!0}),o()}),h)}return e=e||{},Q(h,{isBrowser:z,toUrl:function(a){var c,e=a.lastIndexOf("."),f=a.split("/")[0];return-1!==e&&("."!==f&&".."!==f||e>1)&&(c=a.substring(e,a.length),a=a.substring(0,e)),w.nameToUrl(b(a,d&&d.id,!0),c,!0)},defined:function(a){return t(K,f(a,d,!1,!0).id)},specified:function(a){return a=f(a,d,!1,!0).id,t(K,a)||t(D,a)}}),d||(h.undef=function(a){k();var b=f(a,d,!0),e=l(D,a);c(a),delete K[a],delete L[b.url],delete G[a],e&&(e.events.defined&&(G[a]=e.events),m(a))}),h},enable:function(a){l(D,a.id)&&g(a).enable()},completeLoad:function(a){var b,c,e=l(C.shim,a)||{},f=e.exports;for(k();J.length;){if(c=J.shift(),null===c[0]){if(c[0]=a,b)break;b=!0}else c[0]===a&&(b=!0);p(c)}if(c=l(D,a),!b&&!t(K,a)&&c&&!c.inited){if(C.enforceDefine&&(!f||!ba(f)))return d(a)?void 0:i(A("nodefine","No define call for "+a,null,[a]));p([a,e.deps||[],e.exportsFn])}o()},nameToUrl:function(a,b,c){var d,e,f,g,h,i;if(j.jsExtRegExp.test(a))g=a+(b||"");else{for(d=C.paths,e=C.pkgs,g=a.split("/"),h=g.length;h>0;h-=1){if(i=g.slice(0,h).join("/"),f=l(e,i),i=l(d,i)){I(i)&&(i=i[0]),g.splice(0,h,i);break}if(f){a=a===f.name?f.location+"/"+f.main:f.location,g.splice(0,h,a);break}}g=g.join("/"),g+=b||(/^data\:|\?/.test(g)||c?"":".js"),g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":C.baseUrl)+g}return C.urlArgs?g+((-1===g.indexOf("?")?"?":"&")+C.urlArgs):g},load:function(a,b){j.load(w,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))&&(P=null,a=q(a),w.completeLoad(a.id))},onScriptError:function(a){var b=q(a);return d(b.id)?void 0:i(A("scripterror","Script error for: "+b.id,a,[b.id]))}},w.require=w.makeRequire(),w}var j,w,x,C,J,D,P,K,q,fa,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ja=/^\.\//;w=Object.prototype;var L=w.toString,ga=w.hasOwnProperty,ia=Array.prototype.splice,z=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),da=!z&&"undefined"!=typeof importScripts,ka=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,W="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),E={},s={},R=[],O=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(H(requirejs))return;s=requirejs,requirejs=void 0}"undefined"!=typeof require&&!H(require)&&(s=require,require=void 0),j=requirejs=function(a,b,c,d){var e,f="_";return!I(a)&&"string"!=typeof a&&(e=a,I(b)?(a=b,b=c,c=d):a=[]),e&&e.context&&(f=e.context),(d=l(E,f))||(d=E[f]=j.s.newContext(f)),e&&d.configure(e),d.require(a,b,c)},j.config=function(a){return j(a)},j.nextTick="undefined"!=typeof setTimeout?function(a){setTimeout(a,4)}:function(a){a()},require||(require=j),j.version="2.1.9",j.jsExtRegExp=/^\/|:|\?|\.js$/,j.isBrowser=z,w=j.s={contexts:E,newContext:ha},j({}),y(["toUrl","undef","defined","specified"],function(a){j[a]=function(){var b=E._;return b.require[a].apply(b,arguments)}}),z&&(x=w.head=document.getElementsByTagName("head")[0],C=document.getElementsByTagName("base")[0])&&(x=w.head=C.parentNode),j.onError=aa,j.createNode=function(a){var b=a.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return b.type=a.scriptType||"text/javascript",b.charset="utf-8",b.async=!0,b},j.load=function(a,b,c){var d=a&&a.config||{};if(z)return d=j.createNode(d,b,c),d.setAttribute("data-requirecontext",a.contextName),d.setAttribute("data-requiremodule",b),!d.attachEvent||d.attachEvent.toString&&0>d.attachEvent.toString().indexOf("[native code")||W?(d.addEventListener("load",a.onScriptLoad,!1),d.addEventListener("error",a.onScriptError,!1)):(O=!0,d.attachEvent("onreadystatechange",a.onScriptLoad)),d.src=c,K=d,C?x.insertBefore(d,C):x.appendChild(d),K=null,d;if(da)try{importScripts(c),a.completeLoad(b)}catch(e){a.onError(A("importscripts","importScripts failed for "+b+" at "+c,e,[b]))}},z&&!s.skipDataMain&&M(document.getElementsByTagName("script"),function(a){return x||(x=a.parentNode),(J=a.getAttribute("data-main"))?(q=J,s.baseUrl||(D=q.split("/"),q=D.pop(),fa=D.length?D.join("/")+"/":"./",s.baseUrl=fa),q=q.replace(ea,""),j.jsExtRegExp.test(q)&&(q=J),s.deps=s.deps?s.deps.concat(q):[q],!0):void 0}),define=function(a,b,c){var d,e;"string"!=typeof a&&(c=b,b=a,a=null),I(b)||(c=b,b=null),!b&&H(c)&&(b=[],c.length&&(c.toString().replace(la,"").replace(ma,function(a,c){b.push(c)}),b=(1===c.length?["require"]:["require","exports","module"]).concat(b))),O&&((d=K)||(P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),function(a){return"interactive"===a.readyState?P=a:void 0}),d=P),d&&(a||(a=d.getAttribute("data-requiremodule")),e=E[d.getAttribute("data-requirecontext")])),(e?e.defQueue:R).push([a,b,c])},define.amd={jQuery:!0},j.exec=function(b){return eval(b)},j(s)}}(this);
/*!
 * routie - a tiny hash router
 * v0.3.2
 * http://projects.jga.me/routie
 * copyright Greg Allen 2013
 * MIT License
 */
 
(function (w) {
    var routes = [];
    var map = {};
    var reference = "routie";
    var oldReference = w[reference];

    var Route = function (path, name) {
        this.name = name;
        this.path = path;
        this.keys = [];
        this.fns = [];
        this.params = {};
        this.regex = pathToRegexp(this.path, this.keys, false, false);

    };

    Route.prototype.addHandler = function (fn) {
        this.fns.push(fn);
    };

    Route.prototype.removeHandler = function (fn) {
        for (var i = 0, c = this.fns.length; i < c; i++) {
            var f = this.fns[i];
            if (fn == f) {
                this.fns.splice(i, 1);
                return;
            }
        }
    };

    Route.prototype.run = function (params) {
        for (var i = 0, c = this.fns.length; i < c; i++) {
            this.fns[i].apply(this, params);
        }
    };

    Route.prototype.match = function (path, params) {
        var m = this.regex.exec(path);

        if (!m) return false;
        for (var i = 1, len = m.length; i < len; ++i) {
            var key = this.keys[i - 1];
            var val = ('string' == typeof m[i]) ? decodeURIComponent(m[i]) : m[i];
            if (key) {
                this.params[key.name] = val;
            }
            params.push(val);
        }

        return true;
    };

    Route.prototype.toURL = function (params) {
        var path = this.path;
        for (var param in params) {
            path = path.replace('/:' + param, '/' + params[param]);
        }
        path = path.replace(/\/:.*\?/g, '/').replace(/\?/g, '');
        if (path.indexOf(':') != -1) {
            throw new Error('missing parameters for url: ' + path);
        }
        return path;
    };

    var pathToRegexp = function (path, keys, sensitive, strict) {
        if (path instanceof RegExp) return path;
        if (path instanceof Array) path = '(' + path.join('|') + ')';
        path = path
            .concat(strict ? '' : '/?')
            .replace(/\/\(/g, '(?:/')
            .replace(/\+/g, '__plus__')
            .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function (_, slash, format, key, capture, optional) {
                keys.push({
                    name: key,
                    optional: !!optional
                });
                slash = slash || '';
                return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')' + (optional || '');
            })
            .replace(/([\/.])/g, '\\$1')
            .replace(/__plus__/g, '(.+)')
            .replace(/\*/g, '(.*)');
        return new RegExp('^' + path + '$', sensitive ? '' : 'i');
    };

    var addHandler = function (path, fn) {
        var s = path.split(' ');
        var name = (s.length == 2) ? s[0] : null;
        path = (s.length == 2) ? s[1] : s[0];

        if (!map[path]) {
            map[path] = new Route(path, name);
            routes.push(map[path]);
        }
        map[path].addHandler(fn);
    };

    var routie = function (path, fn) {
        
        if (typeof fn == 'function') {
            addHandler(path, fn);
            routie.reload();
        } else if (typeof path == 'object') {
            for (var p in path) {
                addHandler(p, path[p]);
            }
            routie.reload();
        } else if (typeof fn === 'undefined') {
            routie.navigate(path);
        }
    };

    routie.lookup = function (name, obj) {
        for (var i = 0, c = routes.length; i < c; i++) {
            var route = routes[i];
            if (route.name == name) {
                return route.toURL(obj);
            }
        }
    };

    routie.remove = function (path, fn) {
        var route = map[path];
        if (!route)
            return;
        route.removeHandler(fn);
    };

    routie.removeAll = function () {
        map = {};
        routes = [];
    };

    routie.navigate = function (path, options) {
        options = options || {};
        var silent = options.silent || false;

        if (silent) {
            removeListener();
        }
        setTimeout(function () {
            window.location.hash = path;

            if (silent) {
                setTimeout(function () {
                    addListener();
                }, 1);
            }

        }, 1);
    };

    routie.noConflict = function () {
        w[reference] = oldReference;
        return routie;
    };

    var getHash = function () {
        return window.location.hash.substring(1);
    };

    var checkRoute = function (hash, route) {
        var params = [];
        if (route.match(hash, params)) {
            route.run(params);
            return true;
        }
        return false;
    };

    var hashChanged = routie.reload = function () {
        var hash = getHash();

        for (var i = 0, c = routes.length; i < c; i++) {
            var route = routes[i];
            if (checkRoute(hash, route)) {
                return;
            }
        }
    };

    var addListener = function () {
        if (w.addEventListener) {
            w.addEventListener('hashchange', hashChanged, false);
        } else {
            w.attachEvent('onhashchange', hashChanged);
        }
    };

    var removeListener = function () {
        if (w.removeEventListener) {
            w.removeEventListener('hashchange', hashChanged);
        } else {
            w.detachEvent('onhashchange', hashChanged);
        }
    };
    addListener();

    w[reference] = routie;

})(window);
