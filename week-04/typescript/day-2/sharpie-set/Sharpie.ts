export class Sharpie {
  private color: string;
  private width: number;
  private inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    if (this.inkAmount !== 0) {
      this.inkAmount--;
    }
  }

  getInkAmount() {
    return this.inkAmount;
  }
}