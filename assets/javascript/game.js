// Starting with psuedocode up here to roadmap the game. 
// 1. Need to esatblish variables for wins, losses, letter,
// and something for the number of guesses. 
// 2. Will have to create a way to count each of these things,
// probably going to have to use for loops and script within.
// 3. Will have to use a for loop or just Math.random to create
// the letter. 
// *Going to attempt to not use any functions for this*



var letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o ', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = [];
var winLetter = letters[Math.floor(Math.random() * 
		26)];
console.log(winLetter)

// document.onkeyup = function(event) {
// 	var key = event.key;
// 	console.log(key);


// }

// var wins = 0

// for (var i = 0; i < 10; i++) {

// }