'use strict';
function biggestNum(num1,num2,num3) {
  let arr = [];
    arr.push(num1);
    arr.push(num2);
    arr.push(num3);

    console.log(Math.max(...arr));


}

biggestNum(130,
    5,
    99
);