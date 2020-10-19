import React, { Component } from 'react';


const Ninjas = ({ ninjas }) => {
  //const { ninjas } = props;
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>belt: {ninja.belt}</div>
        <br />

      </div>
    )
  })
  return (
    <div className="ninja-list">
      {ninjaList}

    </div>
  )


}
/* class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>belt: {ninja.belt}</div>
          <br />

        </div>
      )
    })
    return (
      <div className="ninja-list">
        {ninjaList}

      </div>
    )
  }
} */

export default Ninjas;