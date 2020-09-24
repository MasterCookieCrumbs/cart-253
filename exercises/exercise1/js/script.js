/**************************************************
Template p5 project
Pippin Barr

This is exercise 1
**************************************************/
// let flutter = 2;

let fSize = 10;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 800);
}

// draw()
//
// Description of draw() goes here.
function draw() {
let fpositionX = mouseX;
let fpositionY = mouseY;

  background(150);
  noStroke();
  fill(205, 15, 15 , 100);



translate(width / 3, height / 9);
translate(p5.Vector.fromAngle(millis() / 400, 100));
  ellipse(fpositionX, fpositionY, fSize);

}
