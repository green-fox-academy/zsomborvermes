import { Plant } from "./Plant";

export class Garden {
  private plants: Plant[] = [];

  addPlant(plant: Plant): void {
    this.plants.push(plant);
  }

  waterPlants(amount: number): void {
    console.log(`Watering with ${amount}`);
    let amountPerPlant: number = amount / this.plants.filter(plant => plant.needWater()).length;
    this.plants.forEach(plant => plant.waterPlant(amountPerPlant));
  }

  print(): void {
    this.plants.forEach(plant => plant.print());
  }
}