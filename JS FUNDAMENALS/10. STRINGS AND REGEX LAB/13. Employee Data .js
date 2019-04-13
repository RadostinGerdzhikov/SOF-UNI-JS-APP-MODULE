'use strict';
function printPostion(input) {
    let regex = /^(?<name>[A-Z][a-zA-Z]*)\s-\s(?<salary>[1-9][0-9]*)\s-\s(?<position>[A-Za-z0-9 -]+$)/gm;
    // if(typeof input === "string"){
    //     input = input.split(' ');
    // }

    let exec;
    for (const str of input) {
        while (exec = regex.exec(str)) {
            console.log(`Name: ${exec.groups.name}\n`+
                `Position: ${exec.groups.position}\n`+
                `Salary: ${exec.groups.salary}`
            );

        }
    }
}