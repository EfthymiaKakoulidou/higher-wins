/* jshint esversion: 11, jquery: true */

/*Deck*/
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ];

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

//Computer's hand

const computershand = cards.slice(8, 16);

//Player's hand

const playershand = cards.slice(0, 8);

//Remaining cards

const pile = cards.slice(16, 24);

//Function which refreshes the page
function refresh() {
  window.location.reload();
}

/*Create a div for every card of player's hand*/

for (i = 0; i < playershand.length; i++) {
  let playerinnerdiv = document.createElement('div');
  playerinnerdiv.className = 'playerinnerdiv';
  playerinnerdiv.innerHTML = playershand[i];
  playerinnerdiv.dataset.card = playershand[i];
  //Append those divs to playerarea
  document.getElementById('playersareaold').appendChild(playerinnerdiv);
}

//Find the lowest card of the remaining cards and asign functions to it

let lowest = Math.min(...playershand);
let lowestBlink = document.querySelector(`.playerinnerdiv[data-card="${lowest}"]`);
lowestBlink.setAttribute('class', 'blink');
lowestBlink.addEventListener('click', replaceAndPlay);
lowestBlink.addEventListener('click', hideOldPlayershand);
lowestBlink.addEventListener('click', hidePilecard);
lowestBlink.addEventListener('click', hideReplaceWindow);

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

let marginLeft = 0;
for (i = 0; i < pile.length; i++) {
  let pileButton = document.createElement('button');
  pileButton.className = 'pilecard';
  pileButton.innerHTML = pile[i];
  pileButton.id = 'pile-' + i;
  pileButton.dataset.card = pile[i];
  pileButton.style.marginLeft = "-" + marginLeft + "px";
  pileButton.style.zIndex = "-" + marginLeft;
  marginLeft += 5;
  //Append divs to pile-cards
  document.getElementById('pile-cards-group').appendChild(pileButton);
}
//Add text to the first card of the remaining cards
document.getElementById('pile-0').innerHTML = 'Click Here To Replace Card';

//Create divs for the score of the computer

let computerScoreSpan = document.createElement('span');
computerScoreSpan.id = 'computerscore';
computerScoreSpan.innerHTML = 0;
let computerScoreDiv = document.createElement('div');
computerScoreDiv.id = 'computerscoretext';
computerScoreDiv.innerText = "Computer's Score:";
computerScoreDiv.appendChild(computerScoreSpan);
document.getElementById('gamearea').appendChild(computerScoreDiv);

/*Create a div for the place where the computer plays*/

let computergameareainnerdiv = document.createElement('div');
computergameareainnerdiv.className = 'computerscardgamearea';
computergameareainnerdiv.id = 'computersplace';
computergameareainnerdiv.innerText = 'C';
//Append div to gamearea
document.getElementById('gamearea').appendChild(computergameareainnerdiv);

/*Create a div for the place where the player plays*/

let playergameareainnerdiv = document.createElement('div');
playergameareainnerdiv.className = 'computerscardgamearea';
playergameareainnerdiv.id = 'playersplace';
playergameareainnerdiv.innerText = 'You';
//Append div to gamearea
document.getElementById('gamearea').appendChild(playergameareainnerdiv);

//Create divs for the score of the player

let playerScoreSpan = document.createElement('span');
playerScoreSpan.id = 'playerscore';
playerScoreSpan.innerHTML = 0;
let playerScoreDiv = document.createElement('div');
playerScoreDiv.id = 'playerscoretext';
playerScoreDiv.innerText = "Your score:";
playerScoreDiv.appendChild(playerScoreSpan);
document.getElementById('gamearea').appendChild(playerScoreDiv);

//If the player chooses not replace the lowest card

document.getElementById("no").addEventListener("click", hideReplaceWindow);
document.getElementById("no").addEventListener("click", hideOldPlayershand);
document.getElementById("no").addEventListener("click", play);
document.getElementById("no").addEventListener("click", hidePilecard);

//If the player chooses to replace the lowest card

document.getElementById("pile-0").addEventListener("click", hideOldPlayershand);
document.getElementById("pile-0").addEventListener("click", hidePilecard);
document.getElementById("pile-0").addEventListener("click", replaceAndPlay);
document.getElementById("pile-0").addEventListener("click", hideReplaceWindow);

//Functions executed in both cases

//Hide divs for the player's hand

function hideOldPlayershand() {
  document.getElementById('playersareaold').remove();
}

//Hide window with the option to replace the lowest card

function hideReplaceWindow() {
  document.getElementById('pile-cards').style.visibility = 'hidden';
}

//Remove the first card of the pile with the remaining cards

function hidePilecard() {
  document.getElementById("pile-0").remove();
  let newPile = pile.splice(0, 1);
}

//If the player chooses to replace the lowest card

