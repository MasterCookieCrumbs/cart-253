/**************************************************
Project 1
Emile Simard

**************************************************/

let player = {
  x: 30,
  y: 450,
  size: 15,
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

let gridModifier = 90;
let wallWidth = 4;

let horizontalWall1 = {
  x1: 0*(gridModifier),
  y1: 2*(gridModifier)-(wallWidth),
  x2: 1*(gridModifier),
  y2: 2*(gridModifier)+(wallWidth)
};
let horizontalWall2 = {
  x1: 0*(gridModifier),
  y1: 8*(gridModifier)-(wallWidth),
  x2: 1*(gridModifier),
  y2: 8*(gridModifier)+(wallWidth)
};



let state = `title`;


function setup() {
  createCanvas(900, 900);

}


function draw() {
  background(0);
  borderCollisionplayer();
  wallCollisionplayer();

//print(horizontalWall1.y1);

push();
  strokeWeight(1);
  stroke(250, 75, 0);
  noFill();

// Horizontal Walls
quad(horizontalWall1.x1, horizontalWall1.y1,  horizontalWall1.x1, horizontalWall1.y2,  horizontalWall1.x2, horizontalWall1.y2,  horizontalWall1.x2, horizontalWall1.y1);
// Example: quad(horizontalWall(i).x1, horizontalWall(i).y1







// Vertical Walls
quad(1*(gridModifier)-(wallWidth), 0*(gridModifier),  1*(gridModifier)+(wallWidth), 0*(gridModifier),  1*(gridModifier)+(wallWidth), 1*(gridModifier),  1*(gridModifier)-(wallWidth), 1*(gridModifier));
quad(2*(gridModifier)-(wallWidth), 2*(gridModifier),  2*(gridModifier)+(wallWidth), 2*(gridModifier),  2*(gridModifier)+(wallWidth), 3*(gridModifier),  2*(gridModifier)-(wallWidth), 3*(gridModifier));










  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width, 0, width, height);
  line(0, height, width, height);

//  line(1*(gridModifier), 1*(gridModifier), 2*(gridModifier), 1*(gridModifier));
//  line(2*(gridModifier), 1*(gridModifier), 2*(gridModifier), 2*(gridModifier));
pop();
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
  ellipse(player.x, player.y, player.size);
}

function lose() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`You lose, try again`, width / 2, height / 2);
  player.speed = 0;
  pop();
}

function win() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`Congratulations, You won!`, width / 2, height / 2);
  pop();
}

function keyPressed() {
  if (keyCode === 32) {
      player.y = height;
//    value = 255;
//  } else {
//    value = 0;
  }
}


function borderCollisionplayer() {
  // Constraints player to the border of the Canvas
  player.x = constrain(player.x, 10, width - 10);
  player.y = constrain(player.y, 10, height - 10);

}

function wallCollisionplayer() {
  if (player.x <= horizontalWall1.x2 && player.x >= horizontalWall1.x1 && player.y >= horizontalWall1.y1 && player.y <= horizontalWall1.y1 + player.size) {
    lose();

  }
}


function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}


//function circleCollision() {
//  let d = dist(player.x, player.y, entity2.x, entity2.y);
//  if (d < player.size / 2 + entity2.size / 2) {
//    state = `win`;
//  }
//}
