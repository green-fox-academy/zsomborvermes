'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
};

export function median(pool: number[]): number {
  if (pool.length % 2 === 0) {
    let medians = pool.sort().slice(Math.floor((pool.length - 1) / 2), Math.floor((pool.length - 1) / 2) + 2);
    console.log(medians);
    return (medians[0] + medians[1]) / medians.length;
  }
  return pool.sort()[Math.floor((pool.length - 1) / 2)];
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
  let teve: string[] = hungarian.split('').map(char => {
    if (isVowel(char)) {
      char = `${char}v${char}`;
    }
    return char;
  });

  return teve.join('');
}