/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()

"use strict";

let school = [];

let frames = 30; // FPS
let secondsPassed = 0;
let currentSelect = 0;

let r = 155;
let g = 255;
let b = 105;

let placeholderTimer = {
  count: 0,
  speed: 20
}


let player = {
  x: 600,
  y: 600,
  xvelocity: 0,
  yvelocity: 0,
  size: 50,
  speed: 8
};

// Description of setup() goes here.
function setup() {
  createCanvas(800, 800);
//  noCursor();
  frameRate(frames);

  createPlayer(random(0, width), random(0, height));

  for (let i = 0; i < 9; i++) {
      school[i] = createFish(random(0, width), random(0, height));
  }
}

// draw()

// Description of draw() goes here.
function draw() {
  background(0);

  displayPlayer();
  movePlayer();
  notAtimer();


for (let i = 0; i < 9; i++) {
  displayFish(school[i]);
}
for (let i = 0; i < 9; i++) {
  moveFish(school[i]);
}

}


function notAtimer() {
  if (placeholderTimer.count > 1000) {
  placeholderTimer.count == 0;
  r = random(200) + 55;
  g = random(200) + 55;
  b = random(200) + 55;
}
  placeholderTimer.count = placeholderTimer.count + 20
}



function createPlayer(x, y) {
  let player = {
    x: x,
    y: y,
    xvelocity: 0,
    yvelocity: 0,
    size: 50,
    speed: 4
  };
  return player;
}

function displayPlayer() {
  push();
  fill(r, g, b);
  noStroke();
  ellipse(player.x, player.y, player.size);
  pop();
}

function movePlayer() {
  if (mouseX < player.x - 0) {
    player.xvelocity = -player.speed;
  }

  if (mouseX - 8 < player.x && mouseX + 8 > player.x ) {
  player.xvelocity = 0;
}


  if (mouseX > player.x + 0) {
    player.xvelocity = player.speed;
  }



  if (mouseY < player.y) {
    player.yvelocity = -player.speed;
  }

  if (mouseY - 8 < player.y && mouseY + 8 > player.y ) {
    player.yvelocity = 0;
  }

  if (mouseY > player.y) {
    player.yvelocity = player.speed;
  }



  player.x = constrain(player.x, 20, width - 20);
  player.y = constrain(player.y, 20, height - 20);

  player.x = player.x + player.xvelocity;
  player.y = player.y + player.yvelocity;
}


function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    vx: 0,
    vy: 0,
    size: 50,
    speed: 4
  };
  return fish;
}

function displayFish(fish) {
  push();
  fill(r, g, b);
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
  fish.x = constrain(fish.x, 20, width - 20);
  fish.y = constrain(fish.y, 20, height - 20);

  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;
}