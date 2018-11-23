import { finished } from "stream";

export class Cab {
  private toGuess: number;
  private state: string;
  private count: number;

  constructor() {
    this.count = 1;
    let randomNumber: Set<number> = new Set();
    let counter = 0;
    while (randomNumber.size != 4) {
      if (!counter) {
        randomNumber.add(Math.floor(Math.random() * 9) + 1);
      } else {
        randomNumber.add(Math.floor(Math.random() * 10));
      }
      counter++;
    }
    this.toGuess = +[...randomNumber].join('');
  }

  static startGame(game: Cab): void {
    let input = process.openStdin();
    console.log('\nThe Game has started!');
    console.log(`\nRound ${game.count}`);
    game.state = 'playing';

    input.addListener('data', function (d) {
      if (d.toString().trim() === 'end') {
        console.log(`The number was ${game.getToGuess()}`);
        process.exit();
      }
      game.guess(+d.toString().trim());
      console.log(`\nRound ${game.count}`);
    });
  }

  guess(input: number): string {
    let stringArrInput: string[] = input.toString().split('');
    let stringArrToGuess: string[] = this.toGuess.toString().split('');
    let result = {
      cow: 0,
      bull: 0
    };

    if ([...new Set(stringArrInput)].length === 4) {
      for (let i = 0; i < stringArrInput.length; i++) {
        let cowCount = 0;
        let bullCount = 0;
        for (let j = 0; j < stringArrToGuess.length; j++) {
          if (stringArrInput[i] === stringArrToGuess[j] && i === j) {
            cowCount++;
          } else if (stringArrInput[i] === stringArrToGuess[j] && i !== j) {
            bullCount++;
          }
        }
        if (cowCount) {
          result.cow++;
        } else if (!cowCount && bullCount) {
          result.bull++;
        }
      }
      
      this.count++;

      if (result.cow === 4) {
        this.state = 'finished';
        console.log(`YOU WON!\nThe number was ${this.getToGuess()}`)
        process.exit();
        return `YOU WON!\nThe number was ${this.getToGuess()}`;
      } else {
        console.log(`\nCows: ${result.cow}\nBulls: ${result.bull}`);
        return `\nCows: ${result.cow}\nBulls: ${result.bull}`;
      }
    }
    console.log('Wrong input!');
    return 'Wrong Input!'
  }

  getToGuess(): number {
    return this.toGuess;
  }
}

let alma = new Cab();

Cab.startGame(alma);