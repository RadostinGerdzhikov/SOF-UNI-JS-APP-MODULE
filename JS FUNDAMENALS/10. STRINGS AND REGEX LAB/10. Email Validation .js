'use strict';
function isEmailValid(email){
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    if(regex.test(email)){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }
}
