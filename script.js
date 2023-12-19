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
computerscorediv.className = 'computerscore';
computerscorediv.innerHTML = 'Computer Score'
document.getElementById('gamearea').appendChild(computerscorediv);


/*Create a div for computersgamearea*/

for (j = 0; j < 1; j++) {
  let computergameareainnerdiv = document.createElement('div');
  computergameareainnerdiv.className = 'computerscard';
  computergameareainnerdiv.innerHTML = computershand[i];
  computergameareainnerdiv.id = 'computersplace';
  //Append those divs to gamearea
  document.getElementById('gamearea').appendChild(computergameareainnerdiv);
}

/*Create a div for playersgamearea*/

for (j = 0; j < 1; j++) {
  let playergameareainnerdiv = document.createElement('div');
  playergameareainnerdiv.className = 'button';
  playergameareainnerdiv.innerHTML = playershand[i];
  playergameareainnerdiv.id = 'playersplace';
  //Append those divs to gamearea
  document.getElementById('gamearea').appendChild(playergameareainnerdiv);
}

//Create div for score player

let playerscorediv = document.createElement('div');
playerscorediv.className = 'playerscore';
playerscorediv.innerHTML = 'Player Score'
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


//Computer plays
function computerplay() {
  //Computers random choice
  const randomCard = computershand[Math.floor(Math.random() * computershand.length)];
  console.log(randomCard);
//move that choice to game area
  const newtext = document.createTextNode(randomCard);
  const parent = document.getElementById("playersplace");
  parent.appendChild(newtext);

  //Specify the place of the card randomly chosen
  let randomCardPlace = computershand.indexOf(randomCard);
  console.log(randomCardPlace);
  //As an array
  let computerscardchoice = computershand.splice(randomCardPlace, 1);
  console.log(computerscardchoice);
  //Computers hand after playing the card
  console.log(computershand);
  //Remove computers computerscardchoice from computershand

}

//Players play
function playerplay() {
  //Players' choice
  const playersCard = playershand[i];

  //Specify the place of the card chosen
  let playersCardPlace = playershand.indexOf(playersCard);

  //Players hand after playing the card
  let remainingplayershand = playershand.splice(playersCardPlace, 1);
  console.log(remainingplayershand);
  console.log(playershand);
  //Remove players card from playershand

  document.getElementById('playershand-0').addEventListener("click", function removebutton() {
    document.getElementById('playershand-0').remove()
  })

  document.getElementById('playershand-1').addEventListener("click", function removebutton() {
    document.getElementById('playershand-1').remove()
  });

  document.getElementById('playershand-2').addEventListener("click", function removebutton() {
    document.getElementById('playershand-2').remove()
  });


  document.getElementById('playershand-3').addEventListener("click", function removebutton() {
    document.getElementById('playershand-3').remove()
  });

  document.getElementById('playershand-4').addEventListener("click", function removebutton() {
    document.getElementById('playershand-4').remove()
  });

  document.getElementById('playershand-5').addEventListener("click", function removebutton() {
    document.getElementById('playershand-5').remove()
  });

  document.getElementById('playershand-6').addEventListener("click", function removebutton() {
    document.getElementById('playershand-6').remove()
  });

  document.getElementById('playershand-7').addEventListener("click",
    function removebutton() {
      document.getElementById('playershand-7').remove()
    });

}
//move players played card to gamearea



//Call function with button clicks

let elements = document.getElementsByClassName("button");
for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", computerplay);
  elements[i].addEventListener("click", playerplay);
}


/*Comparison of cards chosen*/


/*Update score*/