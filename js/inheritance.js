//first i will create a constructor function(object skeleton) which has some properties

function Car(color, price, fuelType, cc) {
    this.color = color;
    this.price = price;
    this.fuelType = fuelType;
    this.cc = cc;
}


function Bike(color, price, cc, mileage, brand) {
    Car.call(this, color, price, cc, brand);
    this.mileage = mileage;
}

var bike1 = new Bike('black', 9000, 100, 60, 'honda');
console.log(bike1);

console.log(bike1 instanceof Bike);
console.log(bike1.constructor === Bike);
console.log(Bike.prototype.isPrototypeOf(bike1));
console.log(Object.getOwnPropertyNames(Bike.prototype));
