function counter() {
    var count = 0;
    return function () {
        return count++;
        //try using ++count;
    }
}

// console.log(counter()());

var c1 = counter();
console.log(c1());
console.log(c1());
console.log(c1());
console.log('\n');
var c2 = counter();
console.log(c2());

//c2 is not affected by c1
//no one can modify the count variable because it is private,
//and everytime i call counter(), the value of count will always be 0.