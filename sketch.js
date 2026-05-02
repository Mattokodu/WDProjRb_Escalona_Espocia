/*
----- Coding Tutorial by Patt Vira ----- 
Name: Conway's Game of Life
Video Tutorial: https://youtu.be/lsWulRIWzdo

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let cols; let rows; let size = 5;
let grid; let play = true;
let hueValue = 0; 

function setup() {
  createCanvas(700, 400);
  colorMode(HSB, 255);
  cols = width/size;
  rows = height/size; 
  
  grid = new Grid();
  
  let playButton = createButton("Play");
  playButton.position(0, height + 20);
  playButton.mousePressed(playGrid);
  
  let resetButton = createButton("Reset");
  resetButton.position(45, height + 20);
  resetButton.mousePressed(resetGrid);
  
  let randomButton = createButton("Random");
  randomButton.position(100, height + 20);
  randomButton.mousePressed(randomGrid);
}

function draw() {
  background(220);
  if (play == true) {
    grid.update();
  }
  
  grid.display();
  
  
}

function playGrid() {
  play = !play;
}

function resetGrid() {
  grid.resetGrid();
}

function randomGrid() {
  grid.randomGrid();
}

function mouseDragged() {
  let margin = 2;
  let x = floor(mouseX / size);
  let y = floor(mouseY / size);
  
  for (let i=-margin; i<margin; i++) {
    for (let j=-margin; j<margin; j++) {
      grid.grid[x + i][y + j] = 1;
    }
  }
  
  hueValue += 1;
  if (hueValue > 255) {
    hueValue = 0;
  }
  
  
}


