import { test } from '../../../node_modules/tape';
import { Sum } from './Sum';

test('test sum() with multiple elements', t => {
  const expected = 100;
  const sum = new Sum();
  sum.initList(5, 10);
  sum.print();

  t.equal(sum.sum(), expected);
  t.end();
});

test('test sum() with empty array', t => {
  const expected = 0;
  const sum = new Sum();
  sum.initList(0, 0);
  sum.print();

  t.equal(sum.sum(), expected);
  t.end();
});

test('test sum() with 1 element', t => {
  const expected = 10;
  const sum = new Sum();
  sum.add(10);
  sum.print();

  t.equal(sum.sum(), expected);
  t.end();
});

test('test sum() with 1 null element', t => {
  const expected = 0;
  const sum = new Sum();
  sum.add(null);
  sum.print();

  t.equal(sum.sum(), expected);
  t.end();
});

test('test sum() with multiple int elements and 1 NaN element', t => {
  const expected = 100;
  const sum = new Sum();
  sum.initList(5, 10);
  sum.add(NaN);
  sum.print();

  t.equal(sum.sum(), expected);
  t.end();
});

test('test sum() with 1 NaN element', t => {
  const expected = 0;
  const sum = new Sum();
  sum.add(NaN);
  sum.print();

  t.equal(sum.sum(), expected);
  t.end();
});