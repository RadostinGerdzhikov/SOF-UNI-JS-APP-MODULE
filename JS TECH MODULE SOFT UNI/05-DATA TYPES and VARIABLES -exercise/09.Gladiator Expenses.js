'use strict';
function gladiatorExpences(lostFights, helmetPrice, swordPrice,shieldPrice,armorPrice) {

    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            brokenHelmet++;
        }

        if (i % 3 === 0) {
            brokenSword++;
        }

        if (i % 6 === 0) {
            brokenShield++;
        }

        if (i % 12 === 0) {
            brokenArmor++;
        }
    }
        let areusArmor = brokenArmor * armorPrice;
        let areusShield = brokenShield * shieldPrice;
        let areusSword = brokenSword * swordPrice;
        let areusHelmet = brokenHelmet * helmetPrice;

    let output = areusArmor + areusShield + areusSword + areusHelmet;
    console.log(`Gladiator expenses: ${output.toFixed(2)} aureus`);

}

gladiatorExpences(7,
    2,
    3,
    4,
    5
);

gladiatorExpences(23,
    12.50,
    21.50,
    40,
    200
);




