Array.prototype.myDistinct = function myDistinct() {
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (typeof obj[item] !== 'undefined') {
            this[i] = this[this.length - 1];
            this.length--;
            i--;
        } else {
            obj[item] = item;
        }
    }
    return this;
}