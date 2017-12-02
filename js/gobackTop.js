window.onscroll = function () {
    var top = utils.winBox(scrollTop);
    var clientTop = utils.winBox(clientHeight);
    if (top > clientTop) {
        link.style.display = 'block';
    } else {
        link.style.display = 'none';
    }
}

link.onclick = function () {
    utils.winBox(screenTop) = 0;
}

function winSet(attr, value) {
    if (typeof value === 'undefined') {
        return document.documentElement[attr] || document.body[attr];
    }
    document.documentElement[attr] = value;
    document.body[attr] = value;
}