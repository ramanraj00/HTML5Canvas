var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

var c = canvas.getContext("2d");

// c.fillStyle= "rgba(255,0,0,0.5)"
// c.fillRect(100,50,100,100)
// c.fillStyle= "rgba(0,0,255,0.5)"
// c.fillRect(400,50,100,100)
// c.fillStyle = "rgba(0,255,0,0.5)"
// c.fillRect(250,290,100,100)


// Line

// c.beginPath()
// c.moveTo(120,300)
// c.lineTo (120, 200);
// c.lineTo (400,300)
// c.strokeStyle = "#fa34a3"
// c.stroke()


// for(i = 0; i<500;i++){
//     var x = Math.random()*window.innerWidth;

//     var y = Math.random()*window.innerHeight;

//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI *2 , false)
//     var z = Math.random()
//     c.strokeStyle = ""
//     c.stroke()
// }
// arc/circle

var y = 200
var x = 200

function animate(){

requestAnimationFrame(animate)
c.clearRect(0,0,innerWidth,innerHeight)
c.beginPath()
c.arc(x,y,30,0,Math.PI * 2, false)
c.strokeStyle = "pink"
c.stroke()
x = x+1
y = y+1;
}

animate()