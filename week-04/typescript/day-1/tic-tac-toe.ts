export { };
// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');

function readFile(filePath: string): string[][] {
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  let match: string[][] = fileContent.split('\n').map(e => e.split(''));
  return match;
}

function checkLine(line: string[]): string {
  let result: string = '';
  if (line.every(e => e === 'X')) {
    result = 'X';
  } else if (line.every(e => e === 'O')) {
    result = 'O';
  }
  return result;
}

function convertColumnsToLines(match: string[][]): string[][] {
  let converted: string[][] = [];
  match.forEach(e => converted.push([]));

  for (let i = 0; i < match.length; i++) {
    for (let j = 0; j < match.length; j++) {
      converted[i][j] = match[j][i];
    }
  }
  return converted;
}

function convertDiagonalsToLines(match: string[][]): string[][] {
  let converted: string[][] = [[]];

  for (let i = 0; i < match.length; i++) {
    converted[0].push(match[i][i]);
  }

  for (let row of match) {
    converted.push(row.reverse());
    row.reverse();
  }

  return converted;
}

function ticTacResult(match: string[][]): string {
  for (let i = 0; i < match.length; i++) {
    if (checkLine(match[i]) === 'X' ||
      checkLine(convertColumnsToLines(match)[i]) === 'X' ||
      checkLine(convertDiagonalsToLines(match)[i]) === 'X') {
      return 'X';
    } else if (checkLine(match[i]) === 'O' ||
      checkLine(convertColumnsToLines(match)[i]) === 'O' ||
      checkLine(convertDiagonalsToLines(match)[i]) === 'O') {
      return 'O';
    }
    return 'Draw';
  }
}


try {
  console.log(ticTacResult(readFile('files/win-o.txt')));
  // Should print "O"

  console.log(ticTacResult(readFile('files/win-x.txt')));
  // Should print "X"

  console.log(ticTacResult(readFile('files/draw.txt')));
  // Should print "Draw"
} catch (e) {
  console.log(e.message);
}