function Dog() {}

console.log(Dog.prototype);

let myDog = new Dog();

console.log(myDog.__proto__ === Dog.prototype);
console.log(Dog.prototype.constructor === Dog);
