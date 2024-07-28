let random=parseInt((Math.random()*100)+1)
// console.log(random)
const userInput=document.querySelector("#guessField");
const previousguess=document.querySelector(".guesses")
const submitButton=document.querySelector("#subt")
const guessRemaining=document.querySelector(".lastResult")
const lowHi=document.querySelector(".lowOrHi")
const startover=document.querySelector(".resultParas")

const p=document.createElement("p");

let prevguess=[]
let guessNUm=1;

let playgame=true;

if(playgame){
    submitButton.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number");
    }
    else if(guess<1){
        alert("please enter number greater than 0");
    }
    else if(guess>100){
        alert("please enter number less than 100");
    }
    else{
        prevguess.push(guess);
        if(guessNUm===11){
            displayGuess(guess);
            displayMessage(`GAME OVER.random number was ${random}`);
            endGame();
        } 
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){

    if(guess===random){
        displayMessage(`your guess is right`);
        endGame();
    }
    else if(guess<random){
        displayMessage(`Number is low try again!`);
    }
    else if(guess>random){
        displayMessage(`Number is high try again!`);

    }
}

function displayGuess(guess){
    userInput.value="";
    previousguess.innerHTML+=`${guess}  `;
    guessNUm++;
    guessRemaining.innerHTML=`${11-guessNUm}`;


}

function displayMessage(message){
    lowHi.innerHTML=`<h2>${message}</h2>`;

}

function endGame(){
    userInput.value="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML=`<h2 id="newGame">start New game</h2>`;
    startover.appendChild(p);
    playgame=false;
    newGame();

}

function newGame(){
    const newGameButton=document.querySelector("#newGame");
    newGameButton.addEventListener("click",function(e){
        random=parseInt((Math.random()*100)+1);
        prevguess=[];
        guessNUm=1;
        previousguess.innerHTML="";
        guessRemaining.innerHTML=`${11-guessNUm}`;
        userInput.removeAttribute("disabled");
        startover.removeChild(p);
        playgame=true;

    });


}



