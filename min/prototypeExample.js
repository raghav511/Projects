function Example(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var example1 = new Example('raghav', 21, 'male');

// console.log(example1.name);

// Example.address = 'nadergul';
// console.log(Example);
//prototype is used to add properties to the constructor function
// Example.prototype.address = 'nader';
// console.log(example1.address);
console.log(Object.getPrototypeOf(example1));