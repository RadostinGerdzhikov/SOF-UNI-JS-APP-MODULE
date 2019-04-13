'use strict';
function extractText2(text){

    let result = [];
    let start = text.indexOf('(');
    let end = text.indexOf(')',start);

    while(end > -1 && start > -1){
        result.push(text.substring(start+1,end));
        start = text.indexOf('(',start + 1);
        end = text.indexOf(')',end + 1);

    }

    console.log(result.join(', '));

}