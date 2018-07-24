(function (window) {
  "use strict";

  var App = window.App;
  var UserInterestFormHandler = App.UserInterestFormHandler;

  //var userdata = JSON.parse(localStorage["userdata"]);
  //console.log("I am in Main" + userdata);

  var userInterestFormHandler = new UserInterestFormHandler();
  userInterestFormHandler.addInputHandler();
  userInterestFormHandler.addNextButtonHandler();
})(window);
