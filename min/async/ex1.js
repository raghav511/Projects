//Request all 3 files at the same time (in "parallel").

var fs = require('fs');
var file1 = fs.readFile('./file1.txt', () => {
    return (fs.readFile('./file2.txt'), () => {
        return (fs.readFile('./file3.txt'), () => {
            console.log('all rendered');
        })
    })
})