import { Instrument } from "./Instrument";

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string, numOfStrings: number) {
    super(name);
    this.numberOfStrings = numOfStrings;
  }

  abstract sound();

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}