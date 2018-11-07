
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function drawSquare(x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 50, 50);
}

let column = 0;
for (let i: number = 0; i < 12; i++) {
  if (column % 2 === 0) {
    for (let j: number = 0; j < 8; j++) {
      if (j % 2 === 0) {
        drawSquare(column * 50, j * 50, 'black');
      } else {
        drawSquare(column * 50, j * 50, 'white');
      }
    }
  } else {
    for (let j: number = 0; j < 8; j++) {
      if (j % 2 === 0) {
        drawSquare(column * 50, j * 50, 'white');
      } else {
        drawSquare(column * 50, j * 50, 'black');
      }
    }
  }
  column++
}