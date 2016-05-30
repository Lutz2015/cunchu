define("widget/aside/html/aside", function() {
  // widget/aside/html/aside.dust
  (function() {
    dust.register("widget/aside/html/aside", body_0);

    function body_0(chk, ctx) {
      return chk.w("<ul class=\"c-aside\"><li class=\"c-aside-list j-series-addcolor add-color\"><span class=\"c-aside-type j-aside-series\">保养车型</span></li><li class=\"c-aside-list j-care-addcolor\"><span class=\"c-aside-type j-aside-care\">保养项目</span></li></ul>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  return function(locals, callback) {
    var rendered;

    dust.render("widget/aside/html/aside", locals, function(err, result) {
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