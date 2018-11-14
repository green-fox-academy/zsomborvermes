import { Ship } from "./Ship";
import { Pirate } from "./Pirate";

let blackPearl = new Ship('Black Pearl');
let dyingGull = new Ship('Dying Gull');

blackPearl.fillShip();
dyingGull.fillShip();

blackPearl.print();
dyingGull.print();

blackPearl.battle(dyingGull);

blackPearl.print();
dyingGull.print();
