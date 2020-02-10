class Transport {
    constructor(isActive){
        this.isActive = isActive;
    }
    activate(){
        console.log((this.isActive) ? "activate" : "not activated" );
    }

    deactivate(){
        console.log((!this.isActive) ? "deactivate" : "activated");
    }

    move(){
        console.log((this.isActive) ? "move" : "stop");
    }

    getStatus(){
        console.log((this.isActive) ? "transport is moving" : "transport stopped");
    }
}


class Car extends Transport{
    constructor(isActive, seatPlaces=4, moveSpeed=70){
        super(isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
}

class Bus extends Transport{
    constructor(isActive, seatPlaces=40, moveSpeed = 50){
        super(isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
}

class Plane extends Transport{
    constructor(isActive, seatPlaces=200, moveSpeed = 550){
        super(isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
}


class Toyota extends Car{
    constructor(isActive, seatPlaces, moveSpeed, model, hp){
        super(isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }

    accelerate(){
        console.log((this.isActive) ?
         this.model + "'s hp is " + this.hp + ". Let's accelerate! " + "Now our speed is " + this.moveSpeed*3 : 
         "Car is not moving");
    }
}

class Setra extends Bus{
    constructor(isActive, seatPlaces, moveSpeed, model, hp){
        super(isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }

    accelerate(){
        console.log((this.isActive) ?
         this.model + "'s hp is " + this.hp + ". Let's accelerate! " + "Now our speed is " + this.moveSpeed*3 : 
         "Bus is not moving");
    }
}

class Boeing extends Plane{
    constructor(isActive, seatPlaces, moveSpeed, model, hp){
        super(isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }

    accelerate(){
        console.log((this.isActive) ?
         this.model + "'s hp is " + this.hp + ". Let's accelerate! " + "Now our speed is " + this.moveSpeed*3 : 
         "Plane is not flying");
    }
}


let toyota = new Toyota( true,4,100,"camry", 700);
toyota.accelerate(); 
toyota.activate();
toyota.deactivate();
toyota.move();
toyota.getStatus();

let setra = new Setra( false,33,45,"S 215", 600);
setra.accelerate(); 
setra.activate();
setra.deactivate();
setra.move();
setra.getStatus();

let boeing = new Boeing( true,400,600,"Boeing 737", 10000);
boeing.accelerate(); 
boeing.activate();
boeing.deactivate();
boeing.move();
boeing.getStatus();