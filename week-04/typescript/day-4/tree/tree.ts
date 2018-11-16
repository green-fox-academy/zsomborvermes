
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/* function drawTree(x: number, y: number, length: number, offset: number, depth: number) {
  if (offset === 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - length);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + offset, y - length);
    ctx.stroke();
  } */


/*   ctx.beginPath();
  ctx.moveTo(x , y - length);
  ctx.lineTo(x + offset , y - length*2);
  ctx.stroke();
 
  ctx.beginPath();
  ctx.moveTo(x , y - length);
  ctx.lineTo(x - offset , y - length*2);
  ctx.stroke();
 
  ctx.beginPath();
  ctx.moveTo(x , y - length);
  ctx.lineTo(x , y - length*2);
  ctx.stroke(); */


/*   if (depth > 1) {
    console.log('4')
    drawTree(x + offset, y - length, length, offset + length, depth - 1);
    drawTree(x, y - length, length, 0, depth - 1);
    drawTree(x + offset, y - length, length, offset - length, depth - 1);
  } */

ctx.translate(canvas.width / 2, canvas.height);
function drawTree(len: number) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0 - len);
  ctx.stroke();
  ctx.translate(0, -len);
  ctx.rotate(Math.PI / 4);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0 - len);
  ctx.stroke();
  ctx.rotate(-Math.PI / 4);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0 - len);
  ctx.stroke();
  ctx.rotate(-Math.PI / 4);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0 - len);
  ctx.stroke();

  drawTree(len * 0.67);
  
  /* if (len > 4) {
    drawTree(len * 0.67);
    ctx.rotate(-(Math.PI / 4));
    drawTree(len * 0.67);
    ctx.rotate(-(Math.PI / 4));
  } */
}

drawTree(150);