import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Juego from './components/Juego';
import Inicio from './components/Inicio';
import Informacion from './components/Informacion';
import Login from './components/Pop/Login';
import Register from './components/Pop/Register';
import Empty from './components/Empty';
import Historia from './components/Informacion/Historia/Historia'
import Reglas from './components/Informacion/Reglas/Reglas'
import Jugadas from './components/Informacion/Jugadas/Jugadas'
import './App.css';
import './components/Menu/Menu.css'
import './components/Juego/Juego.css'
import './components/Inicio/Inicio.css'

const App = () => {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Lobster Two|PT Serif|Teko|Ibarra Real Nova|Noto Sans|Noto Serif Display|Raleway' rel='stylesheet'></link>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/jugar' element={<Juego/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/info' element={<Informacion/>}></Route>
        <Route path='/info/historia' element={<Historia/>}></Route>
        <Route path='/info/reglas' element={<Reglas/>}></Route>
        <Route path='/info/jugadas' element={<Jugadas/>}></Route>
        <Route path='*' element={<Empty/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
