let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara =  document.querySelector("#user-score");
const compScorePara =  document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, paper, scissore
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#081b31"
};


const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, papers
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper" ){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

