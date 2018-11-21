import { StringedInstrument } from "./StringedInstrument";

export class Violin extends StringedInstrument {
  constructor(numOfStrings: number = 4) {
    super('Violin', numOfStrings);
  }

  sound(): string {
    return 'Screech';
  }
}