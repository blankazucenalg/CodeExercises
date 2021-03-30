/**
 * Tic Tac Win
 * Tells who is the winner in a tic-tac-toe board
 * @param {string[][]} tictacBoard Squared board with final result of the game.
 * @returns Text to describe the winner and place in the board
 */
function ticTacWin(tictacBoard) {
  const NO_WINNER = '-';
  if (
    !tictacBoard.length ||
    !tictacBoard[0].length ||
    tictacBoard.length !== tictacBoard[0].length
  ) {
    throw new Error('Tic Tac Toe board must be squared and cannot be empty');
  }
  const size = tictacBoard.length;
  let winnerByRows = [];
  let winnerByCols = [];
  let winnerByDiagonals = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Winner by row
      if (!winnerByRows[i]) {
        winnerByRows[i] = tictacBoard[i][j];
      } else {
        winnerByRows[i] =
          winnerByRows[i] === tictacBoard[i][j] ? tictacBoard[i][j] : NO_WINNER;
      }
      // Winner by col
      if (!winnerByCols[j]) {
        winnerByCols[j] = tictacBoard[i][j];
      } else {
        winnerByCols[j] =
          winnerByCols[j] === tictacBoard[i][j] ? tictacBoard[i][j] : NO_WINNER;
      }

      if (i === j) {
        // Diagonal \
        if (!winnerByDiagonals[0]) {
          winnerByDiagonals[0] = tictacBoard[i][j];
        } else {
          winnerByDiagonals[0] =
            winnerByDiagonals[0] === tictacBoard[i][j]
              ? tictacBoard[i][j]
              : NO_WINNER;
        }
      }
      // Equation of a Straight Line that matches the diagonal /
      const y = (x) => -x + (size - 1);
      if (j === y(i)) {
        // Diagonal /
        if (!winnerByDiagonals[1]) {
          winnerByDiagonals[1] = tictacBoard[i][j];
        } else {
          winnerByDiagonals[1] =
            winnerByDiagonals[1] === tictacBoard[i][j]
              ? tictacBoard[i][j]
              : NO_WINNER;
        }
      }
    }
  }
  for (let i = 0; i < winnerByDiagonals.length; i++) {
    const element = winnerByDiagonals[i];
    if (element !== NO_WINNER) {
      return `Winner is '${element}' in diagonal ${i ? '/' : '\\'}`;
    }
  }
  for (let i = 0; i < winnerByRows.length; i++) {
    const element = winnerByRows[i];
    if (element !== NO_WINNER) {
      return `Winner is '${element}' in row ${i}`;
    }
  }
  for (let i = 0; i < winnerByCols.length; i++) {
    const element = winnerByCols[i];
    if (element !== NO_WINNER) {
      return `Winner is '${element}' in column ${i}`;
    }
  }
  return `It's a draw!`;
}

module.exports = ticTacWin;
