define("template/soAllData", function() {
  // template/soAllData.dust
  (function() {
    dust.register("template/soAllData", body_0);

    function body_0(chk, ctx) {
      return chk.w("<table class=\"c-solutions-tab j-solutions-all\" cellspacing=\"0\" cellpadding=\"0\"><thead class=\"c-solutions-thead\"><tr><th>选择</th><th>保养项目—配件类型</th></tr></thead><tbody class=\"j-solutions-all-tbody\">").s(ctx.get(["result"], false), ctx, {
        "block": body_1
      }, {}).w("</tbody></table>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<tr class=\"j-solutions-tr\"><td><input type=\"checkbox\" name=\"checked\" value=\"").f(ctx.get(["caid"], false), ctx, "h").w("\" class=\"j-solutions-checkbox\" ").x(ctx.get(["checked"], false), ctx, {
        "block": body_2
      }, {}).w("/><td><span class=\"c-solutions-span j-all-span\" data-caname=\"").f(ctx.get(["caname"], false), ctx, "h").w("\" data-capart=\"").f(ctx.get(["capart"], false), ctx, "h").w("\">").f(ctx.get(["caname"], false), ctx, "h").w(" ").x(ctx.get(["capart"], false), ctx, {
        "block": body_3
      }, {}).w(" <strong>").f(ctx.get(["capart"], false), ctx, "h").w("</strong></span></td></tr>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w(" disabled=\"disabled\" checked=\"checked\"");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("<em>—</em>");
    }
    body_3.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/soAllData", locals, function(err, result) {
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