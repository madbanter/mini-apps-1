//-----Model----------

var pieces = ['O', 'X'];
var turns = 1;
var turn = pieces[turns % 2];
var turnMessage = `It is ${turn}'s turn.`;
var gameOver = false;

var buildBoard = (size) => {
  var board = []
  for (let rows = 0; rows < size; rows++) {
    let row = [];
    for (let columns = 0; columns < size; columns++) {
      row.push([]);
    }
    board.push(row);
  }
  return board;
};

var board = buildBoard(3);

var winCheck = (board) => {

};

var tieCheck = (turns, board) => {
  return turns === Math.pow(board.length, 2);
};

//-----View-----------

var buildBoardTableView = (board) => {
  var boardView = document.createElement('table');
  for (let row = 0; row < board.length; row++) {
    let trow = document.createElement('tr');
    trow.setAttribute('id', `row${row}`);
    for (let column = 0; column < board[row].length; column++) {
      let td = document.createElement('td')
      let noText = document.createTextNode(' # ');
      td.appendChild(noText);
      td.setAttribute('id', `${row}-${column}`);
      // td.setAttribute('style', 'background-color: yellow');
      trow.appendChild(td);
    }
    boardView.appendChild(trow);
  }
  document.body.appendChild(boardView);
  boardView.addEventListener('click', function(event) {
    let vals = event.target.id.split('-').map(val => parseInt(val));
    updateBoard(vals, board);
  });
  return boardView;
}

var boardTableView = buildBoardTableView(board);

console.log(boardTableView);




//-----Controller-----

var updateBoard = (coordinates, board) => {
  if (gameOver) {
    throw 'Game has ended. Start a new game to continue.';
    return null;
  }
  [row, column] = coordinates;
  console.log(row, column, board);
  if (board[row][column].length !== 0) {
    throw "Error: Illegal move. Square already occupied.";
  } else {
    board[row][column] = turn;
    // update boardtableview
    let square = document.getElementById(coordinates.join('-'));
    square.textContent = turn;
    let win = winCheck(board);
    // Handle win
    if (win) {
      let winMessage = `${turn} wins!`
      console.log(winMessage);
      gameOver = true;
      return turn;
    } else {
      let tie = tieCheck(turns, board);
      // Handle tie
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

// On click:
// Check if square has been clicked before
//  If so, display error message
// set value of array[row][column] to turn
// update td with id row-column to turn
// check for win
// check for tie
// update turn

// On win:
//  Display win message for player
//  No more turns

// On tie:
//  Display tie messages
//  No more turns

// On new game:
//  Reset turn and turns
//  Reset board to blank board with buildBoard
//  Reset boardView with buildBoardTableView