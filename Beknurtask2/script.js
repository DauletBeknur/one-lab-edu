alert("Hello");

class Transport {
  constructor(brand){
    this.name=brand;
  }
  activate(isActive) {
    this.isActive=true;
    return this.name+this.isActive;

  }
  deactivate(isActive){
    this.isActive=false;
    return this.name+this.isActive;


  }
  move(isActive){
    this.isActive=true;
    return this.name+this.isActive;


  }
  getStatus(isActive){
    if (Transport.activate()){
      this.isActive=true;
    }
    else{
      this.isActive=flase;
    }

  }
}
var car= new class car extends Transport{
  seatPlaces(p,z){
    p=document.getElementById("input1").value;
    z=document.getElementById("input2").value;
    return "The front seats are"+" "+p+" The back sets are"+" "+z;



  }
  moveSpeed(n,m){
    n=document.getElementById("input3").value;
    m=document.getElementById("input4").value;
    return "The minimal speed is"+" "+n +" The max speed is"+" "+m;

  }
}
var plain= new class plain extends Transport{
  seatPlaces(p,z){
      return "The front seats are"+" "+p+" The back sets are"+" "+z;

  }
  moveSpeed(n,m){
      return "The minimal speed is"+" "+n+" The max speed is"+" "+m;


  }
}
var bus=new class bus extends Transport{
  seatPlaces(p,z){
      return "The front seats are "+p+" The back sets are "+z;

  }
  moveSpeed(n,m){
      return "The minimal speed is "+n + " The max speed is "+m;

  }
}
var toyota=new class toyota extends Transport{
  accelerate(model,hp){
    model=document.getElementById("input5").value;
    hp=document.getElementById("input6").value;
    return "Model of this car is "+ model +" and hp of this car is "+hp;

  }
}
var btn = document.getElementsByTagName('button'),
          //then, we turn it into an actual array
    btn = Array.prototype.slice.call(btn);

btn.forEach(function(button) {

    //check to see if that button has the class "foo"
    if(button.classList.contains('btn')) {
        button.onclick = function() {
           document.getElementById('text').innerHTML=car.seatPlaces();

        };
    }

});
var btn1 = document.getElementsByTagName('button'),
          //then, we turn it into an actual array
    btn1 = Array.prototype.slice.call(btn);

btn1.forEach(function(button) {

    //check to see if that button has the class "foo"
    if(button.classList.contains('btn1')) {
        button.onclick = function() {
           document.getElementById('text1').innerHTML=car.moveSpeed();

        };
    }

});
var btn2 = document.getElementsByTagName('button'),
          //then, we turn it into an actual array
    btn2 = Array.prototype.slice.call(btn);

btn2.forEach(function(button) {

    //check to see if that button has the class "foo"
    if(button.classList.contains('btn2')) {
        button.onclick = function() {
           document.getElementById('text2').innerHTML=toyota.accelerate();

        };
    }

});

var years = [2015, 2014, 1998, 2020, 2019];
var first = years.find(myFunction);

document.getElementById("demo").innerHTML =  first;

function myFunction(value) {
  return value > 2019;

}
