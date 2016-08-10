import React from 'react';
import sd from 'skin-deep';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import Button from '../Button';

test('Button', t => {
  const tree = sd.shallowRender(<Button>lol</Button>);
  t.ok(tree.getRenderOutput().type, 'renders without blowing up');
  t.end();
});