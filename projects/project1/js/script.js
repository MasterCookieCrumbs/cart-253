/**************************************************
Project 1
Emile Simard

**************************************************/

// PLayable character
let player = {
  x: 30,
  y: 450,
  size: 15,
  speed: 4
};

// Winstate box
let mazeEnd = {
  x: 850,
  y: 450,
  size: 100,
};

// Multiplier to get the right grid positions
let gridModifier = 90;

// Width on the Maze walls x2
let wallWidth = 4;


let horizontalWall1 = {
  x1: 0 * (gridModifier),
  y1: 2 * (gridModifier) - (wallWidth),
  x2: 1 * (gridModifier),
  y2: 2 * (gridModifier) + (wallWidth)
};
let horizontalWall2 = {
  x1: 0 * (gridModifier),
  y1: 8 * (gridModifier) - (wallWidth),
  x2: 1 * (gridModifier),
  y2: 8 * (gridModifier) + (wallWidth)
};
let horizontalWall3 = {
  x1: 1 * (gridModifier),
  y1: 9 * (gridModifier) - (wallWidth),
  x2: 3 * (gridModifier),
  y2: 9 * (gridModifier) + (wallWidth)
};
let horizontalWall4 = {
  x1: 2 * (gridModifier),
  y1: 5 * (gridModifier) - (wallWidth),
  x2: 4 * (gridModifier),
  y2: 5 * (gridModifier) + (wallWidth)
};
let horizontalWall5 = {
  x1: 3 * (gridModifier),
  y1: 1 * (gridModifier) - (wallWidth),
  x2: 9 * (gridModifier),
  y2: 1 * (gridModifier) + (wallWidth)
};
let horizontalWall6 = {
  x1: 3 * (gridModifier),
  y1: 3 * (gridModifier) - (wallWidth),
  x2: 4 * (gridModifier),
  y2: 3 * (gridModifier) + (wallWidth)
};
let horizontalWall7 = {
  x1: 3 * (gridModifier),
  y1: 8 * (gridModifier) - (wallWidth),
  x2: 4 * (gridModifier),
  y2: 8 * (gridModifier) + (wallWidth)
};
let horizontalWall8 = {
  x1: 4 * (gridModifier),
  y1: 4 * (gridModifier) - (wallWidth),
  x2: 8 * (gridModifier),
  y2: 4 * (gridModifier) + (wallWidth)
};
let horizontalWall9 = {
  x1: 4 * (gridModifier),
  y1: 6 * (gridModifier) - (wallWidth),
  x2: 5 * (gridModifier),
  y2: 6 * (gridModifier) + (wallWidth)
};
let horizontalWall10 = {
  x1: 4 * (gridModifier),
  y1: 7 * (gridModifier) - (wallWidth),
  x2: 9 * (gridModifier),
  y2: 7 * (gridModifier) + (wallWidth)
};
let horizontalWall11 = {
  x1: 4 * (gridModifier),
  y1: 9 * (gridModifier) - (wallWidth),
  x2: 5 * (gridModifier),
  y2: 9 * (gridModifier) + (wallWidth)
};
let horizontalWall12 = {
  x1: 5 * (gridModifier),
  y1: 5 * (gridModifier) - (wallWidth),
  x2: 7 * (gridModifier),
  y2: 5 * (gridModifier) + (wallWidth)
};
let horizontalWall13 = {
  x1: 5 * (gridModifier),
  y1: 8 * (gridModifier) - (wallWidth),
  x2: 8 * (gridModifier),
  y2: 8 * (gridModifier) + (wallWidth)
};
let horizontalWall14 = {
  x1: 6 * (gridModifier),
  y1: 3 * (gridModifier) - (wallWidth),
  x2: 9 * (gridModifier),
  y2: 3 * (gridModifier) + (wallWidth)
};
let horizontalWall15 = {
  x1: 7 * (gridModifier),
  y1: 6 * (gridModifier) - (wallWidth),
  x2: 8 * (gridModifier),
  y2: 6 * (gridModifier) + (wallWidth)
};
let horizontalWall16 = {
  x1: 7 * (gridModifier),
  y1: 9 * (gridModifier) - (wallWidth),
  x2: 9 * (gridModifier),
  y2: 9 * (gridModifier) + (wallWidth)
};
let horizontalWall17 = {
  x1: 8 * (gridModifier),
  y1: 2 * (gridModifier) - (wallWidth),
  x2: 10 * (gridModifier),
  y2: 2 * (gridModifier) + (wallWidth)
};
let horizontalWall18 = {
  x1: 8 * (gridModifier),
  y1: 5 * (gridModifier) - (wallWidth),
  x2: 9 * (gridModifier),
  y2: 5 * (gridModifier) + (wallWidth)
};
let horizontalWall19 = {
  x1: 9 * (gridModifier),
  y1: 4 * (gridModifier) - (wallWidth),
  x2: 10 * (gridModifier),
  y2: 4 * (gridModifier) + (wallWidth)
};
let horizontalWall20 = {
  x1: 9 * (gridModifier),
  y1: 8 * (gridModifier) - (wallWidth),
  x2: 10 * (gridModifier),
  y2: 8 * (gridModifier) + (wallWidth)
};



