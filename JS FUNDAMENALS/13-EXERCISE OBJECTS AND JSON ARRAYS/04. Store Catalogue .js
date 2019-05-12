function storeCatalogue(input) {
    input.sort();
    let set = new Set();
    for (let line of input) {
        for (let i = 65; i < 91; i++) {
            let str = String.fromCharCode(i);
            if(line[0] === str){
                set.add(line[0]);
            }
        }
    }
    let resultSet = new Set();
    for (let i = 0; i < input.length; i++) {
        for (let el of set) {
            if(input[i].startsWith(el)){
                resultSet.add(el);
                resultSet.add(input[i]);
            }
        }
    }
    let result = [];
    for (let el of resultSet) {
        result.push(el);
    }
    for (let el of result) {
        if(el.length === 1){
            console.log(el);
        }else{
            let [product, price] = el.split(/:/);
            let resultArr = [];
            for (let i = 0; i < product.length; i++) {
                resultArr.push(product[i]);
            }
            //resultArr.forEach(el=>el!==' ');
            resultArr.pop();
            product = resultArr.join('');
            console.log("  " + product + ":" + price);
        }
    }

}
