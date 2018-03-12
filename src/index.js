module.exports = function solveSudoku(matrix) {
  let i = 0, row, column, value, findValue, zeroPositions = [];
  for(let k = 0; k < 9; k++) {
    for(let j = 0; j < 9; j++) {
      if(matrix[k][j] === 0) {
        zeroPositions.push([k, j]);
      }
    }
  }
  while (i < zeroPositions.length) {
    row = zeroPositions[i][0];
    column = zeroPositions[i][1];
    value = matrix[row][column] + 1;
    findValue = false;
    while(!findValue && value <= 9) {
      if(this.checkValue(matrix, column, row, value)) {
        findValue = true;
        matrix[row][column] = value;
        i++;
      }
      else {
        value++;
      }
    }
    if(!findValue) {
      matrix[row][column] = 0;
      i--;
    }
  }
  return matrix;
}

checkValue = function(matrix, column, row, value) {
  if(this.checkRow(matrix, row, value) &&
    this.checkColumn(matrix, column, value) &&
    this.checkSegment(matrix, column, row, value)) {
    return true;
  } else {
    return false;
  }
}

checkRow = function(matrix, row, value) {
  for(let i = 0; i < 9; i++) {
    if(matrix[row][i] === value) {
      return false;
    }
  }
  return true;
}

checkColumn = function(matrix, column, value) {
  for(let i = 0; i < 9; i++) {
    if(matrix[i][column] === value) {
      return false;
    }
  }
  return true;
}

checkSegment = function(matrix, column, row, value) {
  var columnCorner = 0,
      rowCorner = 0,
      segmentSize = 3;

  while(column >= columnCorner + segmentSize) {
    columnCorner += segmentSize;
  }

  while(row >= rowCorner + segmentSize) {
    rowCorner += segmentSize;
  }

  for(let i = rowCorner; i < rowCorner + segmentSize; i++) {
    for(var j = columnCorner; j < columnCorner + segmentSize; j++) {
      if(matrix[i][j] === value) {
        return false;
      }
    }
  }
  return true;
};
