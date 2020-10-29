/**************************************************
Exercise 05
Emile Simard

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.


let gravity = 0.0032;
let paddle1;

let balls = [];
let numberofballs = 1;

function setup() {
  createCanvas(1800, 900);

  paddle1 = new Paddle1(200, 20);

  for(let i = 0; i < numberofballs; i++) {
    let x = random (50, width/3);
    let y = -200;
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
  text('score: ' + numberofballs, width - 300, 100);
  pop();

  paddle1.move();
  paddle1.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravity);
      ball.move();
      ball.display(paddle1);
      ball.bounce();
      ball.offscreen();
      ball.bounceoffborder();
    }

  }

}
