'use strict';
function cone(radius,height) {

    let slantHeight = Math.sqrt(radius ** 2 + height ** 2);
    let area = Math.PI * radius ** 2 + Math.PI * radius * slantHeight;
    let volume = Math.PI * radius * radius * (height / 3);

    console.log("volume = " + volume.toFixed(4));
    console.log("area = " + area.toFixed(4));


}

cone(3,5);
