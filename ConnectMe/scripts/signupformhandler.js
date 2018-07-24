(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function SignupFormHandler() {}

  SignupFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      event.preventDefault();

      var signupuserdata = {};
      signupuserdata["username"] = $("#email").val();
      signupuserdata["password"] = $("#password").val();
      signupuserdata["userdisplayname"] = $("#username").val();
      signupuserdata["gender"] = $("#gender :selected").text();
      fn(signupuserdata);
    });

    $("#selection li a").click(function() {
      var selection = $(this).attr("title");
      if (selection === "Login") {
        window.location.href = "login.html";
      }
    });
  };

  SignupFormHandler.prototype.addPasswordInputHandler = function() {
    $(document).on("input", "[name=\"password\"]", function(event) {

      var illegalChars = /[\W_]/; // allow only letters and numbers
      var error = "";
      var password = event.target.value;

      if (password === "") {
        error = "Please enter a password.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        $("#signup").prop("disabled", true);
        $("#repassword").prop("disabled", true);
        return false;

      } else if ((password.length < 8) || (password.length > 20)) {
        error = "The password must be 8-20 characters long.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        $("#signup").prop("disabled", true);
        $("#repassword").prop("disabled", true);
        return false;

      } else if (illegalChars.test(password)) {
        error = "The password contains illegal characters.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        $("#signup").prop("disabled", true);
        $("#repassword").prop("disabled", true);
        return false;

      } else if ((password.search(/[a-zA-Z]+/) === -1) || (password.search(/[0-9]+/) === -1)) {
        error = "The password must contain at least one numeral.\n";
        $("#passwordHelpInline").css("background-color", "yellow");
        $("#passwordHelpInline").text(error);
        $("#signup").prop("disabled", true);
        $("#repassword").prop("disabled", true);
        return false;

      } else {
        $("#passwordHelpInline").text("");
        $("#passwordHelpInline").css("background-color", "white");
        $("#signup").prop("disabled", false);
        $("#repassword").prop("disabled", false);
      }
      return true;
    });
  };

  SignupFormHandler.prototype.addRePasswordInputHandler = function() {
    $(document).on("input", "[name=\"reenter-password\"]", function(event) {

      var error = "";
      var repassword = event.target.value;
      var password = $("#password").val();

      if (password === "") {
        $("#passwordHelpInline").css("background-color", "white");
        $("#passwordHelpInline").text("");
        $("#signup").prop("disabled", true);
        return false;

      }else if (repassword === password) {
        $("#repasswordHelpInline").text("Password Matched");
        $("#repasswordHelpInline").css("background-color", "#15FF15");
        $("#signup").prop("disabled", false);
        return true;

      } else if (repassword != "" && repassword != password) {
        error = "The password and confirm password do not match.\n";
        $("#repasswordHelpInline").css("background-color", "yellow");
        $("#repasswordHelpInline").text(error);
        $("#signup").prop("disabled", true);
        return false;

      }
    });
  };

  App.SignupFormHandler = SignupFormHandler;
  window.App = App;
})(window);
