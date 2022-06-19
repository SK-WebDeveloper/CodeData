function myArray() {
    // Arguments
    Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false,
    });

    this.length = arguments.length;

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
}


let arr = new myArray();

//  push function

myArray.prototype.push = function (value) {
    this[this.length] = value;
    this.length++
}

// pop function

myArray.prototype.pop = function () {
    delete this[this.length - 1];
    this.length--
}

//  top function

myArray.prototype.top = function(){
    console.log(this[this.length-1])
}

// print function

myArray.prototype.print = function(){

    let temp_arr = [];
    for(let i=0; i<this.length; i++){
        temp_arr.push(this[i])
    }

    console.log(temp_arr)
}

// reverse the array

myArray.prototype.printReverse = function(){

    let temp_arr  = [];
    for(let i=this.length-1; i>=0; i--){
        temp_arr.push(this[i])
    }
    console.log(temp_arr)
}

//  size of the array

myArray.prototype.size = function(){
    console.log(this.length)
}

arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
console.log(Object.values(arr))

arr.pop()
console.log(Object.values(arr))

arr.top()

arr.print()

arr.printReverse()

arr.size()



