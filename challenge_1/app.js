//-----Model----------

var pieces = ['O', 'X'];
var turns = 1;
var turn = pieces[turns % 2];
var turnMessage = `It is ${turn}'s turn.`;
var gameOver = false;
var empty;
var emptySquare = ' # ';

var buildBoard = (size) => {
  var board = []
  for (let rows = 0; rows < size; rows++) {
    let row = [];
    board.push(row);
  }
  return board;
};

var board = buildBoard(3);

var winCheck = (board) => {
  for (row of board) {
    if (matchCheck(...row)) {
      return row[0];
    }
  }
  for (let colNum = 0; colNum < board.length; colNum++) {
    let col = [];
    for (row of board) {
      col.push(row[colNum]);
    }
    if (matchCheck(...col)) {
      return col[0];
    }
  }

  let squares = [];
  for (let i = 0; i < board.length; i++) {
    squares.push(board[i][i]);
  }
  if (matchCheck(...squares)) {
    return squares[0];
  }

  for (let i = 0; i < board.length; i++) {
    squares.push(board[i][board.length - i]);
  }
  if (matchCheck(...squares)) {
    return squares[0];
  }
  return false;
};

var tieCheck = (turns, board) => {
  return turns === Math.pow(board.length, 2);
};

var matchCheck = function() {
  if (arguments.length !== board.length) {
    return false;
  }
  for (arg of arguments) {
    if (!arg || arg !== arguments[0]) {
      return false;
    }
  }
  return true;
};

//-----View-----------

var buildBoardTableView = (board) => {
  var boardView = document.createElement('table');
  for (let row = 0; row < board.length; row++) {
    let trow = document.createElement('tr');
    trow.setAttribute('id', `row${row}`);
    for (let column = 0; column < board.length; column++) {
      let td = document.createElement('td')
      let noText = document.createTextNode(emptySquare);
      td.appendChild(noText);
      td.setAttribute('id', `${row}-${column}`);
      trow.appendChild(td);
    }
    boardView.appendChild(trow);
  }
  document.body.appendChild(boardView);
  return boardView;
}

var boardTableView = buildBoardTableView(board);

var newGameButton = document.createElement('button');
let buttonText = document.createTextNode('NEW GAME');
newGameButton.appendChild(buttonText);
newGameButton.setAttribute('style', 'background-color: red');
document.body.append(newGameButton);


document.addEventListener('DOMContentLoaded', (event) => {
  newGameButton.addEventListener('click', newGame);
  boardTableView.addEventListener('click', function(event) {
    let vals = event.target.id.split('-').map(val => parseInt(val));
    updateBoard(vals, board);
  });
});


//-----Controller-----

var updateBoard = (coordinates, board) => {
  if (gameOver) {
    throw 'Game has ended. Start a new game to continue.';
    return null;
  }
  [row, column] = coordinates;

  if (board[row][column] !== empty) {
    throw "Error: Illegal move. Square already occupied.";
  } else {
    board[row][column] = turn;
    // update boardtableview
    let square = document.getElementById(coordinates.join('-'));
    square.textContent = turn;
    let win = winCheck(board);
    if (win) {
      let winMessage = `${turn} wins!`
      console.log(winMessage);
      gameOver = true;
      return turn;
    } else {
      let tie = tieCheck(turns, board);
      if (tie) {
        let tieMessage = 'Tie game. Game Over.';
        console.log(tieMessage);
        gameOver = true;
        return null;
      }
    }
    turns++;
    turn = updateTurn(turns);
    console.log(`It is ${turn}'s turn.`);
  }
};

var updateTurn = (turns) => {
  return pieces[turns % 2];
};

var resetBoardView = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      let square = document.getElementById(`${row}-${col}`);
      square.textContent = emptySquare;
    }
  }
};

var newGame = () => {
  board = buildBoard(3);
  turns = 1;
  turn = pieces[turns % 2];
  turnMessage = `It is ${turn}'s turn.`;
  gameOver = false;
  resetBoardView();
};

/*
  TODO:
  Styling (centering, size, board visibility, handling empty squares, style, etc.)
  Add scoreboard
  Add player names
  Refactor to classes
  Refactor to use divs instead of table
*/