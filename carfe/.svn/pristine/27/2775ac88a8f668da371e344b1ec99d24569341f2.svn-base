define("template/soBasicData", function() {
  // template/soBasicData.dust
  (function() {
    dust.register("template/soBasicData", body_0);

    function body_0(chk, ctx) {
      return chk.w("<table class=\"c-solutions-tab j-solutions-basic\" cellspacing=\"0\" cellpadding=\"0\"><thead class=\"c-solutions-thead\"><tr><th>保养项目</th></tr></thead><tbody class=\"j-solutions-basic-tbody\">").s(ctx.get(["result"], false), ctx, {
        "block": body_1
      }, {}).w("</tbody></table>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<tr class=\"j-solutions-tr\"><td><span class=\"c-solutions-span j-basic-span\" data-caid=\"").f(ctx.get(["caid"], false), ctx, "h").w("\" data-caname=\"").f(ctx.get(["caname"], false), ctx, "h").w("\" data-capart=\"").f(ctx.get(["capart"], false), ctx, "h").w("\">").f(ctx.get(["caname"], false), ctx, "h").w(" ").x(ctx.get(["capart"], false), ctx, {
        "block": body_2
      }, {}).w(" <strong>").f(ctx.get(["capart"], false), ctx, "h").w("</strong></span></td></tr>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("<em>—</em>");
    }
    body_2.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/soBasicData", locals, function(err, result) {
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