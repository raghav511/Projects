//creating a 2d array

// var rows = 9;
// var cols = 9;
// var array = [];
// for (var i = 0; i < rows; i++) {
// array[i] = [];
// for (var j = 0; j < cols; j++) {
// array[i][j] = null;
// 
// }
// }
// 
// console.log(array);



// var numbers = [1, 2, 3, 4];
// 
// var suduko = numbers.map((numbers) => {
// return numbers
// });
// console.log(suduko);

var fs = require('fs');
var content=[];
content=fs.readFileSync('sample.txt','utf-8');
var rows = new Array(9);
var cols = new Array(9);
var myarray = [];
for (i = 0; i < rows.length; i++) {
    myarray[i] = [];
    for (j = 0; j < cols.length; j++) {
        myarray[j] = [9, 8, 7, 6, 5, 8, 6, 7, 4, 2, 36, 9, 4, 8, 9, 5, 7, 5, 4, 3, 2, 9, 8, 7, 6, 5, 8, 6, 7, 4, 2, 36, 9, 4, 8, 9, 5, 7, 5, 4, 3, 2, 9, 8, 7, 6, 5, 8, 6, 7, 4, 2, 36, 9, 4, 8, 9, 5, 7, 5, 4, 3, 2, 9, 8, 7, 6, 5, 8, 6, 7, 4, 2, 36, 9, 4, 8, 9, 5, 7, 5, 4, 3, 2];
    }
}
console.log(myarray);
module['exports'] = myarray;