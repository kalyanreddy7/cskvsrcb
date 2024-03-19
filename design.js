var teamAName = "CSK";
var teamBName = "RCB";
var teamAScore = 0;
var teamBScore = 0;

function generateRandomScore() {
    return Math.floor(Math.random() * 7);
}

function generateScores() {
    var teamAScoreThisBall = generateRandomScore();
    var teamBScoreThisBall = generateRandomScore();

    teamAScore += teamAScoreThisBall;
    teamBScore += teamBScoreThisBall;

    var scoresDiv = document.getElementById("scores");
    scoresDiv.innerHTML += teamAName + ": " + teamAScoreThisBall + " | " + teamBName + ": " + teamBScoreThisBall + "<br>";
}

function declareWinner() {
    var winner;
    if (teamAScore > teamBScore) {
        winner = teamAName;
    } else if (teamBScore > teamAScore) {
        winner = teamBName;
    } else {
        winner = "It's a tie!";
    }
    document.getElementById("winner7").textContent = "winner= "+ winner +"";
   
}

document.getElementById("generateScoreBtn").addEventListener("click", generateScores);
document.getElementById("declareWinnerBtn").addEventListener("click", declareWinner);