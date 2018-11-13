
//import { Thing } from "./thing";
import { Fleet } from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();

let thing_1: Thing = new Thing('Get milk');
let thing_2: Thing = new Thing('Remove the obstacles');
let thing_3: Thing = new Thing('Stand up');
let thing_4: Thing = new Thing('Eat lunch');

thing_3.complete();
thing_4.complete();

fleet.add(thing_1);
fleet.add(thing_2);
fleet.add(thing_3);
fleet.add(thing_4);

fleet.print();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */