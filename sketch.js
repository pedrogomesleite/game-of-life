let size = 5;
let gridH;
let gridW;
let grid;

function setup() {
  createCanvas(500, 500);
  grid = [];
  gridH = (height / size);
  gridW = (width / size);

  for (let i = 0; i < gridW; i++) {
    grid[i] = [];
    for (let j = 0; j < gridH; j++) {
      grid[i][j] = round(random(0,1));
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
      if(grid[i][j] == 1 && (nei < 2 || nei > 3)) {
        newGrid[i][j] = 0;   
      }
      else if(grid[i][j] == 0 && (nei == 3)){
        newGrid[i][j] = 1;
      }
      else {
        newGrid[i][j] = grid[i][j];
      }
      
      
      
      // aleatorizarVida(grid, i, j, newGrid);
      gerar(grid, i, j);
    }
  }
  grid = newGrid;
}

function getNei(grid, h, w) {
  let count = 0;
  for (let i = max(h - 1, 0); i <= min(h + 1, gridH - 1); i++) {
    for (let j = max(w - 1, 0); j <= min(w + 1, gridW - 1); j++) {
      if (typeof grid[i] !== 'undefined' && typeof grid[i][j] !== 'undefined') {
        if (grid[i][j] == 1) {
          count++;
        }
      }
    }
  }
  return count - grid[h][w];
}

function gerar(grid, h, w) {
  if (grid[h][w] == 1) {
    fill(255);
    rect(h * size, w * size, size, size);
  }
  else {
    fill(0);
    rect(h * size, w * size, size);
  }
}

function aleatorizarVida(grid, h, w, newGrid) {
  if (grid[h][w] == 1) {
    let chance = round(random(0, 4));
    if (chance < 1) {
      newGrid[h][w] = 0;
    }
  }
}

function mouseDragged() {
  if (mouseX < width && mouseY < height) {
    let x = round(mouseX / size);
    let y = round(mouseY / size);

    grid[x][y] = 1;
  }
}
