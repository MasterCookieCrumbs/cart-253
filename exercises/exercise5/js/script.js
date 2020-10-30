/**************************************************
Exercise 05
Emile Simard

Here is a description of this template p5 project.
**************************************************/

let gravity = 0.0038;
let paddle1;
let paddle2;
let score = 0;
let strikes = 0;

let balls = [];
let numberofballs = 1;

// starts the program in the title state
let state = `title`;

// my fake timer
let placeholderTimer = {
  count: -100,
  speed: -5
}

function setup() {
  createCanvas(1800, 900);
  noCursor();

  paddle1 = new Paddle1(180, 20);
  paddle2 = new Paddle2(180, 20);

// for loop to spawn the number of balls set
  for (let i = 0; i < numberofballs; i++) {
    let x = random(150, width / 4);
    let y = random(-400, -300);
    let ball = new Ball(x, y);
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
  fill(200, 200, 250);
  text('strikes: ' + strikes, width - 600, 100);
  pop();

// the various states of the program
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }

//functions to run the simulation
  function simulation() {
    Winstate();
    Loosestate();
    notAtimer();
    paddle1.move();
    paddle1.display();

    paddle2.move();
    paddle2.display();

//move and collision checks
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

// start screen
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

// loose screen
  function lose() {
    push();
    textSize(36);
    fill(255, 105, 105);
    textAlign(CENTER, CENTER);
    text(`Three Strikes! You're out! try again`, width / 2, height / 2);
    pop();
  }

// win screen
  function win() {
    push();
    textSize(48);
    fill(250, 255, 250);
    textAlign(CENTER, CENTER);
    text(`Congratulations, You won!`, width / 2, height / 2);
    pop();
  }

// loose condition
  function Loosestate() {
    if (strikes >= 3) {
      state = `lose`;
    }
  }

// win condition
  function Winstate() {
    if (score >= 4) {
      state = `win`;
    }
  }


}

// varaibles that act as a timer
function notAtimer() {

  placeholderTimer.count = placeholderTimer.count - placeholderTimer.speed
// once the timer runs out it creates a new ball
  if (placeholderTimer.count > 2000) {
    placeholderTimer.count = -100;
    let x = random(150, width / 4);
    let y = random(-400, -300);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  push();
  fill(100, 100, 150, 80);
  noStroke();
  rect(placeholderTimer.count, 100, 150, 150, 10);
  pop();

}

// click to start action
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
