'use strict';
function userNames(arr){
    for (let ind in arr) {
        let[username,rest] = arr[ind].split('@');
        arr[ind] = username + '.' + rest.split('.').map(a=>a[0]).join('');
    }
    console.log(arr.join(', '));
}
