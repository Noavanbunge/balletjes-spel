var x, y, vx, vz;

function setup() {
	createCanvas(500, 400);

  x = 0;
  y = 200;
  vx = 6;
  vz = 6;


}
class Rectangle {
 
  constructor(x,y,w,h,vx,vy) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = vx;
  this.vz = vz;
  }
}
function draw() 
{
	background(225);

  ellipse(x,y,50,50,5,5);
  x = x + vx;
  y = y + vz;

  if(x <= 0 || x >= 500){
    vx = vx * -1;
  }

  if(y <= 0 || y >= 400){
    vz = vz * -1
  }
}
