import { test } from '../../node_modules/tape';

let apple = {
  getApple: () => 'apple'
};

test('test getApple()', t => {
  const expected = 'apple';

  t.equal(apple.getApple(), expected);
  t.end();
});

