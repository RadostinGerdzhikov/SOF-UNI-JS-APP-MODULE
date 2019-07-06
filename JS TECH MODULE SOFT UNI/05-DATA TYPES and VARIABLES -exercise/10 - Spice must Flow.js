'use strict';
function solve(sLei) {



  let yeld = sLei;
  let  minningDays = 0;
  let  totalQuantity = 0;

   if(yeld < 100){
       console.log(minningDays);
       console.log(totalQuantity);
   }else{


  while(yeld >= 100){
     minningDays++;
      // console.log("Total quontity: " + totalQuantity);

      totalQuantity += (yeld - 26);
      yeld -= 10;



  }
    totalQuantity -= 26;

    console.log(minningDays);
    console.log(totalQuantity);
   }

}

solve(111);