(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function UserPageFormHandler() {}

  /*ConnectMeLinkFormHandler.prototype.addNextButtonHandler = function(fn) {
    $(document).on("submit", function(event) {
      window.location.href = "userpage.html";
    });
  };*/
  UserPageFormHandler.prototype.addNextButtonHandler = function() {
    $("#selection li a").click(function() {
      var selection = $(this).attr("title");
      if (selection === "Home") {
        window.location.href = "index.html";
      }
    });
  };

  UserPageFormHandler.prototype.updateuserData = function(userdata) {
    //console.log("Inside updateuserData");
    var username = userdata.firstname + " " + userdata.lastname;
    var professionAndLocation = "";
    var userinterests = "";
    //console.log("Inside updateuserData= " + username);

    if (userdata.profession1 != "") {
      professionAndLocation += userdata.profession1;
    }
    if (userdata.profession2 != "" && userdata.profession3 === "") {
      professionAndLocation += " and " + userdata.profession2;
    } else if (userdata.profession2 != "") {
      professionAndLocation += "," + userdata.profession2;
    }
    if (userdata.profession3 != "") {
      professionAndLocation += " ,and " + userdata.profession3;
    }
    professionAndLocation += " in " + userdata.location;

    if (userdata.interest1 != "") {
      userinterests += userdata.interest1;
    }
    if (userdata.interest2 != "" && userdata.interest3 === "" && userdata.interest4 === "" && userdata.interest5 === "") {
      userinterests += " and " + userdata.interest2;
    } else if (userdata.interest2 != "") {
      userinterests += ", " + userdata.interest2;
    }
    if (userdata.interest3 != "" && userdata.interest4 === "" && userdata.interest5 === "") {
      userinterests += " ,and " + userdata.interest3;
    } else if (userdata.interest3 != "") {
      userinterests += ", " + userdata.interest3;
    }
    if (userdata.interest4 != "" && userdata.interest5 === "") {
      userinterests += " ,and " + userdata.interest4;
    } else if (userdata.interest4 != "") {
      userinterests += "," + userdata.interest4;
    }
    if (userdata.interest5 != "") {
      userinterests += ",and " + userdata.interest5;
    }

    $("#username").text(username);
    $("#userprofessionandlocation").text(professionAndLocation);
    $("#userpagetitle").text(userdata.pagetitle);
    var description = "Hello, I'm " + userdata.firstname + "." + " I'm a " + professionAndLocation + "." + " I'm a fan of " + userinterests + "." + " You can " + userdata.pagetitle + " with a click on the button above.";
    $("#userdetails").text(description);
  };

  App.UserPageFormHandler = UserPageFormHandler;
  window.App = App;
})(window);
