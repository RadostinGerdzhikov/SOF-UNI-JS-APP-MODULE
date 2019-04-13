'use strict';
function solve(string) {
    let regex = /\w+/g;
    string = string.match(regex);
    console.log(string.join('|'));

}