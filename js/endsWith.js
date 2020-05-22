function confirmEnding(str, target) {
    var len = target.length;
    var arr = [];
    arr = str.split('');
    arr = arr.reverse();
    var newarr = [];
    newarr = arr.slice(0, len);
    newarr = newarr.reverse();
    str = newarr.join('');
    if (str === target) {
        console.log(true)
    } else {
        console.log(false);
    }
    return str;
}

confirmEnding("Abstraction", "action");