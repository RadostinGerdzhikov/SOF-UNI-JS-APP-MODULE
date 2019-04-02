'use strict';
function solve(arr){
    arr = arr.filter((el,ind) => ind % 2 === 1).map(x=>x*2).reverse();
    console.log(arr);
}