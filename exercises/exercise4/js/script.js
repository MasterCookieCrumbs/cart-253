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


let player = {
  x: 400,
  y: 400,
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


for (let i = 0; i < 9; i++) {
  displayFish(school[i]);
}
for (let i = 0; i < 9; i++) {
  moveFish(school[i]);
}

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
  fill(150, 250, 100);
  noStroke();
  ellipse(player.x, player.y, player.size);
  pop();
}

function movePlayer() {
  if (mouseX < player.x - 0) {
    player.xvelocity = -player.speed;
  }

//  if (mouseX = player.x) {
//    player.xvelocity = 0;
//  }



  if (mouseX > player.x + 0) {
    player.xvelocity = player.speed;
  }

//player.xvelocity = 0;


  if (mouseY < player.y) {
    player.yvelocity = -player.speed;
  }

    if (mouseX - 8 < player.x && mouseX + 8 > player.x ) {
      player.xvelocity = 0;
    }


    if (mouseY - 8 < player.y && mouseY + 8 > player.y ) {
      player.yvelocity = 0;
    }



//  if (mouseY = player.y) {
//    player.yvelocity = 0;
//  }

//  if (mouseY < player.y + 2 || mouseY > player.y - 2 ) {
//    player.yvelocity = 0;
//  }

  if (mouseY > player.y) {
    player.yvelocity = player.speed;
  }

//player.yvelocity = 0;


  player.x = constrain(player.x, 0, width);
  player.y = constrain(player.y, 0, width);

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
