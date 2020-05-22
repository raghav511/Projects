// let counter = 1;
// setInterval(() => {
//     console.log(counter++);
// }, 1000);

// var timerId = setTimeout(function () {
//     console.log("Hello!");
// }, 1000);

// clearTimeout(timerId);

var timerId = setInterval(function () {
    console.log("HI!");
}, 1000);

setTimeout(function () {
    clearTimeout(timerId);
}, 3000);