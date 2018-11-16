'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawPattern(x: number, y: number, size: number, depth: number): void {
  for (let i = 1; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(x + size / 3 * i, y);
    ctx.lineTo(x + size / 3 * i, y + size);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + size / 3 * i);
    ctx.lineTo(x + size, y + size / 3 * i);
    ctx.stroke();
  }

  if (depth > 1) {
    setTimeout(function () {
      drawPattern(x, y + size / 3, size / 3, depth - 1);
      drawPattern(x + size / 3, y, size / 3, depth - 1);
      drawPattern(x + size * 2 / 3, y + size / 3, size / 3, depth - 1);
      drawPattern(x + size / 3, y + size * 2 / 3, size / 3, depth - 1);
    }, 1000);
  }
}


drawPattern(0, 0, canvas.width, parseInt(prompt('Please set the depth of the fractal: ')));