class Paddle1 {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
  }

  move() {
    this.x = mouseX;
    this.x = constrain(this.x, 0, width/2 - this.width/2);
  }

  display() {
    push();
    fill(155);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();

  }
}
