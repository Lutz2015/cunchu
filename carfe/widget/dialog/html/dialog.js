define("widget/dialog/html/dialog", function() {
  // widget/dialog/html/dialog.dust
  (function() {
    dust.register("widget/dialog/html/dialog", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-dialog j-dialog\"><div class=\"c-dialog-bg\"><div class=\"c-dialog-header\"><button class=\"c-dialog-close j-dialog-close\"><span>×</span></button>").x(ctx.get(["hasHead"], false), ctx, {
        "block": body_1
      }, {}).w("</div><div class=\"c-dialog-content j-dialog-content\"></div><div class=\"c-dialog-footer\">").x(ctx.get(["hasCancel"], false), ctx, {
        "block": body_2
      }, {}).w("<button class=\"c-dialog-confirm j-dialog-confirm\">").f(ctx.get(["confirm"], false), ctx, "h").w("</button></div></div></div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<h4 class=\"dialog-title\" id=\"delete-item-label\">").f(ctx.get(["title"], false), ctx, "h").w("</h4>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("<button class=\"c-dialog-default j-dialog-default ").x(ctx.get(["hasCancel"], false), ctx, {
        "block": body_3
      }, {}).w("\">取消</button>");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("c-dialog-hascancel");
    }
    body_3.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/dialog/html/dialog", locals, function(err, result) {
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