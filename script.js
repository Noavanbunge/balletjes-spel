
class Ball {
  constructor(x, y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.c = c;
  }

  drawball() {
    fill(this.c)
    ellipse(this.x, this.y, 50, 50, 5, 5);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x <= 0 || this.x >= 500) {
      this.vx = this.vx * -1;
    }

    if (this.y <= 0 || this.y >= 400) {
      this.vy = this.vy * -1
    }
  }
}



function setup() {
  createCanvas(500, 400);

 ball1 = new Ball(30,30,40,40,5,5,"red")
 ball2 = new Ball(130,40,40,40,5,5,"green")
 ball3 = new Ball(70,20,40,40,5,5,"blue")
}

function draw() {
  background(225);

  ball1.drawball();
  ball2.drawball();
  ball3.drawball();


}
