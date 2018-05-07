
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
        // Reload the page to get the updated list 
        console.log(data);
        console.log(url);
        location.reload();
      });
  });
});