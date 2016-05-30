define("template/seriesbtnlist", function() {
  // template/seriesbtnlist.dust
  (function() {
    dust.register("template/seriesbtnlist", body_0);

    function body_0(chk, ctx) {
      return chk.s(ctx.get(["currentSeries"], false), ctx, {
        "block": body_1
      }, {});
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<div class=\"c-cur-ser-item\"><span class=\"c-cur-ser-name flex-line-normal-elli\" title=\"").f(ctx.get(["name"], false), ctx, "h").w("\">").f(ctx.get(["name"], false), ctx, "h").w("</span><i class=\"iclose\" data-sid=\"").f(ctx.get(["sid"], false), ctx, "h").w("\"></i></div>");
    }
    body_1.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/seriesbtnlist", locals, function(err, result) {
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