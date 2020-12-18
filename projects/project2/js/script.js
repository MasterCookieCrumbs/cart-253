/**************************************************
Project 2: Music Box
Emile Simard
**************************************************/

"use strict";
let balls = [];

var slider;
var img;
var bpm;

// F minor
//let notes = ['F3','G3','Ab4','Bb4','C4','Db4','Eb4','F4'];

// Full list of notes
let notes = ['F6', 'C6', 'G6', 'D6', 'A6', 'E6', 'B6', 'Gb6', 'Db6', 'Ab6', 'Eb6', 'Bb6', 'a6', 'e6', 'd6', 'f#6', 'c#6', 'g#6', 'd#6', 'bb6', 'f6', 'c6', 'g6', 'd6'];
// 24 notes total

let totalmusicnotesarray = 0;
let totalStaff = 24;
let totalRows = 8;

let placeholderTimer = {
  count: -100,
  speed: -1
}



window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      var img = document.querySelector('img');
      img.src = URL.createObjectURL(this.files[0]);
      img.onload = imageIsLoaded;
    }
  });
});

function imageIsLoaded() {
  alert(this.src);
}
// allows users to imput a music sheet file
// originally from user Kyle Mitofsky at https://jsfiddle.net/KyleMit/d3H9f/



// setup()

function setup() {
  createCanvas(820, 800);

  pixelDensity(1);

  for (let i = 0; i < totalmusicnotesarray - 1; i++) {
    musicnotesarray[i] = createmusicnote(15, 15);

  }

  function createmusicnote(x, y) {
    let musicnote = {
      x: x,
      y: y,
      size: 50,
    };
    return musicnote;
  }

  slider = createSlider(-300, 300, 200);
  slider.style('width', '300px');


  userStartAudio();
}

// draw()

function draw() {
  background(200, 100, 100);

  loadPixels();
  // this is necessary to use pixel values

  //img.loadPixels();


  setBPM();
  notAtimer();
  createstaff();
  //musicSheet();
  // music sheet function is borken


  //  for (int x = 0; x < width; x++) {
  //  for (int y = 0; y < height; y++) {
  //      int loc = x+y*width;
  //      pixels[loc] = img.pixels[loc];
  //    }
  //  }


  //  for (let i = 0; i < musicnotesarray.length; i++) {
  //    let musicnote = musicnotesarray[i];
  //    if (musicnote.active) {
  //    }
  //  }


  //for (let i = 0; i < musicnotesarray; i++) {
  //displaymusicnote(musicnotesarray[i]);
  //}

  //img.updatePixels();
  // end of editing image pixels




  /*
    function saveScript() {
    function keyReleased() {
      if (value === 65) {
      let img = createImage(24, 60);
      img.loadPixels();
      for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
          img.set(i, j, color(200, 0, 50));

        }
      }
      img.updatePixels();
      image(img, 926, 24);
      save(img, 'myImage.png');
      }

          // unused code to save music scripts ^
  */


  /*


    function musicSheet() {
      img.files();
      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var loc = (x + y * width) * 4;
          // The functions red(), green(), and blue() pull out the three color components from a pixel.
          var r = img.pixels[loc + 0];
          var g = img.pixels[loc + 1];
          var b = img.pixels[loc + 2];
          // Image Processing goes here...
          if (r > 200) {
            // will play note on this condition
            polySynth.play('G2', vel, 0, dur);
          }
        }
      }
    }

          // broken scrip to read the music sheets ^
          // would require Processing to function

  */




  // END OF DRAW FUNCTION
}



function setBPM() {
  placeholderTimer.speed = -0.009 * slider.value();

  textSize(28);
  fill(10);
  text(slider.value() + ' BPM', 10, height);

}


function createstaff() {
  for (let i = 0; i < totalStaff; i++) {
    push();
    fill(100, 100, 100, 50);
    line(width / totalStaff * (0.5 + (i)), 0, width / totalStaff * (0.5 + (i)), height);

    //      fill(10);
    //      noStroke();
    //        ellipse(width/totalStaff*(0.5+(i)), height, 30);
    //        ellipse((width/totalStaff*(0.5+(i))), height/2, 30);

    //    pop();
  }

}


function notAtimer() {

  placeholderTimer.count = placeholderTimer.count - placeholderTimer.speed
  // once the timer runs out it creates a new ball
  if (placeholderTimer.count > height) {
    placeholderTimer.count = 0;
    // if the timer reaches the bottom of the canvas it sets itself back to the top
  }
  if (placeholderTimer.count < 0) {
    placeholderTimer.count = height;
    // if the timer goes beyond the top of the canvas it resets to the bottom
  }
  // these two conditions make sure it repeats even when playing in reverse


  push();
  fill(100, 100, 150, 80);
  noStroke();
  rect(0, placeholderTimer.count, width, 20);
  pop();

}
