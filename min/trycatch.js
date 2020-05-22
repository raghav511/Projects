var fs = require('fs');
try {
    fs.readFile('./heavyComputation.txt')
} catch {
    console.log("file does not exist");
}