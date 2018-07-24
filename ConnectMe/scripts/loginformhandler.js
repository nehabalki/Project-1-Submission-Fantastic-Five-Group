(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function LoginFormHandler() {}

  LoginFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      event.preventDefault();
      var loginuserdata = {};
      loginuserdata["username"] = $("#email").val();
      loginuserdata["password"] = $("#password").val();

      fn(loginuserdata);

      //window.location.href = "screen1.html";
    });
    $("#selection li a").click(function() {
      var selection = $(this).attr("title");
      //console.log("selection=" + selection);
      if (selection === "Signup") {
        window.location.href = "signup.html";
      }
    });
  };

  LoginFormHandler.prototype.addPasswordInputHandler = function() {
    $(document).on("input", "[name=\"password\"]", function(event) {

      var illegalChars = /[\W_]/; // allow only letters and numbers
      var error = "";
      var password = event.target.value;

      if (password == "") {
        error = "Please enter a password.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        $("#login").prop("disabled", true);
        return false;

      } else if ((password.length < 8) || (password.length > 20)) {
        error = "The password must be 8-20 characters long.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        $("#login").prop("disabled", true);
        return false;

      } else if (illegalChars.test(password)) {
        error = "The password contains illegal characters.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        $("#login").prop("disabled", true);
        return false;

      } else {
        $("#passwordHelpInline").text("");
        $("#passwordHelpInline").css("background-color", "white");
        $("#login").prop("disabled", false);
      }
      return true;
    });
  };

  App.LoginFormHandler = LoginFormHandler;
  window.App = App;
})(window);
