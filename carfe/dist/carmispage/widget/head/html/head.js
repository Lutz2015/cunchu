define("widget/head/html/head",function(){return function(){function a(a,b){return a.w('<div class="c-header"><span class="c-header-logo"></span><div class="c-header-title">').f(b.get(["title"],!1),b,"h").w('</div><div class="c-header-list"><span class="c-header-uname">').f(b.get(["buname"],!1),b,"h").w('</span><span class="c-logout j-logout">退出</span></div></div>')}return dust.register("widget/head/html/head",a),a.__dustBody=!0,a}(),function(a,b){var c;return dust.render("widget/head/html/head",a,function(a,d){if("function"==typeof b)try{b(a,d)}catch(e){}if(a)throw a;c=d}),c}});