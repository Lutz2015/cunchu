define("template/search", function() {
  // template/search.dust
  (function() {
    dust.register("template/search", body_0);

    function body_0(chk, ctx) {
      return chk.w("<table class=\"c-addcare-tab\" cellspacing=\"0\" cellpadding=\"0\"><thead class=\"c-addcare-thead\"><tr><th><span class=\"c-series-span\">选择</span></th><th><span class=\"c-series-span\">保养方案</span></th><th><span class=\"c-series-span\">发动机类型</th><th><span class=\"c-series-span\">变数箱类型</span></th><th><span class=\"c-series-span\">排量</span></th><th><span class=\"c-series-span\">驱动方式</span></th><th><span class=\"c-series-span\">缸数</span></th><th><span class=\"c-series-span\">操作</span></th></tr></thead><tbody class=\"c-addcare-tbody j-addcare-tbody\">").s(ctx.get(["result"], false), ctx, {
        "block": body_1
      }, {}).w("</tbody></table>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<tr><td><input type=\"radio\" name=\"rcars\" class=\"c-addcare-radio j-addcare-radio\"><input type=\"hidden\" name=\"cid\" value=\"").f(ctx.get(["cid"], false), ctx, "h").w("\"/></td><td><span class=\"c-series-span j-series-cname\" data-cname=\"").f(ctx.get(["cname"], false), ctx, "h").w("\">").f(ctx.get(["cname"], false), ctx, "h").w("</span></td><td><span class=\"c-series-span j-series-cengine\" data-cengine=\"").f(ctx.get(["cengine"], false), ctx, "h").w("\">").f(ctx.get(["cengine_name"], false), ctx, "h").w("</span></td><td><span class=\"c-series-span j-series-cgearbox\" data-cgearbox=\"").f(ctx.get(["cgearbox"], false), ctx, "h").w("\">").f(ctx.get(["cgearbox_name"], false), ctx, "h").w("</span></td><td><span class=\"c-series-span j-series-cdisplacement\" data-cdisplacement=\"").f(ctx.get(["cdisplacement"], false), ctx, "h").w("\">").f(ctx.get(["cdisplacement"], false), ctx, "h").w("</span></td><td><span class=\"c-series-span j-series-cdriving\" data-cdriving=\"").f(ctx.get(["cdriving"], false), ctx, "h").w("\">").f(ctx.get(["cdriving_name"], false), ctx, "h").w("</span></td><td><span class=\"c-series-span j-series-ccylinder\" data-ccylinder=\"").f(ctx.get(["ccylinder"], false), ctx, "h").w("\">").f(ctx.get(["ccylinder"], false), ctx, "h").w("</span></td><td><span class=\"c-series-span ").h("if", ctx, {
        "block": body_2
      }, {
        "cond": body_3
      }).w("\" data-cid=\"").f(ctx.get(["cid"], false), ctx, "h").w("\"><a class=\"c-download j-download\">下载</a><a class=\"c-edit j-edit\">编辑</a></span><span class=\"c-series-span ").h("if", ctx, {
        "block": body_4
      }, {
        "cond": body_5
      }).w("\" data-cid=\"").f(ctx.get(["cid"], false), ctx, "h").w("\"><a class=\"c-uploading j-uploading\">上传文件</a></span></td></tr>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("hide");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.f(ctx.get(["hasSolution"], false), ctx, "h").w(" == 0");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.w("hide");
    }
    body_4.__dustBody = !0;

    function body_5(chk, ctx) {
      return chk.f(ctx.get(["hasSolution"], false), ctx, "h").w(" == 1");
    }
    body_5.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/search", locals, function(err, result) {
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