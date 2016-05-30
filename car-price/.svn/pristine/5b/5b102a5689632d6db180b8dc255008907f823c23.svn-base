define("template/table", function() {
  // template/table.dust
  (function() {
    dust.register("template/table", body_0);

    function body_0(chk, ctx) {
      return chk.w("<table class=\"c-s-table\" cellspacing=\"0\" cellpadding=\"0\"><thead><tr><th><div class=\"c-td-name\">保养车型</div></th><th><div class=\"c-td-engine\">发动机类型</div></th><th><div class=\"c-td-gearbox\">变速箱类型</div></th><th><div class=\"c-td-displacement\">排量</div></th><th><div class=\"c-td-driving\">驱动方式</div></th><th><div class=\"c-td-cylinder\">缸数</div></th><th><div class=\"c-td-price\">保养价格（元）</div></th></tr></thead><tbody>").s(ctx.get(["result"], false), ctx, {
        "block": body_1
      }, {}).x(ctx.get(["colspan"], false), ctx, {
        "block": body_5
      }, {}).w("</tbody></table>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<tr><td><div class=\"c-td-name\">").f(ctx.get(["cname"], false), ctx, "h").w("</div></td><td><div class=\"c-td-engine\">").f(ctx.get(["cengine"], false), ctx, "h").w("</div></td><td><div class=\"c-td-gearbox\">").f(ctx.get(["cgearbox"], false), ctx, "h").w("</div></td><td><div class=\"c-td-displacement\">").f(ctx.get(["cdisplacement"], false), ctx, "h").w("</div></td><td><div class=\"c-td-driving\">").f(ctx.get(["cdriving"], false), ctx, "h").w("</div></td><td><div class=\"c-td-cylinder\">").f(ctx.get(["ccylinder"], false), ctx, "h").w("</div></td><td><div class=\"c-td-price\" data-cid=\"").f(ctx.get(["cid"], false), ctx, "h").w("\" data-cname=\"").f(ctx.get(["cname"], false), ctx, "h").w("\">").h("if", ctx, {
        "else": body_2,
        "block": body_3
      }, {
        "cond": body_4
      }).w("</div></td></tr>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.w("<span class=\"c-td-price-text j-s-price-read\">查看</span><span class=\"c-td-price-text j-s-price-update\">修改</span><span class=\"c-td-price-text j-s-price-delete\">删除</span>");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("<span class=\"c-td-price-text j-s-price-create\">配置价格</span>");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.f(ctx.get(["hasPrice"], false), ctx, "h").w(" == 0");
    }
    body_4.__dustBody = !0;

    function body_5(chk, ctx) {
      return chk.w("<tr class=\"c-s-tr-empty\"><td rowspan=\"").f(ctx.get(["rowspan"], false), ctx, "h").w("\" colspan=\"").f(ctx.get(["colspan"], false), ctx, "h").w("\" style=\"height: ").f(ctx.get(["trHeight"], false), ctx, "h").w("px\">").x(ctx.get(["isEmpty"], false), ctx, {
        "block": body_6
      }, {}).w("</td></tr>");
    }
    body_5.__dustBody = !0;

    function body_6(chk, ctx) {
      return chk.w("<i class=\"iemptylogo\"></i><div class=\"c-s-tr-empty-text\">您暂无保养方案报价，请立即选择已有车系</div>");
    }
    body_6.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/table", locals, function(err, result) {
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