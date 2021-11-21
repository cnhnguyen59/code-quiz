
const startBtn = document.querySelector('.start-button')
const saveBtn = document.querySelector('.save')
const timerEl = document.querySelector('.timer-count')
const scoreEl = document.querySelector('.user-score')
const questionEl = document.querySelector('.question')
const answersEl = document.querySelector('.answer-buttons')
const finalScoreEl = document.querySelector('.final-score')
const input = document.querySelector('.input-box')
const allScoresEl = document.querySelector('.all-scores')

/* const oneInit = document.getElementById('oneInit');
const oneScore = document.getElementById('oneScore');
const twoInit = document.getElementById('twoInit');
const twoScore = document.getElementById('twoScore');
const threeInit = document.getElementById('threeInit');
const threeScore = document.getElementById('threeScore');
var inputBox = document.getElementById('input');
const againBtn = document.getElementById('again-btn') */


var timer
var timerCount = 60
var score = 0
var allScores = localStorage.getItem("allScores")


startBtn.addEventListener('click', startQuiz)
saveBtn.addEventListener('click', save)


function startQuiz() {
    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('qb').style.visibility = 'visible';
    document.getElementById('header').style.visibility = 'visible';

    startTimer()
    getQ()
}

function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount
        if (timerCount === 0){
            window.alert("Time's Up!")
            endQuiz()
        }

    }, 1000)
}

function getQ() {
    resetState()
    questionEl.innerHTML = questions[0].question
    questions[0].answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('choice')
        if (answer.correct == true) {
            button.dataset.correct = 'true'
        }
        button.addEventListener('click', selectedAnswer)
        answersEl.appendChild(button)
    }) 
    questions.shift()
}  

function resetState(){
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}

function selectedAnswer(e) {
    const selectedButton = e.target
    if (selectedButton.dataset.correct == 'true'){
        score += 20
        scoreEl.textContent = score
        if (questions.length == 0){
            endQuiz()
        } else {
            getQ()
        }
    } else{
        timerCount -= 10
        if (questions.length == 0) {
            endQuiz()
        } else if (timerCount <= 0) {
            window.alert('Times Up!')
            endQuiz()
        } else {
            getQ()
        }
    }
}

function endQuiz() {
    clearInterval(timer)
    finalScoreEl.textContent = score
    document.getElementById('qb').style.visibility = 'hidden';
    document.getElementById('sb').style.visibility = 'visible';
}

function save(){
    //store scores in local storage and write to scores list
    location.href = 'scores.html'
}
