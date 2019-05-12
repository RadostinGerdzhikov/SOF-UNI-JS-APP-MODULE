function heroicInventory(arr) {
    let resultArr = [];
    for (let line of arr) {
        let tokens = line.split(/\s*\/\s*/);
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];
        if(tokens.length > 2){
            items = tokens[2].split(', ');
            //obj['items'] = thingsArr;
        }

        let obj = {name:name,
            level:level,
            items:items};

        resultArr.push(obj)
    }

    console.log(JSON.stringify(resultArr));
}