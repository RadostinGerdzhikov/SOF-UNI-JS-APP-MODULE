'use strict';
function uniqueSec(input) {
    let set = new Set();
    for (let arr of input) {
        arr = JSON.parse(arr);
        arr = arr.sort((a,b) => b-a);
        set.add(JSON.stringify(arr));
    }
    let resultArr = [];
    set.forEach(el=>resultArr.push(el));
    resultArr.sort((a, b) => a.length - b.length);
    for (let el of resultArr){
        el = JSON.parse(el);
        console.log('['+ el.join(', ')+']');
    }
}
