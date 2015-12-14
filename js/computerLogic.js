/*window.rpsGame = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}



$(document).ready(function() {
  var buttonChoices = ["rock", "paper", "scissors"];

  function randomButton() {
    var randomIndex = Math.floor(Math.random() * buttonChoices.length);
    $(".btn-primary").html(buttonChoices[randomIndex]).attr("data-selection", randomIndex);
  }

  $(".btn-primary").on("click", function() {
    var computersChoice = Math.floor(Math.random() * buttonChoices.length);
    var userChoice = parseInt($(this).attr("data-selection"));

    if(computersChoice === userChoice) {
      $(".modal-body").html("You Tie");
    } else if(computersChoice === 0 && userChoice === 1) {
      //give the computer a point
      $(".modal-body").html("You Lose!");
      rpsGame.gameState.computerScore++;
    } else {
      //gives the user a point
      $("modal-body").html("You Win!");
      rpsGame.gameState.userScore++;
    }
    $("#myModal").modal("show");
    rpsGame.gameState.roundCount++;

    $("span").each(function() {
      $(this).html(rpsGame.gameState[$(this).attr("id")]);
    });

    randomButton();
  });

  randomButton
});