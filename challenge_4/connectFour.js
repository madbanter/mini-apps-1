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
  board: buildBoard(),
  players: ['red', 'black'],
  turnNumber: 1,
  turn: 'black',
  gameOver: false
}

updateTurn = () => {
  game.turnNumber++;
  game.turn = game.players[game.turnNumber % 2];
};

var placePiece = (column) => {
  for (let row = game.board.length - 1; row >= 0; row--) {
    if (!game.board[row][column]) {
      game.board[row][column] = game.turn;
      game.gameOver = endCheck();
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

var endCheck = () => {

};

var winCheck = () => {

};

var tieCheck = () => {

};
