class Musicnote{

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.active = true;
  }



  move() {
// insert rounding here
  }

  display() {
    push();
    fill(250, 250, 150);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
