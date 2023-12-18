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

//Create a div for every item in the array of computers hand

for (i = 0; i < computershand.length; i++) {
  let computerinnerdiv = document.createElement('div');
  computerinnerdiv.className = 'computerscard';
  computerinnerdiv.innerHTML = computershand[i];
  computerinnerdiv.id = 'computershand-' + i + ''
  document.getElementById('computerarea').appendChild(computerinnerdiv);
}

//Create buttons for every item in players hand

for (i = 0; i < playershand.length; i++) {
  button = document.createElement('button');
  button.className = 'button';
  button.id = 'playershand-' + i + '';
  button.innerHTML = playershand[i];
  document.getElementById('playersarea').appendChild(button);
}

/*Player and computer choose card*/

//Computer plays


function computerplay() {
  //Computers random choice
  const randomCard = computershand[Math.floor(Math.random() * computershand.length)];
  console.log(randomCard);
  //Specify the place of the card randomly chosen
  let randomCardPlace = computershand.indexOf(randomCard);
  console.log(randomCardPlace);
  //Computers hand after playing the card
  let computerscardchoice = computershand.splice(randomCardPlace, 1);
  console.log(computerscardchoice);
  console.log(computershand);
  //Remove computers random card from computershand
  for (i = 0; i < computershand.length; i++)
    if (randomCardPlace === i) {
      document.getElementById('computershand-' + i + '').remove();
    }

  return computershand;
}

//Create divs for game area

//Create div for score computer

let computerscorediv = document.createElement('div');
computerscorediv.className = 'computerscore';
computerscorediv.innerHTML = 'Computer Score'
document.getElementById('gamearea').appendChild(computerscorediv);

//Create div for computer area

let computergameareadiv = document.createElement('div');
computergameareadiv.className = 'computergamearea';
document.getElementById('gamearea').appendChild(computergameareadiv);

//Create divs for player area

let playergameareadiv = document.createElement('div');
playergameareadiv.className = 'playergamearea';
document.getElementById('gamearea').appendChild(playergameareadiv);

//Create div for score player

let playerscorediv = document.createElement('div');
playerscorediv.className = 'playerscore';
playerscorediv.innerHTML = 'Player Score'
document.getElementById('gamearea').appendChild(playerscorediv);

//Players play
function playerplay() {

  //Computers random choice
  const playersCard = playershand[i];
  console.log(playersCard);
  //Specify the place of the card randomly chosen
  let playersCardPlace = playershand.indexOf(playersCard);
  console.log(playersCardPlace);
  //Computers hand after playing the card
  let remainingplayershand = playershand.splice(playersCardPlace, 1);
  console.log(remainingplayershand);
  console.log(playershand);

  //Remove players card from playersshand
  for (i = 0; i < playershand.length; i++)
  if (playersCardPlace === i) {
    document.getElementById('playershand-' + i + '').remove();
  }

  return playershand;
}

//call function with button clicks

const elements = document.getElementsByClassName("button");
for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", computerplay);
  elements[i].addEventListener("click", playerplay);
}


/*Comparison of cards chosen*/

/*Update score*/