let verticalWall1 = {
  x1: 1 * (gridModifier) - (wallWidth),
  y1: 0 * (gridModifier),
  x2: 1 * (gridModifier) + (wallWidth),
  y2: 1 * (gridModifier)
};
let verticalWall2 = {
  x1: 1 * (gridModifier) - (wallWidth),
  y1: 2 * (gridModifier),
  x2: 1 * (gridModifier) + (wallWidth),
  y2: 3 * (gridModifier)
};
let verticalWall3 = {
  x1: 1 * (gridModifier) - (wallWidth),
  y1: 4 * (gridModifier),
  x2: 1 * (gridModifier) + (wallWidth),
  y2: 8 * (gridModifier)
};
let verticalWall4 = {
  x1: 2 * (gridModifier) - (wallWidth),
  y1: 1 * (gridModifier),
  x2: 2 * (gridModifier) + (wallWidth),
  y2: 9 * (gridModifier)
};
let verticalWall5 = {
  x1: 3 * (gridModifier) - (wallWidth),
  y1: 1 * (gridModifier),
  x2: 3 * (gridModifier) + (wallWidth),
  y2: 4 * (gridModifier)
};
let verticalWall6 = {
  x1: 3 * (gridModifier) - (wallWidth),
  y1: 5 * (gridModifier),
  x2: 3 * (gridModifier) + (wallWidth),
  y2: 8 * (gridModifier)
};
let verticalWall7 = {
  x1: 4 * (gridModifier) - (wallWidth),
  y1: 2 * (gridModifier),
  x2: 4 * (gridModifier) + (wallWidth),
  y2: 3 * (gridModifier)
};
let verticalWall8 = {
  x1: 4 * (gridModifier) - (wallWidth),
  y1: 4 * (gridModifier),
  x2: 4 * (gridModifier) + (wallWidth),
  y2: 5 * (gridModifier)
};
let verticalWall9 = {
  x1: 4 * (gridModifier) - (wallWidth),
  y1: 6 * (gridModifier),
  x2: 4 * (gridModifier) + (wallWidth),
  y2: 7 * (gridModifier)
};
let verticalWall10 = {
  x1: 4 * (gridModifier) - (wallWidth),
  y1: 8 * (gridModifier),
  x2: 4 * (gridModifier) + (wallWidth),
  y2: 10 * (gridModifier)
};
let verticalWall11 = {
  x1: 5 * (gridModifier) - (wallWidth),
  y1: 1 * (gridModifier),
  x2: 5 * (gridModifier) + (wallWidth),
  y2: 4 * (gridModifier)
};
let verticalWall12 = {
  x1: 5 * (gridModifier) - (wallWidth),
  y1: 5 * (gridModifier),
  x2: 5 * (gridModifier) + (wallWidth),
  y2: 6 * (gridModifier)
};
let verticalWall13 = {
  x1: 6 * (gridModifier) - (wallWidth),
  y1: 2 * (gridModifier),
  x2: 6 * (gridModifier) + (wallWidth),
  y2: 3 * (gridModifier)
};
let verticalWall14 = {
  x1: 6 * (gridModifier) - (wallWidth),
  y1: 6 * (gridModifier),
  x2: 6 * (gridModifier) + (wallWidth),
  y2: 7 * (gridModifier)
};
let verticalWall15 = {
  x1: 6 * (gridModifier) - (wallWidth),
  y1: 8 * (gridModifier),
  x2: 6 * (gridModifier) + (wallWidth),
  y2: 10 * (gridModifier)
};
let verticalWall16 = {
  x1: 7 * (gridModifier) - (wallWidth),
  y1: 1 * (gridModifier),
  x2: 7 * (gridModifier) + (wallWidth),
  y2: 2 * (gridModifier)
};
let verticalWall17 = {
  x1: 7 * (gridModifier) - (wallWidth),
  y1: 5 * (gridModifier),
  x2: 7 * (gridModifier) + (wallWidth),
  y2: 6 * (gridModifier)
};
let verticalWall18 = {
  x1: 8 * (gridModifier) - (wallWidth),
  y1: 2 * (gridModifier),
  x2: 8 * (gridModifier) + (wallWidth),
  y2: 3 * (gridModifier)
};
let verticalWall19 = {
  x1: 9 * (gridModifier) - (wallWidth),
  y1: 4 * (gridModifier),
  x2: 9 * (gridModifier) + (wallWidth),
  y2: 7 * (gridModifier)
};
let verticalWall20 = {
  x1: 9 * (gridModifier) - (wallWidth),
  y1: 8 * (gridModifier),
  x2: 9 * (gridModifier) + (wallWidth),
  y2: 9 * (gridModifier)
};

