var buildBoard = (rows = 6, columns = 7) => {
  let board = [];
  for (let row = 0; row < rows; row++) {
    let row = [];
    for (let column = 0; column < columns; column++) {
      row.push(null);
    }
    board.push(row);
  }
  return board;
};

var game = {
  boardSize: 42,
  board: buildBoard(),
  players: ['R', 'B'],
  turns: 1,
  turn: 'B',
  gameOver: false
}

updateTurn = () => {
  game.turns++;
  game.turn = game.players[game.turns % 2];
};

var placePiece = (column) => {
  if (game.gameOver) {
    return `Error: Game has ended. Start a new game.`;
  }
  for (let row = game.board.length - 1; row >= 0; row--) {
    if (!game.board[row][column]) {
      game.board[row][column] = game.turn;
      game.gameOver = endCheck(row, column);
      if (!game.gameOver) {
        updateTurn();
        return `'It's now ${game.turn}'s turn.`;
      } else {
        return game.gameOver;
      }
    }
  }
  return `Error: Illegal move, column is full. Try again, ${game.turn}.`;
};

var endCheck = (row, column) => {
  var tie = tieCheck();
  if (tie) {
    return tie;
  } else {
    return winCheck(row, column);
  }
};

var winCheck = (row, column) => {
  // Iterate over submatrix (max size 9) containing latest move (row, column)
  // Check for four consecutive squares of color {turn}
  // for (let checkRow = Math.max(row - 3, 0); checkRow < Math.min(row + 3, game.board.length); checkRow++) {
  if (game.turns < 7) {  // Can be more specific based on who goes first...
    return false;
  }
  let consecutive = 1;
  if (row < game.board.length - 3) {
    for (checkRow = row + 1; checkRow < row + 4; checkRow++) {
      if (game.board[checkRow][column] === game.turn) {
        consecutive++;
      } else {
        consecutive = 0;
        break;
      }
    }
    if (consecutive === 4) {
      return `Four in a row! Vertical. ${game.turn} wins!`;
    }
  }
  consecutive = 0;
  for (let checkColumn = Math.max(column - 3, 0); checkColumn < Math.min(column + 3, game.board[0].length); checkColumn++) {  // Can be more specific about not checking if there are not enough remaining slots for a win
    if (game.board[row][checkColumn] === game.turn) {
      consecutive++;
      if (consecutive === 4) {
        return `Four in a row! Horizontal. ${game.turn} wins!`;
      }
    } else {
      consecutive = 0;
    }
  }
  consecutive = 0;
  // Check the diagonal!
  if ((row - column) <= 3 && (column - row) < 3) {
    let startOffset = Math.min(Math.min(row, column), 3);
    let startRow = row - startOffset;
    let startColumn = column - startOffset;
    let endRow = Math.min(row + 3, game.board.length - 1);
    let endColumn = Math.min(column + 3, game.board[0].length - 1);
    for (let checkRow = startRow, checkColumn = startColumn; (checkRow <= endRow) && (checkColumn <= endColumn); checkRow++, checkColumn++) {
      if (game.board[checkRow][checkColumn] === game.turn) {
        consecutive++;
        if (consecutive === 4) {
          return `Four in a row! Diagonal lower right. ${game.turn} wins!`;
        }
      } else {
        consecutive = 0;
      }
    }
  }
    // if found, turn wins, return `${turn} wins!` [highlight win??]
  // Otherwise return false
  return false;
};

var tieCheck = () => {
  return game.turns === game.boardSize ? 'Tie game. Game over.' : false;
};
