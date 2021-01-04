//-----Model----------

var pieces = ['O', 'X'];
var turnNum = 1;
var turn = pieces[turnNum % 2];
var turnMessage = `It is ${turn}'s turn.`;

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

//-----View-----------

var buildBoardTableView = (board) => {
  var boardView = document.createElement('table');
  for (let row = 0; row < board.length; row++) {
    let trow = document.createElement('tr');
    trow.setAttribute('id', `row${row}`);
    for (let column = 0; column < board[row].length; column++) {
      let td = document.createElement('td')
      // let sampleText = document.createTextNode(turn);
      // td.appendChild(sampleText);
      td.setAttribute('id', `${row}-${column}`);
      trow.appendChild(td);
    }
    boardView.appendChild(trow);
  }
  document.body.appendChild(boardView);
  return boardView;
}

var boardTableView = buildBoardTableView(board);

console.log(boardTableView);


/*
  <table>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
*/







//-----Controller-----

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
//  Reset turn and turnNum
//  Reset board to blank board with buildBoard
//  Reset boardView with buildBoardTableView