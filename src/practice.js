

// //create a function that will randomly place mines on the game board
// //create a function that will check for mines on the game board
// //create a function that will check for win conditions
// //create a function that will check for loss conditions
// //create a function that will start the game
// //create a function that will end the game
// //create a function that will reset the game


// Define the game board
const gameBoard = [
	[{ value: '', revealed: false, flagged: false }, { value: '', revealed: false, flagged: false }, { value: '', revealed: false, flagged: false }],
	[{ value: '', revealed: false, flagged: false }, { value: '', revealed: false, flagged: false }, { value: '', revealed: false, flagged: false }],
	[{ value: '', revealed: false, flagged: false }, { value: '', revealed: false, flagged: false }, { value: '', revealed: false, flagged: false }]
  ];
  
 // Create a function which randomly assigns bomb locations
function randomBombLocations() {
	  const bombLocations = [];
	  while (bombLocations.length < 3) {
			 const row = Math.floor(Math.random() * 3);
			    const col = Math.floor(Math.random() * 3);
				    const newBombLocation = [row, col];
					    let duplicateLocation = false;
						    for (let i = 0; i < bombLocations.length; i++) {
								     const existingBombLocation = bombLocations[i];
									      if (existingBombLocation[0] === row && existingBombLocation[1] === col) {
											  duplicateLocation = true;
													  }
																			    }
																			}
																			    if (!duplicateLocation) {
																					      bombLocations.push(newBombLocation);
  
  // Define a function to print the game board
  function printGameBoard() {
	console.log('   0   1   2 ');
	console.log('  -----------');
	for (let row = 0; row < gameBoard.length; row++) {
	  const rowValues = gameBoard[row].map(square => {
		if (square.flagged) {
		  return 'F';
		} else if (!square.revealed) {
		  return '-';
		} else {
		  return square.value;
		}
	  });
	  console.log(`${row} | ${rowValues.join(' | ')} |`);
	  console.log('  -----------');
	}
  }
  
  // Define a function to check if a given location has a bomb
  function hasBomb(row, col) {
	for (let i = 0; i < bombLocations.length; i++) {
	  const [bombRow, bombCol] = bombLocations[i];
	  if (row === bombRow && col === bombCol) {
		return true;
	  }
	}
	return false;
  }
  
  // Define a function to count the number of bombs in the surrounding squares
  function countSurroundingBombs(row, col) {
	let count = 0;
	for (let i = -1; i <= 1; i++) {
	  for (let j = -1; j <= 1; j++) {
		const newRow = row + i;
		const newCol = col + j;
		if (newRow >= 0 && newRow < gameBoard.length && newCol >= 0 && newCol < gameBoard[0].length && hasBomb(newRow, newCol)) {
		  count++;
		}
	  }
	}
	return count;
  }
  
  // Define a function to reveal a square and its surrounding squares recursively
  function revealSquare(row, col) {
	const square = gameBoard[row][col];
	if (!square.revealed && !square.flagged) {
	  square.revealed = true;
	  if (hasBomb(row, col)) {
		console.log('BOOM! Game over.');
		square.value = 'X';
		printGameBoard();
		return;
	  }
	  const surroundingBombs = countSurroundingBombs(row, col);
	  if (surroundingBombs === 0) {
		square.value = '-';
		for (let i = -1; i <= 1; i++) {
		  for (let j = -1; j <= 1; j++) {
			const newRow = row + i;
			const newCol = col + j;
			if (newRow >= 0 && newRow < gameBoard.length && newCol >= 0 && newCol < gameBoard[0].length) {
			  revealSquare(newRow, newCol);
			}
		  }
		}

// //create a function that will randomly place mines on the game board
// // Define the game board
// const gameBoard = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ];

// // Create a function which randomly assigns bomb locations
// function randomBombLocations() {
// 	  const bombLocations = [];
// 	  while (bombLocations.length < 3) {
// 			 const row = Math.floor(Math.random() * 3);
// 			    const col = Math.floor(Math.random() * 3);
// 				    const newBombLocation = [row, col];
// 					    let duplicateLocation = false;
// 						    for (let i = 0; i < bombLocations.length; i++) {
// 								     const existingBombLocation = bombLocations[i];
// 									      if (existingBombLocation[0] === row && existingBombLocation[1] === col) {
// 											  duplicateLocation = true;
// 													  }
// 																			    }
// 																			}
// 																			    if (!duplicateLocation) {
// 																					      bombLocations.push(newBombLocation);


// // Define a function to print the game board
// function printGameBoard() {
//   console.log(gameBoard[0].join('|'));
//   console.log('------');
//   console.log(gameBoard[1].join('|'));
//   console.log('------');
//   console.log(gameBoard[2].join('|'));
// }

// // Define a function to check if a given location has a bomb
// function hasBomb(row, col) {
//   for (let i = 0; i < bombLocations.length; i++) {
//     const [bombRow, bombCol] = bombLocations[i];
//     if (row === bombRow && col === bombCol) {
//       return true;
//     }
//   }
//   return false;
// }

// // Define a function to play a turn
// function playTurn() {
//   const row = prompt('Enter a row (0-2):');
//   const col = prompt('Enter a column (0-2):');

//   if (hasBomb(row, col)) {
//     console.log('BOOM! Game over.');
//     gameBoard[row][col] = 'X';
//   } else {
//     console.log('You live to play another turn.');
//     gameBoard[row][col] = '-';
//   }

//   printGameBoard();
// }

// // create option to flag a cell


// // Play the game
// printGameBoard();
// while (true) {
//   playTurn();
// }






// // create a game of minesweeper

// // randomly place the mines on a 3x3 grid
// // create options for cell to be hidden or revealed, or flagged with or without mine
// // on user input, loop through the mines to check win/loss conditions
// // win conditions > there are no hidden mines, or 
// // loss conditions > 
// // create the game start
// // create the game end
// // create the game reset