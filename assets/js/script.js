/*Deck*/
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

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

//Create div for score computer

let computerscorediv = document.createElement('div');
computerscorediv.id = 'computerscore';
computerscorediv.innerHTML = 0;
document.getElementById('gamearea').appendChild(computerscorediv);


/*Create a div for computersgamearea*/

let computergameareainnerdiv = document.createElement('div');
computergameareainnerdiv.className = 'computerscardgamearea';
computergameareainnerdiv.id = 'computersplace';
//Append div to gamearea
document.getElementById('gamearea').appendChild(computergameareainnerdiv);

/*Create a div for playersgamearea*/

let playergameareainnerdiv = document.createElement('div');
playergameareainnerdiv.className = 'computerscardgamearea';
playergameareainnerdiv.id = 'playersplace';
//Append div to gamearea
document.getElementById('gamearea').appendChild(playergameareainnerdiv);

//Create div for score player

let playerscorediv = document.createElement('div');
playerscorediv.id = 'playerscore';
playerscorediv.innerHTML = 0;
document.getElementById('gamearea').appendChild(playerscorediv);


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
    btn.addEventListener("click", function() {
      let cardValue = this.dataset.card;
      this.remove();
      moveplayerscardtogamearea(cardValue);
    });
});

//Move player's card to gamearea

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

  let computersCardToRemove = document.querySelector(`.computerscard[data-card="${computersChoice}"]`);  // tempalte literal
  // let computersCardToRemove = document.querySelector(".computerscard[data-card='" + computersChoice + "']");
  console.log(computersCardToRemove);
  computersCardToRemove.remove();

  //Computers hand after playing the card
  console.log(computershand);

  let playersPlace = document.getElementById("playersplace");
  playersPlace.innerText = playersCardValue;

    //Comparison

    if (playersCardValue < computersChoice) {
      // computer wins
      computerscorediv.innerHTML++;
    } else if (playersCardValue > computersChoice) {
      // player wins
      playerscorediv.innerHTML++;
    }
  
}
