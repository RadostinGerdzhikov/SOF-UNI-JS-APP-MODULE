function integerOrFloat(num1,num2,num3) {
    num1 = +num1;
    num2 = +num2;
    num3 = +num3;

    let sum = num1 + num2 + num3;
    let result = sum  === Math.floor(sum) ? "Integer" : 'Float';
    console.log(sum + ' - ' + result);
      
}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100,200,303);