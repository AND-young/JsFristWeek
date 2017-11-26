// //  创建一个Ajax实例
// var xhr = XMLHttpRequest();
//
// //  打开请求的URL
// // [http method]: http 请求方式  GET POST PUT  DELETE HEAD
// // [URL]: 请求的地址
// // [ASYNC]: 设置同步还是异步 ，默认true异步，先写false 同步
// xhr.open('GET', 'data.text', false);
//
// // 监听状态改变，完成数据获取
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var result = xhr.responseText;
//         console.log(result);
//     }
// }
//
// // 发送Ajax请求
// xhr.send(null);

(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = xhr.responseText;
            result = utils.toJson(result);
            window.result = result;
        }
    }
    xhr.send(null);


    var str = ``;
    var ListBox = document.getElementById('list');
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        item.time = item.time.replace(/-/g, '');
        str += `<li data-price="${item.price}" data-hot = "${item.hot}" data-time = "${item.time}"><a href="javascript:;"><img src="${item.img}" alt=""><p>${item.title}</p><span>￥${item.price}</span></a></li>`;
    }
    ListBox.innerHTML = str;
})();
// 进行字符串的拼接然后再加入HTML中
~function () {
    var ListBox = document.getElementById('list');
    var oLis = ListBox.children;
    var header = document.getElementById('header');
    var btn = header.getElementsByTagName('a');

    var preflag = 0;
    for (var i = 0; i < btn.length; i++) {
        //  通过添加自定义属性来判断点击的是哪个元素,进行不同的排序并且几率点击的次数做出不同的排序;
        btn[i].myMethod = 1;
        btn[i].index = i;
        btn[i].onclick = function () {
            changeP(this.myMethod, this.index);
            this.myMethod *= -1;
            preflag = this.index;
        }
    }

    function changeP(flag, index) {
        // for (var i = 0; i < btn.length; i++) {
        //     if (i != index) {
        //         btn[i].myMethod = 1;
        //     }
        // }
        //
        // if (preflag == index) {
        //
        // } else {
        //     btn[preflag].myMethod = 1;
        // }
        preflag == index ? null : btn[preflag].myMethod = 1;
        var arr = ['data-time', 'data-price', 'data-hot'];
        //  对获取的元素集合转换为数组进行排序
        oLis = utils.toArray(oLis);
        oLis.sort(function (a, b) {
            var judge = a.getAttribute(arr[index]) - b.getAttribute(arr[index]);
            return judge * flag;
        });
        //  将排好序的li重新添加到页面中,通过 createDocumentFragment 减少页面的重绘
        var frg = document.createDocumentFragment();
        for (var i = 0; i < oLis.length; i++) {
            frg.appendChild(oLis[i]);
        }
        ListBox.appendChild(frg);
        frg = null;
    }
}();


