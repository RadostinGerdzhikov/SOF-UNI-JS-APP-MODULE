'use strict';
function countWordInText1(input) {
    let result = {};
    input.join().split(/[^\w]+/).filter(a=>a!=='').forEach(el=>{
        if(!result.hasOwnProperty(el)){
            result[el]=0;
        }
        result[el]++;

    });
    console.log(JSON.stringify(result));
}
