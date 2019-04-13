'use strict';
function expressionSplit(expression) {
    console.log(expression.split(/[(),;.\s]+/).join('\n'));
}
