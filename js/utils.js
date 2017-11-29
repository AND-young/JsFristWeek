var utils = (function () {
    //   json方法的兼容
    function toJSON(str) {
        // if ("JSON" in window) {
        //     return JSON.parse(str);
        // } else {
        //     return eval('(' + str + ')');
        // }
        return "JSON" in window ? JSON.parse(str) : eval('(' + str + ')');
    }

    //   类数组的转换
    function toArray(obj) {
        var ary = [];
        try {
            // 先执行 try 代码不报错就执行
            ary = [].slice.call(obj);
        } catch (e) {
            //  try中的代码报错才执行catch的代码
            for (var i = 0; i < obj.length; i++) {
                ary[ary.length] = obj[i];
            }
        }
        return ary;
    }

    //  获取兄弟节点
    function preSibling(obj) {
        try {
            return obj.previousElementSibling;
        } catch (e) {
            var preObj = obj.previousSibling;
            while (preObj) {
                if (preObj.nodeType === 1) {
                    return preObj;
                } else {
                    preObj = preObj.previousSibling;
                }
            }
        }
    }

    //  求平均数
    function average() {
        var arr = [];
        try {
            // 先执行 try 代码不报错就执行
            arr = [].slice.call(arguments);
        } catch (e) {
            //  try中的代码报错才执行catch的代码
            for (var i = 0; i < arguments.length; i++) {
                arr[arr.length] = arguments[i];
            }
        }
        // var arr = [].prototype.slice.call(arguments);
        arr.sort(function (a, b) {
            return a - b;
        });
        var avg = eval('(' + arr.join('+') + ')') / arr.length;
        return avg;
    }

    //  获取当前元素距离body 的上偏移和左偏移
    function offset(curEle) {
        var topLength = curEle.offsetTop,
            leftLength = curEle.offsetLeft,
            parent = curEle.offsetParent;

        while (parent.tagName !== 'body') {
            if (!/MSIE 8/i.test(navigator.useragent)) {
                topLength += parent.clientLeft;
                leftLength += parent.clientTop;
            }
            topLength += parent.offsetLeft;
            leftLength += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {top: topLength, left: leftLength};
    }

    //  获取和修改winbox属性
    function winBox(attr, value) {
        if (typeof value !== 'undefined') {
            document.documentElement[attr] = value;
            document.body[attr] = value;
            return;
        }
        return document.documentElement[attr] || document.body[attr];
    }

    //   获取和修改css属性
    function getCss(curEle, attr) {
        var value = null;
        if ('getComputedStyle' in window) {
            value = window.getComputedStyle(curEle, null)[attr];
        } else {
            if (attr === 'opacity') {
                value = curEle.currentStyle['filter'];
                var reg = /^alpha\(opacity=(.+)\)$/;
                reg.test(value) ? value = reg.exec(value)[1] / 100 : value = 1;
            }
            else {
                value = curEle.currentStyle[attr];
            }
        }
        //  去除获取数据的单位
        // var temp = parseFloat(value);
        // !isNaN(temp) ? value = temp : null;

        var reg = /^[-+]\d+(\.\d+)?(px|pt|rem|em)?$/i;
        reg.test(value) ? value = parseFloat(value) : null;
        return value;
    }

    return {
        average: average,
        preSibling: preSibling,
        toArray: toArray,
        toJson: toJSON,
        offset: offset,
        winBox: winBox,
        getCss: getCss
    }
})();

//   检测数据类型
~function () {
    var obj = {
        isNumber: 'Number',
        isString: 'String',
        isBoolean: 'Boolean',
        isNull: 'Null',
        isUndefined: 'Undefined',
        isFunction: 'Function',
        isObject: 'Object',
        isArray: 'Array',
        isRegExp: 'RegExp',
        isDate: 'Date'
    }
    var checkTpye = {};
    for (var key in obj) {
        // checkTpye[key] = (function () {
        //     var name = obj[key];
        //     return function (value) {
        //         var type = Object.prototype.toString.call(value);
        //         var reg = new RegExp("\\[object " + name + "\\]");
        //         return reg.test(type) ? true : false;
        //     }
        // })();

        checkTpye[key] = function (value) {
            var type = Object.prototype.toString.call(value);
            var reg = new RegExp("\\[object " + this.name1 + "\\]");
            console.log(reg);
            return reg.test(type) ? true : false;
        };
        checkTpye[key].name1 = obj[key];
    }
    window.checkType = checkTpye;
}();
// checkTpye.isArray.call(checkTpye.isArray,[]);
