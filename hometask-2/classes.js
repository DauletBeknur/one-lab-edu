class Transport {
    constructor(name, isActive) {
        this.name = name;
        this.isActive = isActive;
    }
    activate() {
        console.log(this.name + this.isActive + this.seatPlaces + this.moveSpeed + this.model + this.hp);
    }
    deactivate() {
        console.log(this.name + this.isActive + this.seatPlaces + this.moveSpeed + this.model + this.hp);
    }
    move() {
        console.log(this.name + this.isActive + this.seatPlaces + this.moveSpeed + this.model + this.hp);
    }
    getStatus() {
        console.log(this.name + this.isActive + this.seatPlaces + this.moveSpeed + this.model + this.hp);
    }
}

class Car extends Transport {
    constructor(name, isActive, seatPlaces, moveSpeed) {
        super(name, isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
    activate() {
        super.activate();
    }
    deactivate() {
        super.deactivate();
    }
    move() {
        super.move();
    }
    getStatus() {
        super.getStatus();
    }
}

const car = new Car("Car", " is activated.", " It has 4 seat places", " and it can go by 60 km.");
car.activate();


class Bus extends Transport {
    constructor(name, isActive, seatPlaces, moveSpeed) {
        super(name, isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
    activate() {
        super.activate();
    }
    deactivate() {
        super.deactivate();
    }
    move() {
        super.move();
    }
    getStatus() {
        super.getStatus();
    }
}

const bus = new Bus("Bus", " is moving.", " It has 10 seat places", " and it can go by 100 km.");
bus.move();

class Plain extends Transport {
    constructor(name, isActive, seatPlaces, moveSpeed) {
        super(name, isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
    activate() {
        super.activate();
    }
    deactivate() {
        super.deactivate();
    }
    move() {
        super.move();
    }
    getStatus() {
        super.getStatus();
    }
}

const plain = new Plain("Plain", " gets status.", " It has 50 seat places", " and it can fly by 200 km.");
plain.getStatus();

class Toyota extends Car {
    constructor(name, isActive, seatPlaces, moveSpeed, model, hp) {
        super(name, isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {
        var i = 0;
        for (let i = 0; i < 10; i++);
        alert(this.i);
    }
    activate() {
        super.activate();
    }
    deactivate() {
        super.deactivate();
    }
    move() {
        super.move();
    }
    getStatus() {
        super.getStatus();
    }
}

const toyota = new Toyota("Toyota", " is activated.", " It has 4 seat places", " and it can go by 60 km.", " Toyota Camry", " has 120 hp.");
toyota.activate();
toyota.accelerate(2);

class Setra extends Bus {
    constructor(name, isActive, seatPlaces, moveSpeed, model, hp) {
        super(name, isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {
        var i = 0;
        for (let i = 0; i < 10; i++);
        alert(this.i);
    }
    activate() {
        super.activate();
    }
    deactivate() {
        super.deactivate();
    }
    move() {
        super.move();
    }
    getStatus() {
        super.getStatus();
    }
}

const setra = new Setra("Setra", " is moving.", " It has 10 seat places", " and it can go by 100 km.", " Setra 209", " has 200 hp.");
setra.move();

class Boeing extends Plain {
    constructor(name, isActive, seatPlaces, moveSpeed, model, hp) {
        super(name, isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {
        var i = 0;
        for (let i = 0; i < 10; i++);
        alert(this.i);
    }
    activate() {
        super.activate();
    }
    deactivate() {
        super.deactivate();
    }
    move() {
        super.move();
    }
    getStatus() {
        super.getStatus();
    }
}

const boeing = new Boeing("Boeing", " is moving.", " It has 50 seat places", " and it can fly by 200 km.", " Boeing 747", " has 500 hp.");
boeing.move();