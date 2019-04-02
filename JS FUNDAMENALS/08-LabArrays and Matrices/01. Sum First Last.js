'use strict';
function firstLastSum(input) {
    input = input.map(Number);
    let num = input[0];
    let num1 = input[input.length-1];
    let sum = num + num1;
    return sum;

}

