// Part 1
class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk(){
        return "beep";
    }
    toString(){
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}`
    }
}
// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
 
// Part2
class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
let myFirstCar = new Car("Toyota", "Corolla", 2005);

// Part3

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
    this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!"
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// Part4

class Garage {
    
    constructor (capacity){
       this.vehicles =[];
        this.capacity = capacity;
    }
    
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles allowed in here"
        }
        if(this.vehicles.length < this.capacity){
        this.vehicles.push(newVehicle);
        return "Vehicle added"
    } else {
        return "Sorry, we're full"
    }
}
}
let garage = new Garage(2);
