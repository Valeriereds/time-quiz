//  stop questions from cycling
// function to stop game itself
//  to add the timer
//  add decrement to timer when incorrect answer
// conditional statement for this
// todo add end time count to scoreboard
// local storage
// todo need reset button
// link meeeee
// todo high score
// separate html/javascript/css for hs page
// todo add to answer-me tag for correct/incorrect answer



// Create needed variables for questions/answers
// changed query selectorall to just selector because it functions towards all of them instead of just one
// remember to reference the activities and mini project
var quizMe = document.querySelector(".quiz-me");
var inTro = document.querySelector(".intro");
var startQuiz = document.querySelector(".start-button");
var quizHead = document.querySelector(".quiz");
var tronQuiz = document.querySelector("#intro-quiz");
var checkIt = document.querySelector(".checkit-out");
var timeMe = 75;
var clockIn;
var timeTravel = document.getElementById("timer");
var killMe = document.getElementById("quiz-begin");
var holdMe = document.getElementById("initials");
var score = [];
var submitToMe = document.getElementById("submit");
var finEnd = document.getElementById("Highscores")
var scoreMe;

finEnd.style.display = "none";
submitToMe.style.display = "none";
holdMe.style.display = "none";
// timeTravel.style.display = "none";

// We will need event listeners for the question/answer transition
// refer to event listener activities
// var quesOne = document.querySelector("quesOne");
submitToMe.addEventListener("click", saveScore)

quizHead.textContent = "Coding Quiz Challenge";
inTro.textContent = "Prepared to burn your brain out into mush? Try your knowledge with this data coding quiz. Choose wisely! For every incorrect answer, the timer will deduct 15 seconds."

var questLove =  [ 
  {
    quesTion: "What button logs the document object to the console?",
    ansWers: ["console.log(this);", "console.log(window.document);", "console.log( document.body);", "none of the above."],
    correctMe: "console.log(window.document);"
  },
  {
    quesTion: "Inside HTML, which element do we attach Javascript?",
    ansWers: ["<script>", "<footer>", "<header>", "all of the above"],
    correctMe: "<script>"
  },
  {
    quesTion: "How do you call a function named 'meMaybe?'",
    ansWers: ["call meMaybe()", "function meMaybe()", "meMaybe()", "both b and c"],
    correctMe: "meMaybe()"
  },
  {
    quesTion: "In what if statement is i NOT equal to 10?",
    ansWers: ["if (i > 10)", "if (i === 10)", "if (i != 10)", "if (i let you know)"],
    correctMe: "if (i != 10)"
  },
];

var currQuest = 0;
function startGame(){
  clockIn = setInterval(tickMeOff, 1000);
  var checkIt = document.querySelector(".checkit-out");
  quizMe.textContent = questLove[currQuest].quesTion;
  checkIt.innerHTML = "";
  tronQuiz.classList.add("hide-me");
  nextQuest();
  tickMeOff();
}

function endQuiz() {
  clearInterval(clockIn);
  scoreMe = timeMe;
  killMe.style.display = "none";
  finEnd.style.display = "block";
  holdMe.style.display = "block";
  submitToMe.style.display = "block";
  questLove.textContent = "Your score is " + score + " out of 100, with " + timeMe + " seconds left. Enter your initials and click submit to save your score!";
};
function tickMeOff() {
  timeMe--;
  timeTravel.textContent = "Time: " + timeMe;
  if (timeMe <= 0) {
    saveScore();
  }
}

function saveScore() {
  var initials = holdMe.value;
  score.push(["user: " + initials, "score: " + score, "time left: " + clockIn]);
  console.log(score);
  console.log('Score:', timeMe)
  if (timeMe > score) {
    score = timeMe;
    console.log("New High Score: ", score);
  }
  localStorage.setItem("High scores", JSON.stringify(score));
};


// add event listener to toggle from intro to first question
// need to make a for loop to cycle through ul array for ques/ans
// needs to be inside a function to start game
function nextQuest() {
  quizMe.textContent = "";
  checkIt.textContent = "";
  quizMe.textContent = questLove[currQuest].quesTion;
  for (i = 0; i <questLove[currQuest].ansWers.length; i++) {
    var checkList = document.querySelector(".checkit-out");
    var addMe = document.createElement("li");
    var hitMe = document.createElement("button");
    hitMe.addEventListener("click", function(event) {
      runotGlad(event)
    })
    hitMe.classList.add("hitMe");
    
    
    hitMe.textContent = questLove[currQuest].ansWers[i];
    
    checkList.appendChild(addMe);
    addMe.appendChild(hitMe);
  }
}
function nextQuestion() {
  if (currQuest < questLove.length -1) {
    currQuest++;
    nextQuest();
  } else {
    endQuiz();
  }
};

function runotGlad(event) {
  if (event.target.textContent == questLove[currQuest].correctMe) {
    nextQuestion() 
  } else {
    timeMe -= 15;
    nextQuestion();
  }
  
}


// attach items in the array to html to swap out easily


startQuiz.addEventListener("click", function(event) {
  startGame();
}
)

// write conditional statement to stop at the end of the array
// function to  stop game
// var firstChildUl = document.getElementById("first-child-ul");
// need to add buttons for answers








// },
// {
  
  
  
  // 
  
  // if (startQuiz) {
  //   firstQue.textContent = "What is an Array?";
  //   form.style.display = 'none';
  // }
  
  // function startQuest() {
//   isWin = false;
//   timerCount = 75;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   startTimer()
// }
// we will need set and clearInterval for timer
// we're gonna need if/else statements for the evilistener
// timer needs to decrease for every wrong answer, should these be apart of the if/else statements
