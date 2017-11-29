window.onscroll = function () {
    var top = utils.winBox(scrollTop);
    var clientTop = utils.winBox(clientHeight);
    if (top>clientTop){
        link.style.display  = 'block';
    }else{
        link.style.display = 'none';
    }
}

link.onclick = function () {
    utils.winBox(screenTop) = 0;
}