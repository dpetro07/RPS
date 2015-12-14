$(document).ready(function(){
 

  var userScore = 0;
  var cpScore = 0; 
  var roundCount = 0;
  var userRoundsWon = 0;
  var cpRoundsWon = 0;
  var roundsLost = 0;
  var tie = 0;

  $("#playPauseBtn").on("click", function() {
    if ($(this).attr("data-status") === "on") {
      $(this)
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "off")
        .html("Restart");
       controls();
      enableAnimation();
    } else {
      $(this)
        .addClass("btn-success")
        .removeClass("btn-danger")
        .attr("data-status", "on")
        .html("Start");
      $(".choice").unbind();
      $(".scoreStatus").empty();
      $(".allClear").empty();
      userScore = cpScore  = roundCount = userRoundsWon = cpRoundsWon = tie =  roundsLost = 0;
    }
  })
function controls(){
  $(".btnPick").on("click", function() {

  var choiceOptions = ["rock", "paper", "scissor"];
  var randomNum = Math.floor(Math.random() * choiceOptions.length);
  var userChoice = this.id;
  var cpChoice = choiceOptions[randomNum];

    

    if (userChoice == cpChoice) {};
     if (userChoice === "rock" &&  cpChoice === "paper"){
      cpScore ++;
    }
     if (userChoice === "rock" &&  cpChoice === "scissor"){
      userScore++;
    }
     if (userChoice === "paper" &&  cpChoice === "rock"){
      userScore++;
    }
     if (userChoice === "paper" &&  cpChoice === "scissor"){
      cpScore++;
    }
     if (userChoice === "scissor" &&  cpChoice === "rock"){
      cpScore++;
    }
     if (userChoice === "scissor" &&  cpChoice === "paper"){
      userScore++;
    }


    roundCount ++;
    if (roundCount === 5){
      if (userScore > cpScore){
        $(".modal-title").html("Congrats!");
          $(".modal-body").html("You Won!");
          $("#mainModal").modal({
          });

      } else if (userScore < cpScore){
        $(".modal-title").html("Ouch, You Lost!");
          $(".modal-body").html("Try Again");
          $("#mainModal").modal({
          });

      } else if (userScore == cpScore){
        $(".modal-title").html("You Tied");
          $(".modal-body").html("Try Again");
          $("#mainModal").modal({
          });
        };
      }
    
    $("#userScore").html(userScore).prepend("<p> Player Score: </p>");
    $("#computerScore").html(cpScore).prepend("<p> Computer Score: </p>");
    $("#roundCount").html(roundCount).prepend("<p> Round: </p>");
    $("#userPick").html(userChoice).prepend("<p> Player Choice: </p>");
    $("#computerPick").html(cpChoice).prepend("<p> Computer Chose: </p>");
    

    });
  }

});