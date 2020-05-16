import React, { useState } from 'react';
import './App.css';
import Lista from './components/Lista';

const miArregloVariable = [
  { name: 'Manzana', descripcion: 'Fruta de color rojo' },
  { name: 'Calabaza', descripcion: 'Verdura de color verde' },
  { name: 'Naranaja', descripcion: 'Fruta de color naranja' },
  { name: 'Brocoli', descripcion: 'Verdura que a nadie le gusta' },
];

function App() {
  const [miArreglo, setMiArreglo] = useState(miArregloVariable);
  const [inputText, setInputText] = useState('')

  const handleChange = (event) => {
    const value = event.target.value;
    setInputText(value);
  }
  const handleClick = () => {
    const obj = { name: inputText, descripcion: '' };
    setMiArreglo([...miArreglo, obj ]);
    setInputText('');
  }
  return (
    <div className="App">
      <h1>Componente funcion</h1>
      <Lista miLista={miArreglo}/>
      <div>
        {/* Controlled inputs */}
        <input value={inputText} onChange={handleChange} />
        {/* Uncontrolled inputs */}
        {/* <input /> */}
        <button onClick={handleClick}>Agregar</button>
      </div>
    </div>
  );
}

export default App;
