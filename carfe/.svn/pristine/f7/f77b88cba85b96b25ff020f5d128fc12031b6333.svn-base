define("template/uploading", function() {
  // template/uploading.dust
  (function() {
    dust.register("template/uploading", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"c-uploading-content\"><form class=\"c-uploading-content-bg\"><span class=\"c-uploading-close j-uploading-close\">X</span><p class=\"c-file\"></label><input type=\"file\" class=\"c-uploading-file\" value=\"上传文件\" name=\"file\"/></p><p class=\"c-uploading-result\"><span class=\"c-uploading-success j-uploading-success hide\">上传成功</span><span class=\"c-uploading-err j-uploading-err hide\">上传失败</span></p><input type=\"submit\" class=\"uploading-confirm j-solutions-confirm\" value=\"上传\" /><input type=\"button\" class=\"c-uploading-confirm j-uploading-confirm hide\" value=\"确定\" /></form></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/uploading", locals, function(err, result) {
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