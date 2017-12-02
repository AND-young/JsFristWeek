var xhr = new XMLHttpRequest();
var result;
xhr.open('get', 'json/product.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        result = xhr.responseText;
        result = utils.toJson(result);
    }
};
xhr.send(null);
var oul = document.getElementById('list');
var str = ``;
for (var i = 0; i < result.length; i++) {
    result[i].time = result[i].time.replace(/-/g, '');
    str += `<li data-time="${result[i].time}" data-hot="${result[i].hot}" data-price="${result[i].price}">
        <a href="javascript:;">
        <img src="${result[i].img}" alt="">
        <p>${result[i].title}</p>
        <span>${result[i].price}</span>
        </a>
    </li>`
}
oul.innerHTML = str;

var box = document.getElementById('box');
var btn = box.getElementsByTagName('a');
var olis = document.getElementsByTagName('li');
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

    olis = utils.toArray(olis);
    var arr = ['data-time', 'data-hot', 'data-price'];
    olis.sort(function (a, b) {
        var dif = a.getAttribute(arr[index]) - b.getAttribute(arr[index]);
        return dif * flag;
    });

    var frg = document.createDocumentFragment();
    for (var i = 0; i < olis.length; i++) {
        frg.appendChild(olis[i]);
    }
    oul.appendChild(frg);
    frg = null;
}