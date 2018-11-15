
function removeX(str: string): string {
  if (str.indexOf('x') === -1) {
    return str;

  }
  return removeX(str.replace('x', ''));
}

console.log(removeX('xaver, xylofon, xanax'));