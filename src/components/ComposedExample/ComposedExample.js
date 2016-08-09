import React, { PropTypes } from 'react';
import Button from '../Button/Button';

const ComposedExample = ({ children }) => (
  <div>
    <Button>{ children }</Button>
  </div>
);

ComposedExample.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComposedExample;