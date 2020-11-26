class Musicnote{

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.active = true;
  }


//  move() {
// insert rounding here
//  }

  display() {
    push();
    fill(10);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
