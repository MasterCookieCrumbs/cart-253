/**************************************************
Project 1
Emile Simard

**************************************************/

let entity1 = {
  x: 50,
  y: 600,
  size: 150,
  x_velocity: 1,
  y_velocity: 1,
  speed: 4
};

let entity2 = {
  x: 50,
  y: 300,
  size: 150,
  x_velocity: 1,
  y_velocity: 1,
  speed: 4
};

let state = `title`;


function setup() {
  createCanvas(800, 800);
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
  } else if (state === `lose`) {

  }
}



function title() {
  push();
  textSize(48);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`Click to Begin`, width / 2, height / 2);
  pop();
}

function simulation() {
  move();
  circles();
  borderCollisionentity1();
  borderCollisionentity2();
  circleCollision()
}

function lose() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`You lose, try again`, width / 2, height / 2);
  pop();
}

function win() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`You win, congratulations`, width / 2, height / 2);
  pop();
}

function circleSetup() {
  entity1.x = width / 3;
  entity2.x = 2 * width / 3;
  entity1.y = height / 3;
  entity2.y = 2 * height / 3;

  entity1.x_velocity = random(-entity1.speed, entity1.speed);
  entity2.x_velocity = random(-entity2.speed, entity2.speed);
  entity1.y_velocity = random(-entity1.speed, entity1.speed);
  entity2.y_velocity = random(-entity2.speed, entity2.speed);
}



function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function circles() {
  ellipse(entity1.x, entity1.x, entity1.size);
  ellipse(entity2.x, entity2.x, entity2.size);
}

function move() {
  entity1.x = entity1.x + entity1.x_velocity;
  entity2.x = entity2.x + entity2.x_velocity;

  entity1.y = entity1.y + entity1.y_velocity;
  entity2.y = entity2.y + entity2.y_velocity;
}

function borderCollisionentity1() {
  if (entity1.x < 0 || entity1.x > width || entity1.y < 0 || entity1.y > height) {
    entity1.x_velocity = random(-entity1.speed, entity1.speed);
    entity1.y_velocity = random(-entity1.speed, entity1.speed);
  }
}

function borderCollisionentity2() {
  if (entity2.x < 0 || entity2.x > width || entity2.y < 0 || entity2.y > height) {
    entity2.x_velocity = random(-entity2.speed, entity2.speed);
    entity2.y_velocity = random(-entity2.speed, entity2.speed);
  }
}

function circleCollision() {
  let d = dist(entity1.x, entity1.y, entity2.x, entity2.y);
  if (d < entity1.size / 2 + entity2.size / 2) {
    state = `win`;
  }
}
