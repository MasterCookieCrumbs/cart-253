/**************************************************
Project 1
Emile Simard

**************************************************/

let entity1 = {
  x: 50,
  y: 600,
  size: 150,
  x_velocity: 1,
  y_velocity: 1,
  speed: 4
};

let entity2 = {
  x: 50,
  y: 300,
  size: 150,
  x_velocity: 1,
  y_velocity: 1,
  speed: 4
};







let state = `title`;


function setup() {
  createCanvas(800, 800);
  circleSetup();

}

function draw() {
  background(0);

}



function title() {
  push();
  textSize(48);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`Click to Begin`, width / 2, height / 2);
  pop();
}

function simulation() {
  move();
  circles();
  borderCollisionentity1();
  borderCollisionentity2();
  circleCollision()
}

function lose() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`You lose, try again`, width / 2, height / 2);
  pop();
}

function win() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`You win, congratulations`, width / 2, height / 2);
  pop();
}

function circleSetup() {
  entity1.x = width / 3;
  entity2.x = 2 * width / 3;
  entity1.y = height / 3;
  entity2.y = 2 * height / 3;

  entity1.x_velocity = random(-entity1.speed, entity1.speed);
  entity2.x_velocity = random(-entity2.speed, entity2.speed);
  entity1.y_velocity = random(-entity1.speed, entity1.speed);
  entity2.y_velocity = random(-entity2.speed, entity2.speed);
}


window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});

function imageIsLoaded() {
  alert(this.src);  // blob url
  // update width and height ...
}
