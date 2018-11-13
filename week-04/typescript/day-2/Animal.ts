class Animal {
  private hunger: number;
  private thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    this.hunger--;
    console.log('Hunger: ' + this.hunger);
  }

  drink() {
    this.thirst--;
    console.log('Thirst: ' + this.thirst);
  }

  play() {
    this.hunger++;
    this.thirst++;
    console.log('Hunger and thirst: ' + this.hunger + ', ' + this.thirst);
  }
}

let bodri = new Animal();

bodri.eat();
bodri.eat();
bodri.eat();
bodri.drink();
bodri.play();