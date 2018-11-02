console.log(josephus(13).toString().trim());

function josephus(num: number): number[] {
  let people: number[] = [];

  for (let i: number = 0; i < num; i++) {
    people.push(i + 1);
  }

  let counter = 1;

  while (people.length > 1) {
    let currentLength: number = people.length;
    for (let i: number = 0; i < people.length; i++) {
      people.splice(i + 1, 1);
    }
    if (num % 2 === 1 && counter === 1 || currentLength % 2 === 1) {
      people.shift();
    }
    console.log(`Round ${counter}: ${people}`);
    counter++;
  }
  return people;
}
