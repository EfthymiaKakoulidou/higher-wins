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

//Computers random choice
const randomCard1 = computershand[Math.floor(Math.random() * computershand.length)];
console.log(randomCard1);
//Specify the place of the card randomly chosen
let randomCardPlace1 = computershand.indexOf(randomCard1);
console.log(randomCardPlace1);
//Computers hand after playing the card
let remainingcomputershand1 = computershand.splice(randomCardPlace1,1);
console.log(remainingcomputershand1);
console.log(computershand);

//loop for computers hand

//Assign a div for every item in the array
for (i = 0; i < computershand.length; i++) {
    temp = document.createElement('div');
    temp.className = 'computerscard';
    temp.innerHTML = computershand[i];
    document.getElementsByTagName('main')[0].appendChild(temp);
  }

//players choice

/*Comparison of cards chosen*/

/*Update score*/

/*Cards chosen deactivated*/

/*Repeat until all cards deactivated*/