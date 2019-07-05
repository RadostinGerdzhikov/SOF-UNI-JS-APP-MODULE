'use strict';
function vacation(groupNumbers, type ,day) {

    let price = 0;
    let totalPrice = 0;

    if(type === 'Students'){
        switch (day) {
           // Friday	Saturday	Sunday
            case "Friday":
                price = 8.45;
                break;
            case "Saturday":
                price = 9.80;
                break;
            case "Sunday":
                price = 10.46;
                break
        }

            totalPrice = price * groupNumbers;

        if(groupNumbers >= 30){
            totalPrice = totalPrice * 0.85;
        }
    }

    if(type === 'Business'){
        switch (day) {
            // Friday	Saturday	Sunday
            case "Friday":
                price = 10.90;
                break;
            case "Saturday":
                price = 15.60;
                break;
            case "Sunday":
                price = 16;
                break
        }

        totalPrice = price * groupNumbers;

        if(groupNumbers >= 100){
            totalPrice = totalPrice * (groupNumbers - 10);
        }
    }

    if(type === 'Regular'){
        switch (day) {
            // Friday	Saturday	Sunday
            case "Friday":
                price = 15;
                break;
            case "Saturday":
                price = 20;
                break;
            case "Sunday":
                price = 22.50;
                break
        }

        totalPrice = price * groupNumbers;

        if(groupNumbers >= 10 && groupNumbers <= 20){
            totalPrice = totalPrice * 0.95;
        }
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30,
    "Students",
    "Sunday"
);
