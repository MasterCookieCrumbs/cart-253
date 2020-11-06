/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(800, 800);
}

// draw()
//
// Description of draw() goes here.
function draw() {

    background(240, 220, 260);
      noStroke();
    fill(90, 180, 80);
    ellipse (400, mouseY / 2 + 50, 255, 400);

//  triangle (0, 800, 255, 400, 100, 80);
//  triangle (0, 500, 255, 400, 100, 80);
    fill(200, 200, 200);
    ellipse (450, mouseY / 2 - 50, 40, 40);
    ellipse (350, mouseY / 2 - 50, 40, 40);
    ellipse (480, mouseY / 2 - 75, 20, 20);
    ellipse (320, mouseY / 2 - 75, 20, 20);
    fill(30, 60, 30);
    rect (340, mouseY / 2 + 75, 150, 20);
    rect (340, mouseY / 2 + 50, 150, 20);
    triangle(370, mouseY / 2 + 60, 400, mouseY / 2, 430, mouseY / 2 + 60);
    ellipse (420, mouseY / 2 + 40, 30, 30);
    ellipse (380, mouseY / 2 + 40, 30, 30);
  stroke(100, 100, 200);
  strokeWeight(6);
    line(350, 650, 350, mouseY / 2 + 150);
    line(450, 650, 450, mouseY / 2 + 150);
//  line(500, mouseX, 500, mouseX / 2 + 50);
//  line(500, mouseX / 2 + 50, 700, mouseX);
//  line(700, mouseX, 500, mouseX);
//  line(500, mouseX, 450,mouseX - 50);
//  line(450, mouseX / 2, 500, mouseX / 2 + 50);
//  line(200, mouseX, 300, 300);
  stroke(100, 200, 100);


  var point = 600;

}
