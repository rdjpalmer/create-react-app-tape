import React, { Component, PropTypes } from 'react';

export default class ClassTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };

    this.trackClick = this.trackClick.bind(this);
  }

  trackClick() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.trackClick }>Click</button>
      </div>
    );
  }
}

ClassTest.propTypes = {
  children: PropTypes.node.isRequired,
};