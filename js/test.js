~function () {
    var xhr = new XMLHttpRequest;
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
        result[i].time = result[i].time.replace(/-/g, '');
        str += `<li data-time = "${result[i].time}" data-hot = "${result[i].hot}" data-price = "${result[i].price}">
            <a href="javascript:;">
            <img src="${result[i].img}" alt="">
            <p>${result[i].title}</p>
            <span>￥${result[i].price}</span>
        </a></li>`
    }

    oUl.innerHTML = str;
    var oLis = oUl.children;
    var header = document.getElementById('header');
    var btn = header.getElementsByTagName('a');
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
        if (preIndex !== index) {
            btn[preIndex].flag = 1;
        }
        var arr = ['data-time', 'data-price', 'data-hot'];
        oLis = utils.toArray(oLis);
        oLis.sort(function (a, b) {
            var dif = a.getAttribute(arr[index]) - b.getAttribute(arr[index]);
            return dif * flag;
        });

        var frg = document.createDocumentFragment();
        for (var i = 0; i < oLis.length; i++) {
            frg.appendChild(oLis[i]);
        }
        oUl.appendChild(frg);
        frg = null;
    }
}();