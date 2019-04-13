'use strict';
function aggregateTable(input) {
    let sum = 0;
    let towns = [];

    for (let el of input) {
        el = el.split('|').filter(el => el !== '').map(el => el.trim());

        towns.push(el[0]);
        sum += +el[1];
    }

    console.log(towns.join(', '));
    console.log(sum);
}
