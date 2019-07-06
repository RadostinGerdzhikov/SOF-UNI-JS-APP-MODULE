function sumDigits(digit) {

    digit = digit.toString();
    let sum = 0;
    for (let num of digit) {
        sum += +num;
    }

    console.log(sum);
}

sumDigits(245678);

