import React from 'react';
import sd from 'skin-deep';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import ClassTest from '../ClassTest';

test('ClassTest', t => {
  const tree = sd.shallowRender(<ClassTest>Example</ClassTest>);
  // `.getMountedInstace()` gives us access to the instance level methods, state etc.
  const instance = tree.getMountedInstance();

  t.ok(tree.getRenderOutput().type, 'renders without blowing up');

  t.equal(instance.state.clicks, 0, 'tracked clicks increments correctly');
  instance.trackClick();
  t.equal(instance.state.clicks, 1, 'tracked clicks increments correctly');

  t.end();
});