import { Carrier } from "./Carrier";
import { F16 } from "./F16";
import { F35 } from "./F35";

let ferihegy = new Carrier(100, 500000);
let ferihegy_2 = new Carrier(100, 1000);

for (let i = 0; i < 30; i++) {
  if (i % 2 === 0) {
    ferihegy_2.add(new F16());
  } else {
    ferihegy_2.add(new F35());
  }
}




ferihegy.add(new F16());
ferihegy.add(new F16());
ferihegy.add(new F16());
ferihegy.add(new F35());
ferihegy.add(new F35());
ferihegy.add(new F35());
ferihegy.add(new F35());
ferihegy.getStatus();

ferihegy.fill();
ferihegy.getStatus();
ferihegy_2.fill();
ferihegy_2.getStatus();
ferihegy_2.fight(ferihegy);
ferihegy_2.getStatus();
ferihegy.getStatus();
