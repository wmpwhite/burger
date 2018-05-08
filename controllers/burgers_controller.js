
// This file was not used in the final implementation.  Server.js  performs these functions.

$(".updateburger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();   


    var updatedBurger = {
      burger: $(".updateburger [name=burger]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/api/update" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function() {        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("in addburger function");
    var newBurger = {
      burger: $("#nb [name=burger]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/add", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  