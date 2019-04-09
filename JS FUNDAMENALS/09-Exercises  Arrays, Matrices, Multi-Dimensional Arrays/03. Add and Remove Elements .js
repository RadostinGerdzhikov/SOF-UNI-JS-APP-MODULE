'use strict';
function addRemove(input) {
    let result = [];
    let initialValue = 1;

    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'add'){
            result.push(initialValue);
        }else if(input[i] === 'remove'){
            result.pop();
        }
        initialValue++;
    }

    if(result.length === 0){
        console.log('Empty');
        return;
    }
    console.log(result.join('\n'));
}
