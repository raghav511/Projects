function Dog(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
//creating a prototype object so that properties can be added in a single go instead of doing 
//Dog.prototype.plane='earth' and so-on
Dog.prototype = {
    constructor: Dog,
    breed: 'labrador',
    owner: this.owner,
}
//when you do the above step, if you check terrier.constructor===Dog, the response will be false
//because the constructor is now changed to Object
//Hence we have to manually set the constructor to Dog
//SO, whenever you create a prototype object manually set the constructor in the prototype object


var terrier = new Dog('baby', 'gold');

//console.log(terrier.numLegs);

console.log(terrier instanceof Dog);
console.log(terrier.constructor === Dog);
console.log(Dog.prototype.isPrototypeOf(terrier));
console.log(Object.getPrototypeOf(terrier));
console.log(Object.prototype.isPrototypeOf(Dog.prototype));
//console.log(Object.keys(terrier));

Dog.prototype.planet = 'earth'; //to add properties to the constructor or prototype, you cannot add directly as you add
//for normal object(objectname.propertyname=value). You should either this formula or add directly into the
//Dog constructor.


// console.log(terrier.breed);

terrier.owner = 'raghav';
// console.log(terrier.owner);

var dog = new Dog('puppy', 'black', 5);

// console.log(dog.owner);

// console.log(dog);

function Animal() {}
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log('nom nom nom');
    }
}
//Inheritance
Dog.prototype = Object.create(Animal.prototype);

// console.log(dog.eat());
// var dog1 = new Dog();
// console.log(dog.constructor);

//to manually set the constructor of an object
Dog.prototype.constructor = Dog;