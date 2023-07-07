// Create needed variables for questions/answers
// changed query selectorall to just selector because it functions towards all of them instead of just one
// remember to reference the activities and mini project
var inTro = document.querySelector(".intro");
var startQuiz = document.querySelector(".start-button");
var quizHead = document.querySelector(".quiz")

// We will need event listeners for the question/answer transition
// refer to event listener activities
// var quesOne = document.querySelector("quesOne");

quizHead.textContent = "Coding Quiz Challenge";
inTro.textContent = "Prepared to burn your brain out into mush? Try your knowledge with this data coding quiz. Choose wisely! For every incorrect answer, the timer will deduct 15 seconds."

var questLove =  [ 
  {
  quesTion: "What button logs the document object to the console?",
  ansWers: ["console.log(this);", "console.log(window.document);", "console.log( document.body);", "none of the above."],
  correctMe: ansWers[1]
},
{
  quesTion: "Inside HTML, which element do we attach Javascript?",
  ansWers: ["<script>", "<footer>", "<header>", "all of the above"],
  correctMe: ansWers[0]
},
{
  quesTion: "How do you call a function named 'meMaybe?'",
  ansWers: ["call meMaybe()", "function meMaybe()", "meMaybe()", "both b and c"],
  correctMe: ansWers[2]
},
{
  quesTion: "In what if statement is i NOT equal to 10?",
  ansWers: ["if (i > 10)", "if (i === 10)", "if (i != 10)", "if (i let you know)"],
  correctMe: ansWers[2]
}
];


// add event listener to toggle from intro to first question

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
