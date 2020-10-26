import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'moaz', age: '16', belt: 'black', id: 1 },
      { name: 'ahmed', age: '22', belt: 'green', id: 2 },
      { name: 'mohamed', age: '65', belt: 'red', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  render() {

    return (
      <div className="App">
        <h1>React app</h1>
        <p>Welcome:)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;