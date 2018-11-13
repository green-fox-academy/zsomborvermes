export class Animal {
  private hunger: number;
  private thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat(): void {
    this.hunger--;
    console.log('Hunger: ' + this.hunger);
  }

  drink(): void {
    this.thirst--;
    console.log('Thirst: ' + this.thirst);
  }

  play(): void {
    this.hunger++;
    this.thirst++;
    console.log('Hunger and thirst: ' + this.hunger + ', ' + this.thirst);
  }
  getHunger(): number {
    return this.hunger;
  }
}