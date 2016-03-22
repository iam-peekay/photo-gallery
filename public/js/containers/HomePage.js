import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    // const dispatch = this.props.dispatch;
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(HomePage);
