'use strict';
function firstLast(arr){
    let targetNum = arr.shift();
    console.log(arr.slice(0,targetNum));
    console.log(arr.slice(arr.length - targetNum));
}
