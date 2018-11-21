import { Vehicle } from "./Vehicle";

export class Helicopter extends Vehicle implements Flyable {
  constructor(color: string, regNumber: number, owner: string) {
    super(color, regNumber, owner);
  }

  land() {
    console.log(`${this.constructor.name} has landed successfully.`);
  }

  fly() {
    console.log(`${this.constructor.name} is flying.`);
  }

  takeOff() {
    console.log(`${this.constructor.name} has taken off succesfully`);
  }
} 