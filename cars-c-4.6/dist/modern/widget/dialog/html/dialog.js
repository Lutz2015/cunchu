define(function(){return function(){function a(a,e){return a.write('<div class="c-dialog j-dialog animated bounceInDown">').exists(e.get("hasHead"),e,{block:b},null).write('<div class="c-dialog-content j-dialog-content"></div><div class="c-dialog-footer ').exists(e.get("hasCancel"),e,{block:c},null).write('">').exists(e.get("hasCancel"),e,{block:d},null).write('<span class="c-dialog-confirm j-dialog-confirm">').reference(e.get("confirm"),e,"h").write("</span></div></div>")}function b(a,b){return a.write('<div class="c-dialog-header">').reference(b.get("title"),b,"h").write("</div>")}function c(a,b){return a.write("c-dialog-hascancel")}function d(a,b){return a.write('<span class="c-dialog-cancel j-dialog-cancel">取消</span>')}return dust.register("widget/dialog/html/dialog",a),a}(),"widget/dialog/html/dialog"});