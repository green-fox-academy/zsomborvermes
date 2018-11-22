'use strict';

import { add, maxOfThree, median, isVowel, translate } from './extension';

const test = require('tape');

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 10 and 23 is 33', function (t: any): any {
  t.equal(add(10, 23), 33);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: middle', function (t: any): any {
  t.equal(maxOfThree(12, 32, 10), 32);
  t.end();
});

test('median: 2 middle elements average', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('median: 2 middle elements average', function (t: any): any {
  t.equal(median([12, 32, 11, 0, 3, 10]), (11 + 12) / 2);
  t.end();
});

test('is vowel with 2 characters as input', function (t: any): any {
  t.notOk(isVowel('au'));
  t.end();
});

test('is vowel: uppercase U', function (t: any): any {
  t.ok(isVowel('U'));
  t.end();
});

test('is vowel: X', function (t: any): any {
  t.notOk(isVowel('X'));
  t.end();
});

test("is vowel: k", function (t: any): any {
  t.notOk(isVowel("k"));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});

test('translate: alma', function (t: any): any {
  t.equal(translate('alma'), 'avalmava');
  t.end();
});