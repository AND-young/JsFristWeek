function getPosition(ele) {
    var lengL = ele.offsetLeft,
        lengH = ele.offsetTop,
        parent1 = ele.offsetParent;
    while (parent1) {
        var reg = /MSIE 8\.0/;
        if (!reg.test(navigator.userAgent)) {
            lengL += parent.clientLeft;
            lengH += parent.clientTop;
        }
        lengL += parent.offsetLeft;
        lengH += parent.offsetTop;
        parent1 = parent1.offsetParent;
    }
    return {
        lengL: lengL,
        lengH: lengH
    }
}