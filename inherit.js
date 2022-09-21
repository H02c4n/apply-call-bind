function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
}

const Person = function (firstName, lastName, age, civilStatus) {
  this.firstName = firstName.toUpperCase();
  this.lastName = lastName;
  this.age = age;
  this.civilStatus = civilStatus;
};

Person.prototype.sayOccupation = function (occupation) {
  console.log(`My name is ${this.firstName} and I am an ${occupation}`);
};

const ahmet = new Person("Ahmet", "Öz", 34, "Married");
console.log(ahmet);
ahmet.sayOccupation("doctor");

const Musician = function (name, instrument) {
  Person.call(this, name);
  this.instrument = instrument;
};

Musician.prototype.canPlay = function () {
  console.log(`${this.name} can play ${this.instrument}`);
};

inherits(Musician, Person);

const cemal = new Musician("Cemal", "Özcan", 4, "single", "Davul");

console.log(cemal);

cemal.sayOccupation("Teacher");
