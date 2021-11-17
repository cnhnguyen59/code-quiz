var startBtn = document.querySelector('.start-button')
var timerEl = document.querySelector('.timer-count')

var finish = false
var timer
var timerCount = 60
var correct = 0
var wrong = 0


var questions = []

function startQuiz() {
    console.log('quiz started')
    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('qb').style.visibility = 'visible';
    document.getElementById('timer').style.visibility = 'visible';

    startTimer()
}

 function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent =timerCount
        console.log(timerCOunt)
    }, 1000)
}

/* function getQ() {

}  */

startBtn.addEventListener('click', startQuiz)
