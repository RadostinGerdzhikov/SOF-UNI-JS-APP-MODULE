'use strict';

function solve(input){
    let systemNew = new Map();
    for (let line of input) {
        let[nameS,component,subComponent] = line.split(/\s*\|\s*/g);
        if(!systemNew.has(nameS)){
            systemNew.set(nameS,new Map());
        }

        if(!systemNew.get(nameS).get(component)){
            systemNew.get(nameS).set(component,[]);
        }

        systemNew.get(nameS).get(component).push(subComponent);
    }

    let sortedKeys = Array.from(systemNew.keys())
        .sort()
        .sort((a,b) => systemNew.get(b).size - systemNew.get(a).size);

    for (let key of sortedKeys) {
        console.log(key);

        let sortedComponents = Array.from(systemNew.get(key).keys()).sort((a,b) => systemNew.get(key).get(b).length - systemNew.get(key).get(a).length);
        for (let item of sortedComponents) {
            console.log('|||'+item);
            for (let el of systemNew.get(key).get(item)) {
                console.log('||||||' + el);
            }
        }

    }

}
