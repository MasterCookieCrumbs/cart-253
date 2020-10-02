/**************************************************
Exercise 2
Emile Simard

Windows XP Simulator
**************************************************/

// All of our objects and their properties
let rover = {
  x: 50,
  y: 50,
  speed: 5
};

let badfile1 = {
  size: 20,
  x: 800,
  y: 800,
  speed: -10,
  velocityx: 0,
  velocityy: 1,
};

let badfile2 = {
  size: 20,
  x: 1200,
  y: 200,
  speed: -10,
  velocityx: 0,
  velocityy: -1,
};

let errormessage = {
  reverse: 0,
  size: 20,
  x: 800,
  y: 400,
  speed: -5,
  velocityx: 0,
  velocityy: 0,
};

// Loads all our images
let dog
let pngfile
let successfail
function preload() {
  dog = loadImage('assets/images/Dog.gif');
  pngfile = loadImage('assets/images/pngfile.PNG');
  successfail = loadImage('assets/images/successfail.jpg');
}


// setup()
//  Runs the code in this section once at the beginning
function setup() {
  createCanvas(800, 800);

  badfile1.y = random(0,width);
  badfile1.velocityx = badfile1.speed;
  badfile2.y = random(0,width);
  badfile2.velocityx = badfile1.speed;
  errormessage.y = random(0,width);
  errormessage.velocityx = errormessage.speed;
}

// draw()
//  Runs the code in this section every frame
function draw() {
background (0);


// Draws the dog
  image(dog, rover.x, rover.y);

// Moves dog if arrow keys are pressed down
  if (keyIsDown(RIGHT_ARROW)) {
    rover.x += rover.speed;
  }

  if (keyIsDown(LEFT_ARROW)) {
    rover.x -= rover.speed;
  }

  if (keyIsDown(UP_ARROW)) {
    rover.y -= rover.speed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    rover.y += rover.speed;
  }


push();
//  Moves file to the left as and up/down
  badfile1.x = badfile1.x + badfile1.velocityx;
  badfile1.y = badfile1.y + badfile1.velocityy;
//  Draws the file
  image(pngfile, badfile1.x, badfile1.y, 80, 80);

  if (badfile1.x < -100) {
    badfile1.x = width;
    badfile1.y = random(0,height);
  }
pop();

push();
//  Moves file to the left as and up/down
  badfile2.x = badfile2.x + badfile2.velocityx;
  badfile2.y = badfile2.y + badfile2.velocityy;
//  Draws the file
  image(pngfile, badfile2.x, badfile2.y, 80, 80);

  if (badfile2.x < -100) {
    badfile2.x = width;
    badfile2.y = random(0,height);
  }
pop();


push();
//  Moves error message to the left
  errormessage.x = errormessage.x + errormessage.velocityx;
  errormessage.y = errormessage.y + errormessage.velocityy;
//  Draws the error message
    image(successfail, errormessage.x, errormessage.y, 360, 240);

//  Checks to see if error message moves offscreen to the left to place it back on the right
  if (errormessage.x < -360) {
    errormessage.x = width;
    errormessage.y = random(0, height - 200);
//  Adds the posibility that the error message goes in reverse once it reaches the left
    if (errormessage.reverse = 1) {
      errormessage.speed = errormessage.speed * -1;
    } else {
      errormessage.reverse = random(0,1);
    }
  }
//  Checks to see if error message has made it's way back to set it back to it's original settings
    if (errormessage.x > 1360) {
      errormessage.x = width;
      errormessage.y = random(0, height - 200);
      errormessage.speed = errormessage.speed * -1
    }

pop();

// Checks distance from dog and files to avoid, ends game if too close
let d1 = int(rover.x, rover.y, badfile1.x, badfile1.y);
let d2 = int(rover.x, rover.y, badfile2.x, badfile2.y);
if (d1 < 20){
//if ((badfile2.y + 20 > rover.y) && (badfile2.y  - 20 < rover.y) && (badfile2.x + 20 > rover.x) && (badfile2.x < rover.x)) {
  noLoop();
}

if (d2 < 20){
  noLoop();
}


}
