var utils = (function () {
    // function toArray(classArray) {
    //     var arr = [];
    //     try {
    //         arr = Array.prototype.slice.call(classArray);
    //     } catch (e) {
    //         for (var i = 0; i < classArray.length; i++) {
    //             arr[arr.length] = classArray[i];
    //         }
    //     }
    //     return arr;
    // }

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
    }

    return {
        toArray: toArray,
        toJson: toJSON
    }
})();