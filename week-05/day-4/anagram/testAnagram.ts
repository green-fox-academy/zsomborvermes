import { isAnagram } from "./Anagram";

const test = require('tape');

test('test isAnagram() with a true input', t => {
  t.ok(isAnagram('apple', 'elppa'));
  t.end();
});

test('test isAnagram() with a false input', t => {
  t.notOk(isAnagram('apple', 'football'));
  t.end();
});

test('test isAnagram() with uppercase letters', t => {
  t.ok(isAnagram('MARRIED', 'DIERRAM'));
  t.end();
});

test('test isAnagram() with upper and lowercase etters', t => {
  t.ok(isAnagram('MaRrIeD', 'dieRRam'));
  t.end();
});
