import { Ship } from "./Ship";

export class Armada {
  private armada: Ship[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  fillArmada(armadaSize: number = Math.floor((Math.random() * 4) + 1), crewSize?: number): void {
    for (let i = 0; i < armadaSize; i++) {
      this.armada.push(new Ship());
    }

    this.armada.forEach(ship => {
      ship.fillShip(crewSize);
    });
  }

  getArmada(): Ship[] {
    return this.armada.slice(0);
  }

  war(opponent: Armada): boolean {

    let armada_1 = this.getArmada();
    let armada_2 = opponent.getArmada();
    let name_1 = this.name;
    let name_2 = opponent.name;

    console.log(`\nA war has started between ${this.name} and the famous ${opponent.name}`);
    console.log(`\nLET'S GET STARTED!`);
    
    let roundCounter = 1;

    let round = function () {
      if (armada_1.length !== 0 && armada_2.length !== 0) {

        console.log(`\n-------------------`);
        console.log(`Round ${roundCounter}\n`);

        if (armada_1[0].battle(armada_2[0])) {

          console.log(`${name_1} won the battle`);
          armada_2.splice(0, 1);

        } else {

          console.log(`${name_2} won the battle`);
          armada_1.splice(0, 1);

        }

        console.log(`${name_1} have ${armada_1.length} and ${name_2} have ${armada_2.length} ships left.`);
        console.log(`-------------------`);
        roundCounter++;
        setTimeout(function(){round()}, 1000);

      } else {

        if (armada_1.length === 0) {

          console.log(`\n\n${name_2.toUpperCase()} WON THE WAR!!!\n\n`);
          return false;

        } else {

          console.log(`\n\n${name_1.toUpperCase()} WON THE WAR!!!\n\n`);
          return true;

        }
      }
    }

    return round(); 

  }

  print(): void {
    console.log(`${this.name}`);
    console.log(`Number of ships in the armada: ${this.armada.length}`);
  }
}