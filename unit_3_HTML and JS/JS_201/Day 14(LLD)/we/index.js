
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

//Bike

class Bike extends Vehicle {
    constructor(regNumber, color) {
        super('bike', regNumber, color)
    }
}

//Truck

class Truck extends Vehicle {
    constructor(regNumber, color) {
        super('truck', regNumber, color)
    }
}

// Parking Slots

class Slots {
    constructor(type, number) {
        this.type = type;
        this.number = number;
        this._isBooked = false;
    }
    get isBooked() {
        return this._isBooked
    }
    set isBooked(value) {
        this._isBooked = value
    }
}

// Parking Floor

class ParkingFloor{
    constructor(floorNumber, maxSpots){
        this.floorNumber = floorNumber;
        this._ParkingSpots = []

        for(let i = 0; i<maxSpots; i++){
            if(i===0){
                this._ParkingSpots.push(new Slots('car',i))
            }
            else if(i===1){
                this._ParkingSpots.push(new Slots('bike',i))
            }
            else{
                this._ParkingSpots.push(new Slots('truck',i))
            }
        }
    }

    get ParkingSpots(){
        return this._ParkingSpots
    }
    set ParkingSpots(value){
        this._ParkingSpots = value
    }
}

// Parking lot or the building

class ParkingLot{
    constructor(number){
        this._floors = [];
        this._numberofFloors = number;

        for(let i=0; i<number; i++){
            this._floors.push(new ParkingFloor(i, 3))
        }
    }

    get numberofFloors(){
        return this._numberofFloors;
    }
    get floors(){
        return this._floors;
    }

    parkVehicle(Vehicle){
        let slot = this.findSlot(Vehicle.type);

        if(slot){
            this.bookSlot(slot)
            let ticket = new Ticket(slot.floorNumber, slot.slot.number)
            console.log('Ticket :', ticket)
        }
        else{
            console.log('No Slots')
            return false;
        }
    }
    findSlot(type){
        for(let i=0; i<this.numberofFloors; i++){
            for(let slot of this._floors[i]._ParkingSpots){
                if(slot.type === type && !slot.isBooked){
                    return{floorNumber: i, slot: slot};
                }
            }
        }
    }
    bookSlot(slot){
        slot.slot.isBooked = true;
        console.log("Slot is Booked");
        return true;
    }

}

// Ticket

class Ticket{
    constructor(floorNumber, slotNumber){

        this.floorNumber = floorNumber;
        this.slotNumber = slotNumber;
        this.issueAt = new Date();
    }
}

let b1 = new Bike('DL-1234','Teal')
let b2 = new Bike('mh',"black")
let pl = new ParkingLot(3)

pl.parkVehicle(b1)
pl.parkVehicle(b2)
// console.log(p1)

