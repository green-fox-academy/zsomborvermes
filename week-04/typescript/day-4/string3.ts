
function separateChars(str: string): string {

  if (str.lastIndexOf('*') === str.length - 2) {
    return str;

  }

  if (str.indexOf('*') === -1) {
    return separateChars(str.slice(0, 1) + '*' + str.slice(1, str.length));

  }
  return separateChars(str.slice(0, str.lastIndexOf('*') + 2) + '*' + str.slice(str.lastIndexOf('*') + 2, str.length));
}

console.log(separateChars('alma'))