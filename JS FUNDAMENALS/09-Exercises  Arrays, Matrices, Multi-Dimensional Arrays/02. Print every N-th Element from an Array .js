'use strict';
function printElementOfArrayByStep(input) {
    let step = +input.pop();
    for (let i = 0; i < input.length; i+= step) {
        let a = input[i];
        console.log(a);
    }
}
