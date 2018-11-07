'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function drawPurpleSquare(x: number, y: number, size: number) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, size, size);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, size, size);
}

let currentCoordinates: number[] = [15, 15]
for (let i: number = 1; i <= 6; i++) {
  drawPurpleSquare(currentCoordinates[0], currentCoordinates[1], i * 15);
  currentCoordinates[0] += i * 15;
  currentCoordinates[1] += i * 15;
}