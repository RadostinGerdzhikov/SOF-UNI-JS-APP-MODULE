'use strict';
function solve(arr){
    let set = new Set();
    arr.join('').toLowerCase().split(/[^\w]+/gm).filter(el => el !== '').forEach(word=>{
        set.add(word)
    });

    console.log(Array.from(set).join(', '));

}