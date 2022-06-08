
// Inheritance

// The property of acquiring all the properties and behaviors of the parent object

// INHERITANCE :- It is the basic fourth principle of object oriented programming (OOP) 
 // is the process of making class from the existing class.

class Vehicle {
    constructor(type, regNumber, color) {
        this._type = type;
        this._regNumber = regNumber;
        this.color = color
    }
    get type() {
        return this._type
    }
    set type(value) {
        this._type = value
    }
}

//Car

class Car extends Vehicle {
    constructor(regNumber, color) {
        super('car', regNumber, color)
    }
}

// Encapsulation

// ENCAPSULATION :- It is the basc second principle of object oriented programming (OOP) 
// is the process of binding all the data into single object or class and hides the internal excessories of data.

class ClassWithPrivateField {
    #privateField;

    constructor() {
      this.#privateField = 42;
    }
}

// ABSTRACTION :- It is the first basic principle of object oriented programming (OOP) refers to 
// the act of hiding the complexities of the values,methods in a class and object and shows the simple use of it

/*
An abstraction is a way of hiding the implementation details and showing only the functionality to the users. 
In other words, it ignores the irrelevant details and shows only the required one.

Points to remember We cannot create an instance of Abstract Class. It reduces the duplication of code.

*/


/*
POLYMORPHISM :- It is the third basic principle of object oriented programming (OOP) 
is the process of making one operator use in different ways , one form many use
*/