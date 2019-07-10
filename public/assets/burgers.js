// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".menu").on("click", "#eat", function(event) {
    var id = $(this).data("id");

    var devouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Ate burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("this");
    var newBurger = {
      burger_name: $("#brg")
        .val()
        .trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New menu item!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
