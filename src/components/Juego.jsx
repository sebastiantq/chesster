import React from "react";

import { useSelector } from "react-redux";
import { selectNotificacion } from "../store/notificacion/selectors"

import JugadorUno from './Juego/JugadorUno';
import Tablero from './Juego/Tablero';
import JugadorDos from './Juego/JugadorDos';

import Notification from "./Pop/Notification";
import Footer from "./Footer";

const Juego = () => {
    const bodyParts = [ <JugadorUno/>, <Tablero/>, <JugadorDos/> ];

    const state = useSelector(selectNotificacion) // Estado de la notificacion

    return(
        <div className="jugar">
            <div className="juego">
                { bodyParts.map(part => (
                    part
                )) } 
                { state.notificacion && <Notification text={ state.notificacion }/> }
            </div>
            <Footer/>
        </div>
    );
}

export default Juego;