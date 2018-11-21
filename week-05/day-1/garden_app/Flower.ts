import { Plant } from "./Plant";

export class Flower extends Plant {

  constructor(color: string) {
    super(color, 0.75);
  }

  waterPlant(amount: number): void {
    super.waterPlant(amount);
    if (this.water >= 5) {
      this.needsWater = false;
    }
  }

  print(): void {
    if (this.needsWater) {
      console.log(`The ${this.color} Flower needs water.`);
    } else {
      console.log(`The ${this.color} Flower doesn't need water.`);
    }
  }
}