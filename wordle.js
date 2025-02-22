var wordleWords = [ 'waltz', 'sigma','brain', 'media', 'drama','child', 'quest', 'eight', 'scout', 'world','shove', 'stone', 'light', 'coral', 'chair',
                    'rocks', 'stand', 'video', 'phone', 'solid', 'spark', 'moles', 'heavy', 'plane', 'nymph', 'quick', 'fjord', 'block', 'blast', 
                    'knave', 'crazy', 'frank', 'ocean', 'share', 'third', 'money', 'junky', 'crash', 'toast', 'cable', 'solve'];
var wordleWord;

var health = 5
var score = 0;

function setupGame() {
    generateWord();
}

function generateWord() {
    let randomIndex = Math.floor(Math.random() * wordleWords.length);
    wordleWord = wordleWords[randomIndex];
}

function checkWord(){
    if (score==5) {
        alert('You won! To play again, reload the page.')
    }
    else if (health < 0){
        alert('You lost! To play again, reload the page.')
    }

    let guess = prompt('Enter a five-letter guess').toLowerCase;

    if (guess == null) {
        return;
    }
    else if (guess.trim() == "") {
        return;
    }
    else if (guessLower.length == 5) {
        let correctCount = 0;
    }
}
