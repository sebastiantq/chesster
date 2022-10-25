import React from "react";

import { useSelector } from "react-redux";
import { selectNotificacion } from "../store/notificacion/selectors"
import { selectLogueado } from "../store/sesion/selectors"

import JugadorUno from './Juego/JugadorUno';
import Tablero from './Juego/Tablero';
import JugadorDos from './Juego/JugadorDos';

import Notification from "./Pop/Notification";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotificacion } from "../store/notificacion";

const Juego = () => {
    const bodyParts = [ <JugadorUno/>, <Tablero/>, <JugadorDos/> ];

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(selectNotificacion) // Estado de la notificacion
    const sesion = useSelector(selectLogueado)

    useEffect(() => {    
        setTimeout(() => {
            if (!sesion.logueado) {
                dispatch(setNotificacion("¡Debes estar logueado para jugar!"))
                navigate("/")
            }
        }, 69)
    }, [sesion, navigate, dispatch])

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