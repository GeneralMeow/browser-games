const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const linecount = document.getElementById('lines');
const clear = window.getComputedStyle(canvas).getPropertyValue('background-color');
const width = 10;
const height = 20;
const titlesz = 24;
canvas.width = width * tilesz;
canvas.height = height * titlesz;


const board = [];

for (let row = 0; row < 20; row++) {
  board[row] = [];
  for (let tile = 0; tile <10; tile++) {
    board[row][tile] = false;
  }
}

const drawBoard() => {
  fs = ctx.fillStyle;
  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++){
      ctx.fillStyle = board[y][x] ? 'red' : 'white';
      drawSquare(x, y, tilesz, tilesz);
    }
  }
    ctx.fillStyle = fs;
}

const drawSquare(x, y) => {
  ctx.fillRect(x * tilesz, y * tilesz, tilesz, tilesz);
  ss = ctx.strokeStyle;
  ctx.strokeStyle = "#555";
  ctx.strokeRect(x * tilesz, y * tilesz, tilesz, tilesz);
  ctx.strokeStyle = "#888";
  ctx.strokeRect(x * tilesz + 3*tilesz/8, y * tilesz + 3*tilesz/8, tilesz/4, tilesz/4);
  ctx.strokeStyle = ss;
}
