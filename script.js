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

//Players play

//Remove players choice from playershand 

document.getElementById('playershand-0').addEventListener("click", function removebutton() {
  document.getElementById('playershand-0').remove();
});

//Remove a card from computeshand

document.getElementById('playershand-0').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-0').remove();
});

//move the players choice to game area

document.getElementById('playershand-0').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-0';
  playergameareadiv.innerHTML = playershand[0];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Remove players choice from playershand 

document.getElementById('playershand-1').addEventListener("click", function removebutton() {
  document.getElementById('playershand-1').remove()
});

//Remove a card from computeshand

document.getElementById('playershand-1').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-1').remove();
});

//move the players choice to game area

document.getElementById('playershand-1').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-1';
  playergameareadiv.innerHTML = playershand[1];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Remove players choice from playershand 

document.getElementById('playershand-2').addEventListener("click", function removebutton() {
  document.getElementById('playershand-2').remove()
});

//Remove a card from computeshand

document.getElementById('playershand-2').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-2').remove();
});

//move the players choice to game area

document.getElementById('playershand-2').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-2';
  playergameareadiv.innerHTML = playershand[2];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Remove players choice from playershand 

document.getElementById('playershand-3').addEventListener("click", function removebutton() {
  document.getElementById('playershand-3').remove()
});

//Remove a card from computeshand

document.getElementById('playershand-3').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-3').remove();
});

//move the players choice to game area

document.getElementById('playershand-3').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-3';
  playergameareadiv.innerHTML = playershand[3];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Remove players choice from playershand 

document.getElementById('playershand-4').addEventListener("click", function removebutton() {
  document.getElementById('playershand-4').remove()
});

//Remove a card from computeshand

document.getElementById('playershand-4').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-4').remove();
});

//move the players choice to game area

document.getElementById('playershand-4').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-4';
  playergameareadiv.innerHTML = playershand[4];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Remove players choice from playershand 

document.getElementById('playershand-5').addEventListener("click", function removebutton() {
  document.getElementById('playershand-5').remove()
});

//Remove a card from computeshand

document.getElementById('playershand-5').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-5').remove();
});

//move the players choice to game area

document.getElementById('playershand-5').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-5';
  playergameareadiv.innerHTML = playershand[5];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Remove players choice from playershand 

document.getElementById('playershand-6').addEventListener("click", function removebutton() {
  document.getElementById('playershand-6').remove()
});

//Remove a card from computeshand

document.getElementById('playershand-6').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-6').remove();
});

//move the players choice to game area

document.getElementById('playershand-6').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-6';
  playergameareadiv.innerHTML = playershand[6];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});

//Remove players choice from playershand 

document.getElementById('playershand-7').addEventListener("click", function removebutton() {
  document.getElementById('playershand-7').remove()
});

//Remove a card from computeshand

document.getElementById('playershand-7').addEventListener("click", function removecomputerscard() {
  document.getElementById('computershand-7').remove();
});

//move the players choice to game area

document.getElementById('playershand-7').addEventListener("click", function movecardtogamearea() {

  let playergameareadiv = document.createElement('div');
  playergameareadiv.className = 'playerscardgamearea';
  playergameareadiv.id = 'pplayedcard-7';
  playergameareadiv.innerHTML = playershand[7];
  //Append div to computersgamearea
  document.getElementById('playersplace').appendChild(playergameareadiv);

});


//Computer plays
function computerplay() {
  //Computers random choice
  const randomCard = computershand[Math.floor(Math.random() * computershand.length)];
  console.log(randomCard);
  //move that choice to game area
  let computersplayedcard = document.getElementById("computersplace");
  document.getElementById("computersplace").innerHTML = randomCard;

  //Specify the place of the card randomly chosen
  let randomCardPlace = computershand.indexOf(randomCard);
  console.log(randomCardPlace);
  //As an array
  let computerscardchoice = computershand.splice(randomCardPlace, 1);
  console.log(computerscardchoice);
  //Computers hand after playing the card
  console.log(computershand);

if (playershand[0]>randomCard){
  document.getElementById('playerscore').innerHTML = 'feqrfr';
}

}


//Call function with button clicks

let elements = document.getElementsByClassName("button");
for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", computerplay);
}


/*Comparison of cards chosen*/


/*Update score*/