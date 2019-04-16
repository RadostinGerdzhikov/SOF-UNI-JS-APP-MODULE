'use strict';
function captureTheNumbers(arr) {

    let regex = /[0-9]+/g;
    let arrStr = arr.join(' ');
    console.log(arrStr.match(regex).join(' '));
}