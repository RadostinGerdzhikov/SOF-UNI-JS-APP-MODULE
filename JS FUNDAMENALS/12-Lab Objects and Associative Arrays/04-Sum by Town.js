'use strict';
function sumOfTowns(arr){
    let result = {};
    for (let i = 0; i < arr.length; i+=2) {
        let[town,income] = [arr[i] , +(arr[i+1])]
        if(result[town]=== undefined){
            result[town] = income;
        }else{
            result[town] += income;
        }
    }

    console.log(JSON.stringify(result));
}