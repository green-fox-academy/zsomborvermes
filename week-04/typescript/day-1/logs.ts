export { };
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');


function processLog(): string[][] {
  let logContent: string = readFile('file/log.txt');
  let logProcessed: string[][] = [];
  if (logContent !== null) {
    let logLines: string[] = logContent.split("\n");
    logProcessed = logContent.split('\n').map(e => e.split('   '));
    return logProcessed;
  }
}

function readFile(path: string): string {
  let fileContent: string = fs.readFileSync(path, 'utf-8');
  return fileContent;
}

function getIpAdresses(log: string[][]): string[] {
  let ipAdresses: string[] = [];
  for (let line of log) {
    ipAdresses.push(line[1]);
  }
  return ipAdresses;
}

function getPostRation(log: string[][]) {
  let requests = { gets: 0, posts: 0 };
  for (let line of log) {
    if (line[2] === 'GET /') {
      requests.gets++;
    } else {
      requests.posts++;
    }
  }
  return requests;
}

try {
  let logContent: string[][] = processLog();
  console.log(getIpAdresses(logContent));
  console.log(getPostRation(logContent));
} catch (err) {
  console.log(err.message);
}
