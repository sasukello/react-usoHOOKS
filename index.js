import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Contador(props){
  const[contador, estadoConteo]= useState(0);
  return(
    <div>
    <p>Conteo: {contador}</p>
    <button id="btn1" onClick={()=>estadoConteo(contador+1)} >Click para Aumentar</button>
    </div>
  );

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anderson'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Contador/>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
