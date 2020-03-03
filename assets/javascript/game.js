console.log("Hi!");

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
var randomNumber = Math.floor((Math.random() * 26) + 1);

var randomLetter = alphabet[randomNumber];

var userGuesses = []

console.log(randomLetter);

document.addEventListener("keyup", function(event){
    
    if (event.key === randomLetter) {
        document.getElementsByClassName("yourguess").innerHTML="alphabet"
    }
});





