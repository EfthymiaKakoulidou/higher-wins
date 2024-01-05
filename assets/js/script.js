/*Deck*/
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12,];

/*Shuffle Cards with the Fischer Yates algorithm*/
var i = cards.length,
  j, temp;
while (--i > 0) {
  j = Math.floor(Math.random() * (i + 1));
  temp = cards[j];
  cards[j] = cards[i];
  cards[i] = temp;
}
console.log(cards);

/*Deal Cards*/
const computershand = cards.slice(8, 16);
console.log(computershand);
const playershand = cards.slice(0, 8);
console.log(playershand);
const pile = cards.slice(16, 24);
console.log(pile);

/*Create a div for every card of player's hand*/

for (i = 0; i < playershand.length; i++) {
  playerinnerdiv = document.createElement('div');
  playerinnerdiv.className = 'playerinnerdiv';
  playerinnerdiv.innerHTML = playershand[i];
  playerinnerdiv.dataset.card = playershand[i];
  //Append those divs to playerarea
  document.getElementById('playersareaold').appendChild(playerinnerdiv);
}

//Make lowest card blink
let lowest = Math.min(...playershand);
let lowestBlink = document.querySelector(`.playerinnerdiv[data-card="${lowest}"]`);
lowestBlink.style.backgroundColor = "rgb(212, 121, 180)";
lowestBlink.style.transition = "background 1s";

/*Create a div for every item in the array of computer's hand*/

for (i = 0; i < computershand.length; i++) {
  let computerinnerdiv = document.createElement('div');
  computerinnerdiv.className = 'computerscard';
  computerinnerdiv.innerHTML = computershand[i];
  computerinnerdiv.id = 'computershand-' + i;
  computerinnerdiv.dataset.card = computershand[i];
  //Append those divs to computerarea
  document.getElementById('computerarea').appendChild(computerinnerdiv);
}

/*Create a div for every item in the array of pile*/

for (i = 0; i < pile.length; i++) {
  let pileButton = document.createElement('button');
  pileButton.className = 'pilecard';
  pileButton.innerHTML = pile[i];
  pileButton.id = 'pile-' + i;
  pileButton.dataset.card = pile[i];
  //Append divs to pile-cards
document.getElementById('pile-cards').appendChild(pileButton);

}
document.getElementById('pile-0').innerHTML = 'Click Here To Replace Card';

//Create div for score computer

let computerScoreSpan = document.createElement('span');
computerScoreSpan.id = 'computerscore';
computerScoreSpan.innerHTML = 0;
let computerScoreDiv = document.createElement('div');
computerScoreDiv.id = 'computerscoretext';
computerScoreDiv.innerText = "Computer's Score:";
computerScoreDiv.appendChild(computerScoreSpan);
document.getElementById('gamearea').appendChild(computerScoreDiv);

/*Create a div for computersgamearea*/

let computergameareainnerdiv = document.createElement('div');
computergameareainnerdiv.className = 'computerscardgamearea';
computergameareainnerdiv.id = 'computersplace';
computergameareainnerdiv.innerText= 'C';
//Append div to gamearea
document.getElementById('gamearea').appendChild(computergameareainnerdiv);

/*Create a div for playersgamearea*/

let playergameareainnerdiv = document.createElement('div');
playergameareainnerdiv.className = 'computerscardgamearea';
playergameareainnerdiv.id = 'playersplace';
playergameareainnerdiv.innerText= 'You';
//Append div to gamearea
document.getElementById('gamearea').appendChild(playergameareainnerdiv);

//Create div for score player

let playerScoreSpan = document.createElement('span');
playerScoreSpan.id = 'playerscore';
playerScoreSpan.innerHTML = 0;
let playerScoreDiv = document.createElement('div');
playerScoreDiv.id = 'playerscoretext';
playerScoreDiv.innerText = "Your score:";
playerScoreDiv.appendChild(playerScoreSpan);
document.getElementById('gamearea').appendChild(playerScoreDiv);

function refresh(){
  window.location.reload();
}

//Hide gamearea
function youWin(){
  document.getElementById("main").innerHTML = "You Win!"
  document.getElementById("main").style.color = "rgb(212, 121, 180)"
  playAgain = document.createElement("button");
  playAgain.innerHTML="Play Again";
  playAgain.id="play-again"
  playAgain.addEventListener("click", refresh);
  document.getElementById("main").appendChild(playAgain);
}
function computerWins(){
  document.getElementById("main").innerHTML = "Computer Wins!"
  document.getElementById("main").style.color = "rgb(113, 206, 220)"
  playAgain = document.createElement("button");
  playAgain.innerHTML="Play Again";
  playAgain.id="play-again"
  playAgain.addEventListener("click", refresh);
  document.getElementById("main").appendChild(playAgain);
}
function itsAtie(){
  document.getElementById("main").innerHTML = "It's a tie!"
  playAgain = document.createElement("button");
  playAgain.innerHTML="Play Again";
  playAgain.id="play-again"
  playAgain.addEventListener("click", refresh);
  document.getElementById("main").appendChild(playAgain);
}

//Take the first card of the pile and place it to player's hand lowest card
//Then hide the window with remainingcards

document.getElementById("pile-0").addEventListener("click", hideOldPlayershand);
document.getElementById("pile-0").addEventListener("click", hidePilecard);
document.getElementById("pile-0").addEventListener("click", replaceAndPlay);

//Hide initial player's hand
function hideOldPlayershand(){
  document.getElementById('playersareaold').remove()
}

//If the player choses No start the game
document.getElementById("no").addEventListener("click", hideReplaceWindow);
document.getElementById("no").addEventListener("click", hideOldPlayershand);
document.getElementById("no").addEventListener("click", play);

