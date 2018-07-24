(function(window) {
  "use strict";
  var SERVER_URL = "http://localhost:2403/connectme";
  var App = window.App;
  var RemoteDataStore = App.RemoteDataStore;
  var UserData = App.UserData;
  var UserPageFormHandler = App.UserPageFormHandler;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var userData = new UserData("ncc-1701", remoteDS);

  var userPageFormHandler = new UserPageFormHandler();
  userPageFormHandler.addNextButtonHandler();
  //url can be used to get data from server
  //var url = window.location.href;
  //var lastpart = url.split("/").slice(-1)[0];
  //console.log(lastpart);

  userData.getUserData.call(userData, function(userdata) {
    userPageFormHandler.updateuserData(userdata);
  });



})(window);
