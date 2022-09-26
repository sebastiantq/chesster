import React from "react";

import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom/dist";

import { setNotificacion } from "../store/notificacion"
import { selectNotificacion } from "../store/notificacion/selectors"

import Notification from "./Pop/Notification";

const Inicio = () => {
    // const navigate = useNavigate()

    const state = useSelector(selectNotificacion) // Estado de la notificacion
    const dispatch = useDispatch()
    
    const proximamente = () => {
        dispatch(setNotificacion("¡Próximamente!"))

        // navigate("/")
    };

    return(
        <div className="inicio">
            <div className="landAction">
                <img src="./logoInicio.jpeg" alt="ChessTer"/>
                <h2>ChessTer</h2>
                <button onClick={proximamente}>Comienza ahora</button>
                <p>¿Qué esperas para empezar a ganar?</p>
            </div>
            <div className="landText">
                <p>93% de nuestros jugadores han mejorado sus habilidades despues de 1 mes de juego</p>
            </div>
            { state.notificacion && <Notification text={ state.notificacion }/> }
        </div>
    );
}

export default Inicio;