function replaceAndPlay() {

  //Find lowest card in players' hand

  let index = Math.min(...playershand);

  //Find place of lowest card in players' hand

  let placeOfIndex = playershand.indexOf(index);

  //Replace player's card with pile's card

  playershand[placeOfIndex] = pile[0];

  /*Create buttons for the player's hand*/

  for (i = 0; i < playershand.length; i++) {
    let button = document.createElement('button');
    button.className = 'button';
    button.id = 'playershand-' + i;
    button.innerHTML = playershand[i];
    button.dataset.card = playershand[i];
    //Append those divs to playerarea
    document.getElementById('playersarea').appendChild(button);
  }

  //Take out the player's choice from the player's hand

  const playerBtns = document.querySelectorAll(".button");

  playerBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      let cardValue = this.dataset.card;
      this.style.visibility = "hidden";
      moveCardsToGameArea(cardValue);

      //Result pages

      if (computershand.length == 0 && playerScoreSpan.innerHTML > computerScoreSpan.innerHTML) {
        setTimeout(youWin, 500);
      }

      if (computershand.length == 0 && playerScoreSpan.innerHTML < computerScoreSpan.innerHTML) {
        setTimeout(computerWins, 500);
      }

      if (computershand.length == 0 && playerScoreSpan.innerHTML == computerScoreSpan.innerHTML) {
        setTimeout(itsAtie, 500);
      }

    });

  });


  //Move player's and computer's card to gamearea

  function moveCardsToGameArea(playersCardValue) {

    //Computers random choice

    const computersChoice = computershand[Math.floor(Math.random() * computershand.length)];

    //Move computer's card to the place in the game-area where the computer plays

    document.getElementById("computersplace").innerHTML = computersChoice;

    //Specify the place of the card randomly chosen

    let computersChoicePlace = computershand.indexOf(computersChoice);

    //Remove computer's card from computer's hand and get the new reduced computer's hand

    let computerscardchoice = computershand.splice(computersChoicePlace, 1);

    //Hide computer's card and remove its value

    let computersCardToRemove = document.querySelector(`.computerscard[data-card="${computersChoice}"]`);
    computersCardToRemove.style.visibility = "hidden";
    computersCardToRemove.removeAttribute("data-card");

    //Move player's card to the place in the game-area where the player plays

    let playersPlace = document.getElementById("playersplace");
    playersPlace.innerText = playersCardValue;

    //Compare the cards played

    if (playersCardValue < computersChoice) {
      // Computer wins
      computerScoreSpan.innerHTML++;
    } else if (playersCardValue > computersChoice) {
      // Player wins
      playerScoreSpan.innerHTML++;
    }

  }
}

//If the player chooses not to replace the lowest card

function play() {

  /*Create buttons for every item in player's hand*/

  for (i = 0; i < playershand.length; i++) {
    let button = document.createElement('button');
    button.className = 'button';
    button.id = 'playershand-' + i;
    button.innerHTML = playershand[i];
    button.dataset.card = playershand[i];
    //Append those divs to playerarea
    document.getElementById('playersarea').appendChild(button);
  }

  //Take out the player's choice from the player's hand

  const playerBtns = document.querySelectorAll(".button");

  playerBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      let cardValue = this.dataset.card;
      this.style.visibility = "hidden";
      moveCardsToGameArea(cardValue);

      //Result pages

      if (computershand.length == 0 && playerScoreSpan.innerHTML > computerScoreSpan.innerHTML) {
        setTimeout(youWin, 500);
      }

      if (computershand.length == 0 && playerScoreSpan.innerHTML < computerScoreSpan.innerHTML) {
        setTimeout(computerWins, 500);
      }

      if (computershand.length == 0 && playerScoreSpan.innerHTML == computerScoreSpan.innerHTML) {
        setTimeout(itsAtie, 500);
      }

    });

  });


  //Move player's and computer's card to gamearea

  function moveCardsToGameArea(playersCardValue) {

    //Computers random choice

    const computersChoice = computershand[Math.floor(Math.random() * computershand.length)];
    console.log(computersChoice);

    //Move computer's choice to gamearea

    document.getElementById("computersplace").innerHTML = computersChoice;

    //Specify the place of the card randomly chosen

    let computersChoicePlace = computershand.indexOf(computersChoice);
    console.log(computersChoicePlace);

    //Remove computer's card from computer's hand and get the new computer's hand

    let computerscardchoice = computershand.splice(computersChoicePlace, 1);
    console.log(computerscardchoice);

    //Hide computer's card and remove its value

    let computersCardToRemove = document.querySelector(`.computerscard[data-card="${computersChoice}"]`);
    computersCardToRemove.style.visibility = "hidden";
    computersCardToRemove.removeAttribute("data-card");

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

  }
}

//Function executed when the player wins

function youWin() {
  document.getElementById("main").innerHTML = "You Win!";
  document.getElementById("main").style.color = "rgb(212, 121, 180)";
  let playAgain = document.createElement("button");
  playAgain.innerHTML = "Play Again";
  playAgain.id = "play-again";
  playAgain.addEventListener("click", refresh);
  document.getElementById("main").appendChild(playAgain);
}

//Function executed when the computer wins

function computerWins() {
  document.getElementById("main").innerHTML = "Computer Wins!";
  document.getElementById("main").style.color = "rgb(113, 206, 220)";
  let playAgain = document.createElement("button");
  playAgain.innerHTML = "Play Again";
  playAgain.id = "play-again";
  playAgain.addEventListener("click", refresh);
  document.getElementById("main").appendChild(playAgain);
}

//Function executed when it is a tie

function itsAtie() {
  document.getElementById("main").innerHTML = "It's a tie!";
  let playAgain = document.createElement("button");
  playAgain.innerHTML = "Play Again";
  playAgain.id = "play-again";
  playAgain.addEventListener("click", refresh);
  document.getElementById("main").appendChild(playAgain);
}