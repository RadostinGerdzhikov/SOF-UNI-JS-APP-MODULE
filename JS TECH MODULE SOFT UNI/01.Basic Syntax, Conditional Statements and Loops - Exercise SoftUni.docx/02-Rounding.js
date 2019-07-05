'use strict';

function rounding(num) {

    let count = 0;
    while(num >= 1){
        num = num / 2;
        count++;
    }

    console.log(`Length is ${num.toFixed(2)} cm. after ${count} cuts.`);
}

rounding(1000);
rounding(1);