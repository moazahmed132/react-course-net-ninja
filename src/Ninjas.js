import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    const { name, age, belt } = this.props;
    return (
      <div className="ninja">
        <div>Age: {age}</div>
        <div>Name:{name}</div>
        <div>belt:{belt}</div>

      </div>
    )
  }
}

export default Ninjas;