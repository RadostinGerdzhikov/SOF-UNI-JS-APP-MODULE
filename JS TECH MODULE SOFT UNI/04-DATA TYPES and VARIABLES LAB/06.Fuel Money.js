function fuelMoney(distance,passangers,price) {
   let needFuel = (distance / 100) * 7;
   needFuel += passangers * 0.100;
   let totalPrice = needFuel * price;
   console.log(`Needed money for that trip is ${totalPrice}lv.`); 
}
fuelMoney(260, 9, 2.49);
// Needed money for that trip is 47.559lv.