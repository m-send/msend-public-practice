// Sets game parameters
var randomNumber ;
var totalGuesses = 0;
var numberGuessed = [];
var turns = 10;

//Sets Lifetime Stats
var gamesPlayed = 0 ;
var guess2Win = [];
var averageTotalGuesses = 0;
var average ;

//Starts the Game
function startGame() {
    randomNumber = Math.floor((Math.random()*50) +1);
    document.getElementById("startButton").hidden = true;
    document.getElementById("guessForm").hidden = false;
    gamesPlayed++
    document.getElementById("totalGamesPlayed").innerHTML = ("Total Games Played = " + gamesPlayed);
    console.log(randomNumber);
  };

//Outputs players scores
function displayGame() {
  document.getElementById("p2").innerHTML = ("Total Guesses = " + totalGuesses);
  document.getElementById("p4").innerHTML = ("Turns Left = " + turns);
  document.getElementById("p3").innerHTML = ("Previous Guesses = " + numberGuessed);
  
};

//Reloads Game 
function reload() {
  randomNumber = Math.floor((Math.random()*50) +1);
  totalGuesses = 0;
  numberGuessed = [];
  turns = 10;
  gamesPlayed++;
  //Returns average of the the guess2Win array
  //BROKEN AVERAGE LOOP --> NEEDS FIXING
  for (let i = 0; i < guess2Win.length; i++) {
    averageTotalGuesses += guess2Win[i];
    console.log("i " + i);
    console.log("averageTotalGuesses " + averageTotalGuesses);
    
  } average = averageTotalGuesses / guess2Win.length;
  //Displays Data
  document.getElementById("p2").innerHTML = ("Total Guesses = " + totalGuesses);
  document.getElementById("p4").innerHTML = ("Turns Left = " + turns);
  document.getElementById("p3").innerHTML = ("Previous Guesses = No Guesses Yet!" );
  document.getElementById("totalGamesPlayed").innerHTML = ("Total Games Played = " + gamesPlayed);
  document.getElementById("lifetimeGuesses2Win").innerHTML = ("Average Guesses to Win:" + average);
  console.log(randomNumber);
};


function submitGuess() {
  while (totalGuesses <= 9) {  
    if (document.getElementById("numGuess").value == randomNumber) {
      totalGuesses = totalGuesses + 1;
      turns = turns - 1;
      guess2Win.push(totalGuesses);
      alert(document.getElementById("numGuess").value + " Is the correct Number! You have won the game in " + totalGuesses + " guesses!");
      alert("Click on Restart Game to play again!")
      break; 
    }
      else if (totalGuesses == 9 && document.getElementById("numGuess").value !== randomNumber) {
        alert("Game Over! The Correct Number Is " + randomNumber + " Click Restart Game to Play Again!");
        numberGuessed.push(document.getElementById("numGuess").value);
        totalGuesses = totalGuesses +1;
        turns = turns - 1;
        displayGame()
        break;
    } else if(document.getElementById("numGuess").value == null || document.getElementById("numGuess").value < 1 || document.getElementById("numGuess").value  > 50) {
      alert("Please enter a number between 1 and 50!");
      break;
    } else (document.getElementById("numGuess").value !== randomNumber && document.getElementById("numGuess").value >= 1 && document.getElementById("numGuess").value <= 50) 
        alert("Incorrect! Try Again!");
        numberGuessed.push(document.getElementById("numGuess").value);
        totalGuesses = totalGuesses +1;
        turns = turns - 1;
        displayGame()
        console.log(numberGuessed);
        console.log(totalGuesses);  
        break;
    }
  
};

