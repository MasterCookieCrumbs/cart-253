class Paddle2 {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height*2;
  }

  move() {

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 10;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;
    }

    this.x = constrain(this.x, width/2 + this.width/2, width - this.width/2);

  }

  display() {
    push();
    fill(25, 25, 150,);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();

  }
}
