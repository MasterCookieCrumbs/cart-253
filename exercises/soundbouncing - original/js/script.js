/**************************************************
Template p5 project
Emile Simard
**************************************************/

"use strict";
let balls = [];

// F minor
//let notes = ['F3','G3','Ab4','Bb4','C4','Db4','Eb4','F4'];

// Full list of notes
let notes = ['F6', 'C6', 'G6', 'D6', 'A6', 'E6', 'B6', 'Gb6', 'Db6', 'Ab6', 'Eb6', 'Bb6', 'a6', 'e6', 'd6', 'f#6', 'c#6', 'g#6', 'd#6', 'bb6', 'f6', 'c6', 'g6', 'd6' ];
//let notes = [ 'a6', 'e6', 'd6', 'f#6', 'c#6', 'g#6', 'd#6', 'bb6', 'f6', 'c6', 'g6', 'd6' ];
// 24 notes total



// setup()

function setup() {
  createCanvas(800,800);

  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX,mouseY);
}

function createBall(x,y) {
  // which note will each ball have
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
