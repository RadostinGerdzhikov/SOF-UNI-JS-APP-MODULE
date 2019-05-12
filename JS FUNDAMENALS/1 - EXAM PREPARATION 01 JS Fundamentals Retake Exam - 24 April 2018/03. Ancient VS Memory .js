'use strict';
function printStringsFromArrayOfNums(input) {
    let helperString = "";
    for (let row of input) {
        helperString += row + " ";
    }

    input = [];

    for (let i = 0; i < helperString.length-1 ; i++) {
        input.push(helperString[i]);
    }

    input = input.join('');
    let realInput = [];
    realInput.push(input);

    let result = [];
    let realResult = "";
    for (let row of realInput) {

        row = row.split(' ');

        for (let i = 0; i < row.length; i++) {
            if(row[i] === "32656" && row[i + 1] === "19759" && row[i + 2] === "32763" && row[i + 3] === "0" && row[i+ 5] === "0"){

                let lenghtString = row[i + 4];
                lenghtString = +lenghtString;


                result = row.slice(i + 6, i + 6 + lenghtString);

                for (let numStrOfResult of result) {
                    realResult += String.fromCharCode(numStrOfResult);

                }

                console.log(realResult);
                realResult = "";
            }
        }
    }
}

