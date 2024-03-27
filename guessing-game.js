function guessingGame() {
    // initialize random number between 0 and 99
    const secretNumber = Math.floor(Math.random()*100);
    let count = 0;
    let hasWon = false;

    // declare guess function
    function guessNumber(number) {
        if (hasWon) {
            return `The game is over, you already won!`;
        }
        count++;
        // compare to number
        if (number === secretNumber) {
            hasWon = true;
            return `You win! You found ${secretNumber} in ${count} guesses.`;
        }
        else if (number > secretNumber) {
            return `${number} is too high!`;
        }
        else {
            return `${number} is too low!`;
        }
    }

    return guessNumber;
}

module.exports = { guessingGame };
