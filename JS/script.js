


 const buttonClickedPaper = function(){
  let playerInput = 2;
  playGame(playerInput);
      
}
const buttonClickedRock = function(){
  let playerInput = 1;
  playGame(playerInput);
}
const buttonClickedScissors = function(){
  let playerInput = 3;
  playGame(playerInput);
}

const pButton = document.getElementById('play-paper');
const rButton = document.getElementById('play-rock');
const sButton = document.getElementById('play-scissors');  

pButton.addEventListener('click', buttonClickedPaper);
rButton.addEventListener('click', buttonClickedRock);
sButton.addEventListener('click', buttonClickedScissors);

const playGame = function(playerInput) {

    const clearMessages = function(){
    document.getElementById('messages').innerHTML = '';
  }
   const getMoveName = function (argMoveId) {
    // okreslanie co zostało wybrane przez gracza jak i komputer
    if (argMoveId == 1) {
      return 'kamień';
    }
    if (argMoveId == 2) {
      return 'papier';
    }
    if (argMoveId == 3) {
      return 'nożyce';
    }
    else {
      // nieznany ruch dla gry
      printMessage('Nie znam ruchu' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
   const displayResult = function(argComputerMove, argPlayerMove) {
    // zasady gry co zrobil kazdy z graczy
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Ty przegrywasz!');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Ty przegrywasz!');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Ty przegrywasz!');
      // nie moznosc wykonania zasady error kodu
    } if (argPlayerMove == 'nieznany ruch') {
      printMessage('nie dozwolony ruch');
    }
    // mozliwosc remisu
    if (argComputerMove == argPlayerMove) {
      printMessage('remis');
    }
  }
  clearMessages();
  // losowanie zmieniej
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  // console log dla liczby losowej
  console.log('Wylosowana liczba to: ' + randomNumber);
  // nadanie zmienej i przekazywanie jej do funkcji
  const computerMove = getMoveName(randomNumber);
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

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);
  // nadanie zmienej gracza i przekazanie jej do funkcji okreslajacej co wpisal gracz
  const playerMove = getMoveName(playerInput);
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
  // okreslenie zmienej dla funckji
  const result = displayResult(computerMove, playerMove);
  // dlaczego wyswietla mi sie wynik jezeli tylko okreslilem zmiena
}
