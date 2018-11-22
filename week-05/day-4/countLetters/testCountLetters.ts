import { countLetters } from "./CountLetters";


const test = require('tape');

test('test countLetters() if it creates the correct dictionary', t => {
  const expected = {
    a: 1,
    p: 2,
    l: 1,
    e: 1
  }

  t.deepEqual(countLetters('apple'), expected);
  t.end();
});

test('test countLetters() if it creates the correct dictionary with UPPERCASE LETTERS', t => {
  const expected = {
    a: 1,
    p: 2,
    l: 1,
    e: 1
  }

  t.deepEqual(countLetters('APPLE'), expected);
  t.end();
});

test('test countLetters() if it creates the correct dictonary length with no duplicate letter', t => {
  const expected = 6

  t.equal(Object.getOwnPropertyNames(countLetters('master')).length, expected);
  t.end();
});

test('test countLetters() if it creates the correct dictonary length with duplicate letters', t => {
  const expected = 6

  t.equal(Object.getOwnPropertyNames(countLetters('mastermaster')).length, expected);
  t.end();
});

test('test countLetters() if it counts the duplicate letters correctly', t => {
  const expected = 2;
  const dictionary = countLetters('mastermaster');

  for(let key in dictionary){
    t.equal(dictionary[key], expected);
  }

  t.end();
});

test('test countLetters() if it counts the letters correctly', t => {
  const expected = 1;
  const dictionary = countLetters('master');

  for(let key in dictionary){
    t.equal(dictionary[key], expected);
  }

  t.end();
});

test('test countLetters() with empty string', t => {
  const expected = {};
  const dictionary = countLetters('');

  t.equal(JSON.stringify(dictionary), JSON.stringify(expected));

  t.end();
});


