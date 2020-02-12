function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext){
     var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(75,75,50,0,Math.PI*2,true);
    ctx.fill();
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
    ctx.stroke();
  }
}
draw();
function draw1() {
  var canvas = document.getElementById('canvas1');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();
  }
}
draw1();
