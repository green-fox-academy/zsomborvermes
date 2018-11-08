'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine(num: number) {
  ctx.beginPath();
  ctx.strokeStyle = "purple";
  ctx.moveTo(canvas.width, canvas.height - num);
  ctx.lineTo(canvas.width - num, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(canvas.width - num, canvas.height);
  ctx.lineTo(0, canvas.height - num);
  ctx.stroke();
}

for (let i: number = 0; i < 12; i++) {
  drawLine(i * 40);
}
