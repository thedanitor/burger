
$(function() {
    $(".eatBtn").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");

      var devouredBurger = {
        devoured:  newDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          console.log("changed burger to devoured", newDevoured);
           event.preventDefault();
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerName").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });