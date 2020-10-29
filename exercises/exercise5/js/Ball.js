class Ball{

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 50;
    this.active = true;
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  offscreen() {
    if (this.y > height + 100) {
      // sets object property active to false when object falls offscreen
      this.active = false;
    }
  }

  display() {
    push();
    fill(250, 250, 150);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }

  bounce() {
    if (this.x > paddle1.x - paddle1.width/2 &&
        this.x < paddle1.x + paddle1.width/2 &&
        this.y + this.size/2 > paddle1.y - paddle1.height/2 &&
        this.y - this.size/2 < paddle1.y + paddle1.height/2) {

          let dx = this.x - paddle1.x;
          this.vx = this.vx + map(dx,-paddle1.width/2,paddle1.width/2,-3,3);

          this.vy = this.vy * -1;
          this.ay = 0;


        }

//    if (this.y + this.size/2 >= height) {
//      this.vy = this.vy * -1;
//      this.ay = 0;
//    }
  }

}
