'use strict';
function countWordsWithMapByMe(arr) {
    let map = new Map();
    arr.join(' ').toLowerCase().split(/[^\w]+/).filter(el => el !== '').forEach(word => {
        if (!map.has(word)) {
            map.set(word, 0);
        }
        map.set(word, map.get(word) + 1)
    });
    let sortedKeys = Array.from(map.keys()).sort();
    for (let el of sortedKeys) {
        console.log(`'${el}' -> ${map.get(el)} times`);
    }
}
