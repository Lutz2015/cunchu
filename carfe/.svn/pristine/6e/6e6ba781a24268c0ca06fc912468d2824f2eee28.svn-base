define("widget/choose/html/brand", function() {
  // widget/choose/html/brand.dust
  (function() {
    dust.register("widget/choose/html/brand", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-choose-tab\"><ul class=\"c-tab-hotbrand\"><li class=\"c-tab-item hotbrand-select\">热门品牌</li><li class=\"c-tab-item\">ABCDE</li><li class=\"c-tab-item\">FHIJK</li><li class=\"c-tab-item\">LMNP</li><li class=\"c-tab-item\">QRST</li><li class=\"c-tab-item\">WXYZ</li></ul><div class=\"c-tab-carbrand j-tab-carbrand carbrand-select\"><span class=\"car-brand\" data-bname=\"奥迪\" data-bid=\"1\">奥迪</span><span class=\"car-brand\" data-bname=\"阿斯顿马丁\" data-bid=\"2\">阿斯顿马丁</span><span class=\"car-brand\" data-bname=\"安驰\" data-bid=\"3\">安驰</span></div>").s(ctx.get(["result"], false), ctx, {
        "block": body_1
      }, {}).w("</div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<div class=\"c-tab-carbrand j-tab-carbrand\" data-key=\"").f(ctx.get(["key"], false), ctx, "h").w("\">").s(ctx.getPath(true, []), ctx, {
        "block": body_2
      }, {}).w("</div>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("<span class=\"car-brand\" data-bname=\"").f(ctx.get(["bname"], false), ctx, "h").w("\" data-bid=\"").f(ctx.get(["bid"], false), ctx, "h").w("\">").f(ctx.get(["bname"], false), ctx, "h").w("</span>");
    }
    body_2.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/choose/html/brand", locals, function(err, result) {
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