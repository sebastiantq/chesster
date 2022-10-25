import React, { useState } from "react";

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
    const [jugador1, setJugador1] = useState({
        movimientos: 0,
        tiempo: 10 * 60 * 1000,
        turno: true
    })

    const [jugador2, setJugador2] = useState({
        movimientos: 0,
        tiempo: 10 * 60 * 1000,
        turno: false
    })

    const [recargar, setRecargar] = useState(false)

    const [movimientos, setMovimientos] = useState(0)
    const [tiempo, setTiempo] = useState(10 * 60 * 1000)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(selectNotificacion) // Estado de la notificacion
    const sesion = useSelector(selectLogueado)

    const iniciarPartida = () => {
        setRecargar(true)

        setTimeout(() => {
            setJugador1({
                movimientos: 0,
                tiempo: 10 * 60 * 1000,
                turno: true
            })
    
            setJugador2({
                movimientos: 0,
                tiempo: 10 * 60 * 1000,
                turno: false
            })

            setRecargar(false)
        }, 1000)
    }

    const bodyParts = [ <JugadorUno jugador1={jugador1} jugador2={jugador2} setJugador1={setJugador1} setJugador2={setJugador2}/>, 
                        <Tablero tiempo={tiempo} movimientos={movimientos}/>, 
                        <JugadorDos jugador1={jugador1} jugador2={jugador2} setJugador1={setJugador1} setJugador2={setJugador2}/> ];

    useEffect(() => {    
        setTimeout(() => {
            if (!sesion.logueado) {
                dispatch(setNotificacion("¡Debes estar logueado para jugar!"))
                navigate("/")
            }
        }, 69)

        if (jugador1.turno){
            setTiempo(jugador1.tiempo)
            setMovimientos(jugador1.movimientos)
        }

        if (jugador2.turno){
            setTiempo(jugador2.tiempo)
            setMovimientos(jugador2.movimientos)
        }
    }, [sesion, jugador1, jugador2, navigate, dispatch])

    /* setInterval(() => {
        if (jugador1.turno){
            setJugador1({
                movimientos: jugador1.movimientos,
                tiempo: jugador1.tiempo - 1000,
                turno: jugador1.turno
            })
        }else if(jugador2.turno){
            setJugador2({
                movimientos: jugador2.movimientos,
                tiempo: jugador2.tiempo - 1000,
                turno: jugador2.turno
            })
        }
    }, 1000) */

    return(
        <div className="jugar">
            <div className="juego">
                <button className={"reload " + (recargar && "reload-animation")} onClick={iniciarPartida}>
                    <ion-icon name="reload-circle-outline"></ion-icon>
                </button>
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