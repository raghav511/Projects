//creating a private variable using closure.
//the variable number can also be accessed by phoneNumber() which has returned and callRaghav() through closure
function phoneNumber() {
    var number = 9959325861;
    return function callRaghav() {
        return number;
    }
}

//if you try access variable number, you cannot.

var call = phoneNumber();

console.log(call());