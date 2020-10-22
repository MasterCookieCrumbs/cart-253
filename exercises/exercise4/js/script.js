/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()

"use strict";
let school = [];

// Description of setup() goes here.
function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 8; i++) {
      school[i] = createFish(random(0, width), random(0, height));
  }
}

// draw()

// Description of draw() goes here.
function draw() {
  background(0);

for (let i = 0; i < 8; i++) {
  displayFish(school[i]);
}
for (let i = 0; i < 8; i++) {
  moveFish(school[i]);
}

}

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    vx: 0,
    vy: 0,
    size: 50,
    speed: 3
  };
  return fish;
}

function displayFish(fish) {
  push();
  fill(150, 250, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, width);

  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;
}
