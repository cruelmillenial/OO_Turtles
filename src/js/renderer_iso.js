export function drawGrid(ctx, grid, size=30) {
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  for (const c of grid.cells) {
    const {x,y} = axialToPixel(c.q, c.r, size);
    drawHex(ctx, x, y, size, "#cfd8dc");
  }
}

export function drawTurtle(ctx, turtle, size=30) {
  const {x,y} = axialToPixel(turtle.cell.q, turtle.cell.r, size);
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(x, y, size/3, 0, 2*Math.PI);
  ctx.fill();
}

function axialToPixel(q,r,s) {
  return { x: s * (Math.sqrt(3) * q + Math.sqrt(3)/2 * r),
           y: s * (3/2 * r) };
}

function drawHex(ctx,x,y,s,color) {
  const a = (Math.PI/3);
  ctx.strokeStyle = color;
  ctx.beginPath();
  for(let i=0;i<6;i++){
    const px = x + s*Math.cos(a*i);
    const py = y + s*Math.sin(a*i);
    if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
  }
  ctx.closePath(); ctx.stroke();
}
