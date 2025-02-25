var wordleWords = [ 'waltz', 'sigma','brain', 'media', 'drama','child', 'quest', 'eight', 'scout', 'world','shove', 'stone', 'light', 'coral', 'chair',
                    'rocks', 'stand', 'video', 'mango', 'solid', 'spark', 'moles', 'heavy', 'plane', 'nymph', 'quick', 'fjord', 'block', 'blast', 
                    'knave', 'crazy', 'frank', 'ocean', 'share', 'third', 'money', 'junky', 'crash', 'toast', 'cable', 'solve' ];
var wordleWord;

var health = 5;
var score = 0;

function setupGame() {
    generateWord();
    console.log(wordleWord)
}

function generateWord() {
    let randomIndex = Math.trunc(Math.random() * wordleWords.length);
    wordleWord = wordleWords[randomIndex];
}
function checkWord(){

    let guess = prompt('Enter a five-letter guess').toLowerCase();

    if (  (guess.length !== 5)) {
        alert('Enter a 5-letter word.');
        return;
    }
    else {

    }

   var rowIndex = 5 - health;
   if (rowIndex < 0) return;

    var cell0 = document.getElementById(`r-${rowIndex}-0`);
    var cell1 = document.getElementById(`r-${rowIndex}-1`);
    var cell2 = document.getElementById(`r-${rowIndex}-2`);
    var cell3 = document.getElementById(`r-${rowIndex}-3`);
    var cell4 = document.getElementById(`r-${rowIndex}-4`);

    function letterChecker(letter) {
        if (wordleWord[0] === letter) {
            return true;}
        if (wordleWord[1] === letter) {
            return true;}
        if (wordleWord[2] === letter) {
            return true;}
        if (wordleWord[3] === letter) {
            return true;}
        if (wordleWord[4] === letter) {
            return true;}
       else                           {  
        return false;   }
    }

    if (guess.length == 5) {

        if (guess[0] == wordleWord[0]) {
            cell0.classList.add('r-0', 'correct');
            score++;
        }

        else if (letterChecker(guess[0])){
            cell0.classList.add('r-0', 'present');
        }

        else {
            cell0.classList.add('r-0', 'absent');
        }

        cell0.innerText = guess [0];

        if (guess[1] == wordleWord[1]) {
            cell1.classList.add('r-1', 'correct');
            score++;
        }

        else if (letterChecker(guess[1])) {
            cell1.classList.add('r-1', 'present');
        }

        else {
            cell1.classList.add('r-1', 'absent');
        }

        cell1.innerText = guess [1];

        if (guess[2] == wordleWord[2]) {
            cell2.classList.add('r-2', 'correct');
            score++;
        }

        else if (letterChecker(guess[2])) {
            cell2.classList.add('r-2', 'present');
        }

        else {
            cell2.classList.add('r-2', 'absent');
        }

        cell2.innerText = guess [2];

        if (guess[3] == wordleWord[3]) {
            cell3.classList.add('r-3', 'correct');
            score++;
        }

        else if (letterChecker(guess[0])) {
            cell3.classList.add('r-3', 'present');
        }

        else {
            cell3.classList.add('r-3', 'absent');
        }

        cell3.innerText = guess [3];

        if (guess[4] == wordleWord[4]) {
            cell4.classList.add('r-4', 'correct');
            score++;
        }

        else if (letterChecker(guess[4])) {
            cell4.classList.add('r-4', 'present');
        }

        else {
            cell4.classList.add('r-4', 'absent');
        }

        cell4.innerText = guess [4];

        if (score==5) {
            alert('You won! To play again, reload the page.')
        }
        else{
            health--;
            if (health === 0){
            alert('You lost! To play again, reload the page.')
        }
    }

    }
}
