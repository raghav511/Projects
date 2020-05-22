//Let's try to write a function called each which accepts two parameters: an array and a callback function.
//The each function should loop over the array passed to it and run the callback function on each element in it.
function each(array, callback) {
    // put your code inside here!
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}


each([1, 2, 3, 4], function (val) {
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1, 2, 3, 4], function (val) {
    console.log(val * 2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8