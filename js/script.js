

/**
 * Describe this function...
 */

let yourScore = 0, computerScore = 0, round=0;

const buttonTest = document.getElementById('button-test');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const player = document.getElementById('your_score');
const computer = document.getElementById('computer_score');

function buttonClicked(argButtonName) {
  clearMessages();
  clearRound();
  console.log(argButtonName + ' został kliknięty');
  
	let computerMove, playerMove, randomNumber, playerInput;

	function getMoveName(argMoveId) {
	  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	  if (argMoveId == 1) {
		return 'kamień';
	  } else if (argMoveId == 2) {
		return 'papier';
	  } else if (argMoveId == 3) {
		return 'nożyce';
	  } else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
		return 'kamień';
	  }
	}

	function displayResult(argPlayerMove, argComputerMove) {
	  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		printMessage('Wygrywasz!');
		yourScore += 1;
	  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		printMessage('Wygrywasz!');
		yourScore += 1;
	  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('Wygrywasz!');
		yourScore += 1;
	  } else if (argPlayerMove == argComputerMove) {
		printMessage('Remis!');
	  } else {
		printMessage('Przegrywasz :(');
		computerScore += 1;
	  }
	  round += 1;
	  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	  player.innerHTML = 'Twój wynik: ' + yourScore;
	  computer.innerHTML = 'Wynik przeciwnika: ' + computerScore;
	  printRound('Runda: ' + round);
	}

	console.log('wybór ruchu gracza to: ' + playerInput);
	playerMove = argButtonName;
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

