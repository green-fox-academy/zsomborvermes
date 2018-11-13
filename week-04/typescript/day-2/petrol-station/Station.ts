import { Car } from "./Car";

export class Station {
  private gasAmount = 100;

  refill(car: Car) {
    this.gasAmount -= (car.getGasCapacity() - car.getGasAmount());
    car.fillGas();
  }

  print() {
    console.log(`GasAmount in Station: ${this.gasAmount}`);
  }
}

let station = new Station();
let car = new Car();

car.print();
station.print();

station.refill(car);

car.print();
station.print();

