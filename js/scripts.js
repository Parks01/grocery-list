$(document).ready(function() {
  $("#formOne").submit(function(event) {

   var foods = ["produce","meat", "bread","drinks","quicksauce"];
  // foods.forEach(function(food){
  //   $("ul#list").append("<li>" + food + "</li>");
  // })
  for(var i = 0; i < 5; i++) {
    $("ul#list").append("<li>" + foods[i] + "</li>");
  }

  $("#formOne").hide();

  event.preventDefault();
  });
});
