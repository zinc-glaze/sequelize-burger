$(function() {
  //Add new burger on submit 
  $("#new-burger").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#user-burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page with updated list
        location.reload();
      }
    );
  });
  //Move burger to 'devoured' list on click
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    var newDevoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page with updated list
        location.reload();
      }
    );
  });
});