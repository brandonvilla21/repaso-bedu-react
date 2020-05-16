import React, { Component } from 'react';
import './App.css';
import Lista from './components/Lista';

const miArregloVariable = [
  { name: 'Manzana', descripcion: 'Fruta de color rojo' },
  { name: 'Calabaza', descripcion: 'Verdura de color verde' },
  { name: 'Naranaja', descripcion: 'Fruta de color naranja' },
  { name: 'Brocoli', descripcion: 'Verdura que a nadie le gusta' },
];

// class App extends React.Component {
class App extends Component {
  state = {
    miArreglo: miArregloVariable,
    inputText: ''
  };
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ inputText: value });
  }
  handleClick = () => {
    const obj = { name: this.state.inputText, descripcion: '' };
    this.setState({
      miArreglo: [...this.state.miArreglo, obj ],
      inputText: '',
    });
  }
  render() {
    return (
      <div className='App'>
        <h1>Componente clase</h1>
        <Lista miLista={this.state.miArreglo} />
        <div>
          {/* Controlled inputs */}
          <input value={this.state.inputText} onChange={this.handleChange} />
          {/* Uncontrolled inputs */}
          {/* <input /> */}
          <button onClick={this.handleClick}>Agregar</button>
        </div>
      </div>
    );
  }
}

export default App;
