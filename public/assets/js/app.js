//  This file contains some client side logic to capture an on-click event that initiates a put to the database that updates the column "devoured" from false to true for the record whose id has been captured in the click event.


$(document).ready(function() {
$(".updateburger").on("click", function(event) {
    
    event.preventDefault(); 

    var id = $(event.target).attr('data-eatburger');
    console.log(id + "from app.js");
    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/" + id      
    }).then(
      function(data) {        
        location.reload();
      });
  });
});