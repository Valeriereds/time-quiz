var rateMe = document.getElementById("highscore-list");
var highScores = scoreSheet.length;
var scoreSheet = [];
//copy script 1 hs formula
function highList() {
    console.log(scoreSheet)
    for (var i = 0; i < scoreSheet.length; i++) {
        var highScores = scoreSheet[i];
        var li = document.createElement("li");
        li.textContent = highScores.Initials + " your score is " + highScores.Score + " out of 4";
        rateMe.appendChild(li);
    }
}
function showNtell() {
    var viewMe = JSON.parse(localStorage.getItem("Highscores"));
    if (viewMe != null) {
        scoreSheet = viewMe;
    }
    highList()
}
showNtell()