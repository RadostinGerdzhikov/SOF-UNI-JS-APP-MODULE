'use strict';

function solve(arr) {

    let map = new Map();
    for (let line of arr) {
        let [town, product, price] = line.split(/\s*\|\s*/);
        if (!map.has(product)) {
            map.set(product, new Map());
        }
        map.get(product).set(town, +price);
    }

    for (let [key, value] of map) {
        let sortedTowns = Array.from(value.keys()).sort((key1, key2) => {
            return value.get(key1) - value.get(key2);
        });

        console.log(`${key} -> ${value.get(sortedTowns[0])} (${sortedTowns[0]}) `);
    }

}
