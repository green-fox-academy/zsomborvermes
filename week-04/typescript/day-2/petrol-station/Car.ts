export class Car {
  private gasCapacity: number;
  private gasAmount: number;

  constructor() {
    this.gasAmount = 0;
    this.gasCapacity = 100;
  }

  getGasCapacity() {
    return this.gasCapacity;
  }

  getGasAmount() {
    return this.gasAmount
  }

  fillGas() {
    this.gasAmount = this.gasCapacity;
  }

  print() {
    console.log(`Capacity: ${this.gasCapacity} Amount: ${this.gasAmount}`)
  }
}