import React from 'react';
import './App.css'
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

function App() {
  const history = useHistory();
  const irAFuncion = () => {
    history.push('/funcion');
  }
  return (
    <div className='App'>
        <button onClick={irAFuncion}>Componente funcion</button>
        {' - '}
        <Link to="/clase">Componente clase</Link>
        <Switch>
          <Route path="/funcion" component={FunctionComponent} />
          <Route path="/clase" component={ClassComponent} />
        </Switch>
    </div>
  )
}

export default App;
