import React from 'react';
import Menu from './components/Menu';
import Juego from './components/Juego';
import Inicio from './components/Inicio';

import './App.css';
import './components/Menu/Menu.css'
import './components/Juego/Juego.css'
import './components/Inicio/Inicio.css'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <link href='https://fonts.googleapis.com/css?family=Lobster Two' rel='stylesheet'></link>
        <Menu/>
        {/* <Juego/> */}
        <Inicio/>
      </div>
    );
  }
}

export default App;
