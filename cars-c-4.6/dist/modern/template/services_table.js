define(function(){return function(){function a(a,c){return a.write('<div class="c-service-menu-box"><ul class="c-service-menu j-service-table-menu"><li data-index="0">').reference(c.get("tnames0"),c,"h").write('</li><li class="c-service-middle" data-index="1">').reference(c.get("tnames1"),c,"h").write('</li><li data-index="2">').reference(c.get("tnames2"),c,"h").write("</li></ul></div>").section(c.get("basecare"),c,{block:b},null)}function b(a,b){return a.write('<div class="c-service-table j-service-table').reference(b.get("$idx"),b,"h").helper("if",b,{block:c},{cond:d}).write('" data-tname="').reference(b.get("tname"),b,"h").write('"><table><thead><tr><th>项目名称</th><th>工时费</th><th>配件费</th><th>小计</th></tr></thead><tbody>').section(b.get("carelist"),b,{block:e},null).write("</tbody></table></div>")}function c(a,b){return a.write(" check")}function d(a,b){return a.reference(b.get("$idx"),b,"h").write(" == ").reference(b.get("index"),b,"h")}function e(a,b){return a.write("<tr><td>").reference(b.get("scname"),b,"h").write("</td><td>￥").reference(b.get("scwprice"),b,"h").write("</td><td>￥").reference(b.get("scpprice"),b,"h").write('</td><td class="red">￥').reference(b.get("scsumprice"),b,"h").write("</td></tr>")}return dust.register("template/services_table",a),a}(),"template/services_table"});