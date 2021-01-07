var game = {
  board: buildBoard();
  players: ['red', 'black'];
  turnNumber: 1;
  turn: players[turnNumber % 2];
  gameOver: false;
}

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

updateTurn = () => {
  game.turnNumber++;
  game.turn = players[turnNumber % 2];
};

var placePiece = (column) => {
  for (row of board) {
    for (let square = board.length; square >= 0; square--) {
      if (!row[square]) {
        row[square] = turn;
        game.gameOver = endCheck();
        if (!game.gameOver) {
          updateTurn();
          return `'It's now ${turn}'s turn.`;
        } else {
          return game.gameOver;
        }
      }
    }
  }
  return `Error: Illegal move, column is full. Try again, ${turn}.`;
};
