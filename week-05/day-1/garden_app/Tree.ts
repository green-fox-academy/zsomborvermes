import { Plant } from "./Plant";

export class Tree extends Plant {

  constructor(color: string) {
    super(color, 0.4);
  }

  waterPlant(amount: number): void {
    super.waterPlant(amount);
    if (this.water >= 10) {
      this.needsWater = false;
    }
  }

  print(): void {
    if (this.needsWater) {
      console.log(`The ${this.color} Tree needs water.`);
    } else {
      console.log(`The ${this.color} Tree doesn't need water.`);
    }
  }
}