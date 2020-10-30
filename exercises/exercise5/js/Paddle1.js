class Paddle1 {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height * 2;
  }

  move() {

    if (keyIsDown(68)) {
      this.x += 10;
    }

    if (keyIsDown(65)) {
      this.x -= 10;
    }

    this.x = constrain(this.x, this.width / 2, width / 2 - this.width / 2);

  }

  display() {
    push();
    fill(150, 25, 25, );
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();

  }
}
