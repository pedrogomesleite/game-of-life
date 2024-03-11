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
      grid[i][j] = 0;
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < gridW; i++) {
    for (let j = 0; j < gridH; j++) {
      verificarMorte(grid, i, j);
      verificarVida(grid, i, j);
      aleatorizarVida(grid, i, j);
      gerar(grid, i, j);
    }
  }
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

function aleatorizarVida(grid, h, w) {
  if (grid[h][w] == 1) {
    let chance = round(random(0, 4));
    if (chance < 1) {
      grid[h][w] = 0;
    }
  }
}

function verificarVida(grid, h, w) {
  let count = 0;
  if (grid[h][w] == 0) {
    for (let i = max(h - 1, 0); i <= min(h + 1, gridH - 1); i++) {
      for (let j = max(w - 1, 0); j <= min(w + 1, gridW - 1); j++) {
        if (typeof grid[i] !== 'undefined' && typeof grid[i][j] !== 'undefined') {
          if (grid[i][j] == 1) {
            count++;
          }
        }
      }
    }
  }
  if (count == 3) {
    grid[h][w] = 1;
  }
}

function verificarMorte(grid, h, w) {
  let count = 0;
  if (grid[h][w] == 1) {
    for (let i = max(h - 1, 0); i <= min(h + 1, gridH - 1); i++) {
      for (let j = max(w - 1, 0); j <= min(w + 1, gridW - 1); j++) {
        if (typeof grid[i] !== 'undefined' && typeof grid[i][j] !== 'undefined') {
          if (grid[i][j] == 1) {
            count++;
          }
        }
      }
    }
  }
  if (count < 2 || count > 3) {
    grid[h][w] = 0;
  }
}

function mouseDragged() {
  if (mouseX < width && mouseY < height) {
    let x = round(mouseX / size);
    let y = round(mouseY / size);

    grid[x][y] = 1;
  }
}
