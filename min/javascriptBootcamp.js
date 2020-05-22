console.log('hey this is my js bootcamp');
//var num1 = 5;
// console.log(num1);
// var text = 'text';
// console.log(text);
// var variable = true;
// console.log(typeof variable);
// var variable = [1, 2, 4, 57.6, 'hey string'];
// console.log(typeof variable);
// console.log(variable[3]);
// console.log(variable[5]);
// var x = null;
// console.log(typeof x);
// var y;
// console.log(typeof y);
// console.log(x === y);
// var z = NaN;
// console.log(typeof z);

//object is a collection of properties
// var person = {
// name: 'raghav'
// }
// console.log(person.name);
// console.log(typeof person);
//
// var var1 = 5;
// var var1 = 'fun';
// console.log(var1);

//function is enclosed code which can be run any number of time we want
// function calc() {
//     console.log('inside function');
// }
// calc();
// console.log(typeof calc);
// var calc = function () {
//     console.log('this is same function as in the above lines');
// };
// calc();
// console.log(typeof calc());
//the result of above typeof will be Undefined because it is not returning
//anything.
// var calc1 = calc;
// calc1();
// console.log(typeof calc1);

//to return values from functions
// function calc() {
//     var variable = 'hey calc function';
//     return variable;
// }
// var calc1 = calc();
// console.log(calc1);

// to pass values you must have arguments to the function and
// to catch values you must define parameters
// function calc(num1, num2) {
//     return num1 * num2;
// }
// var calc1 = calc(5, 8);
// console.log(calc1);

//control structures : if
// var condition1 = false;
// var condition2 = false;
// if (condition1) {
// console.log('condition1 executed');
// }
// else if (condition2) {
// console.log('condition2 executed');
// }
// else {
// console.log('both conditions not executed');
//}

//control structures: switch
// var num1 = 8;
// switch (num1) {
// case 1:
// console.log('is one');
// break;
// case 8:
// console.log('is eight');
// break;
// default:
// console.log('something else');
// break;
// }

//control structure: for loop
// for (i = 0; i < 5; i += 2) {
// console.log(i);
// }
//for loop in arrays
// var array = [1, 4, 5, 6, 9, 7, 55];
// for (i = 0; i < array.length; i++) {
// console.log(array[i]);
// }

//control structures: while loop
// var number = 1;
// while (number < 8) {
// console.log(number)
// number++;
// }

//control structures: do while loop
var condition = false
do {
    console.log('executed');
}
while (condition = true)
{
    console.log('executed again');
}