import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Contador(props) {
  const [contador, estadoConteo, Conteo2] = useState(0);
  return (
    <div>
      <p>Conteo: {contador} {"\n"}</p>
      <p>suma: {Conteo2}</p>
      <button id="btn1" onClick={() => estadoConteo(contador + 1)} >Click para Aumentar</button>

      <button id="btq2" onClick={() => estadoConteo(contador - 1)}> Click para Disminuir  </button>
    </div>
  );

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anderson ',
      name2: 'montilla',
      tittle: 'CONTADOR REACT '
    };
  }

  render() {
    return (
      <div>
        <Hello tittle={this.state.tittle  } />
        <Hello  name={this.state.name} name2={this.state.name2} />


        <Contador />


      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
