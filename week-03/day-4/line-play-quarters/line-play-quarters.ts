'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let numOfColsAndRows: number = 8;
let canvasPart = canvas.width / numOfColsAndRows;
let lineSpace: number = 30;
let canvasPartLineSpace: number = lineSpace / numOfColsAndRows;

function drawLine(dist: number, rows: number, column: number) {
  ctx.beginPath();
  ctx.strokeStyle = "purple";
  ctx.moveTo(canvasPart + column * canvasPart, (canvasPart - dist) + canvasPart * rows);
  ctx.lineTo((canvasPart - dist) + canvasPart * column, canvasPart * rows);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo((canvasPart - dist) + canvasPart * column, canvasPart + canvasPart * rows);
  ctx.lineTo(canvasPart * column, (canvasPart - dist) + canvasPart * rows);
  ctx.stroke();
}

for (let j: number = 0; j < numOfColsAndRows; j++) {
  for (let k: number = 0; k < numOfColsAndRows; k++) {
    for (let i: number = canvasPartLineSpace; i <= canvasPart - canvasPartLineSpace; i += canvasPartLineSpace) {
      drawLine(i, k, j);
    }
  }
}