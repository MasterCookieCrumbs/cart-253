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

let totalmusicnotesarray = 0;
let totalStaff = 24;
let totalRows = 8;

let placeholderTimer = {
  count: -100,
  speed: -2
}

// setup()

function setup() {
  createCanvas(940,920);



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




  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(200, 100, 100);

  notAtimer();


  createstaff();




//  for (let i = 0; i < musicnotesarray.length; i++) {
//    let musicnote = musicnotesarray[i];
//    if (musicnote.active) {
//    }
//  }


//for (let i = 0; i < musicnotesarray; i++) {
//displaymusicnote(musicnotesarray[i]);
//}



function createstaff()  {
  for (let i = 0; i < totalStaff; i++) {
    push();
    fill(100, 100, 100, 50);
      line(width/totalStaff*(0.5+(i)), 0, width/totalStaff*(0.5+(i)), height);



//      fill(10);
//      noStroke();
//        ellipse(width/totalStaff*(0.5+(i)), height, 30);
//        ellipse((width/totalStaff*(0.5+(i))), height/2, 30);

//    pop();
}

}






  let img = createImage(24, 60);
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, color(0, 200, 200, (i % img.width) * 4 + 80));
    }
  }
  img.updatePixels();
  image(img, 24, 24);


// runs these for every ball
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
      roundUp();
//    ball.move();
//    ball.bounce();
    ball.display();
  }
}

//function saveScript() {
function keyReleased() {
  if (value === 13) {
  let img = createImage(24, 600);
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
}



  function notAtimer() {

    placeholderTimer.count = placeholderTimer.count - placeholderTimer.speed
  // once the timer runs out it creates a new ball
    if (placeholderTimer.count > height) {
      placeholderTimer.count = 0;
//      let x = random(150, width / 4);
//      let y = random(-400, -300);
//      let ball = new Ball(x, y);
//      balls.push(ball);
    }

    push();
    fill(100, 100, 150, 80);
    noStroke();
    rect(0, placeholderTimer.count, width, 20);
    pop();

  }

      //createBall(mouseX,mouseY);

function mousePressed() {
  for (let i = 0; i < musicnotesarray.length; i++) {
    let musicnote = musicnotesarray[i];
      let ball = balls[i];
      createBall(mouseX,mouseY);
  }

    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];

  }


}

//if (keyIsDown(65)) {
//}

function createBall(x,y) {
  // which note will each ball have
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
