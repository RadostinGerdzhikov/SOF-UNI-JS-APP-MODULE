function isMatrixIsMagic(matrix){
    let sumRow = row => matrix[row].reduce((a,b) => a + b);
    let sumCol = col => matrix.map(row => row[col]).reduce((a,b) => a + b);

    if (matrix.length > 0) {
        let rowSum = sumRow(0);
        for (let i = 1; i < matrix.length; i++) {
            let currentSum = sumRow(i);
            if(currentSum !== rowSum){
                return false;
            }
        }

        for (let i = 0; i < matrix[0].length ; i++) {
            let colSum = sumCol(0);
            let currentSum = sumCol(i);
            if(colSum !== currentSum){
                return false;
            }
        }


    }
    return true;
}
