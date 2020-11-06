/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"use strict";

let school = [];
let totalStaff = 20;

let frames = 30; // FPS
let currentSelect = 1;
let rounds = 1;

let r = 155;
let g = 255;
let b = 105;

let placeholderTimer = {
  count: 920,
  speed: 1
}


let polySynth = new p5.PolySynth();
let pitches = ['G', 'D', 'G', 'C'];
let octaves = [2, 3, 4];

//

// Description of setup() goes here.
function setup() {
  createCanvas(800, 920);
  //set the frame limit to the variable (30fps)
  frameRate(frames);



}

// draw() runs every frame
function draw() {
  background(240, 210, 200);
  notAtimer();

  //

  function playChord() {
    userStartAudio();

    // play a chord: multiple notes at the same time
    for (let i = 0; i < 4; i++) {
      let note = random(pitches) + random(octaves);
      polySynth.noteAttack(note, 0.1);
    }
  }

  //

  if (keyIsDown(LEFT_ARROW)) {
    polySynth.noteRelease();

  }


  for (let i = 0; i < totalStaff; i++) {
  line(width/20*(i), 0, width/20*(i), height);
}

}

function notAtimer() {

  placeholderTimer.count = placeholderTimer.count - placeholderTimer.speed

  if (placeholderTimer.count < -40) {
  placeholderTimer.count = height +40;
  currentSelect = currentSelect + 1;
//    r = random(105, 255);
//    g = random(105, 255);
//    b = random(105, 255);
}

push();
fill(100, 100, 100, 50);
noStroke();
  rect(0, placeholderTimer.count, width, 40, 10);
pop();

}
