import { Flower } from "./Flower";
import { Tree } from "./Tree";
import { Garden } from "./Garden";

let garden = new Garden();

garden.addPlant(new Flower('yellow'));
garden.addPlant(new Flower('blue'));
garden.addPlant(new Tree('purple'));
garden.addPlant(new Tree('orange'));

garden.print();
garden.waterPlants(40);
garden.print();
garden.waterPlants(70);
garden.print();


