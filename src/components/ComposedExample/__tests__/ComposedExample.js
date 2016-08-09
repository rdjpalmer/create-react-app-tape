import React from 'react';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import ComposedExample from '../ComposedExample';

test('ComposedExample', t => {
  const component = createComponent.shallow();
  t.ok(component, 'renders without blowing up');
  t.end();
});