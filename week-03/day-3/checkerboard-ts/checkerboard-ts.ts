
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function drawSquare(x: number, y: number) {
  ctx.fillRect(x, y, 50, 50);
}

for (let i: number = 0; i < canvas.height; i++) {
  for (let j: number = 0; j < canvas.width; j++) {
    if ((i + j) % 2 === 0){
      drawSquare(i * 50, j * 50);
    }
  }
}