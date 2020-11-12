/**************************************************
Excercise 6
Emile Simard


**************************************************/


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
  circleSetup();

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

}


function circleSetup() {
  // puts the circles in their starting locations
  circle1.x = width / 2;
  circle1.y = height / 2;

}

function mousePressed() {


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
    state = `win`;
  }
}
