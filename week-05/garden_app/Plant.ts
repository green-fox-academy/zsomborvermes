export class Plant {
  protected water: number;
  protected needsWater: boolean;
  protected color: string;
  protected waterAbsorption: number;

  constructor(color: string, waterAbsorption = 0) {
    this.color = color;
    this.needsWater = true;
    this.water = 0;
    this.waterAbsorption = waterAbsorption;
  }

  waterPlant(amount: number): void {
    if (this.needsWater) {
      this.water += (amount * this.waterAbsorption);
    }
  }

  needWater(): boolean {
    return this.needsWater;
  }

  getColor(): string {
    return this.color;
  }

  print(): void {
    console.log(`This is a ${this.color} Plant`);

  }
}