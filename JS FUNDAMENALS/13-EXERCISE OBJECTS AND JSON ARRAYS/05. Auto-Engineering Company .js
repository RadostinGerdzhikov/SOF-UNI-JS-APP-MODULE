'use strict';
function printCars(input) {
    let map = new Map();
    for (let automobile of input) {
        let [car, model,horsesPowers] = automobile.split(/\s*\|s*/g);
        if(!map.has(car)){
            map.set(car,new Map());
        }
        map.set(car,map.get(car).set(model,horsesPowers))

    }

    for (let [k,v] of map) {
        console.log(k);
        for (let [key,value] of v) {
            console.log(`###${key.trim()} -> ${value.trim()}`);
        }
    }

}
