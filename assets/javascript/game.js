// Starting with psuedocode up here to roadmap the game. 
// 1. Need to esatblish variables for wins, losses, letter,
// and something for the number of guesses. 
// 2. Will have to create a way to count each of these things,
// probably going to have to use for loops and script within.
// 3. Will have to use a for loop or just Math.random to create
// the letter. 
// *Going to attempt to not use any functions for this*


// All variables that are established at the beginning.
var letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o ', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = [];
var guessesLeft = 10;
var winLetter = letters[Math.floor(Math.random() * 
		letters.length)];

// This will take in user data and the compare it to computer data.
document.onkeyup = function(event) {
	var key = event.key;
	console.log(key);

	// If the user guesses correct, wins increases by 1, guessesLeft
	// is reset to 10, and the guesses array is cleared, and a new
	// letter is set for the computer.

		if (key == winLetter){
			wins++;
			guessesLeft = 10;
			guesses = [];
			console.log("You Win!")
			winLetter = letters[Math.floor(Math.random() * 
		letters.length)];
		// If the user doesn't choose correctly, the key pressed is 
		// pushed into the guesses array, guessesLeft decreases by 1
		// and the computer selects a new letter at random.

		}else{
			guesses.push(key);
			guessesLeft--;
			console.log("You Lose!")
			winLetter = letters[Math.floor(Math.random() * 
		letters.length)];

		// The ending lose considtion is set to when the user runs 
		// out of guesses. Then the losses increases by 1, the guesses
		// array is cleared, and guessesLeft is reset to 10.
		} if (guessesLeft == 0) {
			losses++;
			guesses = [];
			guessesLeft = 10;
		}
   			

var html = "<p>Guess what letter I'm thinking of!</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" + 
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Guesses so far: " + guesses + "</p>";

document.querySelector(".displayResults").innerHTML = html

}

