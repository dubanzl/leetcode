 // O(w*h) time
 const matrix = [[1, 2]];

 let twoDarray = [];
  
  for (let i =0; matrix.length > i; i++){
    for (let row = 0; matrix[i].length > row; row++) {
      if (!twoDarray[row]) {
        twoDarray[row] = [];
      }
      twoDarray[row].push(matrix[i][row])
    }
  }

  console.log(twoDarray);