'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function drawPurpleSquare(x: number, y: number) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, 15, 15);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, 15, 15);
}

for (let i: number = 1; i <= 20; i++) {
  drawPurpleSquare(i * 15, i * 15);
}