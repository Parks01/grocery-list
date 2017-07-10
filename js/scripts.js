$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var foods = ["produce","meat", "bread","drinks","quicksauce"]; {

    foods.forEach(function(food) {
    var userInput = ($("input#" + food).val()).toUpperCase();
    $("ul#list").append("<li>" + userInput + "</li>");
  });

  $("#formOne").hide();

  event.preventDefault();
  });
});
