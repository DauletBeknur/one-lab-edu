class Transport {
	constructor(name, isActive = 'true'){
		this.name = name;
		this.isActive = isActive;
	}
	

	activate() {
		if(this.isActive){
		console.log(this.name + ' activated');}}

	deactivate() {
		if(!this.isActive){
		console.log(this.name + ' deactivated');}}
	
	move(){
		if(this.isActive){
		console.log(this.name + ' started to move');}
		else {
			console.log(this.name + ' stopped');
		}}

	getStatus(){
		if(this.isActive){
		console.log(this.name + ' is moving');}
		else {
			console.log(this.name + ' stopped');

	}}}

	class Car extends Transport{
		constructor(isActive, seats = 6, speed = 80){
			super(isActive);
			this.seats = seats;
			this.speed = speed;
		}
	}

	class Plane extends Transport{
		constructor(isActive, seats = 300, speed = 500){
			super(isActive);
			this.seats = seats;
			this.speed = speed;
		}
	}

	class Bus extends Transport{
		constructor(isActive, seats = 30, speed = 60){
			super(isActive);
			this.seats = seats;
			this.speed = speed;
		}
	}

	class Toyota extends Car{
		constructor(isActive, seats, speed, model, hp){
			super(isActive, seats, speed);
			this.model = model;
			this.hp = hp;
		}
		accelerate(){
			if(this.isActive){
				console.log("The speed of " +this.model + " with " + 
					this.hp + " is accelerated by 2 = " + (this.speed*2));
			}
		}

	}

	class Boeing extends Plane{
		constructor(isActive, seats, speed, model, hp){
			super(isActive, seats, speed);
			this.model = model;
			this.hp = hp;
		}
		accelerate(){
			if(this.isActive){
				console.log("The speed of " +this.model + " with " + 
					this.hp + " is accelerated by 5 = " + (this.speed*5));
			}
		}

	}

	class Setra extends Bus{
		constructor(isActive, seats, speed, model, hp){
			super(isActive, seats, speed);
			this.model = model;
			this.hp = hp;
		}
		accelerate(){
			if(this.isActive){
				console.log("The speed of " +this.model + " with " + 
					this.hp + " is accelerated by 4 = " + (this.speed*4));
			}
		}

	}

	let toyota = new Toyota(true, 3, 100, "Corolla", 500);
	toyota.activate();
	toyota.deactivate();
	toyota.move();
    toyota.getStatus();
	toyota.accelerate();




	
	
