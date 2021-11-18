var startBtn = document.querySelector('.start-button')
var timerEl = document.querySelector('.timer-count')

var finish = false
var timer
var timerCount = 5
var secondsLeft = 10;
var currentQ = {}
var availableQ = []
var score = 0
var correct = true


function startQuiz() {
    console.log('quiz started')
    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('qb').style.visibility = 'visible';
    document.getElementById('header').style.visibility = 'visible';

    startTimer()
    getQ()
}

function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent =timerCount
        console.log(timerCount)

        if (timerCount === 0){
            window.alert("Time's Up!")
            endQuiz()
        }

    }, 1000)

       
}

function getQ() {
    
}  

function endQuiz() {
    //stops timer
    clearInterval(timer)
    //saves score
    localStorage.setItem('mostRecentScore', score)
    
    //goes to highscores list
}

startBtn.addEventListener('click', startQuiz)
