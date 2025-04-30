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

function getHumanChoice(){
    let humanChoice=prompt("Choose btwn rock ,paper or scissors :");
    return humanChoice;
}



function playRound(human,computer){
    if(human=="rock" && computer=="paper"){
        console.log("You Lose , Paper beats Rock.");
        computerScore++;
    }
    else if(human=="rock" && computer=="scissors"){
        console.log("You Win , Rock beats Scissors.");
        humanScore++;
    }
    else if(human=="paper" && computer=="rock"){
        console.log("You Win , Paper beats Rock.");
        humanScore++;
    }
    else if(human=="paper" && computer=="scissors"){
        console.log("You Lose , Scissors beats Paper.");
        computerScore++;
    }
    else if(human=="scissors" && computer=="rock"){
        console.log("You Lose , Rock beats Scissors.");
        computerScore++;
    }
    else if(human=="scissors" && computer=="paper"){
        console.log("You win , Scissors beats Paper.");
        humanScore++;
    }
    else{
        console.log("Tie!, Both took same.");
    }
}


function playGame(){
    for(let i=1; i<=5 ;i++){
        let computerSelection=getComputerChoice();
        let humanSelection=getHumanChoice();
       setTimeout( playRound(humanSelection,computerSelection),2000);
    }
}

function finalResult(){
    playGame();
    if(humanScore>computerScore){
        console.log(`You won the game! You: ${humanScore}, Computer: ${computerScore} `);
    }
    else if(humanScore<computerScore){
        console.log(`You Lose, Better Luck Next Time. You: ${humanScore}, Computer: ${computerScore}`)
    }else{
        console.log(`This game is tie!!! You: ${humanScore}, Computer: ${computerScore}`);
    }
}

finalResult();



