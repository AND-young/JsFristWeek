/*
 * @Author: young 
 * @Date: 2017-11-21 15:22:23 
 * @Last Modified by: young
 * @Last Modified time: 2017-11-21 15:30:56
 */

function preSibling(obj) {
    var preObj = obj.previousSibling;
    while (preObj) {
        if (preObj.nodeType === 1) {
            return preObj;
        } else {
            preObj = preObj.previousSibling;
        }
    }
}

var div = document.getElementById('box');

console.log(preSibling(div));