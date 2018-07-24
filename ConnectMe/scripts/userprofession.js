(function (window) {
  "use strict";

  var App = window.App;
  var UserProfessionFormHandler = App.UserProfessionFormHandler;

  var userProfessionFormHandler = new UserProfessionFormHandler();

  //var userdata = JSON.parse(localStorage["userdata"]);
  //console.log("I am in Main" + userdata);

  userProfessionFormHandler.addInputHandler();
  userProfessionFormHandler.addNextButtonHandler();
})(window);
