import React from 'react';
import sd from 'skin-deep';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import ComposedExample from '../ComposedExample';

test('ComposedExample', t => {
  const tree = sd.shallowRender(<ComposedExample />);
  t.ok(tree.getRenderOutput().type, 'renders without blowing up');
  t.end();
});