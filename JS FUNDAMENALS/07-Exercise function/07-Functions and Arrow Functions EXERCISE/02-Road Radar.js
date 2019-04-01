'use strict';
function speedArea([speed, area]) {
    let goodSpeed = areaGoodSpeed(area);
    let finishResult = isDriverCrazy(speed, goodSpeed);
    return finishResult;

    function isDriverCrazy(speed, goodSpeed) {
        if (speed - goodSpeed < 0) {
            return false
        } else if (speed - goodSpeed >0 && speed - goodSpeed <= 20) {
            return 'speeding';
        } else if (speed - goodSpeed > 20 && speed - goodSpeed <= 40) {
            return 'excessive speeding';

        } else if (speed - goodSpeed > 40) {
            return 'reckless driving';
        }
    }

    function areaGoodSpeed(area) {
        switch (area) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city' :
                return 50;
            case 'residential' :
                return 20;
        }
    }

}

