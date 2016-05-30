define("template/series", function() {
  // template/series.dust
  (function() {
    dust.register("template/series", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"j-addcare-choose\"></div><div class=\"c-addcare-content\"><div class=\"c-addcare-menu\"><div class=\"c-btn-group j-group-create hide\"><button class=\"btn btn-action-create j-action-create\">新建</button><div class=\"j-box-create\"></div></div><div class=\"c-btn-group j-btn-group hide\"><button class=\"btn btn-action-create j-action-amend\">修改</button><div class=\"j-box-amend\"></div></div><div class=\"c-btn-group j-btn-group hide\"><button class=\"btn btn-action-create j-action-del\">删除</button><div class=\"j-box-del\"></div></div>             </div><div class=\"c-addcare-baoyang j-search-baoyang\"></div><div class=\"j-box-edit\"></div><div class=\"j-box-uploading\"></div></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("template/series", locals, function(err, result) {
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