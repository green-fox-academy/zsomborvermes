const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


ctx.translate(250, 250);

function circleFractal(x, y, r, depth) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();

  if (depth > 1) {
    setTimeout(function () {
      circleFractal(x, y - r / 2, r / 2, depth - 1);
      circleFractal(x + r / 2.3, y + r / 4, r / 2, depth - 1);
      circleFractal(x - r / 2.3, y + r / 4, r / 2, depth - 1);
    }, 1000);
  }
}

circleFractal(0, 0, canvas.width / 2, parseInt(prompt('Please set the depth of the fractal: ')));