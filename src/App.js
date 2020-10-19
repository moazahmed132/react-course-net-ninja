import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome:)</p>
        <Ninjas
          name="moaz"
          age="25"
          belt="orange" />
        <br />
        <Ninjas
          name="ahmed"
          age="29"
          belt="black" />
      </div>
    )
  }
}

export default App;