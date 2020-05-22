function reverseString(str) {
    let arr = [];
    arr = str.split('');
    arr = arr.reverse();
    arr = arr.join('');
    return (console.log(arr));

}
reverseString("hello");