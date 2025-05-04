let humanScore=0, computerScore=0;
function getComputerChoice(){
    let rand=Math.floor(Math.random()*3);
    let randChoice;
    if(rand===0){
       randChoice="rock";
    }
    else if(rand==1){
        randChoice="paper";
    }
    else{
       randChoice="scissors";
    }

    return randChoice;
}


function playRound(human){
    let computer=getComputerChoice();
    if(human=="rock" && computer=="paper"){
        result.textContent="You Lose , Paper beats Rock.";
        score.textContent=`You: ${humanScore} Computer: ${++computerScore}`;
    }
    else if(human=="rock" && computer=="scissors"){
        result.textContent="You Win , Rock beats Scissors.";
        score.textContent=`You: ${++humanScore} Computer: ${computerScore}`;
    }
    else if(human=="paper" && computer=="rock"){
        result.textContent="You Win , Paper beats Rock.";
        score.textContent=`You: ${++humanScore} Computer: ${computerScore}`;
    }
    else if(human=="paper" && computer=="scissors"){
        result.textContent="You Lose , Scissors beats Paper.";
        score.textContent=`You: ${humanScore} Computer: ${++computerScore}`;
    }
    else if(human=="scissors" && computer=="rock"){
        result.textContent="You Lose , Rock beats Scissors.";
        score.textContent=`You: ${humanScore} Computer: ${++computerScore}`;
    }
    else if(human=="scissors" && computer=="paper"){
        result.textContent="You win , Scissors beats Paper.";
        score.textContent=`You: ${++humanScore} Computer: ${computerScore}`;
    }
    else{
        result.textContent="Tie!, Both took same.";
    }

    if(humanScore==5 || computerScore==5){
        over.textContent="GAME OVER";
        winner.textContent=(humanScore==5) ? "You Won the game, Congrats!!"
                                            : "Computer won, Better luck next time.";
    }
    
}

const btnRock=document.querySelector("#rock-btn");
const btnPaper=document.querySelector("#paper-btn");
const btnScissors=document.querySelector("#scissors-btn");
const score = document.querySelector("#score-display");
const final=document.querySelector("#final");
const result = document.querySelector("#result-game");
const over = document.createElement("h3");
final.appendChild(over);
const winner = document.createElement("p");
final.appendChild(winner);


btnRock.addEventListener("click",()=>playRound(btnRock.value));
btnPaper.addEventListener("click",()=>playRound(btnPaper.value));
btnScissors.addEventListener("click",()=>playRound(btnScissors.value));






