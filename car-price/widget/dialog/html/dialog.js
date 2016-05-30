define("widget/dialog/html/dialog", function() {
  // widget/dialog/html/dialog.dust
  (function() {
    dust.register("widget/dialog/html/dialog", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-dialog j-dialog\"><i class=\"iclose j-dialog-cancel\"></i><div class=\"c-dialog-header\"><span class=\"c-dialog-title1\">").f(ctx.get(["title1"], false), ctx, "h").w("</span><span class=\"c-dialog-title2\">").f(ctx.get(["title2"], false), ctx, "h").w("</span></div><div class=\"c-dialog-content j-dialog-content\"><i class=\"istep\"></i><div class=\"c-dialog-steps\"><div class=\"c-dialog-step c-dialog-step1\"><span class=\"c-dialog-step1-text\">下载批量导入门店模板</span><span class=\"c-dialog-step1-download j-dialog-step1-download\">下载模版</span></div><div class=\"c-dialog-step c-dialog-step2\"><span class=\"c-dialog-step2-text\">在下载的模板中输入要导入的门店信息</span></div><div class=\"c-dialog-step c-dialog-step3\"><span class=\"c-dialog-step3-text\">点击上传门店数据</span><span class=\"c-dialog-step3-upload j-dialog-step3-upload\">上传</span><input type=\"file\" class=\"c-dialog-step3-input j-dialog-step3-input\" value=\"上传\" name=\"file\"/></div></div></div><div class=\"c-dialog-message j-dialog-message hide\"><div class=\"c-dialog-message-title\">提交失败！</div><div class=\"j-dialog-message-text\"></div></div><div class=\"c-dialog-footer j-dialog-footer\"><span class=\"c-dialog-confirm j-dialog-confirm\">提交</span><span class=\"c-dialog-cancel j-dialog-cancel\">取消</span><span class=\"c-dialog-close j-dialog-cancel hide\">确定</span></div></div><div class=\"c-uploading hide j-uploading\"><span class=\"c-uploading-text j-uploading-text\">正在上传请稍候...</span><span class=\"c-uploading-success j-uploading-success hide\">提交成功！</span><div class=\"c-uploading-timeline-mask\"><div class=\"c-uploading-timeline j-uploading-timeline\"></div></div></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/dialog/html/dialog", locals, function(err, result) {
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