define("template/solutions", function() {
  // template/solutions.dust
  (function() {
    dust.register("template/solutions", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-solutions j-solutions\"><ul class=\"c-solutions-sub\"><li class=\"c-solutions-items\"><label class=\"c-solutions-lab\">选择里程数：</label><select class=\"c-solutions-sel j-solutions-sokm\" name=\"sokm\">").s(ctx.get(["allSokm"], false), ctx, {
        "block": body_1
      }, {}).w("</select></li><li class=\"c-solutions-items\"><label class=\"c-solutions-lab\">选择套餐类型：</label><select class=\"c-solutions-sel j-solutions-sopackage\" name=\"sopackage\"><option value=\"0\">无</option><option selected=\"selected\" value=\"1\">经济套餐</option><option value=\"2\">标准套餐</option><option value=\"3\">豪华套餐</option></select></li><li class=\"c-solutions-items\"><label class=\"c-solutions-lab\">选择保养类型：</label><select class=\"c-solutions-sel j-solutions-sotype\" nam=\"sotype\"><option value=\"0\">可选</option><option value=\"1\">必选</option></select></li></ul><div class=\"c-solutions-sup j-solutions-sup\"><div class=\"c-solutions-basic c-sup-content\"><h3 class=\"c-basic-title\">已选明细</h3><div class=\"j-solutions-basic-tab\"></div></div><div class=\"c-solutions-all c-sup-content\"><h3 class=\"c-all-title\">全部明细</h3><div class=\"j-solutions-all-tab\"></div></div></div></div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<option value=\"").f(ctx.getPath(true, []), ctx, "h").w("\">").f(ctx.getPath(true, []), ctx, "h").w("</option>");
    }
    body_1.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/solutions", locals, function(err, result) {
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