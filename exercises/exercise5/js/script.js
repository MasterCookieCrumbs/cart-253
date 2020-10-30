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
let strikes = 3;

let balls = [];
let numberofballs = 20;

let state = `title`;

function setup() {
  createCanvas(1800, 900);
  noCursor();

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
  fill(200, 250, 200);
  text('score: ' + score, width - 300, 100);
  pop();




  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {

  }

function simulation() {
  Winstate();
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


  function title() {

    push();
    textSize(28);
    textAlign(CENTER, CENTER);
    fill(150, 25, 25);
    text(`Left paddle uses the A & D keys`, width / 4, height / 2);
    fill(25, 25, 150);
    text(`Right paddle uses Left & Right Arrow keys`, width / 2 * 1.5, height / 2);
    fill(255, 255, 255);
    text(`Click to Begin`, width / 2, height / 2 + 40);
    pop();
  }

  function lose() {
    push();
    textSize(36);
    fill(255, 105, 105);
    textAlign(CENTER, CENTER);
    text(`Three Strikes1 You're out! try again`, width / 2, height / 2);
    pop();
  }

  function win() {
    push();
    textSize(48);
    fill(250, 255, 250);
    textAlign(CENTER, CENTER);
    text(`Congratulations, You won!`, width / 2, height / 2);
    pop();
  }


  function Winstate() {
  if (score >= 4) {
    state = `win`;
  }
}


}



function mousePressed() {
if (state === `title`) {
  state = `simulation`;
}
}
