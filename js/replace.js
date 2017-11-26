var str = "my name is young {0} i'm {20} years old";
var reg = /\{(\d+)\}/g;
str.replace(reg,function () {
    // console.log(arguments);
    console.log(arguments[length-1]);
    //  执行捕获,并且将捕获结果当做实参传递给这个函数
    // Arguments  为类数组
    // 0: "{0}"   大正则
    // 1: "0"     小正则
    // 2: 17      起始索引
    // 3: "my name is young {0} i'm {20} years old"  原字符串
    // 最后两个元素是 index 和 input
    // 每次函数执行的结果将大正则的内容替换掉
});

