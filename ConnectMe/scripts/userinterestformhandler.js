(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function UserInterestFormHandler() {}

  UserInterestFormHandler.prototype.addNextButtonHandler = function() {
    $(document).on("submit", function(event) {
      event.preventDefault();

      var userdata = JSON.parse(localStorage["userdata"]);
      userdata["interest1"] = $(".interest1").text();
      userdata["interest2"] = $(".interest2").text();
      userdata["interest3"] = $(".interest3").text();
      userdata["interest4"] = $(".interest4").text();
      userdata["interest5"] = $(".interest5").text();
      localStorage["userdata"] = JSON.stringify(userdata);
      //console.log("Interest 1=" + userdata["interest1"] +" Interest 2=" +userdata["interest2"]+" Interest 3="+userdata["interest3"]);
      //console.log(" Firstname" + userdata["firstname"]);
      window.location.href = "screen3.html";
    });
  };

  UserInterestFormHandler.prototype.addInputHandler = function() {
    $("#interest").on("keypress", function(event) {

      if (event.keyCode === 13) {
        var count = 0;
        var interestarray = [".interestdiv1", ".interestdiv2", ".interestdiv3", ".interestdiv4", ".interestdiv5"];
        $("#warningmessage").text("");
        $("#warningmessage").css("background-color", "white");
        var interestvalue = $("#interest").val();
        if ($(".interestdiv1").css("display") === "none" && interestvalue != "") {
          $(".interest1").text(interestvalue);
          $(".interestdiv1").css("display", "block");
          $("#interest").val("");
          $(document).ready(function() {
            $("#closebutton1").click(function() {
              $(".interest1").text("");
              $(".interestdiv1").css("display", "none");
              var count = 0;
              for (var i = 0; i < 5; i++) {
                if ($(interestarray[i]).css("display") === "block") {
                  count++;
                }
              }
              if (count < 3) {
                $("#nextbutton").prop("disabled", true);
              }
              if(count != 5) {
                $("#warningmessage").text("");
                $("#warningmessage").css("background-color", "white");
              }
            });
          });
        } else if ($(".interestdiv2").css("display") === "none" && interestvalue != "") {
          var tempInterest1 = $(".interest1").text();
          if (tempInterest1 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest2").text(interestvalue);
            $(".interestdiv2").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton2").click(function() {
                $(".interest2").text("");
                $(".interestdiv2").css("display", "none");
                var count = 0;
                for (var i = 0; i < 5; i++) {
                  if ($(interestarray[i]).css("display") === "block") {
                    count++;
                  }
                }
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
                if(count != 5) {
                  $("#warningmessage").text("");
                  $("#warningmessage").css("background-color", "white");
                }
              });
            });
          }
        } else if ($(".interestdiv3").css("display") === "none" && interestvalue != "") {
          var tempInt1 = $(".interest1").text();
          var tempInt2 = $(".interest2").text();
          if (tempInt1 === interestvalue || tempInt2 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest3").text(interestvalue);
            $(".interestdiv3").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton3").click(function() {
                $(".interest3").text("");
                $(".interestdiv3").css("display", "none");
                var count = 0;
                for (var i = 0; i < 5; i++) {
                  if ($(interestarray[i]).css("display") === "block") {
                    count++;
                  }
                }
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
                if(count != 5) {
                  $("#warningmessage").text("");
                  $("#warningmessage").css("background-color", "white");
                }
              });
            });
          }
        } else if ($(".interestdiv4").css("display") === "none" && interestvalue != "") {
          var temp_Int1 = $(".interest1").text();
          var temp_Int2 = $(".interest2").text();
          var temp_Int3 = $(".interest3").text();
          if (temp_Int1 === interestvalue || temp_Int2 === interestvalue || temp_Int3 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest4").text(interestvalue);
            $(".interestdiv4").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton4").click(function() {
                $(".interest4").text("");
                $(".interestdiv4").css("display", "none");
                var count = 0;
                for (var i = 0; i <= 5; i++) {
                  if ($(interestarray[i]).css("display") === "block") {
                    count++;
                  }
                }
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
                if(count != 5) {
                  $("#warningmessage").text("");
                  $("#warningmessage").css("background-color", "white");
                }
              });
            });
          }
        } else if ($(".interestdiv5").css("display") === "none" && interestvalue != "") {
          var tempInt_1 = $(".interest1").text();
          var tempInt_2 = $(".interest2").text();
          var tempInt_3 = $(".interest3").text();
          var tempInt_4 = $(".interest4").text();
          if (tempInt_1 === interestvalue || tempInt_2 === interestvalue || tempInt_3 === interestvalue || tempInt_4 === interestvalue) {
            $("#warningmessage").text("Duplicate entries are not allowed.");
            $("#warningmessage").css("background-color", "yellow");
          } else {
            $(".interest5").text(interestvalue);
            $(".interestdiv5").css("display", "block");
            $("#interest").val("");
            $(document).ready(function() {
              $("#closebutton5").click(function() {
                $(".interest5").text("");
                $(".interestdiv5").css("display", "none");
                var count = 0;
                for (var i = 0; i <= 5; i++) {
                  if ($(interestarray[i]).css("display") === "block") {
                    count++;
                  }
                }
                if (count < 3) {
                  $("#nextbutton").prop("disabled", true);
                }
                if(count != 5) {
                  $("#warningmessage").text("");
                  $("#warningmessage").css("background-color", "white");
                }
              });
            });
          }
        }
        for (var i = 0; i <= 5; i++) {
          if ($(interestarray[i]).css("display") === "block") {
            count++;
          }
        }
        if (count >= 3) {
          $("#nextbutton").prop("disabled", false);
        }
        if(count === 5) {
          $("#warningmessage").text("Maximum number of entries are reached.");
          $("#warningmessage").css("background-color", "yellow");
        }
        event.preventDefault();
      }
    });
  };

  App.UserInterestFormHandler = UserInterestFormHandler;
  window.App = App;
})(window);
