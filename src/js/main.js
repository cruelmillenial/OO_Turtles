import { Grid } from "./grid.js";
import { drawGrid, drawTurtle } from "./renderer_iso.js";
import { Turtle } from "./turtles.js";

const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

const grid = new Grid(10, 10);
const randomCell = grid.cells[Math.floor(Math.random() * grid.cells.length)];
const turtle = new Turtle(randomCell);

function tick() {
  turtle.update(grid);
  drawGrid(ctx, grid);
  drawTurtle(ctx, turtle);
}

setInterval(tick, 1000); // 1 Hz
