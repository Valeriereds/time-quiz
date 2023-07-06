// Create needed variables for questions/answers
// changed query selectorall to just selector because it functions towards all of them instead of just one
// remember to reference the activities and mini project
var inTro = document.querySelector(".intro");
var startQuiz = document.querySelector(".start-button");
var quizHead = document.querySelector(".quiz")

// We will need event listeners for the question/answer transition
// refer to event listener activities
var quesOne = document.querySelector("quesOne");

quizHead.textContent = "Coding Quiz Challenge";
inTro.textContent = "Prepared to burn your brain out into mush? Try your knowledge with this data coding quiz. Choose wisely! For every incorrect answer, the timer will deduct 15 seconds."
// add event listener to toggle from intro to first question
function startQuest() {
  isWin = false;
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
}

// 

// we will need set and clearInterval for timer
// we're gonna need if/else statements for the evilistener
// timer needs to decrease for every wrong answer, should these be apart of the if/else statements
