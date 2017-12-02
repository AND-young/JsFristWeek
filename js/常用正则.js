var reg = /^((18|19)|([2-5]\d)|(6[0-5]))$/;
// 单词首字母大写
var str = "my name is young,i'm 20 year's old";
//  \b 表示边界 - 两边也算边界
str = str.replace(/\b(\w)(\w*)\b/g, function () {
    return arguments[1].toUpperCase() + arguments[2];
});
var str = "my name is young-yang i am hello world";
var reg = /([a-zA-Z])((\w+)(-\w+)?)?/g;
str.replace(reg,function(){
	arguments[2] = arguments[2] || '';
	return arguments[1].toUpperCase()+arguments[2];
})
//  formatTime
var str = '2017-11-26 20:09:33';
// 1 将字符串用split进行拆分,  空格  然后 按 - 和 : 最后字符串拼接
// 2 new Date()
// 3 正则
var Reg = /^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
// str = str.replace(Reg, function () {
//     var s = '';
//     a = arguments;
//     for (var i = 1; i < 7; i++) {
//         s += arguments[i];
//     }
//     return a[1] + '年' + a[2] + '月' + a[3] + '日' + a[4] + '时' + a[5] + '分' + a[6] + '秒';
// });

str = str.replace(Reg, '$1年$2月$3日$4时$5分$6秒');

var str1 = '2017-11-26 20:09:33';
var reg1 = /\d+/g;
var arr = str1.match(reg1);
var template = '{0}年{1}月{2}日{3}时{4}分{5}秒';
template = template.replace(/\{(\d+)\}/g, function () {
    var index = arguments[1];
    return arr[index];
});

// 模板引擎 利用正则的捕获替换
var str1 = '2017-11-26';
String.prototype.myFormatTime = function myFormatTime() {
    var reg1 = /\d+/g;
    var arr = this.match(reg1);
    var template = arguments[0] || '{0}年{1}月{2}日{3}时{4}分{5}秒';
    template = template.replace(/\{(\d+)\}/g, function () {
        var value = arr[arguments[1]] || '0';
        value.length < 2 ? value = "0" + value : null;
        return value;
    });
    return template;
};

str1.myFormatTime();


// 去除字符串的首位空格
// str.trim();   不兼容
var str = '   young ';
var reg2 = /^(\s+)|(\s+)$/g;
str = str.replace(/^(\s+)|(\s+)$/g, '');

//  queryURLParameter  获取地址中的内容
var url = 'http://www.zhufengpeixun.cn/stu/index.html?name=young&age=28#stu';

// str.split()
String.prototype.queryURLParameter = function queryURLParameter() {
    var obj = {};
    this.replace(/([^?&=#]+)=([^?&=#]+)/g, function () {
        obj[arguments[1]] = arguments[2];
    });
    var a = this.match(/#([^?=#&]+)/)[1];
    obj.Hash = a;
    return obj;
};
url.queryURLParameter();