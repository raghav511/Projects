function move() {
    var name = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(movement, 10);

    function movement() {
        if (pos == 350) {
            clearInterval(id);
            //     // --pos;
            //     // name.style.bottom = pos - 'px';
            //     // name.style.right = pos - 'px'
            //     // pos--
            //     // pos = 0;
            //     // movement();
        } else {
            pos++;
            name.style.top = pos + 'px';
            name.style.left = pos + 'px';
            // name.style.bottom = pos + '2px';
            // name.style.right = pos + '2px';
        }
    }
}