// let horizontalWall = [];
let state = `title`;
// runs once on start
function setup() {
  createCanvas(900, 900);

}

// runs every frame
function draw() {
  background(0);

// Collision checks for the border of the canvas and the maze's walls
  borderCollisionplayer();
  wallCollisionplayer();


// The 4 main states of the game
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {

  }





// first state that introduces players
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

// This state is the game itself
  function simulation() {
    ellipse(player.x, player.y, player.size);
    push();
    fill(150, 150, 0);
    rect(mazeEnd.x, mazeEnd.y, 20, 20);
    pop();
    push();
    strokeWeight(1);
    stroke(250, 75, 0);
    noFill();

    // Horizontal Walls
    //for (let i = 0; i < 6; i++) {
    // Example: quad(horizontalWall(i).x1, horizontalWall(i).y1
    //}
    quad(horizontalWall1.x1, horizontalWall1.y1, horizontalWall1.x1, horizontalWall1.y2, horizontalWall1.x2, horizontalWall1.y2, horizontalWall1.x2, horizontalWall1.y1);
    quad(horizontalWall2.x1, horizontalWall2.y1, horizontalWall2.x1, horizontalWall2.y2, horizontalWall2.x2, horizontalWall2.y2, horizontalWall2.x2, horizontalWall2.y1);
    quad(horizontalWall3.x1, horizontalWall3.y1, horizontalWall3.x1, horizontalWall3.y2, horizontalWall3.x2, horizontalWall3.y2, horizontalWall3.x2, horizontalWall3.y1);
    quad(horizontalWall4.x1, horizontalWall4.y1, horizontalWall4.x1, horizontalWall4.y2, horizontalWall4.x2, horizontalWall4.y2, horizontalWall4.x2, horizontalWall4.y1);
    quad(horizontalWall5.x1, horizontalWall5.y1, horizontalWall5.x1, horizontalWall5.y2, horizontalWall5.x2, horizontalWall5.y2, horizontalWall5.x2, horizontalWall5.y1);
    quad(horizontalWall6.x1, horizontalWall6.y1, horizontalWall6.x1, horizontalWall6.y2, horizontalWall6.x2, horizontalWall6.y2, horizontalWall6.x2, horizontalWall6.y1);
    quad(horizontalWall7.x1, horizontalWall7.y1, horizontalWall7.x1, horizontalWall7.y2, horizontalWall7.x2, horizontalWall7.y2, horizontalWall7.x2, horizontalWall7.y1);
    quad(horizontalWall8.x1, horizontalWall8.y1, horizontalWall8.x1, horizontalWall8.y2, horizontalWall8.x2, horizontalWall8.y2, horizontalWall8.x2, horizontalWall8.y1);
    quad(horizontalWall9.x1, horizontalWall9.y1, horizontalWall9.x1, horizontalWall9.y2, horizontalWall9.x2, horizontalWall9.y2, horizontalWall9.x2, horizontalWall9.y1);
    quad(horizontalWall10.x1, horizontalWall10.y1, horizontalWall10.x1, horizontalWall10.y2, horizontalWall10.x2, horizontalWall10.y2, horizontalWall10.x2, horizontalWall10.y1);
    quad(horizontalWall11.x1, horizontalWall11.y1, horizontalWall11.x1, horizontalWall11.y2, horizontalWall11.x2, horizontalWall11.y2, horizontalWall11.x2, horizontalWall11.y1);
    quad(horizontalWall12.x1, horizontalWall12.y1, horizontalWall12.x1, horizontalWall12.y2, horizontalWall12.x2, horizontalWall12.y2, horizontalWall12.x2, horizontalWall12.y1);
    quad(horizontalWall13.x1, horizontalWall13.y1, horizontalWall13.x1, horizontalWall13.y2, horizontalWall13.x2, horizontalWall13.y2, horizontalWall13.x2, horizontalWall13.y1);
    quad(horizontalWall14.x1, horizontalWall14.y1, horizontalWall14.x1, horizontalWall14.y2, horizontalWall14.x2, horizontalWall14.y2, horizontalWall14.x2, horizontalWall14.y1);
    quad(horizontalWall15.x1, horizontalWall15.y1, horizontalWall15.x1, horizontalWall15.y2, horizontalWall15.x2, horizontalWall15.y2, horizontalWall15.x2, horizontalWall15.y1);
    quad(horizontalWall16.x1, horizontalWall16.y1, horizontalWall16.x1, horizontalWall16.y2, horizontalWall16.x2, horizontalWall16.y2, horizontalWall16.x2, horizontalWall16.y1);
    quad(horizontalWall17.x1, horizontalWall17.y1, horizontalWall17.x1, horizontalWall17.y2, horizontalWall17.x2, horizontalWall17.y2, horizontalWall17.x2, horizontalWall17.y1);
    quad(horizontalWall18.x1, horizontalWall18.y1, horizontalWall18.x1, horizontalWall18.y2, horizontalWall18.x2, horizontalWall18.y2, horizontalWall18.x2, horizontalWall18.y1);
    quad(horizontalWall19.x1, horizontalWall19.y1, horizontalWall19.x1, horizontalWall19.y2, horizontalWall19.x2, horizontalWall19.y2, horizontalWall19.x2, horizontalWall19.y1);
    quad(horizontalWall20.x1, horizontalWall20.y1, horizontalWall20.x1, horizontalWall20.y2, horizontalWall20.x2, horizontalWall20.y2, horizontalWall20.x2, horizontalWall20.y1);

    // Vertical Walls
    quad(verticalWall1.x1, verticalWall1.y1, verticalWall1.x1, verticalWall1.y2, verticalWall1.x2, verticalWall1.y2, verticalWall1.x2, verticalWall1.y1);
    quad(verticalWall2.x1, verticalWall2.y1, verticalWall2.x1, verticalWall2.y2, verticalWall2.x2, verticalWall2.y2, verticalWall2.x2, verticalWall2.y1);
    quad(verticalWall3.x1, verticalWall3.y1, verticalWall3.x1, verticalWall3.y2, verticalWall3.x2, verticalWall3.y2, verticalWall3.x2, verticalWall3.y1);
    quad(verticalWall4.x1, verticalWall4.y1, verticalWall4.x1, verticalWall4.y2, verticalWall4.x2, verticalWall4.y2, verticalWall4.x2, verticalWall4.y1);
    quad(verticalWall5.x1, verticalWall5.y1, verticalWall5.x1, verticalWall5.y2, verticalWall5.x2, verticalWall5.y2, verticalWall5.x2, verticalWall5.y1);
    quad(verticalWall6.x1, verticalWall6.y1, verticalWall6.x1, verticalWall6.y2, verticalWall6.x2, verticalWall6.y2, verticalWall6.x2, verticalWall6.y1);
    quad(verticalWall7.x1, verticalWall7.y1, verticalWall7.x1, verticalWall7.y2, verticalWall7.x2, verticalWall7.y2, verticalWall7.x2, verticalWall7.y1);
    quad(verticalWall8.x1, verticalWall8.y1, verticalWall8.x1, verticalWall8.y2, verticalWall8.x2, verticalWall8.y2, verticalWall8.x2, verticalWall8.y1);
    quad(verticalWall9.x1, verticalWall9.y1, verticalWall9.x1, verticalWall9.y2, verticalWall9.x2, verticalWall9.y2, verticalWall9.x2, verticalWall9.y1);
    quad(verticalWall10.x1, verticalWall10.y1, verticalWall10.x1, verticalWall10.y2, verticalWall10.x2, verticalWall10.y2, verticalWall10.x2, verticalWall10.y1);
    quad(verticalWall11.x1, verticalWall11.y1, verticalWall11.x1, verticalWall11.y2, verticalWall11.x2, verticalWall11.y2, verticalWall11.x2, verticalWall11.y1);
    quad(verticalWall12.x1, verticalWall12.y1, verticalWall12.x1, verticalWall12.y2, verticalWall12.x2, verticalWall12.y2, verticalWall12.x2, verticalWall12.y1);
    quad(verticalWall13.x1, verticalWall13.y1, verticalWall13.x1, verticalWall13.y2, verticalWall13.x2, verticalWall13.y2, verticalWall13.x2, verticalWall13.y1);
    quad(verticalWall14.x1, verticalWall14.y1, verticalWall14.x1, verticalWall14.y2, verticalWall14.x2, verticalWall14.y2, verticalWall14.x2, verticalWall14.y1);
    quad(verticalWall15.x1, verticalWall15.y1, verticalWall15.x1, verticalWall15.y2, verticalWall15.x2, verticalWall15.y2, verticalWall15.x2, verticalWall15.y1);
    quad(verticalWall16.x1, verticalWall16.y1, verticalWall16.x1, verticalWall16.y2, verticalWall16.x2, verticalWall16.y2, verticalWall16.x2, verticalWall16.y1);
    quad(verticalWall17.x1, verticalWall17.y1, verticalWall17.x1, verticalWall17.y2, verticalWall17.x2, verticalWall17.y2, verticalWall17.x2, verticalWall17.y1);
    quad(verticalWall18.x1, verticalWall18.y1, verticalWall18.x1, verticalWall18.y2, verticalWall18.x2, verticalWall18.y2, verticalWall18.x2, verticalWall18.y1);
    quad(verticalWall19.x1, verticalWall19.y1, verticalWall19.x1, verticalWall19.y2, verticalWall19.x2, verticalWall19.y2, verticalWall19.x2, verticalWall19.y1);
    quad(verticalWall20.x1, verticalWall20.y1, verticalWall20.x1, verticalWall20.y2, verticalWall20.x2, verticalWall20.y2, verticalWall20.x2, verticalWall20.y1);


    line(0, 0, width, 0);
    line(0, 0, 0, height);
    line(width, 0, width, height);
    line(0, height, width, height);

    //  line(1*(gridModifier), 1*(gridModifier), 2*(gridModifier), 1*(gridModifier));
    //  line(2*(gridModifier), 1*(gridModifier), 2*(gridModifier), 2*(gridModifier));
    pop();

    // constant check if the player reaches the end
    Winstate()

    // Basic player movement using the arrow keys
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
}

// Lose message, game over
function lose() {
  push();
  textSize(48);
  fill(255, 50, 50);
  textAlign(CENTER, CENTER);
  text(`You lose, try again`, width / 2, height / 2);
  player.speed = 0;
  pop();
}

// condition to win the game
function Winstate() {
  let d = dist(player.x, player.y, mazeEnd.x, mazeEnd.y);
  if (d < player.size / 4 + mazeEnd.size / 4) {
    state = `win`;
  }
}

// Win message, Congratulations
function win() {
  push();
  textSize(48);
  fill(150, 255, 150);
  textAlign(CENTER, CENTER);
  text(`Congratulations, You won!`, width / 2, height / 2);
  pop();
}

//function keyPressed() {
//  if (keyCode === 32) {
//      player.y = height;
//    value = 255;
//  } else {
//    value = 0;
//  }
//}


function borderCollisionplayer() {
  // Constraints player to the border of the Canvas
  player.x = constrain(player.x, 10, width - 10);
  player.y = constrain(player.y, 10, height - 10);

}


// Checks if the player collides with one of the walls, loses the game
function wallCollisionplayer() {

  //  for (let i = 0; i < 6; i++) {
  //    horizontalWall = (i)
  //  }

// horizontal walls
  if (player.x <= horizontalWall1.x2 && player.x >= horizontalWall1.x1 && player.y >= horizontalWall1.y1 && player.y <= horizontalWall1.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall2.x2 && player.x >= horizontalWall2.x1 && player.y >= horizontalWall2.y1 && player.y <= horizontalWall2.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall3.x2 && player.x >= horizontalWall3.x1 && player.y >= horizontalWall3.y1 && player.y <= horizontalWall3.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall4.x2 && player.x >= horizontalWall4.x1 && player.y >= horizontalWall4.y1 && player.y <= horizontalWall4.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall5.x2 && player.x >= horizontalWall5.x1 && player.y >= horizontalWall5.y1 && player.y <= horizontalWall5.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall6.x2 && player.x >= horizontalWall6.x1 && player.y >= horizontalWall6.y1 && player.y <= horizontalWall6.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall7.x2 && player.x >= horizontalWall7.x1 && player.y >= horizontalWall7.y1 && player.y <= horizontalWall7.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall8.x2 && player.x >= horizontalWall8.x1 && player.y >= horizontalWall8.y1 && player.y <= horizontalWall8.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall9.x2 && player.x >= horizontalWall9.x1 && player.y >= horizontalWall9.y1 && player.y <= horizontalWall9.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall10.x2 && player.x >= horizontalWall10.x1 && player.y >= horizontalWall10.y1 && player.y <= horizontalWall10.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall11.x2 && player.x >= horizontalWall11.x1 && player.y >= horizontalWall11.y1 && player.y <= horizontalWall11.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall12.x2 && player.x >= horizontalWall12.x1 && player.y >= horizontalWall12.y1 && player.y <= horizontalWall12.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall13.x2 && player.x >= horizontalWall13.x1 && player.y >= horizontalWall13.y1 && player.y <= horizontalWall13.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall14.x2 && player.x >= horizontalWall14.x1 && player.y >= horizontalWall14.y1 && player.y <= horizontalWall14.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall15.x2 && player.x >= horizontalWall15.x1 && player.y >= horizontalWall15.y1 && player.y <= horizontalWall15.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall16.x2 && player.x >= horizontalWall16.x1 && player.y >= horizontalWall16.y1 && player.y <= horizontalWall16.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall17.x2 && player.x >= horizontalWall17.x1 && player.y >= horizontalWall17.y1 && player.y <= horizontalWall17.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall18.x2 && player.x >= horizontalWall18.x1 && player.y >= horizontalWall18.y1 && player.y <= horizontalWall18.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall19.x2 && player.x >= horizontalWall19.x1 && player.y >= horizontalWall19.y1 && player.y <= horizontalWall19.y1 + player.size) {
    lose();
  }
  if (player.x <= horizontalWall20.x2 && player.x >= horizontalWall20.x1 && player.y >= horizontalWall20.y1 && player.y <= horizontalWall20.y1 + player.size) {
    lose();
  }


// vertical walls

  if (player.x <= verticalWall1.x2 + player.size && player.x >= verticalWall1.x1 - player.size && player.y >= verticalWall1.y1 - player.size && player.y <= verticalWall1.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall2.x2 + player.size && player.x >= verticalWall2.x1 - player.size && player.y >= verticalWall2.y1 - player.size && player.y <= verticalWall2.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall3.x2 + player.size && player.x >= verticalWall3.x1 - player.size && player.y >= verticalWall3.y1 - player.size && player.y <= verticalWall3.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall4.x2 + player.size && player.x >= verticalWall4.x1 - player.size && player.y >= verticalWall4.y1 - player.size && player.y <= verticalWall4.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall5.x2 + player.size && player.x >= verticalWall5.x1 - player.size && player.y >= verticalWall5.y1 - player.size && player.y <= verticalWall5.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall6.x2 + player.size && player.x >= verticalWall6.x1 - player.size && player.y >= verticalWall6.y1 - player.size && player.y <= verticalWall6.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall7.x2 + player.size && player.x >= verticalWall7.x1 - player.size && player.y >= verticalWall7.y1 - player.size && player.y <= verticalWall7.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall8.x2 + player.size && player.x >= verticalWall8.x1 - player.size && player.y >= verticalWall8.y1 - player.size && player.y <= verticalWall8.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall9.x2 + player.size && player.x >= verticalWall9.x1 - player.size && player.y >= verticalWall9.y1 - player.size && player.y <= verticalWall9.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall10.x2 + player.size && player.x >= verticalWall10.x1 - player.size && player.y >= verticalWall10.y1 - player.size && player.y <= verticalWall10.y2 + player.size) {
    lose();
  }

  if (player.x <= verticalWall11.x2 + player.size && player.x >= verticalWall11.x1 - player.size && player.y >= verticalWall11.y1 - player.size && player.y <= verticalWall11.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall12.x2 + player.size && player.x >= verticalWall12.x1 - player.size && player.y >= verticalWall12.y1 - player.size && player.y <= verticalWall12.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall13.x2 + player.size && player.x >= verticalWall13.x1 - player.size && player.y >= verticalWall13.y1 - player.size && player.y <= verticalWall13.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall14.x2 + player.size && player.x >= verticalWall14.x1 - player.size && player.y >= verticalWall14.y1 - player.size && player.y <= verticalWall14.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall15.x2 + player.size && player.x >= verticalWall15.x1 - player.size && player.y >= verticalWall15.y1 - player.size && player.y <= verticalWall15.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall16.x2 + player.size && player.x >= verticalWall16.x1 - player.size && player.y >= verticalWall16.y1 - player.size && player.y <= verticalWall16.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall17.x2 + player.size && player.x >= verticalWall17.x1 - player.size && player.y >= verticalWall17.y1 - player.size && player.y <= verticalWall17.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall18.x2 + player.size && player.x >= verticalWall18.x1 - player.size && player.y >= verticalWall18.y1 - player.size && player.y <= verticalWall18.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall19.x2 + player.size && player.x >= verticalWall19.x1 - player.size && player.y >= verticalWall19.y1 - player.size && player.y <= verticalWall19.y2 + player.size) {
    lose();
  }
  if (player.x <= verticalWall20.x2 + player.size && player.x >= verticalWall20.x1 - player.size && player.y >= verticalWall20.y1 - player.size && player.y <= verticalWall20.y2 + player.size) {
    lose();
  }



// ^ Couldn't get arrays to work, had to do this the long way...





}


function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
