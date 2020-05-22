var fs = require('fs');
console.log('program started');

//asynch operation
var data = fs.readFile('heavyComputation.txt', callback1 = (error, response) => {
    if (error) {
        console.log('file could not be loaded');
    } else {
        console.log('file successfully loaded');
        // console.log(response.toString());
    }

});

console.log('program ended');

function Bird() {
    let weight = 15;
    this.getWeight=function(){
      return weight;
    }
  
  
}
  