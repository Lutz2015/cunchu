define("template/newCare",function(){return function(){function a(a,b){return a.w('<ul class="c-newcare-content"><li class="c-newcare-item"><label class="c-newcare-lab">保养项目:</label><input class="c-newcare c-newcare-caname j-newcare-caname" name="caname" value="').f(b.get(["caname"],!1),b,"h").w('" placeholder="请输入保养名称"/><span class="c-newcare-check j-newcare-check hide">请输入保养项目</span></li><li class="c-newcare-item"><label class="c-newcare-lab">配件类型:</label><input class="c-newcare c-newcare-capart j-newcare-capart" name="capart" value="').f(b.get(["capart"],!1),b,"h").w('" placeholder="请输入配件类型"/></li></ul>')}return dust.register("template/newCare",a),a.__dustBody=!0,a}(),function(a,b){var c;return dust.render("template/newCare",a,function(a,d){if("function"==typeof b)try{b(a,d)}catch(e){}if(a)throw a;c=d}),c}});