(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.addUserAccount = function(key, val) {
    /*$.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse); // eslint-disable-line
    });*/
    $.ajax({
      type: "POST",
      url: this.serverUrl,
      data: val,
      success: function() {
        window.location.href = "screen1.html";
      },
      error: function(xhr) {
        var responseText = $.parseJSON(xhr.responseText);
        var errormsg = JSON.stringify(responseText.errors);
        if (errormsg.includes("is already in use")) {
          alert("Email address already registered.");
        } else {
          alert("Please check the details.");
        }
      }
    });
  };

  RemoteDataStore.prototype.addUserDataToDatabase = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse); // eslint-disable-line
    });
  };

  RemoteDataStore.prototype.login = function(key, val) {
    /*$.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse); // eslint-disable-line
    });*/
    $.ajax(this.serverUrl + "/login", {
      type: "POST",
      url: this.serverUrl,
      data: {
        username: val.username,
        password: val.password
      },
      success: function() {
        window.location.href = "screen1.html";
      },
      error: function(xhr) {
        var responseText = $.parseJSON(xhr.responseText);
        var errormsg = JSON.stringify(responseText.errors);
        if (errormsg != "" && errormsg.includes("is already in use")) {
          alert("Username already exists.");
        } else {
          alert("Please check the details.");
        }
      }
    });
  };

  RemoteDataStore.prototype.logout = function() {

    $.ajax(this.serverUrl + "/logout", {
      type: "POST",
      url: this.serverUrl,
      success: function() {
        window.location.href = "index.html";
      },
      error: function(xhr) {
        var responseText = $.parseJSON(xhr.responseText);
        var errormsg = JSON.stringify(responseText.errors);// eslint-disable-line
        //console.log(errormsg);
      }
    });
  };

  RemoteDataStore.prototype.update = function(key, val) {
    this.getAll((function(serverResponse) {
      var id;
      serverResponse.forEach(function(item) {
        if (item.emailAddress == key) {
          id = item.id;
        }
      });
      $.ajax(this.serverUrl + "/" + id, {
        type: "PUT",
        data: val
      });
    }).bind(this));
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    this.getAll((function(serverResponse) {
      var id;
      serverResponse.forEach(function(item) {
        if (item.emailAddress == key) {
          id = item.id;
        }
      });
      $.ajax(this.serverUrl + "/" + id, {
        type: "DELETE"
      });
    }).bind(this));
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "/" + key, function(serverResponse) {
      //console.log(serverResponse);
      cb(serverResponse);
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
