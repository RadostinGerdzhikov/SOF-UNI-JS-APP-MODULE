function calculateNums(arr) {
    let arrNums = [];
    let resultNum = 0;

    for (let el of arr) {
        if (typeof el === "number") {
            arrNums.push(el);
            //console.log(arrNums);
        } else {

            if (arrNums.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            if (typeof el !== "number") {

                let num2 = arrNums.pop();
                let num1 = arrNums.pop();
                //console.log(arrNums);

                switch (el) {
                    case '+':
                        resultNum = num1 + num2;
                        break;
                    case '-':
                        resultNum = num1 - num2;
                        break;
                    case '/':
                        resultNum = num1 / num2;
                        break;
                    case '*':
                        resultNum = num1 * num2;
                        break;

                }

                arrNums.push(resultNum);
            }


        }
    }

        if (arrNums.length !== 1) {
            console.log('Error: too many operands!');
            return;
        }

        for (let el of arrNums) {
            console.log(el);
        }


}
