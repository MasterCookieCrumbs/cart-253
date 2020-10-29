/**************************************************
Exercise 05
Emile Simard

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.


let gravity = 0.0038;
let paddle1;
let paddle2;
let score = 0;

let balls = [];
let numberofballs = 20;

function setup() {
  createCanvas(1800, 900);

  paddle1 = new Paddle1(180, 20);
  paddle2 = new Paddle2(180, 20);

  for(let i = 0; i < numberofballs; i++) {
    let x = random (150, width/4);
    let y = random (-400, -300);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  push();
  textSize(42);
  fill(200, 200, 200);
  text('score: ' + score, width - 300, 100);
  pop();

  paddle1.move();
  paddle1.display();

  paddle2.move();
  paddle2.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravity);
      ball.move();
      ball.display(paddle1);
      ball.display(paddle2);
      ball.bounce();
      ball.offscreen();
      ball.bounceoffborder();
      ball.scorepoint();
    }

  }

}
