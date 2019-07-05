function rightPlace(codingString ,char, originalString) {
    codingString = codingString.replace('_',char);
    // if(codingString === originalString){
    //     console.log('Matched')
    // }else{
    //     console.log('Not Matched');
    // }
     let result = codingString === originalString ? 'Matched' : 'Not Matched';
     console.log(result);

}

rightPlace('Str_ng', 'I', 'Strong');