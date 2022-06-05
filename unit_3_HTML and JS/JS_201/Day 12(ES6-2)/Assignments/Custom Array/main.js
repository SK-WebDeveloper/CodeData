


/* 
Custom Array
*/
class CustomArray{
    constructor(){
        this.length = 0;
        this.stack = [];
    }
    push(x){
        this.stack[this.length]  = x
        this.length++
    }
    pop(){
        this.stack.pop()
        this.length--
    }
    peek(){
        if(this.length!=0){
            
            console.log(this.stack[this.length-1])
        }
        else{
            console.log('Empty') 
        }
    }
    top(){
        console.log(this.stack[this.length-1])
    }
    print(){
        console.log(this.stack)
    }
    printReverse(){
        return this.stack.reverse()
    }
    size(){
        return this.length
    }
}

let s1 = new CustomArray()
s1.push(10)
s1.push(20)
s1.push(30)
s1.top()
s1.print()
console.log(s1.size())
console.log(s1.printReverse())