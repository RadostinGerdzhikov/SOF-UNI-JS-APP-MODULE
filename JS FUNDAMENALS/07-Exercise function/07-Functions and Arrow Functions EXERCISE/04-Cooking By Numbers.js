'use strict';
function cookingByNumbers(input) {
    let num = +input[0];
    for (let i = 1; i < input.length; i++) {
        if(input[i] === 'chop'){
            num = chop(num);
            console.log(num);
        }
        if(input[i] === 'fillet'){
            num = fillet(num);
            console.log(num);
        }
        if(input[i] === 'bake'){
            num = bake(num);
            console.log(num);
        }
        if(input[i] === 'spice'){
            num = spice(num);
            console.log(num);
        }
        if(input[i] === 'dice'){
            num = dice(num);
            console.log(num);
        }

    }

    function fillet(num) {
        return (num * 0.8).toFixed(1);
    }

    function bake(num) {
        return  num * 3
    }

    function spice(num) {
        return num +1 ;
    }


    function dice(num) {
        return Math.sqrt(num)
    }

    function chop(num) {
        return num / 2;
    }
}
