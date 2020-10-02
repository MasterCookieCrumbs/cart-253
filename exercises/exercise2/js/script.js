/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

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
  velocityy: 0,
};

let badfile2 = {
  size: 20,
  x: 1200,
  y: 200,
  speed: -10,
  velocityx: 0,
  velocityy: 0,
};

let errormessage = {
  size: 20,
  x: 800,
  y: 400,
  speed: -5,
  velocityx: 0,
  velocityy: 0,
};


let dog
let pngfile
let successfail
function preload() {
  dog = loadImage('assets/images/Dog.gif');
  pngfile = loadImage('assets/images/pngfile.PNG');
  successfail = loadImage('assets/images/successfail.jpg');
}


// setup()
//
// Description of setup() goes here.
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
//
// Description of draw() goes here.
function draw() {
  background(0);

  image(dog, rover.x, rover.y);

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
    errormessage.x = errormessage.x + errormessage.velocityx;
    errormessage.y = errormessage.y + errormessage.velocityy;

    translate (errormessage.x, errormessage.y);
      image(successfail, 10, 10, 300, 200);

    if (errormessage.x < -300) {
      errormessage.x = 800;
      errormessage.y = random(0,800);
    }
  pop();

push();
  badfile1.x = badfile1.x + badfile1.velocityx;
  badfile1.y = badfile1.y + badfile1.velocityy;

  translate (badfile1.x, badfile1.y);
  image(pngfile, 10, 10, 80, 80);

  if (badfile1.x < -100) {
    badfile1.x = 800;
    badfile1.y = random(0,800);
  }
pop();

push();
  badfile2.x = badfile2.x + badfile1.velocityx;
  badfile2.y = badfile2.y + badfile1.velocityy;

  translate (badfile2.x, badfile2.y);
  image(pngfile, 10, 10, 80, 80);

  if (badfile2.x < -100) {
    badfile2.x = 800;
    badfile2.y = random(0,800);
  }
pop();



}
