// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-order").on("click", function(event) {
    var id = $(this).data("id");
    var newOrder = $(this).data("newOrder");

    var newOrderStatus = {
      order: newOrder
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newOrderStatus
    }).then(
      function() {
        console.log("changed order-delivered to:", newOrder);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      order: $("[name=order]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log(" Burger Eaten!: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
