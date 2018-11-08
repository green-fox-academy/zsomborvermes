'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawLine(num: number) {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(canvas.width - num, canvas.height / 2);
  ctx.lineTo(canvas.width / 2, canvas.height / 2 - num);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(0 + num, canvas.height / 2);
  ctx.lineTo(canvas.width / 2, canvas.height / 2 - num);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(0 + num, canvas.height / 2);
  ctx.lineTo(canvas.width / 2, canvas.height / 2 + num);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(canvas.width - num, canvas.height / 2);
  ctx.lineTo(canvas.width / 2, canvas.height / 2 + num);
  ctx.stroke();
}

for (let i: number = 10; i <= canvas.width / 2; i += 10) {
  drawLine(i);
}