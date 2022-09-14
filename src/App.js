import React from 'react';
import Menu from './components/Menu';
import Juego from './components/Juego';
import Inicio from './components/Inicio';
import {Routes, Route} from 'react-router-dom';
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
    <Routes>
      <Route path='/' element={<Menu/>}></Route>
      <Route path='/Juego' element={<Juego/>}></Route>
    </Routes>
  }
}

export default App;
