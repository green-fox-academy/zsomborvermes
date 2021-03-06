interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Domino): number {
    if (this.values[1] > other.values[0]) {
      return 1;
    } else if (this.values[1] < other.values[0]) {
      return -1;
    }
    return 0;
  }
}

export { Domino };