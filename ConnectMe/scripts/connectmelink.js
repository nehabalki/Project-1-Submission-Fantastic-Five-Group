(function (window) {
  "use strict";
  var SERVER_URL = "http://localhost:2403/connectme";
  var App = window.App;
  var RemoteDataStore = App.RemoteDataStore;
  var UserData = App.UserData;
  var ConnectMeLinkFormHandler = App.ConnectMeLinkFormHandler;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var userData = new UserData("ncc-1701",remoteDS);
  var connectMeLinkFormHandler = new ConnectMeLinkFormHandler();
 
  connectMeLinkFormHandler.addInputHandler();
  connectMeLinkFormHandler.addNextButtonHandler(function(userdata) {
    //console.log("sending data...");
    userData.addUserData.call(userData, userdata);
  });

})(window);
