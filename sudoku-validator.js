// Validating the given row
const validateRow = (board, rowNumber) => {
  const elements = [];
  for (let i = 0; i < 9; i++) {
    if (board[rowNumber][i] !== '.') {
      if (elements.includes(board[rowNumber][i])) {
        return false;
      }
      elements.push(board[rowNumber][i]);
    }
  }
  return true;
}

// Validating the given Column
const validateColumn = (board, columnNumber) => {
  const elements = [];
  for (let i = 0; i < 9; i++) {
    if (board[i][columnNumber] !== '.') {
      if (elements.includes(board[i][columnNumber])) {
        return false;
      }
      elements.push(board[i][columnNumber]);
    }
  }
  return true;
}

// Checking each 3x3 Block
const validateBlock = (board, row, column) => {
  const elements = [];
  for (let i = row * 3; i < (row * 3 + 3); i++) {
    for (let j = column * 3; j < (column * 3 + 3); j++) {
      if (board[i][j] !== '.') {
        if (elements.includes(board[i][j])) {
          return false;
        }
        elements.push(board[i][j]);
      }
    }
  }
  return true;
}

const isValidSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    if (!validateRow(board, i)) {
      return false;
    }
    if (!validateColumn(board, i)) {
      return false;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!validateBlock(board, i, j)) {
        return false;
      }
    }
  }
  return true;
}