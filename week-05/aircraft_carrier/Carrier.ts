import { Aircraft } from "./Aircraft";

export class Carrier {
  protected aircrafts: Aircraft[] = [];
  protected storeOfAmmo: number;
  protected health: number;

  constructor(storeOfAmmo: number, health: number) {
    this.storeOfAmmo = storeOfAmmo;
    this.health = health;
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    if (this.storeOfAmmo === 0) {
      throw 'Carrier is out of ammo.';
    }
    let ammoNeeded: number = 0;
    this.aircrafts.forEach(e => ammoNeeded += e.getEmptySlots());

    if (ammoNeeded > this.storeOfAmmo) {
      this.aircrafts.forEach(e => {
        if (e.isPriority() && this.storeOfAmmo > 0) {
          this.storeOfAmmo = e.refill(this.storeOfAmmo);
        }
      });
      this.aircrafts.forEach(e => {
        if (!e.isPriority() && this.storeOfAmmo > 0) {
          this.storeOfAmmo = e.refill(this.storeOfAmmo);
        }
      });
    } else {
      this.aircrafts.forEach(e => this.storeOfAmmo = e.refill(this.storeOfAmmo));
    }
  }

  fight(opponent: Carrier) {
    opponent.health -= this.allDamage();
  }

  getStatus() {
    if (this.health > 0) {
      console.log(`HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, Total Damage: ${this.allDamage()}`);
      this.aircrafts.forEach(e => console.log(e.getStatus()));
    } else {
      console.log(`It's dead Jim :(`);

    }
  }

  allDamage() {
    let allDamage = 0;
    this.aircrafts.forEach(e => allDamage += e.allDamage());
    return allDamage;
  }

}