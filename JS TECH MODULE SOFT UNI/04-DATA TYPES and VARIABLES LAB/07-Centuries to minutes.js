function centuriesToMinutes(centure){
    let years = 100 * centure;
    let days = Math.floor(365.2422 * years);
    let hours = days * 24;
    let minutes = hours * 60;
  
  console.log(`${centure} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1);