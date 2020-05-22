function displayMessage(args, function1) {
    return function1(args);
}

displayMessage('hello', console.log);
// displayMessage('hello', prompt);


// sendMessage('hey', function(args) {
//     console.log(args + ' how are you doing?');
// });

//in line 9 args refer to string 'hey'


//CALLBACK()

function add(a, b) {
    return console.log(a + b);
}

function subract(a, b) {
    return console.log(a - b);
}

function math(a, b, callback) {
    return callback(a, b);
}

math(2, 5, add);