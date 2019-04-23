'use strict';
function printPopulationInTown(arr) {
    let map = new Map();
    for (let str of arr) {
        let [town, population] = str.split(/\s*<->\s*/);
        if (!map.has(town)) {
            map.set(town,0);
        }
        map.set(town,map.get(town) + +population);
    }
    for (let [key,value] of map){
        console.log(`${key} : ${value}`);
    }
}
