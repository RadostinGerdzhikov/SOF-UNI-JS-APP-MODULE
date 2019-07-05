function amazingNumbers(number) {
    let sum = 0;
    number = number.toString();
    for (const num of number) {
        sum += +num;
    }

    sum = sum.toString();
   let result = sum.includes(9) ? `${number} Amazing? True` : `${number} Amazing? False`;   
   console.log(result);

    //console.log(`${number} Amazing? ${result}`);
}

amazingNumbers(1233);
amazingNumbers(10.1);