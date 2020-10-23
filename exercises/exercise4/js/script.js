/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()

"use strict";

let school = [];
let totaldancer = 5;

let frames = 30; // FPS
let secondsPassed = 0;
let currentSelect = 1;

let r = 155;
let g = 255;
let b = 105;

let placeholderTimer = {
  count: 800,
  speed: 25
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
  noCursor();
  frameRate(frames);

  createPlayer(random(0, width), random(0, height));

  for (let i = 0; i < totaldancer - 1; i++) {
      school[i] = createdancer(random(0, width), random(0, height));
  }
}

// draw()

// Description of draw() goes here.
function draw() {
  background(0);

//  displayPlayer();
  movePlayer();
  notAtimer();
  repeatcurrentSelect();

  //sets up the player
  school[0] = createdancer(player.x, player.y);

  fill(r + 50, g + 50, b + 50, 150);
  noStroke();
  ellipse(school[currentSelect].x, school[currentSelect].y, 100, 100, 10);


for (let i = 0; i < totaldancer - 1; i++) {
  displaydancer(school[i]);
}
for (let i = 0; i < totaldancer - 1; i++) {
  movedancer(school[i]);
}

}


function notAtimer() {

  placeholderTimer.count = placeholderTimer.count - placeholderTimer.speed

  if (placeholderTimer.count < 0) {
  placeholderTimer.count = height;
  currentSelect = currentSelect + 1;
    r = random(105, 255);
    g = random(105, 255);
    b = random(105, 255);
}

push();
fill(r, g, b, 50);
noStroke();
  rect(350, placeholderTimer.count, 150, 150, 10);
pop();

}


function repeatcurrentSelect() {
  if (currentSelect >= totaldancer -1) {
    currentSelect = 0;
}

if (currentSelect >= totaldancer -2) {

}

}

//sets up the player
function createPlayer(x, y) {
  let player = {
    x: x,
    y: y,
    xvelocity: 0,
    yvelocity: 0,
    size: 50,
    speed: 5
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

  if (mouseX - 26 < player.x && mouseX + 26 > player.x ) {
  player.xvelocity = 0;
}


  if (mouseX > player.x + 0) {
    player.xvelocity = player.speed;
  }



  if (mouseY < player.y) {
    player.yvelocity = -player.speed;
  }

  if (mouseY - 26 < player.y && mouseY + 26 > player.y ) {
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


function createdancer(x, y) {
  let dancer = {
    x: x,
    y: y,
    vx: 0,
    vy: 0,
    size: 50,
    speed: 5,
    freeze: 0
  };
  return dancer;
}

function displaydancer(dancer) {
  push();
  fill(r, g, b);
  noStroke();
  ellipse(dancer.x, dancer.y, dancer.size);
  pop();
}

function movedancer(dancer) {
  let change = random(0, 1);
  if (change < 0.05) {
    dancer.vx = random(-dancer.speed *1.1, dancer.speed *1.1);
    dancer.vy = random(-dancer.speed *1.1, dancer.speed *1.1);
  }
  dancer.x = constrain(dancer.x, 20, width - 20);
  dancer.y = constrain(dancer.y, 20, height - 20);

  dancer.x = dancer.x + dancer.vx;
  dancer.y = dancer.y + dancer.vy;
}
