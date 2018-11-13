class Sharpie{
  private color: string;
  private width: number;
  private inkAmount: number;

  constructor(color: string, width: number){
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use(){
    this.inkAmount--;
    console.log(`Ink amount: ${this.inkAmount}`)
  }
}

let sharpie = new Sharpie('black', 20);

sharpie.use();
sharpie.use();
sharpie.use();
sharpie.use();

