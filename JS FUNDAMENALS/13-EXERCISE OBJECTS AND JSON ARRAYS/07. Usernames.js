'use strict';
function printUsernames(arr) {
    let set = new Set();
    for (let item of arr) {
        set.add(item);
    }

    arr = Array.from(set);
    console.log(arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'));

}
