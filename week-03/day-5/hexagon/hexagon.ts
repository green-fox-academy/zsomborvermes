'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(x: number, y: number, size: number): void {
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
  }
  ctx.stroke();
  ctx.closePath();
}

function drawHexagons(x: number, y: number, size: number, rows: number): void {

  for (let i = 0; i < rows; i++) {
    drawHexagon(x, y + i * size * 1.75, size);
  }
}

for (let i = 0; i < 7; i++) {
  if (i <= 2) {
    drawHexagons(20 + i * 30, 100 - 35 * i / 2, 20, i + 4);
  } else {
    drawHexagons(20 + i * 30, -5 + 35 * i / 2, 20, 10 - i);
  }
}



