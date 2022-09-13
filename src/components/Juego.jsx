import React from "react";

import JugadorUno from './Juego/JugadorUno';
import Tablero from './Juego/Tablero';
import JugadorDos from './Juego/JugadorDos';

class Juego extends React.Component{
    render(){
        const bodyParts = [ <JugadorUno/>, <Tablero/>, <JugadorDos/> ];

        return(
            <div className="juego">
                { bodyParts.map(part => (
                    part
                )) } 
            </div>
        );
    }
}

export default Juego;