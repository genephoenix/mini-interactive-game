$(document).ready(function(){

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  context.fillStyle = "white";
  context.fillRect(10, 10, 40, 40);

  $("#game-button").on("click", function(){
    alert("Game start!");
  });

});