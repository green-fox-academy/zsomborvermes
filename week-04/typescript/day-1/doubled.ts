export { };
// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

function readFile(filePath: string): string[][] {
  return fs.readFileSync(filePath, 'utf-8').split('\n').map(e => e.split(''));
}

function decrypt(text: string[][]): string {
  let decrypted: string = '';
  for (let row of text) {
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        row.splice(i, 1);
      }
    }
    decrypted += row.join('') + '\n';
  }
  return decrypted;
}

try {
  console.log(decrypt(readFile('files/duplicated-chars.txt')));
} catch (err) {
  console.log(err.message);
}