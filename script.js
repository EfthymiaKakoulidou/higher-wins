/*Deck*/
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 1 , 2 ,3, 4, 5, 6, 7, 8];

/*Shuffle Cards with the Fischer Yates algorithm*/
    var i = cards.length, j, temp;
    while(--i > 0){
    j = Math.floor(Math.random()*(i+1));
    temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp; 
}
console.log(cards);

/*Deal Cards*/
const playershand = cards.slice(0,8);
console.log (playershand);
const computershand = cards.slice(8,16);
console.log(computershand);

/*Player and computer choose card*/

function computerplay(){

//Computers random choice
const randomCard = computershand[Math.floor(Math.random() * computershand.length)];
console.log(randomCard);
//Specify the place of the card randomly chosen
let randomCardPlace = computershand.indexOf(randomCard);
console.log(randomCardPlace);
//Computers hand after playing the card
let remainingcomputershand = computershand.splice(randomCardPlace,1);
console.log(remainingcomputershand);
console.log(computershand);

  return computershand;
}

//Create a div for every item in the array of computers hand

for (i = 0; i < computershand.length; i++) {
    temp = document.createElement('div');
    temp.className = 'computerscard';
    temp.innerHTML = computershand[i];
    document.getElementsByTagName('main')[0].appendChild(temp);
  }


//players choice

//Create divs for players hand

for (i = 0; i < playershand.length; i++) {
    temp = document.createElement('div');
    temp.className = 'playerscard';
    temp.innerHTML = playershand[i];
    document.getElementsByTagName('main')[0].appendChild(temp);
  }

/*Comparison of cards chosen*/

/*Update score*/

/*Cards chosen deactivated*/

/*Repeat until all cards deactivated*/