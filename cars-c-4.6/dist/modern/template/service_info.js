define(function(){return function(){function a(a,c){return a.write('<div class="c-services-list j-services-list"><ul><li class="c-service-title"><span>套餐选择</span></li>').section(c.get("result"),c,{block:b},null).write("</ul></div>")}function b(a,b){return a.write('<li class="c-service-list-item j-service-list-item" data-sname="').reference(b.get("scname"),b,"h").write('" data-mileage="').reference(b.get("mile"),b,"h").write('"><span class="c-service-list-item-name">').reference(b.get("scname"),b,"h").helper("if",b,{block:c},{cond:d}).write('</span><i class="icircle-grey"></i><i class="iround-blue"></i></li>')}function c(a,b){return a.write('<i class="irecommend"></i>')}function d(a,b){return a.reference(b.get("recommend"),b,"h").write(" == 1")}return dust.register("template/service_info",a),a}(),"template/service_info"});