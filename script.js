let userScore = 0;
let computerScore = 0;
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#uscore");
const cscore = document.querySelector("#cscore");

const choices = document.querySelectorAll(".choice");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    // console.log(options[Math.floor(Math.random() * 3)]);
    return (options[Math.floor(Math.random() * 3)]);
}

const drawGame = (userChoice) => {
    console.log("Game was draw");
    msg.innerText = `Game was draw. Both selected ${userChoice}`;
    msg.style.background = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin)
        {
            console.log("You won!");
            msg.innerText = `You Won!! Your ${userChoice} defeated computer's ${computerChoice}`;
            msg.style.background = "green";
            msg.style.color = "white";
            userScore++;
            uscore.innerText = userScore;
        }
        else
        {
            console.log("You lost");
            msg.innerText = `You Lost. Computer's ${computerChoice} defeated your ${userChoice}`;
            msg.style.background = "red";
            computerScore++;
            cscore.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);

    //Generate computer's choice
    const computerChoice = generateComputerChoice();
    console.log("computer choice: ",computerChoice);

    //Check winner
    if(userChoice === computerChoice)
    {
        // userScore++;
        // document.querySelector("#yscore").innerText = userScore;
        drawGame(userChoice);
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            if(computerChoice === "paper")
            {
                userWin = false;
            }
            else
            {
                userWin = true;
            }
        }
        else if(userChoice === "paper")
        {
            if(computerChoice === "scissor")
            {
                userWin = false;
            }
            else
            {
                userWin = true;
            }
        }
        else
        {
            if(computerChoice === "rock")
            {
                userWin = false;
            }
            else
            {
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})