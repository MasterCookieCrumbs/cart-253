/**************************************************
Based from the Template p5 project
Emile Simard

This is exercise 1
**************************************************/

let fly1 = {
  size: 15,
  r: 255,
  g: 150,
  b: 50
};

let fly2 = {
  size: 15,
  r: 250,
  g: 100,
  b: 100
};

let fly3 = {
  size: 15,
  r: 100,
  g: 100,
  b: 250
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
//  flicker is what adds a little variation to each variable
let flicker = random(-10, 10);


// constraints to keep the flies within the canvas
positionY = constrain(positionY, 125, height - 150);
positionX = constrain(positionX, 100, width - 145);

  background(5, 5, 5, 10);
  noStroke();
  fill(fly1.r - map(positionX, 0, width, 0, 255), fly1.g, fly1.b, 300 + (flicker) * 10);

//  the following line is a modified version of an example on the p5.js library
translate(p5.Vector.fromAngle(millis() * 0.004 , 90));

  ellipse(positionX, positionY, fly1.size + flicker);

  fill(fly2.r - map(positionX, 0, width, 0, 255), fly2.g, fly2.b, 300 + (flicker) * 10);
  translate(40 + random(-3,3), 40 + random(-3,3));
  ellipse(positionX, positionY, fly2.size + flicker);

  fill(fly3.r + map(positionX, 0, width, 0, 255), fly3.g, fly3.b, 300 + (flicker) * 10);
  translate(-20 + random(-3,3), -60 + random(-3,3));
  ellipse(positionX, positionY, fly3.size + flicker);
}
