var wordleWords = [ 'waltz', 'sigma','brain', 'media', 'drama','child', 'quest', 'eight', 'scout', 'world','shove', 'stone', 'light', 'coral', 'chair',
    'rocks', 'stand', 'video', 'mango', 'solid', 'spark', 'moles', 'heavy', 'plane', 'nymph', 'quick', 'fjord', 'block', 'blast', 
    'knave', 'crazy', 'frank', 'ocean', 'share', 'third', 'money', 'junky', 'crash', 'frame', 'cable', 'solve' ];
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

if (  (guess.trim() == "" ) || (guess.length !== 5)) {
alert('Enter a 5-letter word.');
return;
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

score = 0;

if (guess.length == 5) {

if (guess[0] == wordleWord[0]) {
cell0.style.backgroundColor = 'green';
score++;
}

else if (letterChecker(guess[0])){
cell0.style.backgroundColor = 'yellow';
}

else {
cell0.style.backgroundColor = 'gray';
}

cell0.innerHTML = guess [0];

if (guess[1] == wordleWord[1]) {
cell1.style.backgroundColor = 'green';
score++;
}

else if (letterChecker(guess[1])) {
cell1.style.backgroundColor = 'yellow';
}

else {
cell1.style.backgroundColor = 'gray';
}

cell1.innerHTML = guess [1];

if (guess[2] == wordleWord[2]) {
cell2.style.backgroundColor = 'green';
score++;
}

else if (letterChecker(guess[2])) {
cell2.style.backgroundColor = 'yellow';
}

else {
cell2.style.backgroundColor = 'gray';
}

cell2.innerHTML = guess [2];

if (guess[3] == wordleWord[3]) {
cell3.style.backgroundColor = 'green';
score++;
}

else if (letterChecker(guess[3])) {
cell3.style.backgroundColor = 'yellow';
}

else {
cell3.style.backgroundColor = 'gray';
}

cell3.innerHTML = guess [3];

if (guess[4] == wordleWord[4]) {
cell4.style.backgroundColor = 'green';
score++;
}

else if (letterChecker(guess[4])) {
cell4.style.backgroundColor = 'yellow';
}

else {
cell4.style.backgroundColor = 'gray';
}

cell4.innerHTML = guess [4];

health--;

if (guess == wordleWord) {
alert('You won! To play again, reload the page.')
health = -1;
return;
}

if (health === 0){
alert(`You lost! The word was ${wordleWord.toUpperCase()} !!! ^__^ To play again, reload the page.`)
}
}

}
