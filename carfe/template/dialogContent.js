define("template/dialogContent", function() {
  // template/dialogContent.dust
  (function() {
    dust.register("template/dialogContent", body_0);

    function body_0(chk, ctx) {
      return chk.w("<ul class=\"c-action-content j-action-content\"><li class=\"c-dialog-item\"><label class=\"c-dialog-label\">保养方案:</label><input class=\"c-dialog-sel j-dialog-cname\" name=\"cname\" value=\"").f(ctx.get(["cname"], false), ctx, "h").w("\" placeholder=\"请输入保养方案名称\"/><span class=\"c-dialog-check j-dialog-check hide\">请输入保养方案名称</span></li><li class=\"c-dialog-item\"><label class=\"c-dialog-label\">发动机类型:</label><select class=\"c-dialog-sel j-dialog-cengine\" name=\"cengine\">").s(ctx.get(["cengine"], false), ctx, {
        "block": body_1
      }, {}).w("</select></li><li class=\"c-dialog-item\"><label class=\"c-dialog-label\">变数箱类型:</label><select class=\"c-dialog-sel j-dialog-cgearbox\"  name=\"cgearbox\">").s(ctx.get(["cgearbox"], false), ctx, {
        "block": body_5
      }, {}).w("</select></li><li class=\"c-dialog-item\"><label class=\"c-dialog-label\">排量:</label><input class=\"c-dialog-sel j-dialog-cdisplacement\" name=\"cdisplacement\" value=\"").f(ctx.get(["cdisplacement"], false), ctx, "h").w("\" placeholder=\"排量，数字\"/><span class=\"c-dialog-check j-dialog-check hide\"></span></li><li class=\"c-dialog-item\"><label class=\"c-dialog-label\">驱动方式:</label><select class=\"c-dialog-sel j-dialog-cdriving\" name=\"cdriving\">").s(ctx.get(["cdriving"], false), ctx, {
        "block": body_9
      }, {}).w("</select></li><li class=\"c-dialog-item\"><label class=\"c-dialog-label\">缸数:</label><input class=\"c-dialog-sel j-dialog-ccylinder\" name=\"ccylinder\" value=\"").f(ctx.get(["ccylinder"], false), ctx, "h").w("\" placeholder=\"缸数，数字\"/><span class=\"c-dialog-check j-dialog-check hide\"></span></li></ul>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("<option value=\"").f(ctx.get(["cgid"], false), ctx, "h").w("\" ").x(ctx.get(["oldcgid"], false), ctx, {
        "block": body_2
      }, {}).w(">").f(ctx.get(["cgname"], false), ctx, "h").w("</option>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.h("if", ctx, {
        "block": body_3
      }, {
        "cond": body_4
      });
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("selected");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.w("'").f(ctx.get(["oldcgid"], false), ctx, "h").w("'=='").f(ctx.get(["cgid"], false), ctx, "h").w("'");
    }
    body_4.__dustBody = !0;

    function body_5(chk, ctx) {
      return chk.w("<option value=\"").f(ctx.get(["cbid"], false), ctx, "h").w("\" ").x(ctx.get(["oldcbid"], false), ctx, {
        "block": body_6
      }, {}).w(">").f(ctx.get(["cbname"], false), ctx, "h").w("</option>");
    }
    body_5.__dustBody = !0;

    function body_6(chk, ctx) {
      return chk.h("if", ctx, {
        "block": body_7
      }, {
        "cond": body_8
      });
    }
    body_6.__dustBody = !0;

    function body_7(chk, ctx) {
      return chk.w("selected");
    }
    body_7.__dustBody = !0;

    function body_8(chk, ctx) {
      return chk.w("'").f(ctx.get(["oldcbid"], false), ctx, "h").w("'=='").f(ctx.get(["cbid"], false), ctx, "h").w("'");
    }
    body_8.__dustBody = !0;

    function body_9(chk, ctx) {
      return chk.w("<option value=\"").f(ctx.get(["cvid"], false), ctx, "h").w("\" ").x(ctx.get(["oldcvid"], false), ctx, {
        "block": body_10
      }, {}).w(">").f(ctx.get(["cvname"], false), ctx, "h").w("</option>");
    }
    body_9.__dustBody = !0;

    function body_10(chk, ctx) {
      return chk.h("if", ctx, {
        "block": body_11
      }, {
        "cond": body_12
      });
    }
    body_10.__dustBody = !0;

    function body_11(chk, ctx) {
      return chk.w("selected");
    }
    body_11.__dustBody = !0;

    function body_12(chk, ctx) {
      return chk.w("'").f(ctx.get(["oldcvid"], false), ctx, "h").w("'=='").f(ctx.get(["cvid"], false), ctx, "h").w("'");
    }
    body_12.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/dialogContent", locals, function(err, result) {
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