'use strict';

function twoSmollestNumber(input) {
    input.sort((a,b) => a - b); //оптред,назад
    let result = input.slice(0,2);
    console.log(result.join(' '));
}