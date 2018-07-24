(function(window) {
  "use strict";
  var App = window.App || {};

  function UserData(userId, db) {
    this.userId = userId;
    this.db = db;
  }

  UserData.prototype.createUserAccount = function(userdata) {
    //console.log("userdata"+userdata["password"]);
    this.db.addUserAccount(userdata.firstname, userdata);
  };

  UserData.prototype.addUserData = function(userdata) {
    //console.log("userdata"+userdata["password"]);
    this.db.addUserDataToDatabase(userdata.firstname, userdata);
  };

  UserData.prototype.isUserValid = function(loginuserdata) {
    this.db.login(loginuserdata.firstname, loginuserdata);
    /*this.db.getAll((function(serverResponse) {
      serverResponse.forEach(function(item) {
        //console.log("item.email: "+item.email+"loginuserdata.email: "+loginuserdata.email);
        //console.log("item.password: "+item.password+"loginuserdata.password: "+loginuserdata.password);
        if (item.email === loginuserdata.email && item.password === loginuserdata.password) {
          window.location.href = "screen1.html";
        }
      });
    }).bind(this));*/
  };

  UserData.prototype.getUserData = function(fn) {
    this.db.getAll((function(serverResponse) {
      var id;
      var that = this.db;
      serverResponse.forEach(function(item) {
        var userdata = JSON.parse(localStorage["userdata"]);
        var username = userdata["username"];
        if (item.username === username) {
          id = item.id;
          //console.log("id" + item.id);
          that.get(id, function(serverResponse) {
            fn(serverResponse);
          });
        }
      });
    }).bind(this));
  };

  App.UserData = UserData;
  window.App = App;

})(window);
