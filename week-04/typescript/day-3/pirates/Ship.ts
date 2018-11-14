import { Pirate } from "./Pirate";

export class Ship {
  private name: string;
  private crew: Pirate[] = [];
  private captain: Pirate;

  constructor(name: string = "Nameless Ship") {
    this.name = name;
  }

  fillShip(crewSize: number = Math.floor(Math.random() * 20), captainName?: string): void {
    this.captain = new Pirate();
    
    for (let i = 0; i < crewSize; i++) {
      this.crew.push(new Pirate(captainName));
    }
  }

  print(): void {
    console.log(`\n\n${this.name}\n`);
    console.log(`The ship's captain consumed ${this.captain.getRum()} rum(s).`);
    console.log(`Number of alive pirates on the ship: ${this.getNumberOfAlive()}\n`);


  }

  getNumberOfAlive(): number {
    let numberOfAlive = 0;

    this.crew.forEach(e => {
      if (e.isAlive()) {
        numberOfAlive++;
      }
      if (this.captain.isAlive) {
        numberOfAlive++;
      }
    });

    return numberOfAlive;
  }

  calculateScore(): number {
    return this.getNumberOfAlive() - this.captain.getRum();
  }

  killRandomNumberOfCrew(): void {
    let random = Math.floor((Math.random() * this.crew.length));

    for (let i = 0; i < random; i++) {
      this.crew[i].die();
    }
  }

  battle(opponent: Ship): boolean {
    if (this.calculateScore() === opponent.calculateScore()) {
       
      return this.brawlCaptains(opponent);

    } else if (this.calculateScore() > opponent.calculateScore()) {
      opponent.killRandomNumberOfCrew();
      this.captain.drinkSomeRum();

      return true;

    } else {
      this.killRandomNumberOfCrew();
      opponent.captain.drinkSomeRum();

      return false;
    }
  }

  brawlCaptains(opponent: Ship): boolean {
    console.log(`The 2 ships have the same point so the captains must brawl for the win!\n`);

    if (this.captain.brawl(opponent.captain)) {
      opponent.killRandomNumberOfCrew();
      this.captain.drinkSomeRum();

      return true;

    } else {
      this.killRandomNumberOfCrew();
      opponent.captain.drinkSomeRum();

      return false;
    }
  }
}
