'use strict';
function divisible(num) {
    // 2, 3, 6, 7, and 10

    let divisorArr = [];

    if(num  % 2 === 0){
        divisorArr.push(2);
    }
    if(num  % 3  === 0){
        divisorArr.push(3);
    }
    if(num  % 6 === 0){
        divisorArr.push(6);
    }
    if(num  % 7 === 0){
        divisorArr.push(7);
    }
    if(num  % 10 === 0){
        divisorArr.push(10);
    }
    if(num  % 2 !== 0 && num  % 3 !== 0 && num  % 6 !== 0 &&num  % 7 !== 0 && num  % 10 !== 0){
        console.log('Not divisible');
        return;
    }

    let result = Math.max(...divisorArr);

    console.log(`The number is divisible by ${result}`);
}

divisible(30);
divisible(15);
divisible(12);
divisible(1643);
