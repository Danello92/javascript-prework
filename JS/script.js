	
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove;

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

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove;

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

printMessage('Twój ruch to: ' + playerMove);
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  }
  if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }
  if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }if( playerMove == 'nieznany ruch'){
    printMessage('nie dozwolony ruch');
  }
  if( computerMove = playerMove ){
    printMessage('remis');
  }