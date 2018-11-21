export class Sum {
  private list: number[];

  constructor() {
    this.list = [];
  }

  initList(numOfElements: number, multiplier: number): void {
    for (let i = 0; i < numOfElements * multiplier; i += multiplier) {
      this.list.push(i);
    }
  }

  add(num: number): void {
    if (Number.isNaN(num)) {
      console.log(`You can't add NaN to the list.`);
    } else {
      this.list.push(num);
    }
  }

  sum(): number {
    let sum: number = 0;
    this.list.forEach(e => sum += e);
    return sum;
  }

  print() {
    console.log(this.list);
  }
}