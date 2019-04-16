'use strict';
function wordInSentence(ourString,wordToCheck) {
    let word = wordToCheck;
    ourString = ourString.split(' ');
    let regex = new RegExp(`\\b${word}\\b`,'gi');
    // let sameRegex = new RegExp('\\b' + word + '\\b','g')
    let counter = 0;
    for (let i = 0; i < ourString.length ; i++) {
        if(ourString[i].match(regex)){
            counter++;
        }
    }
    console.log(counter);
}
