/**************************************************
Based from the Template p5 project
Emile Simard

This is exercise 1
**************************************************/

let fly = {
  size: 15,
  r: 255,
  g: 155,
  b: 50
};

//let v1 = createVector(mouseX, mouseY);

// setup()

function setup() {
  createCanvas(800, 800);
}

// draw()

function draw() {
let positionX = mouseX;
let positionY = mouseY;
// flicker is what adds a little variation to each variable
let flicker = random(-10, 10);

  background(5, 5, 5, 10);
  noStroke();
  fill(fly.r, fly.g, fly.b, 300 + (flicker) * 10);

//the following line is a modified version of an example on the p5.js library
translate(p5.Vector.fromAngle(millis() * 0.003 , 90));

  ellipse(positionX, positionY, fly.size + flicker);

  fill(fly.r, fly.g, fly.b, 300 + (flicker) * 10);
  translate(40 + random(-3,3), 40 + random(-3,3));
  ellipse(positionX, positionY, fly.size + flicker);

  fill(fly.r, fly.g, fly.b, 300 + (flicker) * 10);
  translate(-20 + random(-3,3), -60 + random(-3,3));
  ellipse(positionX, positionY, fly.size + flicker);
}
