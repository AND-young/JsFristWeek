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
            // console.log(result);
            result = utils.toJson(result);
            window.result = result;
        }
    };

    xhr.send(null);
    var str = '';
    var ListBox = document.getElementById('list');
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        str += `<li><a href="javascript:;">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <span>${item.price}</span>
        </a></li>`;
    }

ListBox.innerHTML = str;
var oLis = ListBox.children;
})();
// 进行字符串的拼接然后再加入HTML中


