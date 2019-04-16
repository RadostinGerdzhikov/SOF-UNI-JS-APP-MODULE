'use strict';
function capitalize(inputAsArray) {
    inputAsArray = inputAsArray.split(' ');

    for (let i = 0; i < inputAsArray.length; i++) {
        inputAsArray[i] = inputAsArray[i].toLowerCase();
        inputAsArray[i] = inputAsArray[i].charAt(0).toUpperCase() + inputAsArray[i].substring(1);

    }
    console.log(inputAsArray.join(' '));
}