export { };
// Create a method that decrypts reversed-lines.txt
const fs = require('fs');

function readFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

function decrypt(text: string): string {
  let processedText = text.split('\n');
  let decrypted: string = processedText.reverse().join('\n');
  return decrypted;
}

try {
  console.log(decrypt(readFile('files/reversed-order.txt')));
} catch (err) {
  console.log(err.message);
}