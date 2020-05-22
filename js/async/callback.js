var fs = require('fs')
console.log('program started');
var data = fs.readFile('heavyComputation.txt', function () {
    console.log('file loaded');
});
//so above i have written callback, so it wont wait for the file to be read for executing program ended
console.log('program ended');