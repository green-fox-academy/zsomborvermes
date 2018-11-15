
function changeXToY(str: string): string {
  if (str.indexOf('x') === -1) {
    return str;

  }
  return changeXToY(str.replace('x', 'y'));
}

console.log(changeXToY('xaver, xylofon, xanax'))