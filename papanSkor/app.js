const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const optionPoin = document.querySelector('#winPoint');

let p1Score = 0;
let p2Score = 0;
let winPoint = optionPoin;
let isGameOver = false;

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}

optionPoin.addEventListener('change', function(){
    winPoint = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        if(winPoint === p1Score) {
            isGameOver = true;
            alert('player 1 Win');
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        if(winPoint === p2Score) {
            isGameOver = true;
            alert('player 2 win')
        }
        p2Display.textContent = p2Score;
    }  
});

resetButton.addEventListener('click', reset);