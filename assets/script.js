// todo stop questions from cycling
// todo function to stop game itself
// todo to add the timer
// todo add decrement to timer when incorrect answer
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
var quizHead = document.querySelector(".quiz")
var tronQuiz = document.querySelector("#intro-quiz")
var checkIt = document.querySelector(".checkit-out");
var timeMe = 75;
var clockIn;
var timeTravel = document.getElementById("timer")
// We will need event listeners for the question/answer transition
// refer to event listener activities
// var quesOne = document.querySelector("quesOne");

function tickMeOff() {
  timeMe--;
  timeTravel.textContent = "Time: " + timeMe;
  // if (timeMe <= 0) {
  //     // saveScore();
  // }
}


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
    var hitMe = document.createElement("button")
    hitMe.addEventListener("click", function(event) {
      runotGlad(event)
    })
    hitMe.classList.add("hitMe");
    
    
    hitMe.textContent = questLove[currQuest].ansWers[i];
    
    checkList.appendChild(addMe);
    addMe.appendChild(hitMe);
  }
}

function runotGlad(event) {
  if (event.target.textContent == questLove[currQuest].correctMe) {
    currQuest++;
    nextQuest() 
  } else {

  }
}


// attach items in the array to html to swap out easily
function startGame(){
clockIn = setInterval(tickMeOff, 1000);
var checkIt = document.querySelector(".checkit-out");
quizMe.textContent = questLove[currQuest].quesTion;
checkIt.innerHTML = "";
tronQuiz.classList.add("hide-me");
nextQuest();
tickMeOff();
}


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
//     q: "What is the capital of Thailand?",
//     a: [{ text: "Lampang", isCorrect: false, isSelected: false },
//     { text: "Phuket", isCorrect: false },
//     { text: "Ayutthaya", isCorrect: false },
//     { text: "Bangkok", isCorrect: true }
//     ]
 
//   },
//   {
//     q: "What is the capital of Gujarat",
//     a: [{ text: "Surat", isCorrect: false },
//     { text: "Vadodara", isCorrect: false },
//     { text: "Gandhinagar", isCorrect: true },
//     { text: "Rajkot", isCorrect: false }
//     ]
    
//   }
// ]

  
  
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
