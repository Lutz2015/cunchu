define(function(){return function(){function a(a,b){return a.write('<div class="c-service-info-shop"><p class="c-service-sname"><span>').reference(b.get("sname"),b,"h").write('</span></p><p class="c-service-saddress"><span>').reference(b.get("saddress"),b,"h").write('</span></p></div><div class="c-service-info-car j-service-info-car flex-container"><img class="c-service-car-logo" src="').reference(b.get("carLogo"),b,"h").reference(b.get("logo"),b,"h").write('"><div class="flex-auto1"><div class="c-user-car-name-code-box"><div class="c-user-car-name-code"><p class="c-user-car-name">').reference(b.get("cname"),b,"h").write('</p><p class="c-user-car-code">').reference(b.get("uccode"),b,"h").write('</p></div></div></div><i class="iright c-service-car-icon"></i></div><div class="c-serivce-distance flex-container"><span>行驶公里</span><input maxlength="7" class="flex-auto1 c-service-distance-val j-service-distance-val" type="tel" placeholder="输入您的行驶公里"><span class="c-service-distance-km">公里</span></div><div class="c-service-listdom j-services-listdom hide"></div><div class="c-service-carelist j-services-carelist"></div>')}return dust.register("template/service",a),a}(),"template/service"});