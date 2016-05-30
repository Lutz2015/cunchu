define("widget/pagebtn/html/pagebtn", function() {
  // widget/pagebtn/html/pagebtn.dust
  (function() {
    dust.register("widget/pagebtn/html/pagebtn", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-w-pagebtn\">").x(ctx.get(["showLeft"], false), ctx, {
        "block": body_1
      }, {}).s(ctx.get(["result"], false), ctx, {
        "block": body_2
      }, {}).x(ctx.get(["showRight"], false), ctx, {
        "block": body_4
      }, {}).w("</div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<div class=\"c-w-pagebtn-goleft j-w-pagebtn-goleft\"><i class=\"ileft\"></i></div>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("<div class=\"c-w-pagebtn-item j-w-pagebtn-item ").x(ctx.get(["checked"], false), ctx, {
        "block": body_3
      }, {}).w("\" data-num=\"").f(ctx.get(["num"], false), ctx, "h").w("\">").f(ctx.get(["num"], false), ctx, "h").w("</div>");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("checked");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.w("<div class=\"c-w-pagebtn-goright j-w-pagebtn-goright\"><i class=\"iright\"></i></div>");
    }
    body_4.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/pagebtn/html/pagebtn", locals, function(err, result) {
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