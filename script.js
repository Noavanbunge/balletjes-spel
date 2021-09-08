var x, y, v, z;

function setup() {
	createCanvas(500, 400);

  x = 0;
  y = 200;
  v = 6;
  z = 6;


}

function draw() {
	background(225);

  ellipse(x,y,50,50,5,5);
  x = x + v;
  y = y + z;

  if(x <= 0 || x >= 500){
    v = v * -1;
  }

  if(y <= 0 || y >= 400){
    z = z * -1
  }
}
