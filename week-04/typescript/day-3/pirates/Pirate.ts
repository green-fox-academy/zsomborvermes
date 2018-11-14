export class Pirate {

  private name: string;
  private rum: number = 0;
  private isDead: boolean = false;

  constructor(name: string = 'Nameless Pirate') {
    this.name = name;
  }

  drinkSomeRum(): void {
    if (!this.isDead) {
      this.rum++;
    } else {
      console.log(`${this.name} is dead.\n`);
    }
  }

  howsItGoingMate(): void {
    if (!this.isDead) {
      if (this.rum < 4) {
        console.log(`Pour me anudder!\n`);
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?\n`);
      }
    } else {
      console.log(`${this.name} is dead.\n`);
    }
  }

  brawl(pirate: Pirate): boolean {
    if (!this.isDead && !pirate.isDead) {
      let fate = Math.floor(Math.random() * 2);
      switch (fate) {
        case 0:
          this.die();
          return false;
        case 1:
          pirate.die();
          return true;
      }
    } else {
      if (this.isDead) {
        return false;
      } else {
        return true;
      }
    }

  }

  die(): void {
    this.isDead = true;
  }

  getRum(): number {
    return this.rum;
  }

  isAlive(): boolean {
    return !this.isDead;
  }

  getName(){
    return this.name;
  }
}
