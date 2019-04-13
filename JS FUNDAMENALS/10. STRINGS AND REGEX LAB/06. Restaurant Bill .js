'use strict';
function restaurantBill(input) {
    // за да получим елемeнта на даден иднекс, филтрираме с два параметъра (e,i)
    // products е нов масив на основата на input
    let products = input.filter((e,i)=>i % 2 === 0).join(', ');

    // price e нов масив на основата на input
    let price = input.filter((e,i)=>i % 2 !== 0).reduce((a,b) => +a + +b);

    console.log(`You purchased ${products} for a total sum of ${price}`);
}