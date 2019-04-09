'use strict';
function rotateArr(input) {
    let numberRotation = +input.pop();
    for (let i = 0; i < numberRotation % input.length; i++) {
        let num = input.pop();
        input.unshift(num);
    }
    return input.join(' ');
}