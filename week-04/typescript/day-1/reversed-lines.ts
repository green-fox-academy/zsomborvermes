export { };
// Create a method that decrypts reversed-lines.txt
const fs = require('fs');

function readFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

function decrypt(text: string): string {
  let processedText = text.split('\n').map(e => e.split(''));
  let decrypted: string = '';

  for (let row of processedText) {
    decrypted += row.reverse().join('') + '\n';
    row.reverse();
  }
  return decrypted;
}

try {
  console.log(decrypt(readFile('files/reversed-lines.txt')));
} catch (err) {
  console.log(err.message);
}