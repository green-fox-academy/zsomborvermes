import { Animal } from "./Animal";

export class Farm {
  private animalList: Animal[] = [];
  private slots: number = 10;

  breed(): void {
    if (this.animalList.length < 10) {
      this.animalList.push(new Animal());
    }
  }

  slaughter(): void {
    let leastHungry: Animal;
    for (let i = 0; i < this.animalList.length; i++) {
      if (i === 0) {
        leastHungry = this.animalList[i];
      } else if (this.animalList[i].getHunger() < leastHungry.getHunger()) {
        leastHungry = this.animalList[i];
      }
    }
    this.animalList.splice(this.animalList.indexOf(leastHungry), 1);
  }

  getAnimalList(): Animal[] {
    return this.animalList;
  }
}

let farm = new Farm();

for (let i = 0; i < 20; i++) {
  farm.breed();
}

for (let i = 0; i < 200; i++) {
  farm.getAnimalList()[Math.floor(Math.random() * 10)].play();
}
console.log(farm);

farm.slaughter();
farm.slaughter();
farm.slaughter();
console.log(farm);

