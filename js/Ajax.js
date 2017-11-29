~function () {
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
    var oUl = document.getElementById('list');
    var str = ``;
    for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        obj.time = obj.time.replace(/-/g, '');
        str += `<li data-time = '${obj.time}' data-hot = '${obj.hot}' data-price = '${obj.price}'>
            <a href="javascript:;">
                <img src="${obj.img}" alt="">
                <p>${obj.title}</p>
                <span>￥${obj.price}</span>
            </a>
        </li>`
    }
    oUl.innerHTML = str;

    var box = document.getElementById('box');
    var btn = box.getElementsByTagName('a');
    var oLis = document.getElementsByTagName('li');
    var preIndex = 0;
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].flag = 1;
        btn[i].onclick = function () {
            Sort(this.index, this.flag);
            this.flag *= -1;
            preIndex = this.index;
        }
    }

    function Sort(index, flag) {
        if (preIndex != index) {
            btn[preIndex].flag = 1;
        }
        var arr = utils.toArray(oLis);
        var ary = ['data-time', 'data-hot', 'data-price'];
        arr.sort(function (a, b) {
            var dif = a.getAttribute(ary[index]) - b.getAttribute(ary[index]);
            return dif * flag;
        });

        var frg = document.createDocumentFragment();
        for (var i = 0; i < arr.length; i++) {
            frg.appendChild(arr[i]);
        }
        oUl.appendChild(frg);
        frg = null;
    }
}();