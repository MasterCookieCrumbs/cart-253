/**************************************************
Excercise 6
Emile Simard


**************************************************/

"use strict";

let school = [];
let musicnotesarray = [];
let totaldancer = 4;
let totalmusicnotesarray = 0;
let totalStaff = 8;

let circle1 = {
  x: 200,
  y: 200,
  size: 60,
  vx: 14,
  vy: 16
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(950, 800);

  for (let i = 0; i < totaldancer - 1; i++) {
      school[i] = createdancer(random(0, width), random(0, height));
  }

  for (let i = 0; i < totalmusicnotesarray - 1; i++) {
      musicnotesarray[i] = createmusicnote(15, 15);
  }

}

function createdancer(x, y) {
  let dancer = {
    x: x,
    y: y,
    vx: 0,
    vy: 0,
    size: 50,
    speed: 5,
  };
  return dancer;
}

function createmusicnote(x, y) {
  let musicnote = {
    x: x,
    y: y,
    size: 50,
  };
  return musicnote;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(150);
  move();
  circles();
  borderCollisionCircle1();
  //circleCollision()
  createstaff();


  for (let i = 0; i < musicnotesarray.length; i++) {
    let musicnote = musicnotesarray[i];
    if (musicnote.active) {
      musicnote.display();

    }
  }


//    ellipse(school[currentSelect].x, school[currentSelect].y, 100, 100, 10);


for (let i = 0; i < totaldancer - 1; i++) {
displaydancer(school[i]);
movedancer(school[i]);
}

for (let i = 0; i < musicnotesarray; i++) {
displaymusicnote(musicnotesarray[i]);
}

function createstaff()  {
  for (let i = 0; i < totalStaff; i++) {
    push();
    fill(100, 100, 100, 50);


line(width/totalStaff*(i), 0, width/totalStaff*(i), height);
    pop();
}

}



function displaymusicnote(musicnote) {
  push();
  fill(0);
  noStroke();
  ellipse(musicnote.x, musicnote.y, musicnote.size);
  pop();
}

function circles() {
  // draws both circles
  ellipse(circle1.x, circle1.y, circle1.size);
}

function move() {
  // function to move both circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle1.x = constrain(circle1.x, circle1.size/2, width - circle1.size/2);
  circle1.y = constrain(circle1.y, circle1.size/2, height - circle1.size/2);

}

function borderCollisionCircle1() {
  // checks if a circle1 collides with the border of the Canvas and changes it's speed
  if (circle1.x <= circle1.size/2 || circle1.x >= width - circle1.size/2) {
    circle1.vx = circle1.vx * -1;

  }
  if (circle1.y <= circle1.size/2 || circle1.y >= height - circle1.size/2) {
    circle1.vy = circle1.vy * -1;

  }
}

function circleCollision() {
  // checks collisions with other circles
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    // collision event
  }
}

function displaydancer(dancer) {
  push();
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

}


function mousePressed() {
  let musicnote = new createmusicnote(mouseX,mouseY);
  musicnotesarray.push(musicnote);
}
