// function Person(n){
//     this.name = n;
//     Person.prototype.print = function (){
//         console.log(this.name);
//     }
// }

// let p = new Person('sk');
// console.log(p)

// Syntax of class ES6

// class Person {
//     constructor(n) {
//         this.name = n;
//     }

//     print(){
//         console.log(this.name)
//     }
// }

// let p1 = new Person('verma');
// console.log(p1)

// 1 = Functional Programming



// 2 = Object Oriented Programming

// let recipe = {
//     items :['butter','paneer'],
//     cook: function(){
//         console.log(`cooking ${this.items[0]} ${this.items[1]}`)
//     }
// }
// recipe.cook()


// We Problem
//stack property: length, push, pop,peek

// class Stack{
//     constructor(){

//         this.length = 0;
//         this.stack = [];
//     }
//     push(x){
//         this.stack[this.length]  =x
//         this.length++
//     }
//     pop(){
//         this.stack.pop()
//         this.length--
//     }
//     peek(){
//         if(this.length!=0){
            
//             console.log(this.stack[this.length-1])
//         }
//         else{
//             console.log('Empty') 
//         }
//     }
// }

// let s1 = new Stack();
// s1.push(1);
// s1.push(2)
// s1.peek()
// console.log(s1)


// Inheritance
// Object.create(), prototype inheritance

class Mobile{
    //Blueprint
    constructor(b,bt){
        this.mobile = b;
        this.calling = true;
        this.battery = bt;
    }
}

let m1 = new Mobile('iphone',5000)
console.log(m1)

class Smartphone extends Mobile{
    constructor(b,bt,c,s){
        super(b,bt);
        this.camera = c;
        this.screenSize = s
    }
}

let m2 = new Smartphone('iPhone',5000,'20px','6 inch')
console.log(m2)
