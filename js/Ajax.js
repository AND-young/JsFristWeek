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
        item.time = item.time.replace(/-/g, '');
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
    var header = document.getElementById('header');
    var btn = header.getElementsByTagName('a');
    var arr = ['data-time', 'data-price', 'data-hot'];
    for (var i = 0; i < btn.length; i++) {
        btn[i].myMethod = -1;
        btn[i].index = i;
        btn[i].onclick = function () {
            this.myMethod*=-1;
            changeP(arr[this.index], this.myMethod, this.index);
        }
    }

    function changeP(data, who, index) {
        for (var i = 0; i < btn.length; i++) {
            if (i != index) {
                btn[i].myMethod = -1;
            }
        }
        oLis = utils.toArray(oLis);
        oLis.sort(function (a, b) {
            var hot = a.getAttribute(data) - b.getAttribute(data);
            return hot * who;
        });
        var frg = document.createDocumentFragment();
        for (var i = 0; i < oLis.length; i++) {
            frg.appendChild(oLis[i]);
        }
        ListBox.appendChild(frg);
        frg = null;
    }


    // btn[1].myMethod = -1;
    // btn[2].myMethod = -1;
    // btn[1].onclick = function () {
    //     this.myMethod*=-1;
    //     changeP('price',this.myMethod);
    // };
    // btn[2].onclick = function () {
    //     this.myMethod*=-1;
    //     changeP('hot',this.myMethod);
    // };
    // btn[0].onclick = function () {
    //     oLis.sort(function (a, b) {
    //         // var time = new Date(b.getAttribute('data-time')) - new Date(a.getAttribute('data-time'));
    //         var time = b.getAttribute('data-time') - a.getAttribute('data-time');
    //         return time;
    //     });
    //     var frg = document.createDocumentFragment();
    //     for (var i = 0; i < oLis.length; i++) {
    //         frg.appendChild(oLis[i]);
    //     }
    //     ListBox.appendChild(frg);
    //     frg = null;
    // }
}();


