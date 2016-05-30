define("template/home", function() {
  // template/home.dust
  (function() {
    dust.register("template/home", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-brand\"><img class=\"c-brand-logo\" src=\"").f(ctx.getPath(false, ["brand", "carlogo"]), ctx, "h").f(ctx.getPath(false, ["brand", "blogo"]), ctx, "h").w("\"><div class=\"c-brand-name\">").f(ctx.getPath(false, ["brand", "bname"]), ctx, "h").w("</div></div><div class=\"c-ser-container\"><label class=\"c-cur-ser-label\">已有车系:</label><div class=\"c-current-series j-current-series hide\"><div class=\"c-cur-seri-box j-cur-seri-box\"></div><div class=\"c-cur-ser-unfold j-cur-ser-unfold hide\"><span class=\"j-cur-ser-unfold-text\">展开全部</span><i class=\"idown\"></i></div></div><div class=\"c-series j-series\"><div class=\"c-series-btn j-series-btn\">选择车系<i class=\"idown\"></i></div><div class=\"c-series-box j-series-box hide\"><div class=\"c-series-list\">").s(ctx.get(["series"], false), ctx, {
        "block": body_1
      }, {}).w("</div></div></div></div><div class=\"c-series-menu j-series-menu\"></div><div class=\"c-series-table j-series-table\"></div><div class=\"c-series-pagebtn j-series-pagebtn\"></div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<div class=\"c-series-title\">").f(ctx.get(["key"], false), ctx, "h").w("</div>").s(ctx.get(["cars"], false), ctx, {
        "block": body_2
      }, {});
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("<div class=\"c-series-item\"><input type=\"checkbox\" id=\"ser-").f(ctx.get(["sid"], false), ctx, "h").w("\" name=\"seriesCheckbox\" value=\"").f(ctx.get(["sid"], false), ctx, "h").w("\" data-name=\"").f(ctx.get(["key"], false), ctx, "h").f(ctx.get(["sname"], false), ctx, "h").w("\" ").x(ctx.get(["checked"], false), ctx, {
        "block": body_3
      }, {}).w("><label for=\"ser-").f(ctx.get(["sid"], false), ctx, "h").w("\">").f(ctx.get(["sname"], false), ctx, "h").w("</label></div>");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("checked=\"checked\"");
    }
    body_3.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/home", locals, function(err, result) {
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