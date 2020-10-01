/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let obstacle = {
  size: 20,
  x: 800,
  y: 800,
  speed: -5,
  velocityx: 0,
  velocityy: 0,
  fill: {
    r: 255,
    g: 0,
    b: 155
  }
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 800);

  obstacle.y = random(0,800);
  obstacle.velocityx = obstacle.speed;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  obstacle.x = obstacle.x + obstacle.velocityx;
  obstacle.y = obstacle.y + obstacle.velocityy;

  fill(obstacle.fill.r, obstacle.fill.g, obstacle.fill.b);
  ellipse(obstacle.x, obstacle.y, obstacle.size);

  if (obstacle.x < 0) {
    obstacle.x = 800;
    obstacle.y = random(0,800);
  }
}
