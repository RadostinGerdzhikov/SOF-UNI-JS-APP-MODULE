'use strict';
function scoreToHtml(str) {
    let arr = JSON.parse(str);
    let result = '<table>\n  <tr>';
    for (let key in arr[0]) {
        result += `<th>${htmlEscape(key+'')}</th>`;
    }
    result += '</tr>\n';

    for (let obj of arr) {
        result += `   <tr>`;
        for (let key in obj) {
            result += `<td>${htmlEscape(obj[key]+'')}</td>`;
        }
        result += `</tr>\n`;
    }

    result+= '</table>';
    console.log(result);

    function htmlEscape(str) {
        return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')
    }


}