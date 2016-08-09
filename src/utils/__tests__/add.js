import add from '../add';
import test from 'tape';

test('Add', t => {
  const x = 3;
  const y = 4;
  t.equal(add(x, y), 7);
  t.end();
});
