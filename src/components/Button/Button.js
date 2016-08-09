import React, { PropTypes } from 'react';

const Button = ({ children }) => (
  <button>{ children }</button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;