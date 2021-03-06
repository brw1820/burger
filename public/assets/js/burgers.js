// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-Devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).attr("data-newDevoured");
console.log(id);
console.log(newDevoured);
    var newDevouredState = {
      devoured: newDevoured
    };
console.log("click");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
// console.log("CLICK!");
    var newBurger = {
      burger_name: $("#bgr").val().trim(),
      // devoured: $("#devoured").val().trim()
    };
console.log("click");
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
