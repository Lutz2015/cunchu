define(function(){return function(){function a(a,c){return a.write('<div class="c-car-container"><ul>').section(c.get("result"),c,{block:b},null).write("</ul></div>")}function b(a,b){return a.write('<li class="c-car-series-subtype"><span>').reference(b.get("key"),b,"h").write("</span></li>").section(b.get("cars"),b,{block:c},null)}function c(a,b){return a.write('<li class="c-car-series j-car-series ').helper("if",b,{block:d},{cond:e}).write('" data-id="').reference(b.get("sid"),b,"h").write('" data-name="').reference(b.get("sname"),b,"h").write('"><span>').reference(b.get("sname"),b,"h").write("</span></li>")}function d(a,b){return a.write("c-first")}function e(a,b){return a.reference(b.get("$idx"),b,"h").write(" == 0")}return dust.register("widget/car/html/series",a),a}(),"widget/car/html/series"});