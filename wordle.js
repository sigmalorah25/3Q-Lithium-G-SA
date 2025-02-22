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
    let randomWord = Math.floor(Math.random() * wordleWords.length);
    wordleWord = wordleWords[randomWord];
}