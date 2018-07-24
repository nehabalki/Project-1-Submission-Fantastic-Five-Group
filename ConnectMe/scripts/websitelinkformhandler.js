(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function WebsiteLinkFormHandler() {}

  WebsiteLinkFormHandler.prototype.addNextButtonHandler = function() {
    $(document).on("submit", function(event) {
      event.preventDefault();
      var userdata = JSON.parse(localStorage["userdata"]);
      userdata["websitelink"] = $("#websitelink").val();
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log("websitelink: "+$("#websitelink").val());
      //console.log("Interest 1=" + userdata["interest1"] + " Profession 1=" + userdata["profession1"] + " Profession 2=" + userdata["profession2"]);
      //console.log(" Firstname" + userdata["firstname"] + " Pagetitle= " + userdata["pagetitle"] + " websitelink= " + userdata["websitelink"]);
      window.location.href = "screen6.html";
    });
  };

  App.WebsiteLinkFormHandler = WebsiteLinkFormHandler;
  window.App = App;
})(window);
