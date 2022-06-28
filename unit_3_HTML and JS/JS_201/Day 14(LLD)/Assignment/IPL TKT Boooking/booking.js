class Person {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

//general

class General extends Person {
  constructor(name) {
    super("General", name);
  }
}

//VIP

class VIP extends Person {
  constructor(name) {
    super("VIP", name);
  }
}

//slots

class Slot {
  constructor(type, number) {
    this.type = type;
    this.number = number;
    this._isBooked = false;
  }

  get isBooked() {
    return this._isBooked;
  }

  set isBooked(value) {
    this._isBooked = value;
  }
}

//ticket

class Ticket {
  constructor(floorNumber, slotNumber, age, gender, category) {
    this.floorNumber = floorNumber;
    this.slotNumber = slotNumber;
    this.issuedAt = new Date();
    this.age = age;
    this.gender = gender;
    this.category = category;
  }
}

//floor

class Floor {
  constructor(floorNumber, maxSlots = 30) {
    this.floorNumber = floorNumber;
    this.sittingSlots = [];

    for (let i = 1; i <= maxSlots; i++) {
      if (i <= 5) this.sittingSlots.push(new Slot("VIP", i));
      else if (i <= 10) this.sittingSlots.push(new Slot("VIP", i));
      else this.sittingSlots.push(new Slot("General", i));
    }
  }
}

//stadium

class Stadium {
  constructor(number, maxSlots) {
    this.floors = [];
    this.numberOfFloors = number;

    for (let i = 0; i < number; i++) {
      this.floors.push(new Floor(i, maxSlots));
    }
  }

  findSlot(type) {
    for (let i = 0; i < this.numberOfFloors; i++) {
      for (let slot of this.floors[i].sittingSlots) {
        if (slot.type === type && !slot.isBooked) {
          return { floorNumber: i, slot: slot };
        }
      }
    }
    return false;
  }

  bookSlot(slot) {
    slot.slot.isBooked = true;
    console.log(" Slot Booked ");
  }

  buyTicket(person, age, gender) {
    let slot = this.findSlot(person.type);

    if (slot) {
      this.bookSlot(slot);
      let ticket = new Ticket(
        slot.floorNumber,
        slot.slot.number,
        age,
        gender,
        person.type
      );
      console.log("Ticket", ticket);
    } else {
      console.log("No slots");
      return false;
    }
  }
}

let person = new VIP("VIP", "Sanjay");
let person1 = new VIP("General", "Sanjay");
let stadium = new Stadium(3, 10);
stadium.buyTicket(person, 24, "Male");
stadium.buyTicket(person1, 24, "Male");
