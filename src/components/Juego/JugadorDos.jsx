import React, { useState } from "react"
import "animate.css"

function JugadorDos(props) {
    const [microinteraccion, setMicrointeraccion] = useState(false)

    const siguiente = () => {
        if(props.jugador2.turno){
            props.setJugador2({
                movimientos: props.jugador2.movimientos + 1,
                tiempo: props.jugador2.tiempo,
                turno: false
            })
    
            
            props.setJugador1({
                movimientos: props.jugador1.movimientos,
                tiempo: props.jugador1.tiempo,
                turno: true
            })

            setMicrointeraccion(true)
    
            setTimeout(() => { setMicrointeraccion(false) }, 1000)
        }
    }

  return (
    <div className={"jugador-dos " + (props.jugador2.turno && "turno-activo") }>
        <h1>Jugador 2</h1>
        <button onClick={siguiente} className={"cualquiera " + (microinteraccion && "animate__animated animate__bounce")}>Siguiente</button>
    </div>
  )
}

export default JugadorDos