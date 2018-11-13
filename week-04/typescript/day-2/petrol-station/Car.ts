export class Car {
  private gasCapacity: number;
  private gasAmount: number;

  constructor() {
    this.gasAmount = 0;
    this.gasCapacity = 100;
  }

  getGasCapacity(): number {
    return this.gasCapacity;
  }

  getGasAmount(): number {
    return this.gasAmount
  }

  fillGas(): void {
    this.gasAmount = this.gasCapacity;
  }

  print(): void {
    console.log(`Capacity: ${this.gasCapacity} Amount: ${this.gasAmount}`)
  }
}