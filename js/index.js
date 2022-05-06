// getDOM
const showResult = document.querySelector(".result > p");
const humanScore = document.querySelector("#human-score");
const botScore = document.querySelector("#bot-score");

const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");

// Assign value in getBotChoice to botChoice
const botChoice = getBotChoice();

function getHumanChoice() {
    scissors.addEventListener("click", function () {
        humanChoice("scissors");
    });

    rock.addEventListener("click", function () {
        humanChoice("rock")
    });

    paper.addEventListener("click", function () {
        humanChoice("paper")
    });
}
getHumanChoice()

function getBotChoice() {
    const botChoice = ["scissors-bot", "rock-bot", "paper-bot"];
    const randomNumber = Math.floor(Math.random() * 3);

    return botChoice[randomNumber];
}

function humanChoice(humnaChoice) {
    switch (humnaChoice + botChoice) {
        case "rockscissors-bot":
        case "paperrock-bot":
        case "scissorspaper-bot":
            win(humnaChoice, botChoice);
            break;
        case "scissorsrock-bot":
        case "rockpaper-bot":
        case "paperscissors-bot":
            lose(humnaChoice, botChoice);
            break;
        case "rockrock-bot":
        case "paperpaper-bot":
        case "scissorsscissors-bot":
            draw(humnaChoice, botChoice);
            break;
    }
}

function win(humnaChoice, botChoice) {
    showResult.innerHTML = `Bạn Thắng! ${convertKeyWords(humnaChoice)} ăn ${convertKeyWords(botChoice)}`;
    humanScore.innerHTML = Number(humanScore.innerHTML) + 1;
}

function lose(humanChoice, botChoice) {
    showResult.innerHTML = `Bạn Thua! ${convertKeyWords(humanChoice)} thua ${convertKeyWords(botChoice)}`;
    botScore.innerHTML = Number(botScore.innerHTML) + 1;
}

function draw(humanChoice, botChoice) {
    showResult.innerHTML = `Huề rồi! ${convertKeyWords(humanChoice)} huề ${convertKeyWords(botChoice)}`;
}

//convert to Vietnamese
function convertKeyWords(letter) {
    if (letter === "rock") return "Búa";
    if (letter === "paper") return "Bao";
    return "Kéo"
}

// 
let dropDowns = Array.from(document.querySelectorAll(".choice"));

const handleClick = (e) => {
  e.preventDefault();
  dropDowns.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
}

dropDowns.forEach(node => {
  node.addEventListener('click', handleClick)
});