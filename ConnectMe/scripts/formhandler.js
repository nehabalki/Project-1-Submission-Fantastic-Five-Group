(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler() {}

  FormHandler.prototype.addNextButtonHandler = function() {
    $("#selection li a").click(function() {
      var selection = $(this).attr("title");
      //console.log("selection=" + selection);
      if (selection === "Login") {
        window.location.href = "login.html";
      }else if (selection === "Start for Free") {
        window.location.href = "signup.html";
      }
    });
    $("#signup").click(function(event) {
      event.preventDefault();
      window.location.href = "signup.html";
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
