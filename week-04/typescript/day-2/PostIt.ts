class PostIt {
  private backgroundColor: string;
  private text: string;
  private textColor: string

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }

  printPostIt(): void {
    console.log(`Background: ${this.backgroundColor}
Content: ${this.text}
TextColor: ${this.textColor}\n`);
  }
}

let postIt_1 = new PostIt('orange', 'Idea 1', 'blue');
let postIt_2 = new PostIt('pink', 'Awesome', 'black');
let postIt_3 = new PostIt('yellow', 'Superb!', 'green');

postIt_1.printPostIt();
postIt_2.printPostIt();
postIt_3.printPostIt();