'use strict';
function censorShip(text,forbiddenArray) {
    for (let word of forbiddenArray) {
        let codeType = '-'.repeat(word.length);

        while(text.indexOf(word) > -1){
            text = text.replace(word,codeType);
        }
    }
    console.log(text);
}
