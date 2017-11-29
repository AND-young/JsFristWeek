/*
*  getCss 获取元素的属性值
*  @parameter
*  curEle 操作的元素
*  attr  需要获取的属性值
*  @return 获取的属性值
*/
//  对于IE和其他浏览器的一些不同的属性的判断和获取
//  opacity : 0.2  || filter: alpha(opacity = 20);

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

//  设置元素样式
//  设置元素类名 addClass
function setCss(curEle, attr, value) {
    //  如果给的value没有传参数,需要对其进行判断补充
    //  并不是所有的值都需要补单位
    //  有单位就不需要补
    //  需要补充单位的常用样式属性  width/height/margin/padding/border
    if(attr === 'opacity'){
        curEle.style.opacity = value;
        curEle.style.filter = 'alpha(opacity='+value*100+")";
        return  ;
    }
    var reg = /^(width|height|margin|padding|top|left|right|bottom|borderWidth)/i;
     //  属于上面的属性且没有加单位是纯数字 则加上默认单位 'px'
    if (reg.test(attr) && !isNaN(value)) {
        value += 'px';
    }
    curEle['style'][attr] = value;
}
// 批量设置属性  将对象进行循环,然后使用setCss
function setGroupCss(curEle,options) {
    if(Object.prototype.toString.call(options) === '[object Object]'){
        for (var key in options) {
            if (options.hasOwnProperty(key)){
                setCss(curEle,key,options[key]);
            }
        }
    }
    return ;
}