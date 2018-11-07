
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


for (let i: number = 1; i <= 4; i++) {
  ctx.fillStyle = `rgb(${i * 50},${i * 30}, ${i * 5})`;
  ctx.fillRect(i * 100, canvas.height / 2, i * 20, i * 20);
}