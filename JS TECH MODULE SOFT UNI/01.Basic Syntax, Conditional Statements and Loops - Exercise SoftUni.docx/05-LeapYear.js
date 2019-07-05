function isLeap(year) {

    if(new Date(year, 1, 29).getDate() === 29){
        console.log("yes");
    }else{
        console.log("no");
    }


}


   isLeap(1984);


