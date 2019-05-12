'use strict';
function printGladiatorInventory(input) {
    input.pop();
    let result = input.shift().split(' ');

    for (let row of input) {
        row.split(' ');
    }

    for (let row of input) {
        row = row.split(' ');


        let command = row[0];
        let inventory = row[1];

        if(command === "Buy"){
            if(!result.includes(inventory)){
                result.push(inventory);
            }
        }

        if(command === "Trash"){
            if(result.includes(inventory)){
                result = result.filter(e => e != inventory);
            }
        }

        if(command === "Repair"){
            if(result.includes(inventory))
                result = result.filter(e => e != inventory);
            result.push(inventory);
        }

        if(command === "Upgrade"){
            let inventoryArr = inventory.split('-');
            let equipmentInResult = inventoryArr[0];
            let upgrade = inventoryArr[1];
            if(result.includes(equipmentInResult)){
                let upgradeEquipment =  `${equipmentInResult}:${upgrade}`;
                let indexOfEquipmentInResult = result.indexOf(equipmentInResult);
                result.splice(indexOfEquipmentInResult + 1,0,upgradeEquipment)
            }

        }
    }

    console.log(result.join(' '));
}

