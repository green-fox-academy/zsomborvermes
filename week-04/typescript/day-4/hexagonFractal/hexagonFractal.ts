const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(x: number, y: number, size: number, depth: number): void {

  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
  }

  ctx.stroke();
  ctx.closePath();
  if (depth > 1) {
    setTimeout(function () {
      drawHexagon(x - size / 4, y - size / 2.3, size / 2, depth - 1);
      drawHexagon(x - size / 4, y + size / 2.3, size / 2, depth - 1);
      drawHexagon(x + size / 2, y, size / 2, depth - 1);
    }, 1000);
  }

}

drawHexagon(250, 250, 250, parseInt(prompt('Please set the depth of the fractal: ')));
