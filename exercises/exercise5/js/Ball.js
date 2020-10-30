class Ball{

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 12;
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

//    this.x = constrain(this.x, this.size/2, width);
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
          this.vx = this.vx + map(dx,-paddle1.width/2,paddle1.width/2,-4,4);

          this.vy = this.vy * -1;
          this.ay = 0;

        }

    if (this.x > paddle2.x - paddle2.width/2 &&
        this.x < paddle2.x + paddle2.width/2 &&
        this.y + this.size/2 > paddle2.y - paddle2.height/2 &&
        this.y - this.size/2 < paddle2.y + paddle2.height/2) {

            let dx = this.x - paddle2.x;
            this.vx = this.vx + map(dx,-paddle2.width/2,paddle2.width/2,-6,6);

            this.vy = this.vy * -1;
            this.ay = 0;

        }

//    if (this.y + this.size/2 >= height) {
//      this.vy = this.vy * -1;
//      this.ay = 0;
//    }
  }

  bounceoffborder() {
    if (this.x <= this.size/2) {
//lefhand side border
          this.vx = this.vx * -1;
          this.ax = 0;
        }

  }

  scorepoint() {
    if (this.x >= width + this.size/2) {
      //lefhand side border
      score += 1;
      this.active = false;

        }
  }

}
