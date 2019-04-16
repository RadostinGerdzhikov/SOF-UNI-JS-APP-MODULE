'use strict';
function findVariable(str) {
    let regex = /\b_[A-Za-z0-9]+\b/g;

    let result = str.match(regex);
    let rResult = [];
    for (let word of result) {
        word = word.replace(word[0],'');
        rResult.push(word);
    }
    console.log(rResult.join(','));
}