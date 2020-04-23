const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const imageObj = new Image();


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

imageObj.onload = function() {
  context.drawImage(imageObj, 50, 50);
};
imageObj.src = 'images/the-king.png';


// var c = canvas.getContext('2d');


// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;

//   this.draw = function() {

//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
//     c.fill();
//   }

//   this.update = function() {

//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }

//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx;
//     this.y += this.dy;

//     this.draw();
//   }

// }

//   function draw(){
//     var drawing = document.getElementById("drawing");
//     var con = drawing.getContext("2d");
//     var goofyPic = document.getElementById("goofyPic");
//     con.drawImage(goofyPic, 0, 0, 50, 50);
//     var image2 = new Image();
//     image2.src = "andyGoofy.gif";
//     con.drawImage(image2, 100, 100, 70, 50);
//   }

// var circleArray = [];

// for (var i = 0; i < 100; i++) {
//   var radius = 30;
//   var x = Math.random() * (innerWidth - radius * 2) + radius;
//   var y = Math.random() * (innerHeight - radius * 2) + radius;
//   var dx = (Math.random() - 0.5);
//   var dy = (Math.random() - 0.5);
//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }

// console.log(circleArray);

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }

// animate();
