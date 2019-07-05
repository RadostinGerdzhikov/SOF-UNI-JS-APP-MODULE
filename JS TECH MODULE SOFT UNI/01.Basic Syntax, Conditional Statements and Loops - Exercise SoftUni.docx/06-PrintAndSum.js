'use strict';
// function printAndSum(num1,num2) {
//     let strResult = '';
//     let sum = 0;
//     for (let i = num1; i <= num2; i++) {
//         sum += i;
//         strResult += `${i} `;
//     }
//
//     console.log(strResult);
//     console.log(`Sum: ${sum}`);
// }


function printAndSum(num1,num2) {
    let arrResult = [];
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
        arrResult.push(i);
    }

    let result = arrResult.join(' ');


    console.log(result);

    console.log(`Sum: ${sum}`);
}

printAndSum(5,10);
