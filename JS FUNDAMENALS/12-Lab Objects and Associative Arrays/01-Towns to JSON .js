'use strict';
function townsToJSON(arr) {
    arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let values = arr[i].split(/\s*\|\s*/g).filter(el=> el !=='');
        arr[i] = {Town:values[0],Latitude:+values[1],Longitude:+values[2]};
    }
    console.log(JSON.stringify(arr));

}