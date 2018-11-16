const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function squareGrid(x: number, y: number, size: number, lineWidth: number, depth: number): void {
  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  if (depth > 1) {
    setTimeout(function () {
      squareGrid(x - size / 4, y - size / 4, size / 2, lineWidth / 2, depth - 1);
      squareGrid(x + 3 * size / 4, y - size / 4, size / 2, lineWidth / 2, depth - 1);
      squareGrid(x - size / 4, y + 3 * size / 4, size / 2, lineWidth / 2, depth - 1);
      squareGrid(x + 3 * size / 4, y + 3 * size / 4, size / 2, lineWidth / 2, depth - 1);
    }, 1000);
  }
}

squareGrid(125, 125, 250, 20, parseInt(prompt('Please set the deapth of the fractal: ')));