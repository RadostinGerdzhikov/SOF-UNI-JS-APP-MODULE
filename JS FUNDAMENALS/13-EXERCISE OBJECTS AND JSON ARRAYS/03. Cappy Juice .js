'use strict';
function juice(input) {
    let mlLitresObj = {};
    let bottlesObj = {};

    for (let line of input) {
        let [fruit, mlLitres] = line.split(/\s*=>\s*/);
        if (!mlLitresObj.hasOwnProperty(fruit)) {
            mlLitresObj[fruit] = 0;
        }
        mlLitresObj[fruit] += +mlLitres;

        if (mlLitresObj[fruit] >= 1000) {
            bottlesObj[fruit] = parseInt(mlLitresObj[fruit] / 1000);
        }
    }

    for (let bot in bottlesObj) {
        console.log(bot + " => " + bottlesObj[bot]);
    }

}