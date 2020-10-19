import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'moaz', age: '16', belt: 'black', id: 1 },
      { name: 'ahmed', age: '19', belt: 'green', id: 2 },
      { name: 'mohamed', age: '65', belt: 'red', id: 3 }
    ]
  }
  render() {

    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome:)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    )
  }
}

export default App;