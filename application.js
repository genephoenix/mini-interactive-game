$(document).ready(function(){

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  context.fillStyle = "white";
  context.fillRect(10, 10, 40, 40);

  $("#game-button").on("click", function(){
    alert("Game start!");
  });

  $("#instructions-btn").on("click", function(){
    $.ajax({
      url: 'instructions.html',
      method: 'GET',
      success: function(instructions){
        $("#instructions-btn").replaceWith(instructions);
      }
    });
  });
});