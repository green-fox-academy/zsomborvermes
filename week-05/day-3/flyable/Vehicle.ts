export abstract class Vehicle {
  protected color: string;
  protected regNumber: number;
  protected owner: string;

  constructor(color: string, regNumber: number, owner: string){
    this.color = color;
    this.regNumber = regNumber;
    this.owner = owner;
  }
}