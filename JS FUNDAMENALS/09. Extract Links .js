'use strict';
function extractEmails(arr) {
    let regex = /www\.([a-zA-Z\d-]+\.)+(.\[a-z]+)*[a-z]+/g;
    for (let el of arr) {
        if(el.match(regex)){
            console.log(el.match(regex).join('\n'));
        }
    }
}
