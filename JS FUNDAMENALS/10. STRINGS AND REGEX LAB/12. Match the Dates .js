'use strict';
function matchDate(input) {
    let regex = /\b(?<day>\d{1,2})-(?<month>[A-Z][a-z]{2})-(?<year>\d{4})/g

    if(typeof input === "string"){
        input = input.split(' ');

    }

    let exec;
    for (let str of input){
        while(exec = regex.exec(str)){
            console.log(exec[0] + ` (Day: ${exec.groups.day}, Month: ${exec.groups.month}, Year: ${exec.groups.year})`);
        }
    }

}