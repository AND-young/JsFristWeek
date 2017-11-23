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
    // var xhr = new XMLHttpRequest();
    //
    // xhr.open('get', 'json/product.json', false);
    //
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var result = xhr.responseText;
    //         // console.log(result);
    //         result = utils.toJson(result);
    //         window.result = result;
    //     }
    // };
    //
    // xhr.send(null);
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
        str += `<li data-price="${item.price}" data-hot = "${item.hot}" data-time = "${item.time}">
            <a href="javascript:;">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <span>￥${item.price}</span>
        </a></li>`;
    }
    ListBox.innerHTML = str;
})();
// 进行字符串的拼接然后再加入HTML中
~function () {
    var ListBox = document.getElementById('list');
    var oLis = ListBox.children;
    oLis = utils.toArray(oLis);


    var header = document.getElementById('header');
    var a = header.getElementsByTagName('a');

    a[1].onclick = function () {
        oLis.sort(function (a, b) {
            var Price = a.getAttribute('data-price') - b.getAttribute('data-price');
            return Price;
        });
        for (var i = 0; i < oLis.length; i++) {
            ListBox.appendChild(oLis[i]);
        }
    };
    a[2].onclick = function () {
        oLis.sort(function (a, b) {
            var hot = b.getAttribute('data-hot') - a.getAttribute('data-hot');
            return hot;
        });
        for (var i = 0; i < oLis.length; i++) {
            ListBox.appendChild(oLis[i]);
        }
    }
    a[0].onclick = function () {
        oLis.sort(function (a, b) {
            var time = new Date(b.getAttribute('data-time')) - new Date(a.getAttribute('data-time'));
            return time;
        });
        for (var i = 0; i < oLis.length; i++) {
            ListBox.appendChild(oLis[i]);
        }
    }
}();


