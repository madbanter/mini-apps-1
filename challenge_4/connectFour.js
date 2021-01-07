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

