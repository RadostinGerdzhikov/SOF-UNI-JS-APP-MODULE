'use strict';
function modifyIvo(num) {
    let numAsString = num.toString();
    let finalSum = sumDigits(numAsString);

    function sumDigits(num) {
        let sum = 0;
        for (let n of num){
            sum += +n;
        }
        return sum;
    }

    let average = finalSum/numAsString.length;

    while(average <= 5){
        numAsString += 9;
        finalSum = sumDigits(numAsString);
        average = finalSum/numAsString.length;
    }

    console.log(numAsString);
}