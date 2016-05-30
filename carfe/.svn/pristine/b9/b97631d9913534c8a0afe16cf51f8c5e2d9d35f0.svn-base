define("widget/choose/html/choose", function() {
  // widget/choose/html/choose.dust
  (function() {
    dust.register("widget/choose/html/choose", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-choose-content\"><form action=\"\" class=\"c-choose-form j-choose-form\"><div class=\"c-choose-label j-choose-brand fl\"><label class=\"c-label\">品牌:</label><input type=\"text\" data-bid=\"").f(ctx.get(["bid"], false), ctx, "h").w("\" class=\"c-choose-brand j-brand-btn\" readonly=\"readonly\"/><i class=\"c-label-iconfont\"></i><div class=\"c-choose-down c-brand-down j-choose-brand-down hide\"></div></div><div class=\"c-choose-label j-choose-series fl\"><label class=\"c-label\">车系:</label><input type=\"text\" data-sid=\"").f(ctx.get(["sid"], false), ctx, "h").w("\" class=\"c-choose-series j-series-btn addcar-color\" readonly=\"readonly\"/><i class=\"c-label-iconfont\"></i><div class=\"c-choose-down j-choose-series-down hide\"></div></div><div class=\"fl\"><input type=\"button\" value=\"搜索\" class=\"c-choose-search j-choose-search\"/></div></form></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/choose/html/choose", locals, function(err, result) {
      if (typeof callback === "function") {
        try {
          callback(err, result);
        } catch (e) {}
      }

      if (err) {
        throw err
      } else {
        rendered = result;
      }
    });

    return rendered;
  }
});