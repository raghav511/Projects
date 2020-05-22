function outer(a) {
    return function inner(b) {
        return a + b;
    }
}
//the below return the inner function
console.log(outer(5));


//we are calling the inner function and return a+b
console.log(outer(5)(7));

//we can store the output of the outer function to a variable to access inner function

var outerResult = outer(4);

console.log(outerResult(6));


//the inner function is able to remember the outer function variable which has already returned, this is because of closure.
//the functions have access to variables in its lexiacal scope.


