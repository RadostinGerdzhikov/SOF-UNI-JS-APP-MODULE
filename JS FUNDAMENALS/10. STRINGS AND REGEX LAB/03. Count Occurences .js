'use strict';
function countOccurrences2(targetWord,text) {
    let counter = 0;
    let index = text.indexOf(targetWord);
    while(index > -1){
        counter++;
        index = text.indexOf(targetWord,index+1);
    }

    console.log(counter);
}
