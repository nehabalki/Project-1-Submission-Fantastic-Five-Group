(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function PageTitleFormHandler() {}

  PageTitleFormHandler.prototype.addLinkHandler = function() {
    $("#title li a").click(function () {
      var pagetitle = $(this).attr("title");
      var userdata = JSON.parse(localStorage["userdata"]);
      userdata["pagetitle"] = pagetitle;
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log("Interest 1=" + userdata["interest1"] +" Profession 1=" +userdata["profession1"]+" Profession 2="+userdata["profession2"]);
      //console.log(" Firstname" + userdata["firstname"]+ " Pagetitle= "+userdata["pagetitle"]);
      window.location.href = "screen5.html";
    });
  };

  App.PageTitleFormHandler = PageTitleFormHandler;
  window.App = App;
})(window);
