(function(window) {
  "use strict";
  var SERVER_URL = "http://localhost:2403/usersverification";
  var App = window.App;
  var LoginFormHandler = App.LoginFormHandler;
  var RemoteDataStore = App.RemoteDataStore;
  var UserData = App.UserData;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var userData = new UserData("ncc-1701", remoteDS);

  var loginFormHandler = new LoginFormHandler();
  loginFormHandler.addPasswordInputHandler();

  loginFormHandler.addNextButtonHandler(function(loginuserdata) {
    userData.isUserValid.call(userData, loginuserdata);
  });
})(window);
