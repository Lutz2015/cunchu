define("template/care", function() {
  // template/care.dust
  (function() {
    dust.register("template/care", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-care-content\"><div class=\"c-add-care j-add-care\"><button class=\"c-care-create j-care-create\">新建</button><div class=\"j-care-newcreate\"></div></div><table class=\"c-care-tab c-name-tab fl\" cellspacing=\"0\" cellpadding=\"0\"><thead class=\"c-care-thead\"><tr><th>保养项目</th><th>配件类型</th></tr></thead><tbody>").s(ctx.get(["result"], false), ctx, {
        "block": body_1
      }, {}).w("</tbody></table></div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<tr class=\"j-care-tr\"><td><span class=\"c-care-span\" data-caname=\"").f(ctx.get(["caname"], false), ctx, "h").w("\">").f(ctx.get(["caname"], false), ctx, "h").w("</span></td><td><span class=\"c-care-span\" data-capart=\"").f(ctx.get(["capart"], false), ctx, "h").w("\">").f(ctx.get(["capart"], false), ctx, "h").w("</span></td></tr>");
    }
    body_1.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/care", locals, function(err, result) {
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