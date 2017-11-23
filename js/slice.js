Array.prototype.slice = function () {
    var a = arguments[0],
        b = arguments[1];
    a = a || 0;
    b = b || this.length;
    a < 0 ? a = a + this.length : null;
    b < 0 ? b = b + this.length : null;
    if (a >= b) {
        return [];
    } else {
        var arr = [];
        for (var i = a; i < b; i++) {
            arr.push(this[i]);
        }
        return arr;
    }
}
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice());