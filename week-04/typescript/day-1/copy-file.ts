
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyFile(fromFilePath: string, toFilePath: string): boolean {
  try {
    let fromFileContent = fs.readFileSync(fromFilePath, 'utf-8');
    fs.writeFileSync(toFilePath, fromFileContent);
    return true;
  } catch (err) {
    return false;
  }
}

copyFile('files/my-file.txt', 'files/new-file.txt');