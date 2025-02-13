//my first js project i am very excited while writing it:
let userscore = 0;
let compscore = 0;
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const gencomputerchoice = () => {
  const options = ["rock", "paper", "Scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const msg = document.querySelector("#msg");
const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userScore.innerText = userscore;
    msg.innerText = `you win! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScore.innerText = compscore;
    msg.innerText = `you lose ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawGame = () => {
  msg.innerText = "game was draw,play again";
  msg.style.backgroundColor = "purple";
};
const playGame = (userchoice) => {
  const compchoice = gencomputerchoice();
  if (userchoice === compchoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "Scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
