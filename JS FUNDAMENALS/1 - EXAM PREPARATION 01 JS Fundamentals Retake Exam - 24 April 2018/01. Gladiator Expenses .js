'use strict';
function printPriceOfEquipment(lostFightCount,helmetPrice,swordPrice,shieldPrice,armorPrice) {

    let priceForBrokenStaff = 0;
    let brokenHelmet = 0;
    let brokenSward = 0;
    let brokenShield = 0;
    let brokenArmor = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if(i % 2 === 0){
            brokenHelmet++;
        }
        if(i % 3 === 0){
            brokenSward++;
        }

        if(i % 6 === 0){
            brokenShield++;
        }

        if(i % 12 === 0){
            brokenArmor++;
        }
    }

    priceForBrokenStaff += brokenHelmet * helmetPrice + brokenShield * shieldPrice + brokenSward * swordPrice + brokenArmor * armorPrice;

    console.log("Gladiator expenses: " + priceForBrokenStaff.toFixed(2) + " aureus");
}