'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i: number = 0; i <= 20; i++) {
  ctx.beginPath();
  ctx.moveTo(0 + i * 20, (canvas.height));
  ctx.lineTo(canvas.width / 2 + i * 10, 0 + i * 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvas.width - i * 20, (canvas.height));
  ctx.lineTo(canvas.width / 2 - i * 10, 0 + i * 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvas.width-i*20/2 , (canvas.height)-i*20);
  ctx.lineTo(0+i*20/2, (canvas.height)-i*20);
  ctx.stroke();
}

