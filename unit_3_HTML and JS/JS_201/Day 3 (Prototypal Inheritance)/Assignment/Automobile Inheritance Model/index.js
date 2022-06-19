
let obj = {
    type: 'suv',
    regNo: 'UP32CA9211',
    color: 'Dark Black',
    seating_capacity: 5,
}

let Obj = Object.create(obj)
console.log(Obj)


function four_wheeler_automobiles(type, regNo, color, seating_capacity) {
    this.type = type;
    this.regNo = regNo;
    this.color = color;
    this.seating_capacity = seating_capacity;
}

/*
four_wheeler_automobiles.prototype.shop_city = function(city) {
    this.shop_city = city;
}
*/
let four_wheeler_1 = new four_wheeler_automobiles('Suv', "UP32CA9211", "Dark Blue", "7 Person")

//  four_wheeler_1.shop_city('Pune')

console.log(four_wheeler_1)

