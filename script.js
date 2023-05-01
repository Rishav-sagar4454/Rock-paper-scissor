let myScore = localStorage.getItem('myscore');
let computerScore = localStorage.getItem('score');

if (myScore === null && computerScore === null) {
    localStorage.setItem('myscore', 0)
    localStorage.setItem('score', 0)
}

myScore = localStorage.getItem('myscore');
computerScore = localStorage.getItem('score');
let userChoice = undefined;

// next button 
let winbtn = document.createElement('button')
winbtn.onclick = iwon;
winbtn.type = 'button'

winbtn.textContent = 'Next'
winbtn.style.color = 'white'
winbtn.style.background = 'transparent';
winbtn.style.border = '1px solid #fff';
winbtn.style.borderradius = '5px';
winbtn.style.cursor = 'pointer';
winbtn.style.fontfamily = 'inherit';
winbtn.style.fontsize = '20px';
winbtn.style.letterspacing = '2px';
winbtn.style.padding = '10px 25px';
winbtn.style.position = 'fixed';
winbtn.style.right = '5px';
winbtn.style.bottom = '30px';
winbtn.style.display = 'none';

let rulesbtn = document.getElementById('rishav')
rulesbtn.appendChild(winbtn)

function iwon() {
    window.location.href = 'won.html'
}
const buttons = document.querySelectorAll('.pick');
const myScoreEl = document.getElementById('my_score');
const computerScoreEl = document.getElementById('computer_score');
const choices = ['paper', 'scissors', 'rock'];
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const resetBtn = document.getElementById('reset');
const result = document.getElementById('win');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const rulesModal = document.getElementById('modal');
const blackBack = document.querySelector('.rules-container');
myScoreEl.textContent = myScore

computerScoreEl.textContent = computerScore;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        main.style.display = 'none';
        selection.style.display = 'grid';
        checkWinner();
    })
});

//Play again button
resetBtn.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
    window.location.href = 'Rock-paper-scissor.html'

});

//Show game's rules
openBtn.addEventListener('click', () => {
    rulesModal.style.display = 'flex';
    blackBack.style.display = 'flex';
});

//Hide game's rules
closeBtn.addEventListener('click', () => {
    rulesModal.style.display = 'none';
    blackBack.style.display = 'none';
});

// Function to check who wins
function checkWinner() {
    // store computer choice
    const computerChoice = pickRandomChoice();

    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);

    if (userChoice === computerChoice) {
        //tie
        result.innerText = "TIE UP";
    } else if (userChoice === 'paper' && computerChoice === 'rock'
        || userChoice === 'rock' && computerChoice === 'scissors'
        || userChoice === 'scissors' && computerChoice === 'paper') {
        // if User won
        myScoreUpdate();
        result.innerText = "WIN";
        winbtn.style.display = 'block'
    }
    else {
        //if Computer won
        result.innerText = "LOST";
        computerScoreUpdate();
    }
}
//Update user score
function myScoreUpdate() {
    myScore = localStorage.getItem('myscore')
    myScore++;
    localStorage.setItem('myscore', myScore)
    myScoreEl.innerText = myScore;
}
//Update computer score
function computerScoreUpdate() {
    computerScore = localStorage.getItem('score')
    computerScore++;
    localStorage.setItem('score', computerScore)
    computerScoreEl.innerText = computerScore;
}
// Function to pick computer choice
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
//Update user selection
function updateSelection(selectionEl, choice) {
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.remove('btn-rock');
    //update selection image
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add('btn-' + choice);
    img.src = 'Assests/' + choice + '.png';
    img.alt = choice;
}
