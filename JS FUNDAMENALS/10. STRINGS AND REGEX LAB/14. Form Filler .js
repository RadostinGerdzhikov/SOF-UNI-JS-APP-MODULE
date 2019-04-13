'use strict';
function formFilter(name,email,phoneNumber,text){
    text = text.join('\n');
    text = text
    //.replace(/<![A-Za-z]+!>/g,name)
        .replace(/<![A-Za-z]+!>/g,name)
        .replace(/<@[A-Za-z]+@>/g,email)
        .replace(/<\+[A-Za-z]+\+>/g,phoneNumber);
    console.log(text);
}