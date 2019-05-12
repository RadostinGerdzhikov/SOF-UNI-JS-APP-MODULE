'use strict';
function printHTMLТable(input) {
    let result = `<table>\n`;
    for (let line of input){
        line = JSON.parse(line);
        result += `  <tr>\n`;
        result += `    <td>${htmlEscape(line.name)}</td>\n`;
        result += `    <td>${htmlEscape(line.position)}</td>\n`;
        result += `    <td>${htmlEscape(line.salary+"")}</td>\n`;
        result += `  </tr>\n`;
    }
    result += `</table>`;
    console.log(result);

    function htmlEscape(str){
        return str
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    }


}
