'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);

  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();

// new Person('Jonas', 1991);

// const jack = new Person('Jack', 1975);
// console.log(jack);

// Class inherit

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return{}

/* Inherit */

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.spicies = 'Homo Sapiens';

// console.log(jack.__proto__);
// console.log(jack.__proto__.__proto__);
// console.log(Person.prototype);

// console.dir(Person.prototype.constructor);

/* Class Expression */
// const PersonCl = class{}

// class declaration
//class PersonCl {
//  constructor(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  }

//  calcAge() {
//    console.log(2037 - this.birthYear);
//  }

//  set fullName(name) {
//    if (name.includes('')) this._fullName = name;
//    else alert(`${name} is not a full name!`);
//  }

//  get fullName() {
//    return this._fullName;
//  }
//}

//const jessica = new PersonCl('Jessica', 1996);

//console.log(jessica);

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

// Get: if want to return someting as property
//

/*const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 50;
console.log(account.latest);

// Object Create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);*/
