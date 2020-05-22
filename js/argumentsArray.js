//arguments array is not exactly an array, but a special kind of object

function logAll() {
    console.log(arguments);
    console.log(arguments[2]);
}

console.log(logAll(1, 5, 'hey', 560));

//arguments keyword can be used when we dont know the number of arguments
//that will be passed to a function.

function add() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(5, 6, 9, 78, 2));