function hideReplaceWindow(){
  document.getElementById('pile-cards').style.visibility = 'hidden'
}

function hidePilecard(){
  document.getElementById("pile-0").remove()
  let newPile = pile.splice(0, 1);
  console.log(newPile);
  console.log(pile);
  if (pile.length == 7) {
  setTimeout(hideReplaceWindow,500)
}
}

//Replace player's lowest card

function replaceAndPlay(){

//Find lowest card in players' hand
let index = Math.min(...playershand);

//Find place of lowest card in players' hand
let placeOfIndex = playershand.indexOf(index);
console.log(index);
console.log(placeOfIndex);
//Replace player's card with pile's card

playershand[placeOfIndex]=pile[0];

console.log(playershand);

/*Create buttons for every item in players hand*/

for (i = 0; i < playershand.length; i++) {
  button = document.createElement('button');
  button.className = 'button';
  button.id = 'playershand-' + i;
  button.innerHTML = playershand[i];
  button.dataset.card = playershand[i];
  //Append those divs to playerarea
  document.getElementById('playersarea').appendChild(button);
}

//Take out the player's choice from player's hand

const playerBtns = document.querySelectorAll(".button");

playerBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let cardValue = this.dataset.card;
    this.style.visibility = "hidden";
    moveplayerscardtogamearea(cardValue);

    //Playershand after playing the card
    console.log(playershand);

    if (computershand.length == 0 && playerScoreSpan.innerHTML > computerScoreSpan.innerHTML) {
      setTimeout(youWin,500);
    }

    if (computershand.length == 0 && playerScoreSpan.innerHTML < computerScoreSpan.innerHTML) {
      setTimeout(computerWins,500);
    }

    if (computershand.length == 0 && playerScoreSpan.innerHTML == computerScoreSpan.innerHTML) {
      setTimeout(itsAtie,500);
    }

  });

});


//Move player's and computer's card to gamearea

function moveplayerscardtogamearea(playersCardValue) {

  //Computers random choice

  const computersChoice = computershand[Math.floor(Math.random() * computershand.length)];
  console.log(computersChoice);

  //Move computer's choice to gamearea
  document.getElementById("computersplace").innerHTML = computersChoice;

  //Specify the place of the card randomly chosen
  let computersChoicePlace = computershand.indexOf(computersChoice);
  console.log(computersChoicePlace);
  //Remove computer's card from computer's hand
  let computerscardchoice = computershand.splice(computersChoicePlace, 1);
  console.log(computerscardchoice);

  let computersCardToRemove = document.querySelector(`.computerscard[data-card="${computersChoice}"]`);
  computersCardToRemove.style.visibility = "hidden";
  computersCardToRemove.removeAttribute("data-card");

  //Computers hand after playing the card
  console.log(computershand);

  let playersPlace = document.getElementById("playersplace");
  playersPlace.innerText = playersCardValue;

  //Comparison

  if (playersCardValue < computersChoice) {
    // Computer wins
    computerScoreSpan.innerHTML++;
  } else if (playersCardValue > computersChoice) {
    // Player wins
    playerScoreSpan.innerHTML++;
  }

}}

function play(){

  /*Create buttons for every item in players hand*/
  
  for (i = 0; i < playershand.length; i++) {
    button = document.createElement('button');
    button.className = 'button';
    button.id = 'playershand-' + i;
    button.innerHTML = playershand[i];
    button.dataset.card = playershand[i];
    //Append those divs to playerarea
    document.getElementById('playersarea').appendChild(button);
  }
  
  //Take out the player's choice from player's hand
  
  const playerBtns = document.querySelectorAll(".button");
  
  playerBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      let cardValue = this.dataset.card;
      this.style.visibility = "hidden";
      moveplayerscardtogamearea(cardValue);
  
      //Playershand after playing the card
      console.log(playershand);
  
      if (computershand.length == 0 && playerScoreSpan.innerHTML > computerScoreSpan.innerHTML) {
        setTimeout(youWin,500);
      }
  
      if (computershand.length == 0 && playerScoreSpan.innerHTML < computerScoreSpan.innerHTML) {
        setTimeout(computerWins,500);
      }
  
      if (computershand.length == 0 && playerScoreSpan.innerHTML == computerScoreSpan.innerHTML) {
        setTimeout(itsAtie,500);
      }
  
    });
  
  });
  
  
  //Move player's and computer's card to gamearea
  
  function moveplayerscardtogamearea(playersCardValue) {
  
    //Computers random choice
  
    const computersChoice = computershand[Math.floor(Math.random() * computershand.length)];
    console.log(computersChoice);
  
    //Move computer's choice to gamearea
    document.getElementById("computersplace").innerHTML = computersChoice;
  
    //Specify the place of the card randomly chosen
    let computersChoicePlace = computershand.indexOf(computersChoice);
    console.log(computersChoicePlace);
    //Remove computer's card from computer's hand
    let computerscardchoice = computershand.splice(computersChoicePlace, 1);
    console.log(computerscardchoice);
  
    let computersCardToRemove = document.querySelector(`.computerscard[data-card="${computersChoice}"]`);
    computersCardToRemove.style.visibility = "hidden";
    computersCardToRemove.removeAttribute("data-card");
  
    //Computers hand after playing the card
    console.log(computershand);
  
    let playersPlace = document.getElementById("playersplace");
    playersPlace.innerText = playersCardValue;
  
    //Comparison
  
    if (playersCardValue < computersChoice) {
      // Computer wins
      computerScoreSpan.innerHTML++;
    } else if (playersCardValue > computersChoice) {
      // Player wins
      playerScoreSpan.innerHTML++;
    }
  
  }}