function printOrbitOfPoint(params) {
    let [matrixRows, matrixCols, x, y] = params;
    let matrix = createMatrix();
    let currentValue = 1;
    matrix[x][y] = currentValue;
    setLayers();
    console.log(matrix.map(row => row.join(' ')).join('\n'));

    function setLayers() {
        // Above and Bellow
        let upRow = x - currentValue;
        let downRow = x + currentValue;
        let upDownCol = Math.max(y - currentValue, 0);
        //let upDownCol = Math.max(y - matrix[x][y], 0);

        while (upDownCol < matrixCols && upDownCol <= y + currentValue) {
            if (upRow >= 0) {
                matrix[upRow][upDownCol] = currentValue + 1;
            }
            if (downRow < matrixRows) {
                matrix[downRow][upDownCol] = currentValue + 1;
            }

            upDownCol++;
            //console.log(matrix);
        }
        //console.log('Цялостна матрица');


        let rightColl = y + currentValue;
        let leftColl = y - currentValue;
        let leftRightRow = Math.max(x - currentValue,0);

        while(leftRightRow < matrixRows && leftRightRow <= x + currentValue){
            if(leftColl >= 0){
                matrix[leftRightRow][leftColl] = currentValue  + 1
            }
            if(rightColl < matrixCols){
                matrix[leftRightRow][rightColl] = currentValue + 1;
            }

            leftRightRow++;
        }
        // Check if it is completed
        currentValue++;
        // за да може да става две три
        if(currentValue >= matrixRows && currentValue >= matrixCols){
            return; // равносилно на брека
        }

        // самоизвикваме пак функцията ракурсия
        setLayers();
    }


    function createMatrix() {
        let matrix = [];
        for (let i = 0; i < matrixRows; i++) {
            matrix.push(new Array(matrixCols));
        }
        return matrix;
    }

}
