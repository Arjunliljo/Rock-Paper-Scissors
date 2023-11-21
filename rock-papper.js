var scoreBoard = JSON.parse(localStorage.getItem('scores')) 
|| {     
     wins : 0 ,
     lose : 0 ,
     ties : 0 
   }

updateScoreBoard() ;

function computerPick() {

const randomNum = Math.random();

if (randomNum <= 1 / 3) {

return 'Rock';

} else if (randomNum <= 2 / 3) {

return 'Papper';

} else {

return 'Scissors';

}
}

let result ;

function gameResult(playerMove){

let computerMove = computerPick() ;

console.log(computerMove);

if( playerMove === 'Rock' ) {

if(computerMove === 'Rock') {

result = ' Its a Tie' ;
}
else if( computerMove === 'Papper'){

result = ' You Loose' ;
}
else {

result = ' You Win' ;
}

}
else if( playerMove === 'Papper') {

if(computerMove === 'Rock') {
 
 result = ' You Win' ;
}
else if( computerMove === 'Papper'){

 result = ' Its a Tie' ;
}
else {

 result = ' You Loose' ;
}

}
else {        

if(computerMove === 'Scissors') {
 
 result = ' Its a Tie' ;
}
else if( computerMove === 'Papper'){

 result = ' You Win' ;
}
else {

 result = ' You Loose' ;
}

}

if( result === ' Its a Tie' ){

scoreBoard.ties++ ;

}
else if( result === ' You Win' ){

scoreBoard.wins++ ;
}
else {

scoreBoard.lose++ ;
}

localStorage.setItem('scores' , JSON.stringify(scoreBoard)) ;

updateResult() ;
updateScoreBoard() ;

document.querySelector('.js-moves')
.innerHTML = `You <img src="images-icons/${playerMove}-emoji.png" class="move-icon">
<img src="images-icons/${computerMove}-emoji.png" class="move-icon" >Computer ` ;

}

function updateResult() {

document.querySelector('.js-result')
.innerHTML = result ;

}

function updateScoreBoard() {

document.querySelector('.js-score')
.innerHTML =  'Wins: ' + scoreBoard.wins  + 
', Lose: ' + scoreBoard.lose
+ ', Ties: ' + scoreBoard.ties ;

}



console.log(scoreBoard.wins) ;