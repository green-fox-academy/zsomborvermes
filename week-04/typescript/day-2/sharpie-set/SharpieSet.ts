import { Sharpie } from "./Sharpie";

export class SharpieSet {
  private sharpieList: Sharpie[] = [];

  add(sharpie: Sharpie) {
    this.sharpieList.push(sharpie);
  }

  getSharpieList() {
    return this.sharpieList;
  }

  countUsable() {
    let usable: number = 0;
    this.sharpieList.forEach(e => {
      if (e.getInkAmount() > 0) {
        usable++;
      }
    });
    return usable;
  }

  removeTrash() {
    this.sharpieList = this.sharpieList.filter(e => e.getInkAmount() > 0);
  }
}

let sharpieSet = new SharpieSet();
console.log(sharpieSet.getSharpieList());

for (let i = 0; i < 100; i++) {
  sharpieSet.add(new Sharpie('black', i));
}
console.log(sharpieSet.getSharpieList());
console.log(sharpieSet.countUsable());


for (let i = 0; i < 10000; i++) {
  sharpieSet.getSharpieList()[Math.floor(Math.random() * 100)].use();
}
console.log(sharpieSet.countUsable());

sharpieSet.removeTrash();

console.log(sharpieSet.getSharpieList());