class Note{

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.size = 50;
    this.active = true;
  }

  display() {
    push();
    fill(250, 250, 150);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
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
