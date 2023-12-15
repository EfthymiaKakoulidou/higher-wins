/*Deck*/
const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '1' ,'2' ,'3', '4', '5', '6', '7', '8'];

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

/*Comparison of cards chosen*/

/*Update score*/

/*Cards chosen deactivated*/

/*Repeat until all cards deactivated*/