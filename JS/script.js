	
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if (argMoveId == 2){
    return 'papier';
  } 
  if(argMoveId == 3){
    return 'nożyce';
  }
  else {
    printMessage('Nie znam ruchu' + argMoveId + '.');
    return 'nieznany ruch';
  }
}
function displayResult(argComputerMove, argPlayerMove){
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  }
  if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }
  if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }if( argPlayerMove == 'nieznany ruch'){
    printMessage('nie dozwolony ruch');
  }
  if( argComputerMove == argPlayerMove ){
    printMessage('remis');
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2) 
{
    computerMove = 'papier';
}
else if(randomNumber == 3) 
{ 
    computerMove = 'nożyce';
}else {
    computerMove = 'nieznany ruch';
}
*/
printMessage('Komputera ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == 1)  
{
 playerMove = 'kamień';
}
else if(playerInput == 2) 
{
     playerMove = 'papier';
}
else if(playerInput == 3) 
{ 
    playerMove = 'nożyce';
}else {
    playerMove = 'nieznany ruch';
}
*/
printMessage('Twój ruch to: ' + playerMove);
let result = displayResult(computerMove,playerMove);