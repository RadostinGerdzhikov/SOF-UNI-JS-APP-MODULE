'use strict';
function cityMarkets(arr){
    let resultObj = {};
    for (let value of arr) {
        let[town, product, price, quontity] = value.split(/\s*->\s*|\s* : \s*/g);
        if(!resultObj.hasOwnProperty(town)){
            resultObj[town] = {};
        }
        resultObj[town][product] = +price * +quontity;
    }
    for (let key in resultObj) {
        console.log(`Town - ${key}`);
        for (let kvp in resultObj[key]) {
            console.log(`$$$${kvp} : ${resultObj[key][kvp]}`);
        }
    }
}
