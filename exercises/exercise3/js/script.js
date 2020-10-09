/**************************************************
Exercise 3
Emile Simard

**************************************************/

let circle1 = {
  x: 50,
  y: 600,
  size: 150,
  x_velocity: 1,
  y_velocity: 1,
  speed: 4
};

let circle2 = {
  x: 50,
  y: 300,
  size: 150,
  x_velocity: 1,
  y_velocity: 1,
  speed: 4
};

let state = `title`;


function setup() {
  createCanvas(900, 900);
  circleSetup();

}

function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `loss`) {

  }
}



function title() {
  // starting text
  push();
  textSize(48);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`How long untill they find eachother?`, width / 2, height / 2);
  pop();
}

function simulation() {
  // functions that will run during the simulation
  move();
  circles();
  borderCollisionCircle1();
  borderCollisionCircle2();
  circleCollision()
}

function circleSetup() {
  // puts the circles in their starting locations
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;
  circle1.y = height / 3;
  circle2.y = 2 * height / 3;

  circle1.x_velocity = random(-circle1.speed, circle1.speed);
  circle2.x_velocity = random(-circle2.speed, circle2.speed);
  circle1.y_velocity = random(-circle1.speed, circle1.speed);
  circle2.y_velocity = random(-circle2.speed, circle2.speed);
}

function win() {
  // win state with message
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`They've found Love`, width / 2, height / 2);
  pop();
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    // click to start the simulation
  }
}

function circles() {
  // draws both circles
  ellipse(circle1.x, circle1.x, circle1.size);
  ellipse(circle2.x, circle2.x, circle2.size);
}

function move() {
  // function to move both circles
  circle1.x = circle1.x + circle1.x_velocity;
  circle2.x = circle2.x + circle2.x_velocity;

  circle1.y = circle1.y + circle1.y_velocity;
  circle2.y = circle2.y + circle2.y_velocity;
}

function borderCollisionCircle1() {
  // checks if a circle1 collides with the border of the Canvas and changes it's speed
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height) {
    circle1.x_velocity = random(-circle1.speed, circle1.speed);
    circle1.y_velocity = random(-circle1.speed, circle1.speed);
  }
}

function borderCollisionCircle2() {
  // checks if circle2 collides with the border of the Canvas and changes it's speed
  if (circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    circle2.x_velocity = random(-circle2.speed, circle2.speed);
    circle2.y_velocity = random(-circle2.speed, circle2.speed);
  }
}

function circleCollision() {
  // checks if both circles collide
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    state = `win`;
  }
}
