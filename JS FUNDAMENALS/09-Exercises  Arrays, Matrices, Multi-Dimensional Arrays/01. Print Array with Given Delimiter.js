'use strict';

function printArrayByDelimeter(input) {
    let delimeter = input.pop();
    return input.join(`${delimeter}`);
}
