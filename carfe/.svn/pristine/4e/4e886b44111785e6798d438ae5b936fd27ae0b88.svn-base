define("template/newCare", function() {
  // template/newCare.dust
  (function() {
    dust.register("template/newCare", body_0);

    function body_0(chk, ctx) {
      return chk.w("<ul class=\"c-newcare-content\"><li class=\"c-newcare-item\"><label class=\"c-newcare-lab\">保养项目:</label><input class=\"c-newcare c-newcare-caname j-newcare-caname\" name=\"caname\" value=\"").f(ctx.get(["caname"], false), ctx, "h").w("\" placeholder=\"请输入保养名称\"/><span class=\"c-newcare-check j-newcare-check hide\">请输入保养项目</span></li><li class=\"c-newcare-item\"><label class=\"c-newcare-lab\">配件类型:</label><input class=\"c-newcare c-newcare-capart j-newcare-capart\" name=\"capart\" value=\"").f(ctx.get(["capart"], false), ctx, "h").w("\" placeholder=\"请输入配件类型\"/></li></ul>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/newCare", locals, function(err, result) {
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