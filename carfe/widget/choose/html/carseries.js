define("widget/choose/html/carseries", function() {
  // widget/choose/html/carseries.dust
  (function() {
    dust.register("widget/choose/html/carseries", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-choose-tab\"><ul class=\"c-tab-hotseries j-hotseries\" data-bid=\"").f(ctx.get(["bid"], false), ctx, "h").w("\">").s(ctx.get(["result"], false), ctx, {
        "block": body_1
      }, {}).w("</ul>").s(ctx.get(["result"], false), ctx, {
        "block": body_4
      }, {}).w("</div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<li class=\"c-tab-item ").h("if", ctx, {
        "block": body_2
      }, {
        "cond": body_3
      }).w("\" data-key=\"").f(ctx.get(["key"], false), ctx, "h").w("\">").f(ctx.get(["key"], false), ctx, "h").w("</li>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("series-select");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.f(ctx.get(["$idx"], false), ctx, "h").w(" == 0");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.w("<div class=\"c-tab-carseries j-tab-carseries ").h("if", ctx, {
        "block": body_5
      }, {
        "cond": body_6
      }).w("\"\">").s(ctx.get(["cars"], false), ctx, {
        "block": body_7
      }, {}).w("</div>");
    }
    body_4.__dustBody = !0;

    function body_5(chk, ctx) {
      return chk.w("carseries-select");
    }
    body_5.__dustBody = !0;

    function body_6(chk, ctx) {
      return chk.f(ctx.get(["$idx"], false), ctx, "h").w(" == 0");
    }
    body_6.__dustBody = !0;

    function body_7(chk, ctx) {
      return chk.w("<span class=\"car-series\" data-sid=\"").f(ctx.get(["sid"], false), ctx, "h").w("\" data-sname=\"").f(ctx.get(["sname"], false), ctx, "h").w("\">").f(ctx.get(["sname"], false), ctx, "h").w("</span>");
    }
    body_7.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/choose/html/carseries", locals, function(err, result) {
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