'use strict';
function login(arr) {

    let pass = arr.shift();
    let reversedPass = pass.split('').reverse().join('');
    let count = 0;
    for (let i = 0; i <= 3; i++) {
        if(arr[i] !== reversedPass){
            count++;
            if(count > 3){
                console.log(`User ${pass} blocked!`);
                return;
            }
            console.log('Incorrect password. Try again.');
        }else if(arr[i] === reversedPass){
            console.log(`User ${pass} logged in.`);
            return;
        }
    }

    // console.log(reversedPass);
    // console.log(arr);
}

login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
//
// if( i === 4){
//     console.log(`User ${pass} blocked!`);
//     return;