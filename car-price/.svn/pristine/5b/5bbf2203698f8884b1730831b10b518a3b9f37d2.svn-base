define("widget/popup/html/popupBox", function() {
  // widget/popup/html/popupBox.dust
  (function() {
    dust.register("widget/popup/html/popupBox", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-popup j-popup\"><div class=\"c-popup-box\"><div class=\"iclose j-popup-cancel\"></div><div class=\"c-popup-text\">").f(ctx.get(["text"], false), ctx, "h").w("</div><div class=\"c-popup-btn\"><div class=\"c-popup-confirm j-popup-confirm\">确定</div><div class=\"c-popup-cancel j-popup-cancel\">取消</div></div></div></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/popup/html/popupBox", locals, function(err, result) {
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