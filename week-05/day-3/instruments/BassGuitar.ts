import { StringedInstrument } from "./StringedInstrument";

export class BassGuitar extends StringedInstrument {
  constructor(numOfStrings: number = 4) {
    super('Bass Guitar', numOfStrings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}