(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function UserInfoFormHandler(selector) {

    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  UserInfoFormHandler.prototype.addNextButtonHandler = function() {
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
      });
      localStorage["userdata"] = JSON.stringify(data);

      //var pic = $(".profilepicture")[0].files[0];
      var userdata = JSON.parse(localStorage["userdata"]);
      userdata["profilepicturefile"] = $(".profilepicture")[0].files[0];
      //userdata["profilepicturefile"] = $(".profilepicture").files[0];
      //console($(".profilepicture").files[0]);
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log(userdata["profilepicturefile"]);
      window.location.href = "screen2.html";
    });
  };

  App.UserInfoFormHandler = UserInfoFormHandler;
  window.App = App;
})(window);
