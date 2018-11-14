import { Armada } from "./Armada";


let armada1 = new Armada('Black Pirates');
let armada2 = new Armada('Blue Ninjas');

armada1.fillArmada();
armada2.fillArmada();

armada1.war(armada2);