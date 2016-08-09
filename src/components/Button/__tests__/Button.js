import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import Button from '../Button';

test('Button', t => {
  const component = createComponent.shallow(<Button>lol</Button>);
  console.log(component);
  t.equal(true, true);
  t.end();
});