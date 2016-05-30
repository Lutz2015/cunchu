define("template/seriesmenulist", function() {
  // template/seriesmenulist.dust
  (function() {
    dust.register("template/seriesmenulist", body_0);

    function body_0(chk, ctx) {
      return chk.x(ctx.get(["showLeft"], false), ctx, {
        "block": body_1
      }, {}).w("<div class=\"c-s-menu-list\">").s(ctx.get(["result"], false), ctx, {
        "block": body_2
      }, {}).w("</div>").x(ctx.get(["showRight"], false), ctx, {
        "block": body_5
      }, {});
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<div class=\"c-s-menu-goleft j-s-menu-goleft\"><i class=\"ileft\"></i></div>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("<div class=\"c-s-menu-item j-s-menu-item ").h("if", ctx, {
        "block": body_3
      }, {
        "cond": body_4
      }).w("\" data-sid=\"").f(ctx.get(["sid"], false), ctx, "h").w("\"><span class=\"c-s-menu-item-text flex-line-normal-elli\">").f(ctx.get(["name"], false), ctx, "h").w("</span><i class=\"iclose\"></i></div>");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("checked");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.f(ctx.get(["$idx"], false), ctx, "h").w(" == 0");
    }
    body_4.__dustBody = !0;

    function body_5(chk, ctx) {
      return chk.w("<div class=\"c-s-menu-goright j-s-menu-goright\"><i class=\"iright\"></i></div>");
    }
    body_5.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/seriesmenulist", locals, function(err, result) {
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