'use strict';
function concatReverseArrayOfString2(arr) {
    arr = arr.join('');
    let arrResult  =  Array.from(arr);
    arrResult.reverse();
    let result = arrResult.join('');
    return result;
}
