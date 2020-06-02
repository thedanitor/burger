// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatBtn").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");

      var devouredBurger = {
        devoured:  newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          console.log("changed burger to devoured", newDevoured);
          // Reload the page to get the updated list
          event.preventDefault();
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerName").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });