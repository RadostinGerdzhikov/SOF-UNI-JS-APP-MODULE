'use strict';
function findDiagonalSum(matrix){
    let normalDiagonal = 0;
    let backDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        normalDiagonal += matrix[row][row];
        backDiagonal += matrix[row][matrix[row].length-1-row];
    }
    console.log(normalDiagonal, backDiagonal);

}