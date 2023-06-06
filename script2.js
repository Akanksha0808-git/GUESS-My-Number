var msg1 =document.getElementById("message1")
var msg2 =document.getElementById("message2")
var msg3 =document.getElementById("message3")


const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;



function checkGuess() {
    // Get the user's guess from the input field
    const guess = parseInt(document.getElementById("guess").value);
console.log(guess)
    // Increment the number of attempts
    attempts++;
    // Check if the guess is correct
    if (guess === randomNumber) {
        msg1.textContent="Congratulations! You guessed the correct number";
    
    msg1.style.backgroundColor='greenyellow';
        msg2.textContent="The number was:" + randomNumber;
       

    } else if (guess < randomNumber) {
        msg1.textContent="Too low! Try again.";
        msg2.textContent="No. of guesses:" + attempts;
        

    } else {
        
        msg1.textContent="Too High! Try again.";
        msg2.textContent="No. of guesses:" + attempts;
       

    }
}
