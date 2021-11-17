var startBtn = document.querySelector('.start-button')

var finish = false
var timer = 60
var correct = 0
var wrong = 0


var questions = []

function startQuiz() {
    console.log('quiz started')
    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('qb').style.visibility = 'visible';
    document.getElementById('timer').style.visibility = 'visible';

    /* startClock()
    getQuestion() */
}

/* function startClock(){

}

function getQ() {

} */

startBtn.addEventListener('click', startQuiz)
