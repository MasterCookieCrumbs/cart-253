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

let notes = [];
let totalNotes = 1;

let r = 155;
let g = 255;
let b = 105;

let placeholderTimer = {
  count: 920,
  speed: 10
}


let polySynth = new p5.PolySynth();
let pitches = ['G', 'D', 'G', 'C'];
let octaves = [2, 3, 4];

var img;

function preload() {
  img = loadImage("assets/images/test.png");
}

//

// Description of setup() goes here.
function setup() {
  createCanvas(800, 920);
  //set the frame limit to the variable (30fps)
  frameRate(frames);


  for (let i = 0; i < totalNotes; i++) {
    let x = 400;
    let y = 400;
    let note = new Note(x, y);
    notes.push(note);
  }
}



// draw() runs every frame
function draw() {
  background(240, 210, 200);
  notAtimer();

//

 loadPixels();

  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  img.loadPixels();
  for (var y = 0; y < height; y++ ) {
    for (var x = 0; x < width; x++ ) {
      var loc = (x + y * width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = img.pixels[loc];
      var g = img.pixels[loc + 1];
      var b = img.pixels[loc + 2];

      // Image Processing would go here
      // If we were to change the RGB values, we would do it here, before setting the pixel in the display window.

      // Set the display pixel to the image pixel
      pixels[loc] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }





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






  for (let i = 0; i < totalStaff; i++) {
  line(width/totalStaff*(i), 0, width/totalStaff*(i), height);
}


function notAtimer() {

  placeholderTimer.count = placeholderTimer.count - placeholderTimer.speed

  if (placeholderTimer.count < -40) {
  placeholderTimer.count = height +40;
  currentSelect = currentSelect + 1;
  let x = random(150, width / 4);
  let y = random(-400, -300);
  let note = new Note(x, y);
  notes.push(note);
}

push();
fill(100, 100, 100, 50);
noStroke();
  rect(0, placeholderTimer.count, width, 40, 10);
pop();

}

if (keyIsDown(68)) {
  polySynth.noteRelease();
  }



}
