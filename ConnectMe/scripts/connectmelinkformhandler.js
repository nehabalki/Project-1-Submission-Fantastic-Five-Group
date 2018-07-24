(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function ConnectMeLinkFormHandler() {}

  ConnectMeLinkFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      event.preventDefault();

      var userdata = JSON.parse(localStorage["userdata"]);
      var connectmelink = $("#connectmelink").val();
      userdata["connectmelink"] = connectmelink;
      var removeHttps = connectmelink.replace(/http:\/\/connect.me\//, "");
      userdata["username"] = removeHttps;
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log("Interest 1=" + userdata["interest1"] + " Profession 1=" + userdata["profession1"] + " Profession 2=" + userdata["profession2"]);
      //console.log(" Firstname" + userdata["firstname"] + " Pagetitle= " + userdata["pagetitle"] + " websitelink= " + userdata["websitelink"]);
      //console.log(userdata["profilepicturefile"]);
      fn(userdata);
      window.location.href = "userpage.html";
    });
  };

  ConnectMeLinkFormHandler.prototype.addInputHandler = function() {
    $("#connectmelink").on("keyup paste change focus blur keydown",function() {
      //event.preventDefault();
      var linkValue = $("#connectmelink").val();

      if (/http:\/\/connect.me\/[\w]/.test(linkValue)) {
        $("#warningmessage").text("Valid URL.");
        $("#warningmessage").css("background-color", "#15FF15");
        $("#nextbutton").prop("disabled", false);
      } else if (linkValue != "" && !linkValue.startsWith("http://connect.me/") /*&& linkValue.lenght >= 18*/) {
        $("#warningmessage").text("Choose connectme link in the following format: http://connect.me/username.");
        $("#warningmessage").css("background-color", "yellow");
        $("#nextbutton").prop("disabled", true);
      }else {
        $("#warningmessage").text("Choose connectme link in the following format: http://connect.me/username. Username may contain letters, numbers, and underscores.");
        $("#warningmessage").css("background-color", "white");
      }
    });
  };

  App.ConnectMeLinkFormHandler = ConnectMeLinkFormHandler;
  window.App = App;
})(window);
