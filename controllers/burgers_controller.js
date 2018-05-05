


$(".updatemovie").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    


    var updatedBurger = {
      burger: $(".updatemovie [name=movie]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function() {        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addmovie").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newMovie = {
      movie: $("#addmovie [name=movie]").val().trim()
    };

    // Send the POST request.
    $.ajax("/movies", {
      type: "POST",
      data: newMovie
    }).then(
      function() {
        console.log("added new movie");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  