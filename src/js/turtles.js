import { SPRITES } from "./sprite_registry.js";

export class Turtle {
  constructor(cell, species = "redEaredSlider") {
    this.cell = cell;
    this.species = species;
    this.sprite = SPRITES[species];
    this.lastBehavior = "idle";
    this.tickSinceLastBark = 0;
  }

  chooseBehavior() {
    return Math.random() < 0.5 ? "move" : "idle";
  }

  update(grid) {
    this.tickSinceLastBark++;
    const newBehavior = this.chooseBehavior();

    if (newBehavior !== this.lastBehavior || this.tickSinceLastBark >= 5) {
      this.bark(newBehavior);
      this.lastBehavior = newBehavior;
      this.tickSinceLastBark = 0;
    }

    if (newBehavior === "move") {
      const neighbors = grid.getNeighbors(this.cell);
      if (neighbors.length > 0) {
        this.cell = neighbors[Math.floor(Math.random() * neighbors.length)];
      }
    }
  }

  bark(behavior) {
    const icon = behavior === "move" ? "🚶" : "😐";
    console.log(`🐢 ${this.species}: ${icon} ${behavior}`);
  }
}
