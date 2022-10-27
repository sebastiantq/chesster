import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectNotificacion } from "../store/notificacion/selectors"
import { selectLogueado } from "../store/sesion/selectors"

import Board from './Juego/Board'
import Notification from "./Pop/Notification";
import Footer from "./Footer";

import { setNotificacion } from "../store/notificacion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { gameSubject, initGame, resetGame } from "./Juego/Game"

const Juego = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(selectNotificacion) // Estado de la notificacion
    const sesion = useSelector(selectLogueado)

    const [board, setBoard] = useState([])
    const [isGameOver, setIsGameOver] = useState()
    const [result, setResult] = useState()
    const [turn, setTurn] = useState()

    const bodyParts = [ <Board board={board} turn={turn}></Board> ]

    // Implementación real

    useEffect(() => {
        setTimeout(() => {
            if (!sesion.logueado) {
                dispatch(setNotificacion("¡Debes estar logueado para jugar!"))
                navigate("/")
            }

            initGame()

            const suscribe = gameSubject.subscribe((game) => {
                setBoard(game.board)
                setIsGameOver(game.isGameOver)
                setResult(game.result)
                setTurn(game.turn)
            })
        
            return () => suscribe.unsubscribe()
        }, 69)
    }, [dispatch, navigate, sesion])

    return(
        <div className="jugar">
            <h1>¿Podrá el alumno superar el maestro?</h1>
            <div className="juego">
                { isGameOver && ( 
                    <h2 className="vertical-text">
                        GAME OVER
                        <button onClick={resetGame}>
                            <span className="vertical-text">NEW GAME</span>
                        </button>
                    </h2>
                ) }
                { bodyParts.map(part => (
                    part
                )) } 
                { result && ( 
                    <h2 className="vertical-text">
                        { result }
                    </h2>
                ) }
                { state.notificacion && <Notification text={ state.notificacion }/> }
            </div>
            <Footer/>
        </div>
    );
}

export default Juego;