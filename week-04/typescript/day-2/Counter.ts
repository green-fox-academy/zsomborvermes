class Counter {
  private counter: number;

  constructor(counter: number = 0) {
    this.counter = counter;
  }

  add(counter: number = 1): void {
    this.counter += Math.round(counter);
  }

  get(): number {
    return this.counter;
  }

  reset(): void {
    this.counter = 0;
  }
}

let counter = new Counter(2);
let counter_1 = new Counter(0);

console.log(counter.get());
console.log(counter_1.get());

counter.add();
counter_1.add(3);

console.log(counter.get());
console.log(counter_1.get());

counter.reset();

console.log(counter.get());
console.log(counter_1.get());


