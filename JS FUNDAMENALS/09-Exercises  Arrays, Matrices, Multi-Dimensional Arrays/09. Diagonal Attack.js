function diagonalAttack(input) {
    let matrix = input.map(num => num.split(' ').map(el => +el));
    // диагоналите се намират само с един цикъл po row сумата на диагоналите
    let mainDiagonal = 0;
    let oppositeDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainDiagonal += matrix[row][row];
        oppositeDiagonal += matrix[row][matrix.length - 1 - row];
    }

    if (mainDiagonal === oppositeDiagonal) {
        // за да заменим определени стоности на матрицата, трябва да я обходим цялата
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (col !== row && col !== matrix.length - 1 - row) {
                    matrix[row][col] = mainDiagonal
                }
            }
        }
    }
    // console.log(matrix);
    // console.log(matrix.map(row => row.join(' ')));
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
