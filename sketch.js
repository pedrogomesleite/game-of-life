let size = 5;
let gridH;
let gridW;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if( width < 500) {
    size = 7;
  }
  grid = [];
  gridH = round(height / size);
  gridW = round(width / size);

  print(height, width, gridH, gridW);

  for (let i = 0; i < gridW; i++) {
    grid[i] = [];
    for (let j = 0; j < gridH; j++) {
      grid[i][j] = round(random(0, 1));
    }
  }
}

function draw() {
  background(220);
  let newGrid = [];

  for (let i = 0; i < gridW; i++) {
    newGrid[i] = [];
    for (let j = 0; j < gridH; j++) {
      let nei = getNei(grid, i, j);
      if (grid[i][j] == 1 && (nei < 2 || nei > 3)) {
        newGrid[i][j] = 0;
      }
      else if (grid[i][j] == 0 && (nei == 3)) {
        newGrid[i][j] = 1;
      }
      else {
        newGrid[i][j] = grid[i][j];
      }



      //aleatorizarVida(grid, i, j, newGrid);
      gerar(grid, i, j);
    }
  }
  grid = newGrid;

  // for (let i = 0; i < gridW; i++) {
  //   newGrid[i] = [];
  //   for (let j = 0; j < gridH; j++) {
  //     let nei = getNei(grid, i, j);
  //     if(grid[i][j] == 1 && (nei < 2 || nei > 3)) {
  //       newGrid[i][j] = 0;   
  //     }
  //     else if(grid[i][j] == 0 && (nei == 3)){
  //       newGrid[i][j] = 1;
  //     }
  //     else {
  //       newGrid[i][j] = grid[i][j];
  //     }



  //     // aleatorizarVida(grid, i, j, newGrid);
  //     gerar(grid, i, j);
  //   }
  // }
  // grid = newGrid;
}

function getNei(grid, h, w) {
  let count = 0;
  for (let i = h - 1; i <= h + 1; i++) {
    for (let j = w - 1; j <= w + 1; j++) {
      if (typeof grid[i] !== 'undefined' &&
        typeof grid[i][j] !== 'undefined' &&
        grid[i][j] == 1) {
        count++;
      }
    }
  }
  return count - grid[h][w];
}

function gerar(grid, h, w) {
  if (grid[h][w] == 1) {
    fill(255);
    rect(h * size, w * size, size);
  }
  else {
    fill(0);
    rect(h * size, w * size, size);
  }
}

function aleatorizarVida(grid, h, w, newGrid) {
  let chance = round(random(0, 4));
  if (chance < 1) {
    newGrid[h][w] = 0;
  }
  else if (chance > 3) {
    newGrid[h][w] = 1;
  }
}

function mouseDragged() {
  if (mouseX < width && mouseY < height) {
    let x = round(mouseX / size);
    let y = round(mouseY / size);

    grid[x][y] = 1;
    for (let i = x - 3; i < x + 3; i++) {
      for (let j = y - 3; j < y + 3; j++) {
        if (typeof grid[i] !== 'undefined' && typeof grid[i][j] !== 'undefined') {
          grid[i][j] = 1;
        }
      }
    }
  }
}

function mouseClicked() {
  if (mouseX < width && mouseY < height) {
    let x = round(mouseX / size);
    let y = round(mouseY / size);

    grid[x][y] = 1;
    for (let i = x - 3; i < x + 3; i++) {
      for (let j = y - 3; j < y + 3; j++) {
        if (typeof grid[i] !== 'undefined' && typeof grid[i][j] !== 'undefined') {
          grid[i][j] = 1;
        }
      }
    }
  }
}

function touchMoved() {
  for (let k = 0; k < touches.length; k++) {

    if (mouseX < width && mouseY < height) {
      let x = round(touches[k].x / size);
      let y = round(touches[k].y / size);

      grid[x][y] = 1;
      for (let i = x - 3; i < x + 3; i++) {
        for (let j = y - 3; j < y + 3; j++) {
          if (typeof grid[i] !== 'undefined' && typeof grid[i][j] !== 'undefined') {
            grid[i][j] = 1;
          }
        }
      }
    }
  }

  return false;
}

function windowResized() {
  setup();
}
