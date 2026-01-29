var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

// arc/circle
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI *2 , false)
//     var z = Math.random()
//     c.strokeStyle = ""
//     c.stroke()
// }


function Circle(x, y, dx, dy , z) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.z = z;
  this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;

//   const getHexColorCode = () => {

//    const rgb = 255 * 255 * 255
//    const random = Math.random() * rgb
//    const int = Math.floor(random)
//    const hexCode = int.toString(16)
//    const colorHex = hexCode.padEnd(6,"0")
//    return `#${colorHex}`

//   }


  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.z, 0, Math.PI * 2, false);
    c.strokeStyle = "pink";
    c.stroke();
    c.fill()
    c.fillStyle = this.color
    
  };

  this.update = function () {
    if (this.x + z > innerWidth || this.x - this.z < 0) {
      this.dx = -this.dx;
    }
    if (this.y + z > innerHeight || this.y - this.z < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw()
  };
}

var circlearr=[];
for(var i= 0; i<30; i++){
var z = 5;
var circle = new Circle(200, 200, 4, 4,40);
var x = Math.random() * (innerWidth - z * 2) + z;
var y = Math.random() * (innerHeight - z *2) + z;
var dy = Math.random() - 0.5 * 8;
var dx = Math.random() - 0.5 * 8;

circlearr.push(new Circle(x,y,dx,dy,z))
}

console.log(circlearr);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
 
  for(var i = 0; i<circlearr.length;i++){
            circlearr[i].update()
  }

}

animate();
