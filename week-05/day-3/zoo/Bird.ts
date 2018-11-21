import { Animal } from "./Animal";

export class Bird extends Animal {
  constructor(name: string, age?: number) {
    super(name, age);
  }

  breed(): string {
    return 'laying eggs';
  }
}