export { };
// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

let fs = require('fs');

try {
  let myName = 'Vermes Zsombor';
  fs.writeFileSync('my-file.txt', myName);
} catch (err) {
  console.log('Unable to write file: my-file.txt');
}