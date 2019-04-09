'use strict';
function sortArr(arr){
    let result = arr.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n');
    console.log(result);
}