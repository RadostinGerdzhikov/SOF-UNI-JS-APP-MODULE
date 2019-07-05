'use strict';
function bitcoinMining(arr) {

    for (let num of arr) {
        num = +num;
    }


    let priceBitcoin = 11949.16;
    let priceGramGold = 67.51;
    let dayForFirstBuitcoin = [];
    let totalSum = 0;
    let quontityBitocin = 0;


    arr.unshift(0);

    for (let i = 0; i < arr.length; i++) {

        if (i !== 0 && i % 3 === 0) {
            arr[i] = arr[i] * 0.7;
        }

    }

    arr.shift();
    for (let i = 0; i < arr.length; i++) {

        totalSum += arr[i] * priceGramGold;

        if(totalSum >= priceBitcoin){
            dayForFirstBuitcoin.push(i + 1);
        }
    }

    quontityBitocin = Math.floor(totalSum / priceBitcoin);
    totalSum -= priceBitcoin * quontityBitocin;


    console.log('Bought bitcoins: ' + quontityBitocin);

    if (dayForFirstBuitcoin.length !== 0) {
        console.log('Day of the first purchased bitcoin: ' + dayForFirstBuitcoin[0]);
    }

    console.log('Left money: ' + totalSum.toFixed(2) + ' lv.');

}


bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);