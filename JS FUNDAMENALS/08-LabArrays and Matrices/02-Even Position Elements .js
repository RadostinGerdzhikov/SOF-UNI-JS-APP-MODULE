'use strict';
function printEvenPositionElement(input) {
    let resultArr = [];
    for (let index in input) {
        if(index % 2 === 0)
            resultArr.push(input[index]);
    }
    let string = resultArr.join(' ');
    return string;

}