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
  computerinnerdiv.id = 'computershand-' + i + '';
  //Append those divs to computerarea
  document.getElementById('computerarea').appendChild(computerinnerdiv);
}

//Create div for score computer

let computerscorediv = document.createElement('div');
computerscorediv.id = 'computerscore';
document.getElementById('gamearea').appendChild(computerscorediv);


/*Create a div for computersgamearea*/

let computergameareainnerdiv = document.createElement('div');
computergameareainnerdiv.className = 'computerscardgamearea';
computergameareainnerdiv.innerHTML = '';
computergameareainnerdiv.id = 'computersplace';
//Append div to gamearea
document.getElementById('gamearea').appendChild(computergameareainnerdiv);

/*Create a div for playersgamearea*/

let playergameareainnerdiv = document.createElement('div');
playergameareainnerdiv.className = 'computerscardgamearea';
playergameareainnerdiv.innerHTML = '';
playergameareainnerdiv.id = 'playersplace';
//Append div to gamearea
document.getElementById('gamearea').appendChild(playergameareainnerdiv);

//Create div for score player

let playerscorediv = document.createElement('div');
playerscorediv.id = 'playerscore';
playerscorediv.innerHTML = 'Your score is ' + '0';
document.getElementById('gamearea').appendChild(playerscorediv);


/*Create buttons for every item in players hand*/

for (i = 0; i < playershand.length; i++) {
  button = document.createElement('button');
  button.className = 'button';
  button.id = 'playershand-' + i + '';
  button.innerHTML = playershand[i];
  //Append those divs to playerarea
  document.getElementById('playersarea').appendChild(button);
}

/*Player and computer choose card*/

//Computers random choice
  
const randomCard = computershand[Math.floor(Math.random() * computershand.length)];
  console.log(randomCard);

//Players play

//If player choses the card playershand[0]

//Remove players choice from playershand 

document.getElementById('playershand-0').addEventListener("click", function removebutton0() {
  document.getElementById('playershand-0').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-0').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-0').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-0').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-0';
  playergameareadiv.innerHTML = playershand[0];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});


//Move computer's choice to game area
document.getElementById('playershand-0').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-0';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

//Compare cards
function removebutton0() {
  document.getElementById('playershand-0').remove();}

const x = removebutton0;

if (x && playershand[0]>randomCard){
  document.getElementById('playerscore').innerHTML = 'player chose 0';
}


//If player choses the card playershand[1]

//Remove players choice from playershand 

document.getElementById('playershand-1').addEventListener("click", function removebutton1() {
  document.getElementById('playershand-1').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-1').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-1').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-1').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-1';
  playergameareadiv.innerHTML = playershand[1];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Move computer's choice to game area
document.getElementById('playershand-1').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-1';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

//If player choses the card playershand[2]

//Remove players choice from playershand 

document.getElementById('playershand-2').addEventListener("click", function removebutton2() {
  document.getElementById('playershand-2').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-2').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-2').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-2').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-2';
  playergameareadiv.innerHTML = playershand[2];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Move computer's choice to game area
document.getElementById('playershand-2').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-2';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

//If player choses the card playershand[3]

//Remove players choice from playershand 

document.getElementById('playershand-3').addEventListener("click", function removebutton3() {
  document.getElementById('playershand-3').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-3').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-3').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-3').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-3';
  playergameareadiv.innerHTML = playershand[2];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Move computer's choice to game area
document.getElementById('playershand-3').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-3';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

//If player choses the card playershand[4]

//Remove players choice from playershand 

document.getElementById('playershand-4').addEventListener("click", function removebutton4() {
  document.getElementById('playershand-4').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-4').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-4').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-4').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-4';
  playergameareadiv.innerHTML = playershand[4];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Move computer's choice to game area
document.getElementById('playershand-4').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-4';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

//If player choses the card playershand[5]

//Remove players choice from playershand 

document.getElementById('playershand-5').addEventListener("click", function removebutton5() {
  document.getElementById('playershand-5').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-5').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-5').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-5').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-5';
  playergameareadiv.innerHTML = playershand[5];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Move computer's choice to game area
document.getElementById('playershand-5').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-5';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

//If player choses the card playershand[6]

//Remove players choice from playershand 

document.getElementById('playershand-6').addEventListener("click", function removebutton6() {
  document.getElementById('playershand-6').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-6').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-6').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-6').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-6';
  playergameareadiv.innerHTML = playershand[6];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Move computer's choice to game area
document.getElementById('playershand-6').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-6';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

//If player choses the card playershand[7]

//Remove players choice from playershand 

document.getElementById('playershand-7').addEventListener("click", function removebutton7() {
  document.getElementById('playershand-7').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-7').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-7').remove();
});

//Move the player's choice to game area

document.getElementById('playershand-7').addEventListener("click", function moveplayerscardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-7';
  playergameareadiv.innerHTML = playershand[7];
  //Append div to playersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Move computer's choice to game area
document.getElementById('playershand-7').addEventListener("click", function movecomputerscardtogamearea() {

  let computergameareadiv = document.createElement('div');
  computergameareadiv.className = 'playerscardgamearea';
  computergameareadiv.id = 'cplayedcard-7';
  computergameareadiv.innerHTML = randomCard;
  //Append div to playersgamearea
  document.getElementById('computersplace').appendChild(computergameareadiv);

});

