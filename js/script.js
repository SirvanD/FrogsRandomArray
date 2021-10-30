
 "use strict";

  const playBtn = document.querySelector('#play-btn');
  const scoreOneElement = document.querySelector('#score-1');
  const scoreTwoElement = document.querySelector('#score-2');
  const twelveSidedDie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
 function diceRoll(array) {
   let randomNum = twelveSidedDie[Math.floor(Math.random() *twelveSidedDie.length)];
     return randomNum;
 } 
  
 playBtn.addEventListener('click', () => {
 
 let p1Score = diceRoll(twelveSidedDie);
 let p2Score = diceRoll(twelveSidedDie);
 
 console.log (p1Score);
 console.log (p2Score);
 
   scoreOneElement.innerHTML = p1Score;
   scoreTwoElement.innerHTML = p2Score;
 
   console.log('Play button is functional!');
 
   updateColors(scoreOneElement, scoreTwoElement);
 });