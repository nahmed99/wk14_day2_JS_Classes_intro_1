// A Class
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hi, my name is ${this.name}`;
    }
}

module.exports = Person;



// A Function:
//
// const Person = function(name) {
//     this.name = name;

//     this.greet = function() {
//         return `Hello. I am class My name is ${this.name}`;
//     }
// }

// Person.prototype.greet = function () {
//     return `hi I am prototype my name is ${this.name}`;
// }

// module.exports = Person;