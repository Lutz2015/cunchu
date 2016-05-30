define("widget/head/html/head", function() {
  // widget/head/html/head.dust
  (function() {
    dust.register("widget/head/html/head", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-header\"><span class=\"c-header-logo\"></span><div class=\"c-header-title\">").f(ctx.get(["title"], false), ctx, "h").w("</div><div class=\"c-header-list\"><span class=\"c-header-uname\">").f(ctx.get(["buname"], false), ctx, "h").w("</span><span class=\"c-logout j-logout\">退出</span></div></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/head/html/head", locals, function(err, result) {
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