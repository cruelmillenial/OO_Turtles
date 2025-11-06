export class HexCell {
  constructor(q, r) { this.q = q; this.r = r; this.occupant = null; }
}

export class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = [];
    for (let q = 0; q < width; q++)
      for (let r = 0; r < height; r++)
        this.cells.push(new HexCell(q, r));
  }
  getNeighbors(cell) {
    const dirs = [[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]];
    return dirs.map(([dq,dr]) =>
      this.cells.find(c => c.q === cell.q + dq && c.r === cell.r + dr)
    ).filter(Boolean);
  }
}
