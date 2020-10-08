/**************************************************
Template p5 project
Emile Simard

**************************************************/

let circle1 = {
  x: 0,
  y: 600,
  size: 100,
  x_velocity: 1,
  y_velocity: 1,
  speed: 3
};

let circle2 = {
  x: 0,
  y: 300,
  size: 100,
  x_velocity: 1,
  y_velocity: 1,
  speed: 3
};

function setup() {
  createCanvas(900, 900);

  circle1.x = width/3;
  circle2.x = 2*width/3;
  circle1.y = height/3;
  circle2.y = 2*height/3;

  circle1.x_velocity = random(-circle1.speed,circle1.speed);
  circle2.x_velocity = random(-circle2.speed,circle2.speed);
  circle1.y_velocity = random(-circle1.speed,circle1.speed);
  circle2.y_velocity = random(-circle2.speed,circle2.speed);
}

function draw() {
  background(0);



  ellipse(circle1.x, circle1.x, circle1.size);
  ellipse(circle2.x, circle2.x, circle2.size);

  circle1.x = circle1.x + circle1.x_velocity;
  circle2.x = circle2.x + circle2.x_velocity;

  circle1.y = circle1.y + circle1.y_velocity;
  circle2.y = circle2.y + circle2.y_velocity;

  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height );{

  }

  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2){

  }

}
