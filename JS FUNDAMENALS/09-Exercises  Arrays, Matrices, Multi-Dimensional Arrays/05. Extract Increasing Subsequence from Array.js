'use strict';
function solve (input){

    let result = [input[0]];
    for (let i = 1; i < input.length ; i++) {
        let maxNumber = input[i - 1];
        if(input[i] >= maxNumber && input[i] >= input[0]){
            result.push(input[i]);
        }
    }

    console.log(result.join('\n'));
}
