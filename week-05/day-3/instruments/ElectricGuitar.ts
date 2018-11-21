import { StringedInstrument } from "./StringedInstrument";

export class ElectricGuitar extends StringedInstrument {
  constructor(numOfStrings: number = 6) {
    super('Electric Guitar', numOfStrings);
  }

  sound() {
    return 'Twang';
  }
}