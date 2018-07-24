(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-create-account=\"form\"]";

  var App = window.App;
  var UserInfoFormHandler = App.UserInfoFormHandler;
  var userInfoFormHandler = new UserInfoFormHandler(FORM_SELECTOR);
  userInfoFormHandler.addNextButtonHandler();

})(window);
