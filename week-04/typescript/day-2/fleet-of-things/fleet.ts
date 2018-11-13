import { Thing } from "./thing";

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);
  }

  print() {
    this.things.forEach(e => {
      if (e.isCompleted()) {
        console.log(`[x] ${e.getName()}`)
      } else {
        console.log(`[ ] ${e.getName()}`)
      }
    });
  }
}

export { Fleet };