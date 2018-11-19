export class Aircraft {
  protected ammo: number;
  protected damage: number;
  protected maxAmmo: number;
  protected priority: boolean;

  constructor(maxAmmo: number = 0, damage: number = 0, priority: boolean = false) {
    this.maxAmmo = maxAmmo;
    this.damage = damage;
    this.priority = priority;
    this.ammo = 0;
  }

  fight(): number {
    let allDamage = this.ammo * this.damage;
    this.ammo = 0;
    return allDamage;
  }

  allDamage(): number {
    return this.ammo * this.damage;
  }

  refill(ammo: number): number {
    let remainder = 0;
    if (ammo + this.ammo > this.maxAmmo) {
      remainder = ammo - (this.maxAmmo - this.ammo);
      this.ammo = this.maxAmmo;
    } else {
      this.ammo += ammo;
    }
    return remainder;
  }

  getEmptySlots(): number {
    return this.maxAmmo - this.ammo;
  }

  getType(): string {
    return this.constructor.name;
  }

  getStatus(): string {
    return `Type: ${this.getType()}, Ammo: ${this.ammo}, Base Damage: ${this.damage}, All Damage: ${this.maxAmmo * this.damage}`;
  }

  isPriority(): boolean {
    return this.priority;
  }
}