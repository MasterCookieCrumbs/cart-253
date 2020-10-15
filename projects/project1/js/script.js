/**************************************************
Project 1
Emile Simard

**************************************************/

let player = {
  x: 450,
  y: 450,
  size: 10,
//  x_velocity: 2,
//  y_velocity: 2,
  speed: 8
};

let entity2 = {
  x: -50,
  y: -300,
  size: 150,
  x_velocity: 1,
  y_velocity: 1,
  speed: 2
};

let state = `title`;


function setup() {
  createCanvas(900, 900);
  circleSetup();

}

function draw() {
  background(0);
  borderCollisionplayer();


  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {

  }



  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }

  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }

  if (keyIsDown(UP_ARROW)) {
    player.y -= player.speed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.y += player.speed;
  }
}



function title() {
  push();
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255, 150, 150);
  text(`Try and find the light maze's exit`, width / 2, height / 2 - 40);
  text(`Use the arrow keys to traverse it`, width / 2, height / 2);
  fill(255, 200, 150);
  text(`Click to Begin`, width / 2, height / 2 + 40);
  pop();
}

function simulation() {
  circles();
  circleCollision()
}

//function lose() {
//  push();
//  textSize(48);
//  fill(150, 255, 150);
//  textAlign(CENTER, CENTER);
//  text(`You lose, try again`, width / 2, height / 2);
//  pop();
//}

function win() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`You made it, congratulations`, width / 2, height / 2);
  pop();
}

function circleSetup() {
// starting location for circles
}


function borderCollisionplayer() {
  // checks if a player collides with the border of the Canvas and changes it's speed
  if (player.x < 0) {
    player.x = 0;
  }
  if (player.x > width) {
    player.x = width;
  }
  if (player.y < 0) {
    player.y = 0;
  }
  if (player.y > height) {
    player.y = height;
  }

}


function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function circles() {
  ellipse(player.x, player.y, player.size);
}

function circleCollision() {
  let d = dist(player.x, player.y, entity2.x, entity2.y);
  if (d < player.size / 2 + entity2.size / 2) {
    state = `win`;
  }
}
